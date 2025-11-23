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
                title: 'Suggestions Leading Up to Departure', // TARGETS THIS SUB-TOPIC
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
    
    // NEW ROUTING FOR SUGGESTIONS
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

// New function for Swimming View
function openSwimmingPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('swimming-view').style.display = 'block';
    document.getElementById('swimming-view').scrollTop = 0;
}

function closeSwimmingPage() {
    document.getElementById('swimming-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

// Other existing page functions (abbreviated for brevity here, full versions remain in the file)

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
// ... [rest of the page functions]

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
