const fs = require('fs');

const filesToUpdate = ['index.html', 'rarerat/index.html'];

filesToUpdate.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // 1. Fix ReferenceError by removing the dynamic map from the global template
    html = html.replace(
        /\$\{products\.map\(p => `<option value="\$\{p\.id\}">\$\{p\.name\}<\/option>`\)\.join\(''\)\}/g,
        ''
    );

    // 2. Add the dynamic population logic to updateAdminDashboard
    html = html.replace(
        /renderAdminReviews\(\);/g,
        `renderAdminReviews();
            const selectEl = document.getElementById('new-review-product');
            if (selectEl) {
                selectEl.innerHTML = '<option value="">Select a Product</option>' + products.map(p => \`<option value="\${p.id}">\${p.name}</option>\`).join('');
            }`
    );

    fs.writeFileSync(file, html, 'utf8');
    console.log('Successfully fixed syntax error in ' + file);
});
