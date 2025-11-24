/* ==========================================
   RENDERER - DOM Manipulation Functions
   How to display content on the page
   ========================================== */

import { HERO_IMAGE_URL, PORTFOLIO_ITEMS, TIMELINE_EVENTS, TOPICS } from './config.js';

// Setup Hero Image
export function setupHero() {
    const img = document.getElementById('hero-image');
    if (img && HERO_IMAGE_URL) {
        img.src = HERO_IMAGE_URL;
    }
}

// Render Timeline
export function renderTimeline() {
    const container = document.getElementById('timeline-content');
    container.innerHTML = TIMELINE_EVENTS.map((event, index) => `
        <div class="flex-shrink-0 w-[85vw] md:w-[500px] snap-center flex flex-col items-start relative group">
            <!-- Line Connector -->
            <div class="absolute top-6 -left-12 w-12 h-[2px] bg-zinc-800 hidden md:block"></div>
            
            <span class="text-6xl md:text-8xl font-black text-zinc-800 absolute -top-8 -left-4 -z-10 opacity-50 group-hover:text-zinc-700 transition-colors duration-300">
                ${index + 1}
            </span>
            
            <div class="w-full border-l-4 border-neon-pink pl-6 py-4 bg-zinc-950/80 backdrop-blur-sm rounded-r-xl border-y border-r border-zinc-900 hover:border-zinc-700 transition-all duration-300 p-6">
                <p class="text-neon-pink font-bold tracking-widest text-xs md:text-sm mb-1 uppercase">
                    ${event.day}
                </p>
                <h3 class="text-2xl md:text-4xl font-black text-white uppercase leading-none mb-4">
                    ${event.title}
                </h3>
                <p class="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                    ${event.description}
                </p>
            </div>
        </div>
    `).join('');
}

// Render Portfolios
export function renderPortfolios() {
    const container = document.getElementById('portfolio-grid');
    container.innerHTML = PORTFOLIO_ITEMS.map(item => `
        <div class="group relative aspect-[3/4] bg-zinc-900 border border-zinc-800 hover:border-neon-pink transition-all duration-300 cursor-pointer overflow-hidden">
            <img 
                src="${item.image}" 
                alt="${item.name}" 
                class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                onerror="this.src='https://placehold.co/400x600/222/FFF?text=Missing+Img'"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            
            <div class="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p class="text-neon-pink text-xs font-bold uppercase tracking-widest mb-1">${item.season}</p>
                <h3 class="text-2xl font-bold text-white uppercase leading-none">${item.name}</h3>
                <div class="w-0 group-hover:w-full h-[2px] bg-neon-pink mt-3 transition-all duration-500"></div>
            </div>
        </div>
    `).join('');
}

// Render Topic View Content
export function renderTopicView(id) {
    const topicData = TOPICS[id];
    if (!topicData) return;

    // Populate Header Data
    document.getElementById('topic-header-id').innerText = `SPR // ${id.toUpperCase()}`;
    document.getElementById('topic-title').innerText = topicData.title;
    document.getElementById('topic-subtitle').innerText = topicData.subtitle;

    // Render Subtopics Grid
    const grid = document.getElementById('subtopics-grid');
    grid.innerHTML = topicData.subTopics.map((sub, index) => {
        return `
        <div class="group flex flex-col space-y-4 animate-slide-up" style="animation-delay: ${index * 0.1}s">
            <div onclick="window.handleSubTopicClick('${id}', ${index})" class="overflow-hidden aspect-video bg-zinc-900 border border-zinc-800 group-hover:border-neon-pink transition-colors duration-300 relative cursor-pointer">
                <img 
                    src="${sub.image || `https://placehold.co/600x400/111/FFF?text=${encodeURIComponent(sub.title)}`}" 
                    alt="${sub.title}"
                    class="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                    onerror="this.src='https://placehold.co/600x400/222/FFF?text=Missing+Img'"
                />
                <div class="absolute top-0 right-0 bg-neon-pink text-black font-bold px-3 py-1 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More
                </div>
                <div class="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs font-mono text-neon-pink border border-neon-pink/30">
                    0${index + 1}
                </div>
            </div>
            <div class="cursor-pointer" onclick="window.handleSubTopicClick('${id}', ${index})">
                <h3 class="text-2xl font-bold uppercase text-white group-hover:text-neon-pink transition-colors">
                    ${sub.title}
                </h3>
                <p class="text-zinc-500 text-sm leading-relaxed border-l-2 border-zinc-800 pl-4 mt-2 group-hover:border-neon-pink transition-colors">
                    ${sub.description}
                </p>
            </div>
        </div>
    `}).join('');

    // Inject Bottom Video for End Game only
    const specialFooter = document.getElementById('topic-special-footer');
    if (id === 'endgame') {
        specialFooter.classList.remove('hidden');
        specialFooter.innerHTML = `
            <h3 class="text-2xl font-black uppercase text-white mb-6 border-l-4 border-neon-pink pl-4">Fire Making Resource</h3>
            <div class="w-full max-w-2xl mx-auto aspect-video border border-zinc-800 shadow-[0_0_20px_rgba(255,105,180,0.1)]">
                <iframe src="https://www.youtube.com/embed/fL2yuWsBGT8" width="560" height="315" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
    } else {
        specialFooter.classList.add('hidden');
        specialFooter.innerHTML = '';
    }
}
