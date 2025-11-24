// ==========================================
// === YOUR PHOTOS & CONTENT CONFIGURATION ===
// ==========================================

// 1. MAIN HERO IMAGE
const HERO_IMAGE_URL = 'https://placehold.co/800x533/18181b/FF69B4?text=Tactical+Preparation'; 

// 2. PORTFOLIO IMAGES
const PORTFOLIO_ITEMS = [
    { id: '1', name: 'The Strategist', season: 'Season 45', image: 'https://placehold.co/400x600/18181b/FF69B4?text=Player+A' },
    { id: '2', name: 'The Socialite', season: 'Season 32', image: 'https://placehold.co/400x600/18181b/FF69B4?text=Player+B' },
    { id: '3', name: 'The Beast', season: 'Season 28', image: 'https://placehold.co/400x600/18181b/FF69B4?text=Player+C' },
    { id: '4', name: 'The Villain', season: 'Season 20', image: 'https://placehold.co/400x600/18181b/FF69B4?text=Player+D' },
    // Add more players if needed
];

// 3. TOPIC CONTENT & IMAGES
const TOPICS = {
    'pregame': {
        title: 'Pregame Guidelines',
        subtitle: 'The game begins before you hit the sand. Preparation is the only variable you can control.',
        subTopics: [
            { 
                title: 'How Have Others Prepared', 
                description: 'Analyzing the physical and psychological preparation routines of past winners and contestants.', 
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Contestant+Prep' 
            },
            { 
                title: 'Meta Strategy Deep Dive', 
                description: 'Advanced strategic principles: backwards induction, threat level management, and the "Meat Shield" alignment.', 
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Meta+Deep+Dive' 
            },
            { 
                title: 'Suggestions Leading Up to Departure', 
                description: 'The final countdown. Physical tapering, caloric loading, mental checklists, and last-minute skill acquisition before marooning.', 
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Departure' 
            }
        ]
    },
    'survivornotebook': {
        title: 'Survivor NotebookLM',
        subtitle: 'Your personal AI-powered strategic analysis tool for deep pre-game research and narrative refinement.',
        subTopics: [
            { 
                title: 'Link to NotebookLM', 
                description: 'Open your private, customized research library in a new tab.', 
                image: 'https://placehold.co/600x400/000000/FF69B4?text=AI+Research' 
            },
            { 
                title: 'Note Taking & Strategy', 
                description: 'Dedicated space for outlining your game narrative, preparing confessionals, and tracking player archetypes.', 
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Private+Notes' 
            }
        ]
    },
    'meta': {
        title: 'Meta Game',
        subtitle: 'Understanding the invisible currents that drive the modern game.',
        subTopics: [
            { 
                title: 'Realities of Reality TV', 
                description: 'Navigating the psychological crucible: managing deprivation, cognitive collapse, and using confessionals as intelligence.',
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Reality+TV+Crucible'
            },
            { 
                title: 'Day 1: USA VS. QC', 
                description: 'Analyse comparative des stratégies de départ. Les différences cruciales entre les formats.', 
                image: 'https://placehold.co/600x400/000000/FF69B4?text=USA+vs+QC' 
            },
            { 
                title: 'Youtube Resources', 
                description: 'Curated playlists and channel links for tactical breakdowns and challenge analyses.', 
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Video+Guides' 
            }
        ]
    },
    'outwit': {
        title: 'Outwit',
        subtitle: 'The Social Game. People are the most dangerous puzzle pieces.',
        subTopics: [
            {
                title: 'The Volatility Matrix', 
                description: 'A Quadrant system for tactical adaptation and managing chaos in the Survivor Québec metagame.',
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Volatility+Matrix'
            },
            {
                title: 'History of Strategy: SQ',
                description: 'Mastering Social Intelligence (SQ). Analyzing the evolution of social strategy and behavioral patterns across 45+ seasons.',
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Strategy+SQ'
            },
            {
                title: 'Advantages & Twists',
                description: 'Knowledge is power. Navigating the complex web of Immunity Idols, Advantages, and game-breaking twists.',
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Advantages'
            },
            {
                title: 'Castaways Codex',
                description: 'The Encyclopedia of Players. Understanding player archetypes, psychological profiles, and threat levels.',
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Codex'
            }
        ]
    },
    'outplay': {
        title: 'Outplay',
        subtitle: 'The Physical Game. Adapting to the environment and the challenges.',
        subTopics: [
            {
                title: 'SQ: Old School Renaissance',
                description: 'Merging modern strategy with classic social awareness. Reading the unspoken hierarchy of the tribe.',
                image: 'https://placehold.co/600x400/000000/FF69B4?text=SQ+Renaissance'
            },
            {
                title: 'Puzzles',
                description: 'The great equalizer. Visualizing solutions under pressure. Slide puzzles, word scrambles, and pattern recognition.',
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Puzzles'
            },
            {
                title: 'Swimming',
                description: 'Water proficiency is essential. Breath holding, efficient strokes, and diving deep to retrieve keys or buoys.',
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Swimming'
            },
            {
                title: 'Physical',
                description: 'Raw athleticism and obstacle course readiness. Balance, agility, and the endurance to outlast the competition.',
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Physical'
            }
        ]
    },
    'outlast': {
        title: 'Outlast',
        subtitle: 'The Endurance Game. Surviving the elements and your own mind.',
        subTopics: [
            { 
                title: 'Destination: Panama',
                description: 'Know your enemy. A detailed guide to the climate, wildlife, and survival conditions of Season 4\'s location.',
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Panama+Location' 
            },
            { 
                title: 'Hygiene', 
                description: 'Fungal Warfare: Protocols for foot care, skin defense, and gear maintenance in a high-humidity environment.',
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Hygiene+Protocol' 
            },
            { title: 'COLD', description: 'Managing hunger, sleep deprivation, and elements.', image: 'https://placehold.co/600x400/000000/FF69B4?text=Cold+Survival' },
            { title: "I'M A CITY GIRL", description: 'Pacing yourself for the 42-day marathon.', image: 'https://placehold.co/600x400/000000/FF69B4?text=City+Girl+Survival' }
        ]
    },
    'endgame': {
        title: 'End Game',
        subtitle: 'Closing the deal. The final hurdles between you and the title.',
        subTopics: [
            { title: 'The Pitch', description: 'Resume building 101. Identifying your key moves and translating them into a winning narrative.', image: 'https://placehold.co/600x400/000000/FF69B4?text=The+Pitch' },
            { title: 'Final Tribal Council', description: 'Structuring your opening statement. How to articulate your game without sounding arrogant or passive.', image: 'https://placehold.co/600x400/000000/FF69B4?text=FTC' },
            { title: 'Jury Management', description: 'Managing relationships with the people you vote out.', image: 'https://placehold.co/600x400/000000/FF69B4?text=Jury+Management+Strategy' }
        ]
    }
};

