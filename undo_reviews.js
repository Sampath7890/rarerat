const fs = require('fs');

const filesToUpdate = ['index.html', 'rarerat/index.html'];

const productReviewsHtml = `
                    <!-- Customer Reviews Section -->
                    <div class="mt-32 px-4 md:px-8 border-t border-black/5 pt-20">
                        <div class="text-center mb-16">
                            <span class="text-[#993300] font-black uppercase tracking-[0.5em] text-[10px] mb-3 block">Testimonials</span>
                            <h3 class="font-serif text-4xl md:text-5xl uppercase text-[#2D2424] leading-none tracking-tight">Customer Reviews</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                            <!-- Review 1 -->
                            <div class="crystal-box p-8 flex flex-col items-start text-left">
                                <div class="flex text-[#993300] mb-4">
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                </div>
                                <h4 class="font-bold text-lg text-[#2D2424] mb-2">Incredible Quality</h4>
                                <p class="text-sm text-[#2D2424]/80 mb-6 italic">"The fabric is simply outstanding. It feels premium and the fit is exactly as described. Worth every penny."</p>
                                <div class="mt-auto">
                                    <p class="font-black text-xs uppercase tracking-widest text-[#993300]">Rajesh K.</p>
                                    <p class="text-[10px] text-zinc-500 uppercase mt-1">Verified Buyer</p>
                                </div>
                            </div>
                            <!-- Review 2 -->
                            <div class="crystal-box p-8 flex flex-col items-start text-left">
                                <div class="flex text-[#993300] mb-4">
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star_half</span>
                                </div>
                                <h4 class="font-bold text-lg text-[#2D2424] mb-2">Perfect Summer Fit</h4>
                                <p class="text-sm text-[#2D2424]/80 mb-6 italic">"Bought this for a vacation and it didn't disappoint. Breathes well and looks stunning in pictures."</p>
                                <div class="mt-auto">
                                    <p class="font-black text-xs uppercase tracking-widest text-[#993300]">Aman S.</p>
                                    <p class="text-[10px] text-zinc-500 uppercase mt-1">Verified Buyer</p>
                                </div>
                            </div>
                            <!-- Review 3 -->
                            <div class="crystal-box p-8 flex flex-col items-start text-left">
                                <div class="flex text-[#993300] mb-4">
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                    <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1">star</span>
                                </div>
                                <h4 class="font-bold text-lg text-[#2D2424] mb-2">Fast Shipping</h4>
                                <p class="text-sm text-[#2D2424]/80 mb-6 italic">"Arrived in gorgeous packaging in just 2 days. The craftsmanship is evident before you even put it on."</p>
                                <div class="mt-auto">
                                    <p class="font-black text-xs uppercase tracking-widest text-[#993300]">Vikram M.</p>
                                    <p class="text-[10px] text-zinc-500 uppercase mt-1">Verified Buyer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Related Products Section -->`;

const homeReviewsHtml = `
                        </div>
                    </div>
                </section>

                <!-- Home Screen Reviews -->
                <section class="py-section-padding container mx-auto px-grid-margin relative overflow-hidden">
                    <div class="text-center mb-16 relative z-10">
                        <span class="text-[#993300] font-black uppercase tracking-[0.5em] text-[10px] mb-3 block">From Our Community</span>
                        <h2 class="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#2D2424]">What They Say</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <!-- Home Review 1 -->
                        <div class="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:-translate-y-2 transition-transform duration-500">
                            <div class="flex text-[#993300] mb-6">
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                            </div>
                            <p class="text-lg text-[#2D2424]/80 italic mb-6 leading-relaxed">"Mensrare has completely redefined my wardrobe. The materials are undeniably premium."</p>
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-zinc-200 rounded-full overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" class="w-full h-full object-cover">
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#2D2424]">David L.</h4>
                                    <span class="text-xs text-zinc-500 uppercase tracking-widest">Verified Buyer</span>
                                </div>
                            </div>
                        </div>
                        <!-- Home Review 2 -->
                        <div class="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:-translate-y-2 transition-transform duration-500">
                            <div class="flex text-[#993300] mb-6">
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                            </div>
                            <p class="text-lg text-[#2D2424]/80 italic mb-6 leading-relaxed">"The packaging alone feels like a luxury experience. Very impressed with the quick shipping."</p>
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-zinc-200 rounded-full overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" class="w-full h-full object-cover">
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#2D2424]">Michael R.</h4>
                                    <span class="text-xs text-zinc-500 uppercase tracking-widest">Verified Buyer</span>
                                </div>
                            </div>
                        </div>
                        <!-- Home Review 3 -->
                        <div class="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:-translate-y-2 transition-transform duration-500">
                            <div class="flex text-[#993300] mb-6">
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star_half</span>
                            </div>
                            <p class="text-lg text-[#2D2424]/80 italic mb-6 leading-relaxed">"Excellent cut and beautiful vibrant colors. I get compliments every time I wear it out."</p>
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-zinc-200 rounded-full overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop" class="w-full h-full object-cover">
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#2D2424]">Arjun S.</h4>
                                    <span class="text-xs text-zinc-500 uppercase tracking-widest">Verified Buyer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;

const productRatingTopHtml = `
                                    <h1 class="font-serif text-5xl md:text-7xl text-[#2D2424] uppercase leading-none tracking-tight">\${p.name}</h1>
                                    <div class="flex items-center gap-2 mt-2 justify-center">
                                        <div class="flex text-[#993300]">
                                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>
                                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star_half</span>
                                        </div>
                                        <span class="text-sm font-bold text-[#2D2424]/80 text-center">4.8 (124 Reviews)</span>
                                    </div>`;

filesToUpdate.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // Remove star ratings right under product title in detail page
    html = html.replace(productRatingTopHtml, '<h1 class="font-serif text-5xl md:text-7xl text-[#2D2424] uppercase leading-none tracking-tight">${p.name}</h1>');

    // Remove Customer Reviews section from product detail page
    html = html.replace(productReviewsHtml, '<!-- Related Products Section -->');

    // Remove Home Screen Reviews section
    html = html.replace(homeReviewsHtml + `\n            \`\n            },\n            '/shop': {`, `                        </div>\n                    </div>\n                </section>\n            \`\n            },\n            '/shop': {`);

    fs.writeFileSync(file, html, 'utf8');
    console.log('Successfully undid reviews in ' + file);
});
