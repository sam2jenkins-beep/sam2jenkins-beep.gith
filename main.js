/* ==========================================
   MAIN - Initialization & Utilities
   Loads all modules and sets up the site
   ========================================== */

import { setupHero, renderTimeline, renderPortfolios } from './renderer.js';
import './navigation.js'; // Side-effects: exposes global functions

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setupHero();
    renderTimeline();
    renderPortfolios();
    setupTimelineScroll();
});

// Timeline Horizontal Scroll Handler
function setupTimelineScroll() {
    const el = document.getElementById('timeline-container');
    el.addEventListener('wheel', (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
            left: el.scrollLeft + e.deltaY * 2,
            behavior: 'smooth'
        });
    });
}