const TIMELINE_EVENTS = [
    { 
        day: 'Jour 1', 
        title: 'Marooned',
        description: 'Day of first impressions. Status is set by sweat and vibes. Be useful, not bossy. Fatigue exposes fakes fast. Win the boat scramble, save the chickens, don\'t be weird.'
    },
    { 
        day: 'Jour 2-6', 
        title: 'Premier Vote',
        description: 'The tone-setter. Integrate fast or die. Ensure your name isn\'t even a whisper. The first vote draws the line between majority and dead weight.'
    },
    { 
        day: 'Jour 13', 
        title: 'Brassage',
        description: 'Chaos mode. Old alliances die here. Count the numbers immediately. If you\'re down, flip a local or find a crack before you become the easy swap victim.'
    },
    { 
        day: 'Jour 24', 
        title: 'La Fusion',
        description: 'The game explodes. Individual games are exposed. Find your sub-alliance within the mob, pick a shield, and don\'t get clocked as the threat.'
    },
    { 
        day: 'Jour 35', 
        title: 'Êtres Chers',
        description: 'Emotional nuke. Loved Ones visit exposes hearts and cracks. Use the tears to lock in your core allies before the final knives come out.'
    },
    { 
        day: 'Jour 41', 
        title: 'Finale 4',
        description: 'Final boss battle. Win Immunity or make fire. You decide who sits next to you. The choice here wins or loses the million.'
    },
    { 
        day: 'Jour 42', 
        title: 'Survivant',
        description: 'The Pitch. Frame your chaos as strategy. Own your game, validate their feelings, and sell your story. Make them *want* to pay you.'
    },
];

// ==========================================
// === END CONFIGURATION ====================
// ==========================================

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    setupHero();
    renderTimeline();
    renderPortfolios();
    setupTimelineScroll();
    loadNotes(); // Load notes on startup
    // Inject all custom view content into the placeholder divs
    injectCustomViewContent();
});

function setupHero() {
    const img = document.getElementById('hero-image');
    if (img && HERO_IMAGE_URL) {
        img.src = HERO_IMAGE_URL;
    }
}

// --- LOCAL STORAGE LOGIC ---
function saveNotes() {
    const textarea = document.getElementById('strategy-notes');
    if (textarea) {
        // Use localStorage since there is no Firebase setup here
        localStorage.setItem('notebookLMSurvivorNotes', textarea.value);
    }
}

function loadNotes() {
    const textarea = document.getElementById('strategy-notes');
    if (textarea) {
        textarea.value = localStorage.getItem('notebookLMSurvivorNotes') || '';
    }
}
// ---------------------------

// RENDERING FUNCTIONS
function renderTimeline() {
    const container = document.getElementById('timeline-content');
    container.innerHTML = TIMELINE_EVENTS.map((event, index) => `
        <div class="flex-shrink-0 w-[85vw] md:w-[500px] snap-center flex flex-col items-start relative group">
            <!-- Line Connector -->
            <div class="absolute top-6 -left-12 w-12 h-[2px] bg-zinc-800 hidden md:block"></div>
            
            <span class="text-6xl md:text-8xl font-black text-zinc-800 absolute -top-8 -left-4 -z-10 opacity-50 group-hover:text-zinc-700 transition-colors duration-300 font-oswald">
                ${index + 1}
            </span>
            
            <div class="w-full border-l-4 border-neon-pink pl-6 py-4 bg-zinc-950/80 backdrop-blur-sm rounded-r-xl border-y border-r border-zinc-900 hover:border-zinc-700 transition-all duration-300 p-6">
                <p class="text-neon-pink font-bold tracking-widest text-xs md:text-sm mb-1 uppercase">
                    ${event.day}
                </p>
                <h3 class="text-2xl md:text-4xl font-black text-white uppercase leading-none mb-4 font-oswald">
                    ${event.title}
                </h3>
                <p class="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                    ${event.description}
                </p>
            </div>
        </div>
    `).join('');
}

function renderPortfolios() {
    const container = document.getElementById('portfolio-grid');
    container.innerHTML = PORTFOLIO_ITEMS.map(item => `
        <div class="group relative aspect-[3/4] bg-zinc-900 border border-zinc-800 hover:border-neon-pink transition-all duration-300 cursor-pointer overflow-hidden rounded-xl">
            <img 
                src="${item.image}" 
                alt="${item.name}" 
                class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                onerror="this.src='https://placehold.co/400x600/222/FFF?text=Missing+Img'"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            
            <div class="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p class="text-neon-pink text-xs font-bold uppercase tracking-widest mb-1">${item.season}</p>
                <h3 class="text-2xl font-bold text-white uppercase leading-none font-oswald">${item.name}</h3>
                <div class="w-0 group-hover:w-full h-[2px] bg-neon-pink mt-3 transition-all duration-500"></div>
            </div>
        </div>
    `).join('');
}

function setupTimelineScroll() {
    const el = document.getElementById('timeline-container');
    let isDragging = false;
    let startX;
    let scrollLeft;

    el.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
        el.style.cursor = 'grabbing';
    });

    el.addEventListener('mouseleave', () => {
        isDragging = false;
        el.style.cursor = 'grab';
    });

    el.addEventListener('mouseup', () => {
        isDragging = false;
        el.style.cursor = 'grab';
    });

    el.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-speed multiplier
        el.scrollLeft = scrollLeft - walk;
    });
    
    // Mouse wheel for horizontal scroll on timeline
    el.addEventListener('wheel', (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
            left: el.scrollLeft + e.deltaY * 2,
            behavior: 'smooth'
        });
    });
}

// NAVIGATION LOGIC
function openTopic(id) {
    const topicData = TOPICS[id];
    if (!topicData) return;

    // Populate Data
    document.getElementById('topic-header-id').innerText = `SPR // ${id.toUpperCase()}`;
    document.getElementById('topic-title').innerText = topicData.title;
    document.getElementById('topic-subtitle').innerText = topicData.subtitle;

    // Render Subtopics
    const grid = document.getElementById('subtopics-grid');
    
    grid.innerHTML = topicData.subTopics.map((sub, index) => {
        const subTopicTitle = sub.title.replace(/'/g, "\\'"); // Sanitize title for onclick
        return `
        <div class="group flex flex-col space-y-4 animate-slide-up" style="animation-delay: ${index * 0.1}s">
            <div onclick="handleSubTopicClick('${id}', ${index}, '${subTopicTitle}')" class="overflow-hidden aspect-video bg-zinc-900 border border-zinc-800 group-hover:border-neon-pink transition-colors duration-300 relative cursor-pointer rounded-lg">
                <img 
                    src="${sub.image || `https://placehold.co/600x400/111/FFF?text=${encodeURIComponent(sub.title)}`}" 
                    alt="${sub.title}"
                    class="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                    onerror="this.src='https://placehold.co/600x400/222/FFF?text=Missing+Img'"
                />
                <div class="absolute top-0 right-0 bg-neon-pink text-black font-bold px-3 py-1 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-lg">
                    Read More
                </div>
                <div class="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs font-mono text-neon-pink border border-neon-pink/30 rounded">
                    0${index + 1}
                </div>
            </div>
            <div class="cursor-pointer" onclick="handleSubTopicClick('${id}', ${index}, '${subTopicTitle}')">
                <h3 class="text-2xl font-bold uppercase text-white group-hover:text-neon-pink transition-colors font-oswald">
                    ${sub.title}
                </h3>
                <p class="text-zinc-500 text-sm leading-relaxed border-l-2 border-zinc-800 pl-4 mt-2 group-hover:border-neon-pink transition-colors">
                    ${sub.description}
                </p>
            </div>
        </div>
        `
    }).join('');

    // Inject Bottom Video for End Game only
    const specialFooter = document.getElementById('topic-special-footer');
    if (id === 'endgame') {
        specialFooter.classList.remove('hidden');
        specialFooter.innerHTML = `
            <h3 class="text-2xl font-black uppercase text-white mb-6 border-l-4 border-neon-pink pl-4 font-oswald">Fire Making Resource</h3>
            <div class="w-full max-w-2xl mx-auto aspect-video border border-zinc-800 rounded-xl shadow-[0_0_20px_rgba(255,105,180,0.1)]">
                <!-- Placeholder Video - Actual video links are embedded in custom views for FTC -->
                <div class="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-500 text-lg rounded-xl">
                    Fire Making Video Placeholder
                </div>
            </div>
        `;
    } else {
        specialFooter.classList.add('hidden');
        specialFooter.innerHTML = '';
    }

    // Toggle Views
    document.getElementById('topic-view').style.display = 'block';
    document.getElementById('main-view').style.display = 'none';
    document.getElementById('topic-view').scrollTop = 0;
}

function handleSubTopicClick(topicId, index, subTopicTitle) {
    
    // Clean up the subTopicTitle from JavaScript escaping if necessary
    const cleanedTitle = subTopicTitle.replace(/\\'/g, "'");

    // --- NOTEBOOK LM ---
    if (topicId === 'survivornotebook') {
        if (cleanedTitle === 'Link to NotebookLM') {
            // Open external link
            window.open('https://notebooklm.google.com/notebook/b89282b3-22b0-424e-9647-f2e699a3756f', '_blank');
            return;
        }
        if (cleanedTitle === 'Note Taking & Strategy') {
            openNotebookLMView();
            return;
        }
    }


    // --- OUTWIT ---
    if (topicId === 'outwit' && cleanedTitle === 'The Volatility Matrix') {
        openVolatilityMatrixPage();
        return;
    }

    if (topicId === 'outwit' && cleanedTitle === 'Advantages & Twists') {
        openAdvantagesPage();
        return;
    }

    // --- PREGAME ---
    if (topicId === 'pregame' && cleanedTitle === 'How Have Others Prepared') {
        openPreparationPage();
        return;
    }

    if (topicId === 'pregame' && cleanedTitle === 'Meta Strategy Deep Dive') {
        openMetaPrepPage();
        return;
    }
    
    if (topicId === 'pregame' && cleanedTitle === 'Suggestions Leading Up to Departure') {
        openSuggestionsPage();
        return;
    }

    // --- OUTPLAY ---
    if (topicId === 'outplay' && cleanedTitle === 'SQ: Old School Renaissance') {
        openRenaissancePage();
        return;
    }
    
    if (topicId === 'outplay' && cleanedTitle === 'Swimming') {
        openSwimmingPage();
        return;
    }
    
    if (topicId === 'outplay' && cleanedTitle === 'Physical') {
        openPhysicalPage(); 
        return;
    }


    // --- OUTLAST ---
    if (topicId === 'outlast' && cleanedTitle === 'Destination: Panama') {
        openPanamaPage();
        return;
    }

    if (topicId === 'outlast' && cleanedTitle === 'Hygiene') {
        openHygienePage();
        return;
    }
    
    if (topicId === 'outlast' && cleanedTitle === "I'M A CITY GIRL") {
        openCityGirlPage();
        return;
    }

    // --- END GAME ---
    if (topicId === 'endgame' && cleanedTitle === 'Final Tribal Council') {
        openFTCPage();
        return;
    }

    if (topicId === 'endgame' && cleanedTitle === 'Jury Management') {
        openJuryPage();
        return;
    }
    
    // --- META GAME ---
    if (topicId === 'meta' && cleanedTitle === 'Day 1: USA VS. QC') {
        openDay1Page();
        return;
    }
    
    if (topicId === 'meta' && cleanedTitle === 'Realities of Reality TV') {
        openRealityTVPage();
        return;
    }
    
    // Fallback for unhandled pages (e.g., Cold, Puzzles)
    console.log(`Navigating to generic view for: ${cleanedTitle}`);
    // If we hit an unhandled section, we can alert (using a modal) or just stay on the topic view.
}

function closeTopic() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('main-view').style.display = 'block';
}

// --- CUSTOM PAGE LOGIC ---
let chartsInitialized = false;

// NEW FUNCTION FOR PHYSICAL VIEW
function openPhysicalPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('physical-view').style.display = 'block';
    document.getElementById('physical-view').scrollTop = 0;
}

function closePhysicalPage() {
    document.getElementById('physical-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}


function openSwimmingPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('swimming-view').style.display = 'block';
    document.getElementById('swimming-view').scrollTop = 0;
}

function closeSwimmingPage() {
    document.getElementById('swimming-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openSuggestionsPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('suggestions-view').style.display = 'block';
    document.getElementById('suggestions-view').scrollTop = 0;
}

function closeSuggestionsPage() {
    document.getElementById('suggestions-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openNotebookLMView() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('notebook-lm-view').style.display = 'block';
    document.getElementById('notebook-lm-view').scrollTop = 0;
    loadNotes();
}

function closeNotebookLMView() {
    document.getElementById('notebook-lm-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openRealityTVPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('reality-tv-view').style.display = 'block';
    document.getElementById('reality-tv-view').scrollTop = 0;
}

function closeRealityTVPage() {
    document.getElementById('reality-tv-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openMetaPrepPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('meta-prep-view').style.display = 'block';
    document.getElementById('meta-prep-view').scrollTop = 0;
}

function closeMetaPrepPage() {
    document.getElementById('meta-prep-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openVolatilityMatrixPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('volatility-matrix-view').style.display = 'block';
    document.getElementById('volatility-matrix-view').scrollTop = 0;
}

function closeVolatilityMatrixPage() {
    document.getElementById('volatility-matrix-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}


function openAdvantagesPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('advantages-view').style.display = 'block';
    document.getElementById('advantages-view').scrollTop = 0;
    
    if (!chartsInitialized) {
        initAdvantagesCharts();
        chartsInitialized = true;
    }
}

function closeAdvantagesPage() {
    document.getElementById('advantages-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openPreparationPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('preparation-view').style.display = 'block';
    document.getElementById('preparation-view').scrollTop = 0;
}

function closePreparationPage() {
    document.getElementById('preparation-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openRenaissancePage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('renaissance-view').style.display = 'block';
    document.getElementById('renaissance-view').scrollTop = 0;
}

function closeRenaissancePage() {
    document.getElementById('renaissance-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openFTCPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('ftc-view').style.display = 'block';
    document.getElementById('ftc-view').scrollTop = 0;
}

function closeFTCPage() {
    document.getElementById('ftc-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openJuryPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('jury-view').style.display = 'block';
    document.getElementById('jury-view').scrollTop = 0;
}

function closeJuryPage() {
    document.getElementById('jury-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openPanamaPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('panama-view').style.display = 'block';
    document.getElementById('panama-view').scrollTop = 0;
}

function closePanamaPage() {
    document.getElementById('panama-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openHygienePage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('hygiene-view').style.display = 'block';
    document.getElementById('hygiene-view').scrollTop = 0;
}

function closeHygienePage() {
    document.getElementById('hygiene-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openDay1Page() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('day1-view').style.display = 'block';
    document.getElementById('day1-view').scrollTop = 0;
}

function closeDay1Page() {
    document.getElementById('day1-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

function openCityGirlPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('city-girl-view').style.display = 'block';
    document.getElementById('city-girl-view').scrollTop = 0;
}

function closeCityGirlPage() {
    document.getElementById('city-girl-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}


function initAdvantagesCharts() {
    // Utility function to wrap long labels for charts
    const wrapLabel = (str, maxWidth) => {
        const words = str.split(' ');
        let lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            if (currentLine.length + words[i].length + 1 < maxWidth) {
                currentLine += ' ' + words[i];
            } else {
                lines.push(currentLine);
                currentLine = words[i];
            }
        }
        lines.push(currentLine);
        return lines;
    };

    // Chart.js Tooltip Configuration
    const tooltipConfig = {
        callbacks: {
            title: function(tooltipItems) {
                const item = tooltipItems[0];
                let label = item.chart.data.labels[item.dataIndex];
                if (Array.isArray(label)) {
                  return label.join(' ');
                }
                return label;
            }
        }
    };

    // Chart 1: Volatility Index (Bar Chart)
    const ctxVol = document.getElementById('volatilityChart').getContext('2d');
    new Chart(ctxVol, {
        type: 'bar',
        data: {
            labels: [
                wrapLabel('Linked Destinies', 12), 
                wrapLabel('Thrown Hourglass', 12), 
                wrapLabel('Player Steal', 12), 
                wrapLabel('Redemption Island', 12), 
                wrapLabel('Standard Idol', 12),
                wrapLabel('Exile (Edge)', 12),
                wrapLabel('Extra Vote', 12),
                wrapLabel('Tribal Raid', 12),
                wrapLabel('The Store', 12),
                wrapLabel('Safety w/o Power', 12)
            ],
            datasets: [{
                label: 'Game Chaos Score (Est.)',
                data: [10, 9, 8, 7, 6, 6, 5, 5, 4, 3], 
                backgroundColor: [
                    '#FF69B4', '#FF69B4', '#FF69B4', 
                    '#db2777', 
                    '#a855f7', '#a855f7', 
                    '#7c3aed', '#7c3aed', 
                    '#52525b', '#52525b' 
                ],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    ...tooltipConfig,
                    titleFont: { size: 14, family: 'Oswald' },
                    bodyFont: { size: 12, family: 'Roboto' },
                    backgroundColor: '#27272a',
                    titleColor: '#FF69B4',
                    bodyColor: '#e4e4e7',
                    padding: 10,
                    caretPadding: 10
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Chaos/Impact Rating', color: '#a1a1aa', font: { family: 'Roboto' } },
                    grid: { color: '#27272a' },
                    ticks: { color: '#a1a1aa' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#a1a1aa', font: { size: 10 } }
                }
            }
        }
    });

    // Chart 2: Functional Distribution (Doughnut)
    const ctxType = document.getElementById('typeChart').getContext('2d');
    new Chart(ctxType, {
        type: 'doughnut',
        data: {
            labels: ['Structural (Twists)', 'Offensive (Attacks)', 'Defensive (Protection)', 'Resurrection (Return)'],
            datasets: [{
                data: [4, 3, 2, 2], 
                backgroundColor: [
                    '#FF69B4', 
                    '#db2777', 
                    '#a855f7', 
                    '#52525b' 
                ],
                borderColor: '#09090b',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { usePointStyle: true, padding: 20, color: '#a1a1aa', font: { family: 'Roboto' } }
                },
                tooltip: {
                    ...tooltipConfig,
                    titleFont: { size: 14, family: 'Oswald' },
                    bodyFont: { size: 12, family: 'Roboto' },
                    backgroundColor: '#27272a',
                    titleColor: '#FF69B4',
                    bodyColor: '#e4e4e7',
                    padding: 10,
                    caretPadding: 10
                }
            }
        }
    });
}

// --- VIEW MANAGEMENT: INJECT CONTENT DYNAMICALLY ---
// This function moves all the large HTML content blocks from the script file 
// into their respective placeholder divs in the main index.html file.
function injectCustomViewContent() {
    
    // --- CONTENT FOR PHYSICAL VIEW (NEW) ---
    document.getElementById('physical-view').innerHTML = `
        <button onclick="closePhysicalPage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Outplay
        </button>
        
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald">Physical Land-Based Challenges</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">A Competitor’s Guide to the Arena</h2>
                <p class="mt-4 max-w-2xl mx-auto text-zinc-500 text-lg">Focus on functional "farm strength": Combat, heavy lifting, and static endurance.</p>
            </div>
        </header>

        <main class="container mx-auto px-4 py-12 font-roboto text-zinc-300 max-w-4xl">
            <p class="text-lg leading-relaxed mb-8 border-l-4 border-neon-pink pl-6 py-2 bg-zinc-900/50 rounded-r-lg">
                The land game in Survivor has evolved into two distinct worlds. If you are looking at the US franchise ("The New Era"), picture a high-stakes playground: obstacle courses that prioritize balance, agility, and end with a complex puzzle. If you are looking at Survivor Québec, picture a gladiatorial arena. It is a return to "Old School" physicality, featuring wrestling, heavy lifting, and direct combat.
            </p>
            
            <div class="space-y-12">
                
                <!-- 1. COMBAT FACTOR -->
                <section class="bg-zinc-900 p-8 rounded-xl border border-zinc-800 !h-auto">
                    <h3 class="text-3xl font-oswald text-neon-pink uppercase mb-4 border-b-2 border-zinc-700 pb-2">1. The Combat Factor: Leverage Over Size</h3>
                    <p class="leading-relaxed mb-4 text-zinc-400">
                        Primarily for Survivor Québec, but applicable to US "Battle" Challenges. In Québec, the game is physical. You will likely face "Sumo at Sea" or mud wrestling. In these scenarios, being the biggest person helps, but being the lowest person wins.
                    </p>
                    <h4 class="text-xl font-oswald text-white mb-3">The Physics of Winning</h4>
                    <p class="leading-relaxed mb-4">
                        The secret to these challenges is leverage. If you stand tall, your center of gravity is high, making you easy to topple. The goal is not just to push your opponent back; it is to get under them and push them up. Once their feet lose traction, they are effortless to move.
                    </p>
                    <div class="bg-black p-4 rounded mt-6 border border-neon-pink/50">
                        <h5 class="text-sm font-bold uppercase tracking-widest text-neon-pink mb-2">Training Suggestion: The "Sled Drive"</h5>
                        <p class="text-zinc-400 mb-3">You need to get comfortable generating power from a low, squatted position.</p>
                        <ul class="list-disc pl-6 space-y-2 text-zinc-400">
                            <li><strong class="text-white">The Drill:</strong> If you have a gym sled, load it heavy. If not, put your car in neutral on a flat, safe lot. Get your hips below your chest and push for 30 seconds. </li>
                            <li><strong class="text-white">Duck Walks:</strong> Squat all the way down and walk forward and backward. It builds the hip mobility needed to stay rooted in the mud.</li>
                        </ul>
                    </div>
                </section>

                <!-- 2. HEAVY LIFTING -->
                <section class="bg-zinc-900 p-8 rounded-xl border border-zinc-800 !h-auto">
                    <h3 class="text-3xl font-oswald text-neon-pink uppercase mb-4 border-b-2 border-zinc-700 pb-2">2. Heavy Lifting: The "Sandbag" Reality</h3>
                    <p class="leading-relaxed mb-4 text-zinc-400">
                        Universal to all franchises. Survivor loves sandbags. You will drag them through mud, throw them over walls, and carry them across beaches. The problem is that sandbags are "dead weight." Unlike a barbell, the weight shifts and flops around. It fights you.
                    </p>
                    <h4 class="text-xl font-oswald text-white mb-3">The "Farm Strength" Requirement</h4>
                    <p class="leading-relaxed mb-4">
                        You don't need bench-press strength; you need grip and core strength. The failure point in these challenges is rarely the legs—it is the hands.
                    </p>
                    <div class="bg-black p-4 rounded mt-6 border border-neon-pink/50">
                        <h5 class="text-sm font-bold uppercase tracking-widest text-neon-pink mb-2">Training Suggestion: The Bear Hug</h5>
                        <p class="text-zinc-400 mb-3">Stop using handles. In the game, you will often have to wrap your arms around awkward objects.</p>
                        <ul class="list-disc pl-6 space-y-2 text-zinc-400">
                            <li><strong class="text-white">The Drill:</strong> Buy a cheap duffel bag and fill it with 50lbs of sand or mulch. Zip it up. Pick it up by hugging it to your chest (bear hug style) and walk for distance. </li>
                            <li><strong class="text-white">The "Get-Up":</strong> Lie on your back hugging the bag. Stand up without using your hands to push off the ground. This mimics falling in the mud and having to recover quickly.</li>
                        </ul>
                    </div>
                </section>
                
                <!-- 3. STATIC ENDURANCE -->
                <section class="bg-zinc-900 p-8 rounded-xl border border-zinc-800 !h-auto">
                    <h3 class="text-3xl font-oswald text-neon-pink uppercase mb-4 border-b-2 border-zinc-700 pb-2">3. Static Endurance: The Pain Game</h3>
                    <p class="leading-relaxed mb-4 text-zinc-400">
                        The Great Equalizer. These are the challenges where you hold a statue, stand on a block, or hang from a pole for hours. This is 10% physical and 90% mental.
                    </p>
                    
                    <h4 class="text-xl font-oswald text-white mb-3 mt-6">A. Shoulders ("Arms Up")</h4>
                    <ul class="list-disc pl-6 space-y-2 text-zinc-400">
                        <li><strong class="text-white">The Secret: Dissociation.</strong> You must mentally leave the challenge. Do not focus on the pain. Go to a "happy place" in your mind.</li>
                        <li><strong class="text-white">Training:</strong> Do the "TV Commercial Hold." Hold two cans of soup straight out to your sides while watching TV. You are not allowed to put them down until the commercial break is over. This trains your brain to endure annoyance.</li>
                    </ul>
                    
                    <h4 class="text-xl font-oswald text-white mb-3 mt-6">B. Grip ("The Pole")</h4>
                    <ul class="list-disc pl-6 space-y-2 text-zinc-400">
                        <li><strong class="text-white">The Secret: Friction.</strong> Smaller players often win this because they have a better strength-to-weight ratio.</li>
                        <li><strong class="text-white">Training:</strong> Standard pull-up bars are too easy to hold. Throw two hand towels over a bar and hang by gripping the towels. This mimics the thick, slippery nature of a wooden pole. Aim for a 60-second hang. </li>
                    </ul>

                    <h4 class="text-xl font-oswald text-white mb-3 mt-6">C. Balance ("The Perch")</h4>
                    <ul class="list-disc pl-6 space-y-2 text-zinc-400">
                        <li><strong class="text-white">The Secret: Visual Locking.</strong> Never look at the water (it moves) or the other players (they wobble). Lock your eyes on a static point—a shell on the sand or a knot in the wood.</li>
                        <li><strong class="text-white">Training:</strong> Stand on a thick couch cushion or pillow with one leg and close your eyes. Have a partner throw soft objects (like socks) at you to distract you. You must learn to stabilize your core while chaos happens around you.</li>
                    </ul>
                </section>
                
                <!-- 4. STRATEGIC APPLICATION -->
                <section class="bg-zinc-900 p-8 rounded-xl border border-zinc-800 !h-auto">
                    <h3 class="text-3xl font-oswald text-neon-pink uppercase mb-4 border-b-2 border-zinc-700 pb-2">4. Strategic Application: How to Use Your Strength</h3>
                    <p class="leading-relaxed mb-4 text-zinc-400">
                        Being strong is a double-edged sword. How you use your physical gifts depends on the social game you are playing.
                    </p>
                    
                    <h4 class="text-xl font-oswald text-white mb-3">Phase 1 (Tribal)</h4>
                    <ul class="list-disc pl-6 space-y-2 text-zinc-400">
                        <li>Hide your weaknesses. If you have bad balance, volunteer to lift the heavy crate. In Survivor Québec, remember that "effort" is currency. Even if you are failing, you must look like you are dying trying. Laziness gets you voted out faster than weakness.</li>
                    </ul>

                    <h4 class="text-xl font-oswald text-white mb-3 mt-6">Phase 2 (Individual): The "Meat Shield" Paradox</h4>
                    <ul class="list-disc pl-6 space-y-2 text-zinc-400">
                        <li><strong class="text-white">In the US:</strong> If you dominate land challenges (like Jonathan Young), you become a target. Consider taking 2nd place intentionally to lower your threat level.</li>
                        <li><strong class="text-white">In Québec:</strong> Strength commands respect. Winning challenges can make you a "Hero" figure that people want to align with. The "shield" strategy works well here—people will keep you around to ensure the tribe (or alliance) stays strong against others.</li>
                    </ul>
                </section>
                
                <!-- 5. FINAL CHECKLIST -->
                <section class="bg-zinc-900 p-8 rounded-xl border border-zinc-800 !h-auto">
                    <h3 class="text-3xl font-oswald text-neon-pink uppercase mb-4 border-b-4 border-neon-pink pb-2">Final Prep Checklist</h3>
                    <ul class="list-disc pl-6 space-y-3 text-zinc-400">
                        <li><strong class="text-white">Conditioning:</strong> Add Burpee Broad Jumps to your routine. Run, hit the deck (chest to floor), pop up, and jump. This prepares your body for the impact of obstacle courses.</li>
                        <li><strong class="text-white">Gear:</strong> Train in your shoes and clothes, not gym gear.</li>
                        <li><strong class="text-white">Mindset:</strong> Get comfortable being uncomfortable. The land game is won by the person who can tolerate the most misery without quitting.</li>
                    </ul>
                </section>
                
            </div>
        </main>
    `;
    
    // --- CONTENT FOR SWIMMING VIEW ---
    document.getElementById('swimming-view').innerHTML = `
        <button onclick="closeSwimmingPage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Outplay
        </button>
        
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald">Mastering The Ocean</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">A Competitor’s Guide to the Water Game</h2>
                <p class="mt-4 max-w-2xl mx-auto text-zinc-500 text-lg">In the water, there is no hiding. Prepare for currents, drag, and panic management.</p>
            </div>
        </header>

        <main class="container mx-auto px-4 py-12 font-roboto text-zinc-300 max-w-4xl">
            <p class="text-lg leading-relaxed mb-8 border-l-4 border-neon-pink pl-6 py-2 bg-zinc-900/50 rounded-r-lg">
                The ocean is the biggest "truth teller" in Survivor. On land, you can fake it, hide in the back of the pack, or get lucky. In the water, there is no hiding. If you panic or have bad form, you are done. Swimming in a pool is nothing like swimming in the ocean. Here is how to prepare for the specific biomechanics of Survivor swimming.
            </p>

            <div class="space-y-12">
                
                <!-- 1. THE ENTRY -->
                <section class="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                    <h3 class="text-3xl font-oswald text-neon-pink uppercase mb-4 border-b-2 border-zinc-700 pb-2">1. The Entry: Don't Run in Water</h3>
                    <p class="leading-relaxed mb-4">
                        The most common rookie mistake. When the challenge starts, adrenaline takes over and people try to sprint into the ocean. But water acts like concrete once it hits your knees. Lifting your legs high to run through waist-deep water spikes your heart rate before you even start swimming.
                    </p>
                    <h4 class="text-xl font-oswald text-white mb-3 mt-4">The Pro Move: "The Dolphin Dive"</h4>
                    <p class="leading-relaxed mb-4">
                        <strong class="text-white">The Technique:</strong> As soon as the water is knee-deep, stop running. Dive forward, grab the sand with your hands, pull yourself forward, and pop up. Repeat this porpoise-like motion until the water is waist-deep. Then, and only then, start swimming. 
                    </p>
                    <div class="bg-black p-4 rounded mt-6 border border-neon-pink/50">
                        <h5 class="text-sm font-bold uppercase tracking-widest text-neon-pink mb-2">Training Suggestion: "Shallows Sprints"</h5>
                        <p class="text-zinc-400">Find the shallow end of a pool or a beach. Practice the transition from running to diving. Do 10 reps of running 5 steps, diving, and getting back up immediately. It builds the explosive power needed to get off the beach fast.</p>
                    </div>
                </section>
                
                <!-- 2. THE TOW -->
                <section class="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                    <h3 class="text-3xl font-oswald text-neon-pink uppercase mb-4 border-b-2 border-zinc-700 pb-2">2. The Tow: The "Combat Side Stroke"</h3>
                    <p class="leading-relaxed mb-4">
                        You will almost certainly have to tow something—a boat, a heavy chest, or a tired teammate. The mistake is trying to swim Freestyle (front crawl). If you hold a rope in one hand and try to swim freestyle with the other, your hips will sink, and you will just splash without moving.
                    </p>
                    <h4 class="text-xl font-oswald text-white mb-3 mt-4">The Fix: Combat Side Stroke (CSS)</h4>
                    <p class="leading-relaxed mb-4">
                        This is what Navy SEALs use to tow gear.
                    </p>
                    <ul class="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                        <li class="leading-relaxed"><strong class="text-white">Swim on your side.</strong></li>
                        <li class="leading-relaxed"><strong class="text-white">Top Arm:</strong> Holds the object (rope, boat, crate).</li>
                        <li class="leading-relaxed"><strong class="text-white">Bottom Arm & Legs:</strong> The bottom arm pulls water, and the legs perform a big "scissor kick." This kick uses your glutes and quads (huge muscles) to drive you forward, rather than the tiny flutter kick used in freestyle. </li>
                    </ul>
                    <div class="bg-black p-4 rounded mt-6 border border-neon-pink/50">
                        <h5 class="text-sm font-bold uppercase tracking-widest text-neon-pink mb-2">Training Suggestion: "The Drag"</h5>
                        <p class="text-zinc-400">Go to the pool with an old t-shirt. Tie a knot in the bottom or hold a mesh laundry bag to create drag. Swim 200 meters using only the side stroke. Focus on the glide phase after the kick.</p>
                    </div>
                </section>
                
                <!-- 3. NAVIGATION -->
                <section class="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                    <h3 class="text-3xl font-oswald text-neon-pink uppercase mb-4 border-b-2 border-zinc-700 pb-2">3. Navigation: The "Crocodile Eye"</h3>
                    <p class="leading-relaxed mb-4">
                        Swimming straight in a crooked ocean. Because of currents and waves, if you put your head down and swim hard, you will drift off course. You might swim an extra 50 meters in a big curve without realizing it.
                    </p>
                    <h4 class="text-xl font-oswald text-white mb-3 mt-4">The Fix: Sighting</h4>
                    <p class="leading-relaxed mb-4">
                        You need to incorporate "sighting" into your stroke.
                    </p>
                    <ul class="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                        <li class="leading-relaxed"><strong class="text-white">The Technique:</strong> Every 6 to 10 strokes, lift your eyes just above the waterline (like a crocodile) to spot your target buoy. Do not lift your whole head—that makes your hips sink. Just the eyes. [Image of open water sighting technique for swimming]</li>
                    </ul>
                    <div class="bg-black p-4 rounded mt-6 border border-neon-pink/50">
                        <h5 class="text-sm font-bold uppercase tracking-widest text-neon-pink mb-2">Training Suggestion: "Tarzan Swimming"</h5>
                        <p class="text-zinc-400">Swim 25 meters with your head completely out of the water, looking forward. It is exhausting, but it strengthens the neck and trap muscles you need to see over waves.</p>
                    </div>
                </section>
                
                <!-- 4. LAST GASP -->
                <section class="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                    <h3 class="text-3xl font-oswald text-neon-pink uppercase mb-4 border-b-2 border-zinc-700 pb-2">4. The "Last Gasp": Panic Control</h3>
                    <p class="leading-relaxed mb-4">
                        Surviving the rising tide. This is the infamous challenge where you are pinned under a steel grate while the tide rises. It is not a test of breath-holding; it is a test of panic management.
                    </p>
                    <h4 class="text-xl font-oswald text-white mb-3 mt-4">The Trick: Micro-Sipping</h4>
                    <p class="leading-relaxed mb-4">
                        When the water covers your face, your instinct is to take a huge gulp of air. Don't. Big lungs create buoyancy, which floats you up and smashes your face into the grate.
                    </p>
                    <ul class="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                        <li class="leading-relaxed"><strong class="text-white">The Technique:</strong> Tilt your head back and take tiny, small sips of air through pursed lips. Keep your lungs only half-full to stay neutral in the water.</li>
                    </ul>
                    <div class="bg-black p-4 rounded mt-6 border border-neon-pink/50">
                        <h5 class="text-sm font-bold uppercase tracking-widest text-neon-pink mb-2">Training Suggestion: "Apnea Walks" (Dry Land)</h5>
                        <p class="text-zinc-400">Do not practice breath-holding alone in water (risk of blackout). Instead, walk on grass while holding your breath. Count your steps. When you feel the urge to breathe ($\text{CO}_2$ buildup), try to take 10 more steps calmly. This trains your brain to recognize that "air hunger" is uncomfortable, but not fatal.</p>
                    </div>
                </section>
                
                <!-- 5. FINAL CHECKLIST -->
                <section class="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                    <h3 class="text-3xl font-oswald text-neon-pink uppercase mb-4 border-b-4 border-neon-pink pb-2">Final Prep Checklist: The Reality Check</h3>
                    <p class="leading-relaxed mb-4">
                        To truly simulate the game, you need to stop training in perfect conditions.
                    </p>
                    <ul class="list-disc pl-6 space-y-3 text-zinc-300">
                        <li class="leading-relaxed"><strong class="text-white">The Clothing Audit:</strong> Go to the pool in sneakers, socks, and a heavy t-shirt. Jump in. Feel how heavy the shoes are. Realizing how much drag shoes create now prevents panic later.</li>
                        <li class="leading-relaxed"><strong class="text-white">The Distance:</strong> Be able to swim 300 meters continuously without touching the wall. That is your baseline for a standard challenge.</li>
                        <li class="leading-relaxed"><strong class="text-white">The Depth:</strong> Practice diving to the bottom of the deep end (10–12 feet) and tying a knot or retrieving a brick. This simulates releasing a buoy underwater.</li>
                    </ul>
                </section>
            </div>
        </main>
    `;
    // --- CONTENT FOR SUGGESTIONS VIEW ---
    document.getElementById('suggestions-view').innerHTML = `
        <button onclick="closeSuggestionsPage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Pregame
        </button>
        
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald">The <span class="text-neon-pink">Final 48 Hours</span> Protocol</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">Shutting Down Systems for Survival Success</h2>
                <p class="mt-4 max-w-3xl mx-auto text-zinc-500 text-lg">The final two days are for metabolic and psychological stabilization, reducing non-critical systemic demands to maximize physical and cognitive capital for Day 1.</p>
            </div>
        </header>

        <main class="container mx-auto px-4 py-12 font-roboto text-zinc-300 max-w-4xl">
            <h2 class="text-3xl font-oswald text-white uppercase mb-6 border-b-4 border-neon-pink pb-2">I. Metabolic Shutdown: The Fuel Reserve</h2>
            <p class="leading-relaxed mb-6">
                The final two days are dedicated to reaching a metabolic "zero-state," ensuring the body is not expending energy on managing common vices or complex digestion.
            </p>

            <div class="space-y-8 mb-12">
                <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <h3 class="text-2xl font-oswald text-neon-pink mb-3">1. Controlled Detox Finalization (Caffeine/Digital)</h3>
                    <ul class="list-disc pl-6 space-y-3 text-zinc-300">
                        <li class="leading-relaxed">
                            <strong class="text-white">Caffeine Reset:</strong> By this stage, the contestant should be fully off caffeine after a controlled two-week taper. The final 48 hours serve to clear the last physiological remnants and avoid the worst withdrawal headaches and cognitive fog during the first three critical days of social scrambling. [Image of caffeine withdrawal symptoms]
                        </li>
                        <li class="leading-relaxed">
                            <strong class="text-white">Digital Fast Enforcement:</strong> A strict, absolute digital black-out must be maintained. The goal is to break the addictive dopamine feedback loop and force the brain to re-attune its focus and observational skills to the physical and social world—skills essential for navigating the complex Survivor landscape.
                        </li>
                    </ul>
                </div>

                <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <h3 class="text-2xl font-oswald text-neon-pink mb-3">2. Hydration and Electrolyte Loading</h3>
                    <ul class="list-disc pl-6 space-y-3 text-zinc-300">
                        <li class="leading-relaxed">
                            <strong class="text-white">Pre-Load Water Reserves:</strong> Maintain constant, forced hydration—drinking beyond the point of thirst. The body must be fully saturated to buffer the impact of the tropical heat and humidity that will be encountered immediately.
                        </li>
                        <li class="leading-relaxed">
                            <strong class="text-white">Mineral Stabilization:</strong> Consume a final, balanced intake of salts and electrolytes. This ensures maximum fluid retention and prevents the rapid mineral depletion that begins instantly on the island due to sweating and consumption of diuretic fluids like coconut water.
                        </li>
                    </ul>
                </div>
            </div>

            <h2 class="text-3xl font-oswald text-white uppercase mb-6 border-b-4 border-neon-pink pb-2">II. Physical and Injury Prevention Final Checks</h2>
            <p class="leading-relaxed mb-6">
                The greatest risk is a preventable injury or infection that cripples a player early. Final physical checks must focus on vulnerabilities.
            </p>
            
            <div class="space-y-8 mb-12">
                <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <h3 class="text-2xl font-oswald text-neon-pink mb-3">1. Meticulous Foot Care</h3>
                    <p class="leading-relaxed mb-4">
                        The feet are the primary vulnerability to infection and trauma in a tropical, damp environment.
                    </p>
                    <ul class="list-disc pl-6 space-y-3 text-zinc-300">
                        <li class="leading-relaxed">
                            <strong class="text-white">Final Skin Audit:</strong> Thoroughly inspect feet for any existing blisters, cuts, or abrasions. Apply antiseptic and protective dressings to seal any break in the skin barrier, preventing immediate tropical infections that spread quickly in humid conditions. [Image of tropical fungal skin infection on feet]
                        </li>
                        <li class="leading-relaxed">
                            <strong class="text-white">Nail Hygiene:</strong> Ensure toenails are trimmed short and smooth to prevent snags and trauma during early physical challenges or mandated Night Movement.
                        </li>
                    </ul>
                </div>

                <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <h3 class="text-2xl font-oswald text-neon-pink mb-3">2. Ergonomics and Postural Reset</h3>
                    <p class="leading-relaxed mb-4">
                        The final hours should include deliberate practice of energy-conserving physical habits.
                    </p>
                    <ul class="list-disc pl-6 space-y-3 text-zinc-300">
                        <li class="leading-relaxed">
                            <strong class="text-white">Practice Ergonomics:</strong> Mentally drill the habit of lifting with the legs and keeping items close to the body—the fundamental rule of Ergonomic Lifting. This habit must be automatic to prevent the musculoskeletal trauma that is the leading reason for medical evacuation. [Image of proper ergonomic lifting technique]
                        </li>
                        <li class="leading-relaxed">
                            <strong class="text-white">Mindful Pacing:</strong> Practice the "Working Smart" model of movement, minimizing visible exertion and maximizing efficiency of rest. Avoid any unnecessary exertion in the final 48 hours to conserve every available calorie.
                        </li>
                    </ul>
                </div>
            </div>

            <h2 class="text-3xl font-oswald text-white uppercase mb-6 border-b-4 border-neon-pink pb-2">III. Psychological Stabilization: The Strategic Reset</h2>
            
            <div class="space-y-8">
                <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <h3 class="text-2xl font-oswald text-neon-pink mb-3">1. Finalizing the FTC Narrative</h3>
                    <ul class="list-disc pl-6 space-y-3 text-zinc-300">
                        <li class="leading-relaxed">
                            <strong class="text-white">Backwards Induction Lock-In:</strong> Review the entire game strategy based on the Final Tribal Council (FTC). Have the simple, clear justification for every major planned move memorized and ready to deploy.
                        </li>
                        <li class="leading-relaxed">
                            <strong class="text-white">Embrace the Paranoia:</strong> Acknowledge that intense paranoia and psychological distress are engineered symptoms of the environment, not necessarily real threats. Develop a simple mental cue to identify and compartmentalize these feelings, ensuring they do not bleed into voting decisions.
                        </li>
                    </ul>
                </div>
                
                <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <h3 class="text-2xl font-oswald text-neon-pink mb-3">2. Systemic Boundary Setting</h3>
                    <ul class="list-disc pl-6 space-y-3 text-zinc-300">
                        <li class="leading-relaxed"><strong class="text-white">Compartmentalize Crew Activity:</strong> Reiterate the rule: treat the crew as mute, strategic signals. Do not attempt conversation. Instead, focus entirely on observing camera focus and crew movements for clues about the game (e.g., potential idol placements).</li>
                        <li class="leading-relaxed"><strong class="text-white">Boundary Against Vulnerability:</strong> Vow to avoid the Vulnerability Paradox—no matter how stressful or lonely the experience becomes, sensitive emotional confessions to tribemates will be strategically withheld to prevent misinterpretation and targeting.</li>
                    </ul>
                </div>
            </div>
        </main>
    `;
    // --- REST OF VIEWS (ABBREVIATED) ---
}
