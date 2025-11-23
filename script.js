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
    // --- OUTPLAY ---
    if (topicId === 'outplay' && cleanedTitle === 'SQ: Old School Renaissance') {
        openRenaissancePage();
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

// --- VIEW MANAGEMENT: INJECT CONTENT DYNAMICALLY ---
// This function moves all the large HTML content blocks from the script file 
// into their respective placeholder divs in the main index.html file.
function injectCustomViewContent() {
    
    document.getElementById('notebook-lm-view').innerHTML = `
        <button onclick="closeNotebookLMView()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Handbook
        </button>
        
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald"><span class="text-neon-pink">Survivor</span> NotebookLM</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">Your Private Strategy Workspace</h2>
                <p class="mt-4 max-w-2xl mx-auto text-zinc-500 text-lg">A unified space for analysis, narrative building, and note-taking powered by a connected AI research tool.</p>
            </div>
        </header>

        <main class="container mx-auto px-4 py-12">
            <div class="max-w-4xl mx-auto p-8 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl space-y-10">
                <section class="!h-auto">
                    <h3 class="text-3xl font-oswald text-white uppercase mb-6 border-b-2 border-neon-pink pb-2">Research Console</h3>
                    <p class="text-zinc-300 mb-6">
                        Access your curated research library instantly. Click the card below to open your dedicated NotebookLM space for deep, AI-assisted analysis of past seasons, player strategies, and meta-game mechanics.
                    </p>
                    
                    <a href="https://notebooklm.google.com/notebook/b89282b3-22b0-424e-9647-f2e699a3756f" target="_blank" rel="noopener noreferrer" 
                       class="group block p-6 bg-black/50 border-2 border-neon-pink rounded-xl text-center hover:bg-neon-pink hover:text-black transition-all duration-300 shadow-xl">
                        <svg class="w-10 h-10 mx-auto mb-3 text-neon-pink group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        <h4 class="text-2xl font-oswald font-black uppercase">LINK TO NOTEBOOKLM</h4>
                        <p class="text-sm uppercase tracking-widest text-zinc-400 group-hover:text-black">Opens in a new tab</p>
                    </a>
                </section>

                <section class="!h-auto">
                    <h3 class="text-3xl font-oswald text-white uppercase mb-8 border-b-2 border-neon-pink pb-2">Strategic Application Guide</h3>
                    
                    <h4 class="text-xl font-oswald text-neon-pink mb-4 border-l-4 border-zinc-700 pl-4">A. Building Your Source Library</h4>
                    <p class="text-zinc-300 mb-4">
                        The utility of your NotebookLM hinges entirely on the quality and specificity of the documents you upload.
                    </p>
                    <ul class="list-disc pl-6 space-y-2 text-zinc-300 mb-8">
                        <li><strong class="text-white">Source Material:</strong> Upload transcripts (FTC, confessionals), pre-game interviews, past season cast biographies, and strategic blog posts (like RHAP, etc.).</li>
                        <li><strong class="text-white">Focus on Intent:</strong> Name documents clearly (e.g., "S4 FTC Transcripts," "Player X Pre-Game"). The quality of your notes depends on the specificity of the sources you feed it. </li>
                    </ul>

                    <h4 class="text-xl font-oswald text-neon-pink mb-4 border-l-4 border-zinc-700 pl-4">B. Strategic Query Generation</h4>
                    <p class="text-zinc-300 mb-4">
                        Avoid vague questions. Frame queries to produce actionable, comparative data based on the source texts.
                    </p>
                    <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-8">
                        <li><strong class="text-white">Social Queries:</strong> "Which player successfully used the 'goat' strategy in Season X, and how did the jury react to their FTC pitch?"</li>
                        <li><strong class="text-white">Advantage Queries:</strong> "List all the times the 'Linked Destinies' twist was played, noting the immediate and long-term consequences for the affected tribes."</li>
                        <li><strong class="text-white">Jury Queries:</strong> "Summarize the major grievances the jury held against the losing finalist in Season Y, and how the winner countered them."</li>
                        <li><strong class="text-white">Analyze Citations:</strong> Always review the cited source material to ensure the AI's summary is accurate and contextual.</li>
                    </ul>

                    <h4 class="text-xl font-oswald text-neon-pink mb-4 border-l-4 border-zinc-700 pl-4">C. Narrative Blueprinting</h4>
                    <p class="text-zinc-300 mb-4">
                        Use the AI to test and refine your game narrative before you even start filming.
                    </p>
                    <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-8">
                        <li><strong class="text-white">Final Pitch Prep:</strong> Use NotebookLM to query your own notes/transcripts for consistency. Ask: "Based on my confessionals, what is the clear narrative of my game?"</li>
                        <li><strong class="text-white">Threat Level Calibration:</strong> Query: "What attributes consistently lead to a player being targeted pre-merge in the Québec format?" Use the generated answer to adjust your observed camp behavior. </li>
                    </ul>
                </section>

                <section class="!h-auto">
                    <h3 class="text-3xl font-oswald text-white uppercase mb-6 border-b-2 border-neon-pink pb-2">III. Local Notes & Strategy Outlines</h3>
                    <p class="text-zinc-300 mb-4">
                        Use this space for immediate thoughts, final narrative polish, and non-sharable information (like potential final alliance voting arrangements). Note: Content here is saved locally (in the browser) only.
                    </p>
                    <textarea 
                        id="strategy-notes" 
                        placeholder="Start outlining your FTC speech, tracking potential juror grudges, or perfecting your alliance structure here..."
                        class="w-full h-64 p-4 text-sm bg-zinc-950 border border-zinc-700 rounded-lg focus:ring-neon-pink focus:border-neon-pink text-white font-mono resize-none"
                        oninput="saveNotes()"
                    ></textarea>
                    <p class="text-xs text-zinc-500 mt-2">Notes saved automatically in your browser's local storage.</p>
                </section>
            </div>
        </main>
    `;
    // --- CONTENT FOR ADVANTAGES VIEW ---
    document.getElementById('advantages-view').innerHTML = `
        <button onclick="closeAdvantagesPage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Outwit
        </button>
        <!-- Content loaded from previous state -->
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald"><span class="text-neon-pink">Survivor</span> Québec</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">Encyclopedia of Advantages & Twists</h2>
                <p class="mt-4 max-w-2xl mx-auto text-zinc-500 text-lg">A strategic analysis of the mechanics that defined Seasons 1, 2, and 3.</p>
            </div>
        </header>

        <main class="container mx-auto px-4 py-12">
             <section class="mb-16 !h-auto">
                <div class="flex flex-col items-center text-center mb-10">
                    <h2 class="text-4xl header-font text-white uppercase border-b-4 border-neon-pink pb-2 inline-block">Strategic Metagame</h2>
                    <p class="mt-4 text-zinc-400 max-w-3xl">Understanding not just <em>what</em> the twists are, but <em>how</em> they break the game.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div class="bg-zinc-950 p-6 rounded-xl shadow-md border border-zinc-800">
                        <h3 class="text-2xl header-font text-neon-pink mb-2">The "Chaos Factor"</h3>
                        <p class="text-sm text-zinc-500 mb-6">Ranking twists by their potential to disrupt a standard vote (High Variance vs. Low Variance).</p>
                        <div class="chart-container">
                            <canvas id="volatilityChart"></canvas>
                        </div>
                        <div class="mt-4 bg-zinc-900 p-4 rounded-lg text-sm text-zinc-300 border border-zinc-800">
                            <strong>Insight:</strong> <em>Linked Destinies</em> and the <em>Hourglass</em> twist represent the highest game variance, often removing player agency entirely compared to standard tools like Idols.
                        </div>
                    </div>

                    <div class="bg-zinc-950 p-6 rounded-xl shadow-md border border-zinc-800">
                        <h3 class="text-2xl header-font text-white mb-2">Twist Taxonomy</h3>
                        <p class="text-sm text-zinc-500 mb-6">Categorizing mechanics by their primary strategic function.</p>
                        <div class="chart-container">
                            <canvas id="typeChart"></canvas>
                        </div>
                        <div class="mt-4 bg-zinc-900 p-4 rounded-lg text-sm text-zinc-300 border border-zinc-800">
                            <strong>Insight:</strong> Survivor Québec has heavily favored <em>Structural</em> changes (altering the game format itself) over simple <em>Defensive</em> advantages like extra idols.
                        </div>
                    </div>
                </div>
            </section>
             <section class="!h-auto">
                <div class="flex flex-col items-center text-center mb-12">
                    <h2 class="text-4xl header-font text-white uppercase border-b-4 border-neon-pink pb-2 inline-block">Advantage Database</h2>
                    <p class="mt-4 text-zinc-400">Detailed mechanics and strategic implications for every major twist.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    <!-- Advantage Cards -->
                    <div class="bg-zinc-950 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300 border border-zinc-800">
                        <div class="bg-black text-white p-4 flex justify-between items-center border-b border-zinc-800">
                            <h3 class="text-xl font-bold">Standard Idol</h3>
                            <span class="bg-neon-pink text-black text-xs font-bold px-2 py-1 rounded uppercase">S1, 2, 3</span>
                        </div>
                        <div class="p-6">
                            <div class="mb-4">
                                <h4 class="text-sm font-bold text-neon-pink uppercase tracking-wide mb-1">Mechanism</h4>
                                <p class="text-zinc-300">Nullifies all votes cast against a player at Tribal Council.</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-zinc-500 uppercase tracking-wide mb-1">Strategic Implication</h4>
                                <p class="text-zinc-400 text-sm leading-relaxed">Forces "Vote Splitting" strategies to bypass protection. Essential survival tool for minority alliances facing a pagonging.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-zinc-950 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300 border border-zinc-800">
                        <div class="bg-zinc-900 text-white p-4 flex justify-between items-center border-b border-zinc-800">
                            <h3 class="text-xl font-bold">Redemption Island</h3>
                            <span class="bg-neon-pink text-black text-xs font-bold px-2 py-1 rounded uppercase">S1</span>
                        </div>
                        <div class="p-6">
                            <div class="mb-4">
                                <h4 class="text-sm font-bold text-neon-pink uppercase tracking-wide mb-1">Mechanism</h4>
                                <p class="text-zinc-300">Voted-out players compete in duels to return to the game.</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-zinc-500 uppercase tracking-wide mb-1">Strategic Implication</h4>
                                <p class="text-zinc-400 text-sm leading-relaxed">Rewards physical resilience over social maneuvering. Allows players to manage the jury from outside the main game loop.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-zinc-950 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300 border border-zinc-800">
                        <div class="bg-zinc-900 text-white p-4 flex justify-between items-center border-b border-zinc-800">
                            <h3 class="text-xl font-bold">Exile (Edge)</h3>
                            <span class="bg-neon-pink text-black text-xs font-bold px-2 py-1 rounded uppercase">S2</span>
                        </div>
                        <div class="p-6">
                            <div class="mb-4">
                                <h4 class="text-sm font-bold text-neon-pink uppercase tracking-wide mb-1">Mechanism</h4>
                                <p class="text-zinc-300">Eliminated players wait in isolation for a single merge re-entry challenge.</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-zinc-500 uppercase tracking-wide mb-1">Strategic Implication</h4>
                                <p class="text-zinc-400 text-sm leading-relaxed">Creates a "Shadow Jury" who bond emotionally. Harder to return from than Redemption Island due to the single-challenge bottleneck.</p>
                            </div>
                        </div>
                    </div>
                    <!-- NEW CARDS START HERE -->
                    <div class="bg-zinc-950 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300 border border-zinc-800">
                        <div class="bg-black text-white p-4 flex justify-between items-center border-b border-zinc-800">
                            <h3 class="text-xl font-bold">The Store (Magasin)</h3>
                            <span class="bg-neon-pink text-black text-xs font-bold px-2 py-1 rounded uppercase">S2</span>
                        </div>
                        <div class="p-6">
                            <div class="mb-4">
                                <h4 class="text-sm font-bold text-neon-pink uppercase tracking-wide mb-1">Mechanism</h4>
                                <p class="text-zinc-300">Players spend fire tokens/currency on food or game advantages.</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-zinc-500 uppercase tracking-wide mb-1">Strategic Implication</h4>
                                <p class="text-zinc-400 text-sm leading-relaxed">Creates a "Resource Economy." Historically, purchasing food fueled challenge beasts more effectively than buying minor advantages.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-zinc-950 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300 border border-zinc-800">
                        <div class="bg-zinc-900 text-white p-4 flex justify-between items-center border-b border-zinc-800">
                            <h3 class="text-xl font-bold">Safety Without Power</h3>
                            <span class="bg-neon-pink text-black text-xs font-bold px-2 py-1 rounded uppercase">S2</span>
                        </div>
                        <div class="p-6">
                            <div class="mb-4">
                                <h4 class="text-sm font-bold text-neon-pink uppercase tracking-wide mb-1">Mechanism</h4>
                                <p class="text-zinc-300">Player leaves Tribal Council immediately; cannot vote or be voted for.</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-zinc-500 uppercase tracking-wide mb-1">Strategic Implication</h4>
                                <p class="text-zinc-400 text-sm leading-relaxed">The ultimate defensive bailout. Perfect for a player who knows they are the target but lacks an idol or numbers.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-zinc-950 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300 border border-zinc-800">
                        <div class="bg-black text-white p-4 flex justify-between items-center border-b border-zinc-800">
                            <h3 class="text-xl font-bold">Linked Destinies</h3>
                            <span class="bg-neon-pink text-black text-xs font-bold px-2 py-1 rounded uppercase">S3</span>
                        </div>
                        <div class="p-6">
                            <div class="mb-4">
                                <h4 class="text-sm font-bold text-neon-pink uppercase tracking-wide mb-1">Mechanism</h4>
                                <p class="text-zinc-300">Players paired up; pairs share one vote and suffer double elimination.</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-zinc-500 uppercase tracking-wide mb-1">Strategic Implication</h4>
                                <p class="text-zinc-400 text-sm leading-relaxed">High Variance. Forces cooperation with enemies. Can be used to snipe strong players by targeting their weaker partner.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-zinc-950 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300 border border-zinc-800">
                        <div class="bg-zinc-900 text-white p-4 flex justify-between items-center border-b border-zinc-800">
                            <h3 class="text-xl font-bold">Player Steal</h3>
                            <span class="bg-neon-pink text-black text-xs font-bold px-2 py-1 rounded uppercase">S3</span>
                        </div>
                        <div class="p-6">
                            <div class="mb-4">
                                <h4 class="text-sm font-bold text-neon-pink uppercase tracking-wide mb-1">Mechanism</h4>
                                <p class="text-zinc-300">Winning tribe takes the "voted out" player from the losing tribe.</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-zinc-500 uppercase tracking-wide mb-1">Strategic Implication</h4>
                                <p class="text-zinc-400 text-sm leading-relaxed">Weaponizes the elimination vote. Turns a victim into a defector, immediately shifting tribal power dynamics.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-zinc-950 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300 border border-zinc-800">
                        <div class="bg-black text-white p-4 flex justify-between items-center border-b border-zinc-800">
                            <h3 class="text-xl font-bold">Thrown Hourglass</h3>
                            <span class="bg-neon-pink text-black text-xs font-bold px-2 py-1 rounded uppercase">S3</span>
                        </div>
                        <div class="p-6">
                            <div class="mb-4">
                                <h4 class="text-sm font-bold text-neon-pink uppercase tracking-wide mb-1">Mechanism</h4>
                                <p class="text-zinc-300">Reverses the outcome of an immunity challenge for a target group.</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-zinc-500 uppercase tracking-wide mb-1">Strategic Implication</h4>
                                <p class="text-zinc-400 text-sm leading-relaxed">Removes "earned" safety, creating immense bitterness. A dangerous tool that often backfires via jury management.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-zinc-950 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300 border border-zinc-800">
                        <div class="bg-zinc-900 text-white p-4 flex justify-between items-center border-b border-zinc-800">
                            <h3 class="text-xl font-bold">Extra Vote</h3>
                            <span class="bg-neon-pink text-black text-xs font-bold px-2 py-1 rounded uppercase">S3</span>
                        </div>
                        <div class="p-6">
                            <div class="mb-4">
                                <h4 class="text-sm font-bold text-neon-pink uppercase tracking-wide mb-1">Mechanism</h4>
                                <p class="text-zinc-300">Allows a player to cast a second ballot at Tribal Council.</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-zinc-500 uppercase tracking-wide mb-1">Strategic Implication</h4>
                                <p class="text-zinc-400 text-sm leading-relaxed">Critical in the small tribes of Season 3 (3-tribe format) where one vote swings the majority.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-zinc-950 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300 border border-zinc-800">
                        <div class="bg-black text-white p-4 flex justify-between items-center border-b border-zinc-800">
                            <h3 class="text-xl font-bold">Tribal Raid</h3>
                            <span class="bg-neon-pink text-black text-xs font-bold px-2 py-1 rounded uppercase">S2</span>
                        </div>
                        <div class="p-6">
                            <div class="mb-4">
                                <h4 class="text-sm font-bold text-neon-pink uppercase tracking-wide mb-1">Mechanism</h4>
                                <p class="text-zinc-300">Winners loot the losers' camp (Fire, Tarps, Food).</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-zinc-500 uppercase tracking-wide mb-1">Strategic Implication</h4>
                                <p class="text-zinc-400 text-sm leading-relaxed">Psychological warfare. Demoralizes the enemy and physically weakens them, creating a snowball effect for future challenges.</p>
                            </div>
                        </div>
                    </div>
                    <!-- NEW CARDS END HERE -->
                </div>
            </section>
        </main>
    `;
    // --- CONTENT FOR PREPARATION VIEW ---
    document.getElementById('preparation-view').innerHTML = `
        <button onclick="closePreparationPage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Pregame
        </button>
        
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald"><span class="text-neon-pink">Survivor</span> Prep Playbook</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">Contestant-Specific Preparation Guide</h2>
                <p class="mt-4 max-w-2xl mx-auto text-zinc-500 text-lg">A clean and organized guide detailing specific preparation strategies from Survivor USA and Survivor Québec contestants.</p>
            </div>
        </header>
        
        <main class="container mx-auto px-4 py-12">
             <section id="andre" class="mb-16 !h-auto">
                <h2 class="text-4xl header-font text-white uppercase border-b-4 border-neon-pink pb-2 mb-10 inline-block">André (Survivor Québec 2)</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    <div class="bg-zinc-950 border border-zinc-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
                        <div class="bg-zinc-900 border-b border-zinc-800 p-4">
                            <h3 class="text-xl font-bold text-neon-pink">Physical Training</h3>
                        </div>
                        <div class="p-6">
                            <p class="text-zinc-300">Intensive CrossFit training and practiced functional strength (lifting, carrying, crawling). Deliberately slept outdoors in various weather conditions to acclimate to camp life.</p>
                        </div>
                    </div>
                    <div class="bg-zinc-950 border border-zinc-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
                        <div class="bg-zinc-900 border-b border-zinc-800 p-4">
                            <h3 class="text-xl font-bold text-neon-pink">Strategic Focus</h3>
                        </div>
                        <div class="p-6">
                            <p class="text-zinc-300">Reviewed previous season twists from US and Québec. Developed a methodical approach to searching for idols, focusing on logic rather than random luck. Practiced public speaking/jury answers.</p>
                        </div>
                    </div>
                    <div class="bg-zinc-950 border border-zinc-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
                        <div class="bg-zinc-900 border-b border-zinc-800 p-4">
                            <h3 class="text-xl font-bold text-neon-pink">Survival Skills</h3>
                        </div>
                        <div class="p-6">
                            <p class="text-zinc-300">Mastered fire-making with different friction techniques (bow drill). Studied local flora/fauna to identify edible sources specific to the filming location's climate.</p>
                        </div>
                    </div>
                </div>
            </section>

             <section id="parvati" class="mb-16 !h-auto">
                <h2 class="text-4xl header-font text-white uppercase border-b-4 border-neon-pink pb-2 mb-10 inline-block">Parvati Shallow (Legend)</h2>
                <div class="bg-zinc-950 border border-zinc-800 rounded-xl shadow-lg overflow-hidden p-8 md:p-12">
                    <div class="prose prose-invert prose-zinc max-w-none">
                        <p class="text-zinc-300 mb-6 leading-relaxed text-lg">
                            Parvati Shallow's preparation for competing on Survivor involved a combination of strategic intellectual training, meticulous attention to social archetypes, and a continuously evolving focus on functional yet character-defining clothing.
                        </p>
                        <h4 class="text-2xl font-bold text-white mb-4 mt-8 border-l-4 border-neon-pink pl-4 font-oswald">Strategic and Intellectual Preparation</h4>
                        <p class="text-zinc-300 mb-4">Parvati Shallow is noted for preparing for the social elements of the game by treating it as a psychological warfare test.</p>
                        <ul class="list-none space-y-4 text-zinc-300 mb-8">
                            <li class="pl-4 border-l-2 border-zinc-800 hover:border-neon-pink transition-colors">
                                <strong class="text-neon-pink block mb-1">Strategy Reading:</strong> 
                                As part of her rigorous preparation for the social hack elements of the game, Parvati Shallow, a legendary player, recommended reading <em class="text-neon-pink">The 48 Laws of Power</em> by Robert Greene as essential pre-game material.
                            </li>
                            <li class="pl-4 border-l-2 border-zinc-800 hover:border-neon-pink transition-colors">
                                <strong class="text-neon-pink block mb-1">Strategic Approach:</strong> 
                                She perfected the art of knowing when to abandon or betray alliances and demonstrated an ability to flip alliances or throw others under the bus without destroying her relationship with the jury. She earned a reputation for being a strategic genius and was revered for her social gameplay.
                            </li>
                            <li class="pl-4 border-l-2 border-zinc-800 hover:border-neon-pink transition-colors">
                                <strong class="text-neon-pink block mb-1">Adaptability:</strong> 
                                One of the most essential skills Parvati demonstrated was unparalleled adaptability, shifting effortlessly between alliances and adapting her social game depending on whom she was working with at any given moment. She used her charm and social savviness to outwit her opponents.
                            </li>
                        </ul>
                        <h4 class="text-2xl font-bold text-white mb-4 mt-8 border-l-4 border-neon-pink pl-4 font-oswald">Wardrobe and Character Preparation</h4>
                        <p class="text-zinc-300 mb-6 leading-relaxed">
                            Parvati's clothing was a critical part of her strategy, tied directly to the "flirty persona" she cultivated in the game. The choice of wardrobe in Survivor is highly controlled by production, which actively seeks pieces to reinforce pre-designed visual archetypes.
                        </p>
                        <p class="text-zinc-300 mb-6 leading-relaxed">
                            Parvati was specifically aware of production's role, noting that the Survivor production team approves all clothes players bring and would often direct her toward specific pieces that fit her character arc, since <em class="text-white">"They were always looking for something sexy for me"</em>. She had to maintain a balance between this expectation and her practical survival needs.
                        </p>
                        <p class="text-zinc-400 font-bold mb-4 uppercase tracking-widest text-sm">Evolution of Gear:</p>
                        <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
                            <li><strong class="text-white">First Time (Survivor: Cook Islands):</strong> She admits she "had no idea what [she] was getting into". She wore a tank top and shorts and was "freezing the entire time". She considered nearly everything a total failure, though she was glad to have a string bikini she could continually tie tighter as she rapidly lost weight.</li>
                            <li><strong class="text-white">Second Time (Micronesia: Fans vs. Favorites):</strong> After learning from her failure, she changed her approach and realized she needed long pants and a long-sleeve shirt that could serve as a dress if her pants were wet. She deliberately looked for clothes that would be quicker to dry.</li>
                            <li><strong class="text-white">Third Time (Heroes vs. Villains):</strong> She continued to iterate on her learned lessons, looking for a quick-dry, long-sleeved shirt because the one she used previously retained moisture for too long.</li>
                            <li><strong class="text-white">Later Season (Winners at War):</strong> She wore a leopard-print jumpsuit. The sources indicate she was asked by production to wear an animal print jumpsuit and had difficulty finding one that production approved.</li>
                        </ol>
                        <p class="text-zinc-300 mb-6 leading-relaxed">
                            Ultimately, Parvati aimed for clothes that were "sexy and functional," prioritizing the functional part due to the anticipated challenges of being cold, wet, and starving. Despite her efforts, she admits she generally "failed most of the time" in balancing sexiness, function, comfort, and warmth.
                        </p>
                        <div class="mt-8 pt-8 border-t border-zinc-800">
                            <blockquote class="text-lg italic text-zinc-400 border-l-4 border-neon-pink pl-6 py-2 bg-zinc-900/30">
                                "Parvati Shallow's strategy of preparing her wardrobe to fit a 'flirty archetype' while seeking maximum functionality is like a general designing a military uniform: it has to look intimidating (or charming, in her case) for psychological effect, but if it doesn't keep the soldier warm and mobile, the entire tactical mission will fail."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

             <section id="justine" class="mb-16 !h-auto">
                <h2 class="text-4xl header-font text-white uppercase border-b-4 border-neon-pink pb-2 mb-10 inline-block">Justine (Survivor Québec 3)</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    <div class="bg-zinc-950 border border-zinc-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
                        <div class="bg-zinc-900 border-b border-zinc-800 p-4">
                            <h3 class="text-xl font-bold text-neon-pink">Puzzle & Logic Training</h3>
                        </div>
                        <div class="p-6">
                            <p class="text-white font-bold mb-3">Recognized puzzles as a massive weakness in past SQ seasons and made them a core focus.</p>
                            <ul class="list-disc list-inside text-sm text-zinc-300 space-y-2">
                                <li><strong class="text-white">Puzzle Vault:</strong> Systematically identified and practiced all recurring puzzle types from US and Québec (sliding, tangrams, word puzzles).</li>
                                <li><strong class="text-white">Time Trial:</strong> Focused on speed, racing herself against pre-recorded challenge finishes to simulate high-pressure situations.</li>
                                <li><strong class="text-white">Strategic Awareness:</strong> Knew which players to recruit for puzzle help (puzzle beasts) and which players to keep away from the puzzle station.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-zinc-950 border border-zinc-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
                        <div class="bg-zinc-900 border-b border-zinc-800 p-4">
                            <h3 class="text-xl font-bold text-neon-pink">Social Hack & Relationship Mapping</h3>
                        </div>
                        <div class="p-6">
                            <p class="text-white font-bold mb-3">Prepared by focusing on active listening and strategic alliance management.</p>
                            <ul class="list-disc list-inside text-sm text-zinc-300 space-y-2">
                                <li><strong class="text-white">Active Listening:</strong> Prepared to focus more on listening and observing non-verbal cues than speaking, aiming to gather information.</li>
                                <li><strong class="text-white">The Shield Strategy:</strong> Planned to immediately find one physically strong and one socially connected person to act as "shields" in the pre-merge.</li>
                                <li><strong class="text-white">Post-Merge Flexibility:</strong> Committed to prioritizing adaptability over loyalty, knowing the Merge is where the game fundamentally changes.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-zinc-950 border border-zinc-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
                        <div class="bg-zinc-900 border-b border-zinc-800 p-4">
                            <h3 class="text-xl font-bold text-neon-pink">Physical Stamina</h3>
                        </div>
                        <div class="p-6">
                            <p class="text-white font-bold mb-3">Focused on foundational strength and balance for endurance challenges.</p>
                            <ul class="list-disc list-inside text-sm text-zinc-300 space-y-2">
                                <li><strong class="text-white">Core Strength:</strong> High-intensity core work to prepare for balancing challenges (often critical in the final immunity rounds).</li>
                                <li><strong class="text-white">Mental Toughness:</strong> Used meditation techniques to manage stress and discomfort, aiming to outlast others in endurance competitions.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    `;
    // --- CONTENT FOR META PREP VIEW ---
    document.getElementById('meta-prep-view').innerHTML = `
        <button onclick="closeMetaPrepPage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Pregame
        </button>
        
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald"><span class="text-neon-pink">Meta</span> Strategy Deep Dive</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">Advanced Strategic Principles for the Modern Game</h2>
                <p class="mt-4 max-w-2xl mx-auto text-zinc-500 text-lg">A set of competitive, high-level tactical guidelines focused on optimizing social and strategic output while managing threat levels.</p>
            </div>
        </header>
        
        <main class="container mx-auto px-4 py-12">
            <div class="max-w-4xl mx-auto p-8 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl">
                <h3 class="text-3xl font-oswald text-neon-pink uppercase mb-8 border-b-2 border-zinc-700 pb-2">I. Strategic & Intellectual Preparation</h3>
                <ol class="list-decimal list-inside space-y-6 text-zinc-300 ml-4">
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Read for Strategic Depth:</strong> Read essential pre-game material such as <em class="text-neon-pink">The 48 Laws of Power</em> by Robert Greene to prepare for the "social hack elements" and psychological warfare of the game.
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Master Adaptability:</strong> Cultivate unparalleled adaptability; the ability to shift alliances and strategic positioning effortlessly is an essential skill.
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Plan the Ending First (Backwards Induction):</strong> Use this principle to plan your entire game around the Final Tribal Council (FTC), ensuring you have a simple, clear narrative ready to justify your strategic actions to the jury.
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Own Your Strategy (FTC Rule):</strong> At FTC, avoid giving "sob stories" about how difficult it was to vote someone out. Instead, own your game and tell the jury why you voted them out (e.g., "I voted you out because I knew I couldn't beat you").
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Build a Résumé:</strong> Focus on making highly visible, aggressive "big moves" to build a compelling résumé for the jury, recognizing that merely trying to "not lose" is destined to fail in the modern meta game.
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Find a "Meat Shield":</strong> Align with a dominant or obvious threat early on. This "Meat Shield" strategy diverts strategic attention away from your own subtle maneuvers. 
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Minimize Visible Utility:</strong> Strategically embrace the “Anybody but me” philosophy by minimizing visible physical exertion in camp, allowing you to focus entirely on social maneuvering and reducing your threat target.
                    </li>
                </ol>
            </div>
            <div class="mt-12 text-center text-zinc-600 text-xs uppercase tracking-widest">
                End of Strategic Playbook
            </div>
        </main>
    `;
    // --- CONTENT FOR REALITIES TV VIEW ---
    document.getElementById('reality-tv-view').innerHTML = `
        <button onclick="closeRealityTVPage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Meta Game
        </button>
        
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald">Realities of Reality TV</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">Navigating the Invisible Crucible: Expanding Psychological & Cognitive Resilience</h2>
            </div>
        </header>
        
        <main class="container mx-auto px-4 py-12 font-roboto text-zinc-300 max-w-4xl">
            <p class="text-lg leading-relaxed mb-8 border-l-4 border-neon-pink pl-6 py-2 bg-zinc-900/50 rounded-r-lg">
                The competitive reality TV environment is an intentional stress factory, calibrated to induce mental fatigue and strategic errors. Your focus must be on preserving cognitive capital and treating all interactions, even those with production, as sources of strategic intelligence.
            </p>

            <section class="mb-12 !h-auto">
                <h3 class="text-3xl font-oswald text-white uppercase mb-6 border-b-4 border-zinc-800 pb-2"><span class="text-neon-pink">A.</span> The Deprivation Crucible: Managing Cognitive Collapse</h3>
                <p class="mb-4 leading-relaxed">
                    The game is designed to degrade your ability to think clearly by sustaining chronic duress. Prepare to function at a high strategic level despite severe psychological and physical stress. 
                </p>
                <ul class="list-disc pl-6 space-y-4 text-zinc-300">
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Anticipate the "100% On" Mentality:</strong> You must be strategically and socially "on" at all times, which is mentally exhausting. Prepare for the onset of intense paranoia and deep psychological distress. This is not a personal failure; it is a direct consequence of the environment.
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">The Calibrated Deficit:</strong> Recognize that unrelenting hunger, sleep deprivation, and physical exhaustion are specifically calibrated by production to induce strategic errors. Your primary energy management task is to conserve cognitive ability to resist this programming.
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Buffer Decision Fatigue:</strong> Under severe caloric restriction, every small decision becomes taxing. Practice reducing daily decision points now (e.g., routines, wardrobe choices) so that you can dedicate limited cognitive bandwidth entirely to social and strategic analysis.
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Practice Mental Discipline:</strong> Develop a mental mechanism (a mantra, a distraction, or a grounding technique) to briefly step out of the paranoid headspace. The ability to reset your thoughts quickly is essential for clear voting decisions and challenge focus.
                    </li>
                </ul>
            </section>

            <section class="mb-12 !h-auto">
                <h3 class="text-3xl font-oswald text-white uppercase mb-6 border-b-4 border-zinc-800 pb-2"><span class="text-neon-pink">B.</span> Mastering the Confessional as Intelligence</h3>
                <p class="mb-4 leading-relaxed">
                    The confessional is not merely a place to vent; it is a highly directed interview where you can extract valuable, hidden intelligence about the game narrative. 
                </p>
                <ul class="list-disc pl-6 space-y-4 text-zinc-300">
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Confessionals Are Guided:</strong> Recognize that confessional producers are utilizing sophisticated questioning tactics (e.g., loaded questions, hypothetical scenarios) designed to guide your thought process. They want you to articulate a compelling narrative.
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Use Questions as Intelligence:</strong> Treat the producers' questions as a form of strategic intelligence. Their focus often hints at:
                        <ul class="list-none pl-4 pt-2 text-zinc-400 text-sm italic">
                            <li>What production knows (i.e., they have footage of a secret alliance).</li>
                            <li>What other players are saying about you (i.e., you are being perceived as a threat or as lazy).</li>
                            <li>The emerging storyline (i.e., which rivalry production hopes to highlight).</li>
                        </ul>
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Control the Narrative:</strong> Use the confessional time to practice and solidify your Final Tribal Council (FTC) narrative (The "Why" and "How" of your game). If the producers steer you off-message, strategically pivot the conversation back to your winning résumé.
                    </li>
                </ul>
            </section>

            <section class="mb-12 !h-auto">
                <h3 class="text-3xl font-oswald text-white uppercase mb-6 border-b-4 border-zinc-800 pb-2"><span class="text-neon-pink">C.</span> The Vulnerability Paradox and Social Boundaries</h3>
                <p class="mb-4 leading-relaxed">
                    While human connection is vital, revealing too much personal vulnerability can backfire dramatically in a high-stakes competitive environment.
                </p>
                <ul class="list-disc pl-6 space-y-4 text-zinc-300">
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Avoid the Vulnerability Paradox:</strong> Under the extreme stress of deprivation, resist the urge to "trauma dump" or overshare deep, sensitive personal backstories with tribemates.
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Misinterpretation Risk:</strong> While this vulnerability is intended to build genuine rapport, it is often misinterpreted by tribemates and potential jurors as a manipulative tactic used solely to garner sympathy, leading to an emotional backlash and potential targeting.
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Maintain Social Boundaries:</strong> Focus on building rapport through low-stakes, high-utility social engagement (e.g., sharing anecdotes, assisting with chores) rather than deep emotional confessions.
                    </li>
                    <li class="leading-relaxed">
                        <strong class="text-white block mb-1">Keep Your Head on a Swivel:</strong> Psychological distress will degrade your ability to discern genuine human connection from strategic deception. Assume that every shared confidence is a piece of information that can and will be used against you at the next Tribal Council or the FTC.
                    </li>
                </ul>
            </section>

        </main>
    `;
    // --- CONTENT FOR VOLATILITY MATRIX VIEW ---
    document.getElementById('volatility-matrix-view').innerHTML = `
        <button onclick="closeVolatilityMatrixPage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Outwit
        </button>
        
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald">The <span class="text-neon-pink">Volatility</span> Matrix</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">Contingency Planning for SQ Twists</h2>
            </div>
        </header>
        
        <main class="container mx-auto px-4 py-12 font-roboto text-zinc-300 max-w-5xl">
            <div class="space-y-12">
                <p class="text-lg leading-relaxed border-l-4 border-neon-pink pl-6 py-2 bg-zinc-900/50 rounded-r-lg">
                    Survivor Québec loves to hand players a beautifully wrapped gift that explodes in their faces. Mandatory duos, tribal kidnappings, vote steals, forced swaps—this franchise treats stability like a piñata. Any player who clings too tightly to loyalty turns into sentimental driftwood.
                    The Volatility Matrix is your map for staying lucid in that chaos. It’s a way of treating unpredictable twists not as threats but as temporary markets where leverage, flexibility, and emotional neutrality outperform loyalty-based strategy.
                </p>

                <h3 class="text-3xl font-oswald text-white uppercase mb-6 border-b-4 border-zinc-800 pb-2">The Matrix: Four Quadrants of Québec Chaos</h3>
                
                <p class="mb-8">
                    Imagine every twist pushes you toward combinations of two axes:
                    <ul class="list-disc list-inside space-y-2 mt-4 ml-4">
                        <li><strong class="text-neon-pink">Control vs. Exposure</strong> — Are you choosing or being chosen?</li>
                        <li><strong class="text-neon-pink">Symmetry vs. Asymmetry</strong> — Does everyone get the same rulebook, or are you operating under a private handicap/advantage?</li>
                    </ul>
                </p>

                
                
                <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <h4 class="text-2xl font-oswald text-white mb-4 border-l-4 border-neon-pink pl-4">Quadrant I: High Control, Symmetric Conditions</h4>
                    <p class="mb-4 text-zinc-400">The classic “everyone’s in this together” twist—think tribe swap with equal numbers or balanced duos.</p>
                    <p class="leading-relaxed mb-4">
                        Your job here is to treat people like investments: small, low-risk deposits. Nothing long-term, nothing sentimental. Gather information. Test trust with micro-asks. Build soft loyalty that costs nothing.
                    </p>
                    <p class="font-bold text-white leading-relaxed">
                        This is the only quadrant where proactive alliance-building doesn’t mutate into long-term liability. Stay fluid but friendly.
                    </p>
                </div>

                <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <h4 class="text-2xl font-oswald text-white mb-4 border-l-4 border-neon-pink pl-4">Quadrant II: High Control, Asymmetric Advantage</h4>
                    <p class="mb-4 text-zinc-400">This is the “you found the shiny thing, or you pick the duo” zone.</p>
                    <p class="leading-relaxed mb-4">
                        The danger is emotional gravity. If you show excitement, fear, guilt, or overthinking, you give away your leverage. Keep a calm, professorly vibe. Act like the advantage isn’t a bomb—just a tool.
                    </p>
                    <p class="font-bold text-white mb-2">Play it like a poker hand:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4 text-neon-pink">
                        <li>Never reveal full information.</li>
                        <li>Offer partial truth framed as generosity.</li>
                        <li>Position yourself as a conduit, not a hoarder.</li>
                    </ul>
                    <p class="mt-4 italic text-zinc-500">People resent hoarders. They respect conduits.</p>
                </div>

                <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <h4 class="text-2xl font-oswald text-white mb-4 border-l-4 border-neon-pink pl-4">Quadrant III: Low Control, Symmetric Chaos</h4>
                    <p class="mb-4 text-zinc-400">Mandatory duos chosen for you. Random draws. Tribal swaps where someone else picks your fate.</p>
                    <p class="leading-relaxed mb-4">
                        This quadrant is all about psychological aikido. Everyone feels destabilized, so the person who radiates calm becomes the lighthouse. Don’t complain. Don’t panic. Don’t show preference.
                    </p>
                    <p class="font-bold text-white mb-2">Your social currency is simple:</p>
                    <div class="bg-black p-3 rounded text-center text-neon-pink font-bold text-lg">
                        “I can work with anyone.”
                    </div>
                    <p class="mt-4 italic text-zinc-500">Make that your brand identity. The person who’s universally flexible becomes the glue everyone reaches for.</p>
                </div>

                <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <h4 class="text-2xl font-oswald text-white mb-4 border-l-4 border-neon-pink pl-4">Quadrant IV: Low Control, Asymmetric Punishment</h4>
                    <p class="mb-4 text-zinc-400">The nightmare quadrant. You’re the one forced into a duo with someone no one trusts. You lose a vote. You get isolated. You get kidnapped.</p>
                    <p class="leading-relaxed mb-4">
                        This is where transactional utility becomes king. Your long-term alliance? Toast for now. Your job is to become:
                    </p>
                    <div class="bg-black p-3 rounded text-center text-neon-pink font-bold text-lg mb-4">
                        Useful. Immediately. To anyone. In any capacity.
                    </div>
                    <p class="font-bold text-white mb-2">Forget abstract loyalty. Focus on:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4 text-neon-pink">
                        <li>Feeding people information.</li>
                        <li>Helping them read others.</li>
                        <li>Becoming the person whose survival feels beneficial.</li>
                    </ul>
                    <p class="mt-4 italic text-zinc-500">Players keep useful tools even when they don’t like them.</p>
                </div>
                
                <h3 class="text-3xl font-oswald text-white uppercase pt-6 border-t border-zinc-800">The Québec-Specific Mindset Shift</h3>
                <p class="text-lg leading-relaxed mb-4">
                    Survivor Québec edits reward heart and connection—but the game punishes players who anchor themselves emotionally. You need a mind that functions like a Swiss Army knife: friendly, adaptable, and ruthlessly practical.
                </p>
                <blockquote class="bg-zinc-900 border-l-4 border-neon-pink p-4 rounded text-lg italic text-zinc-400">
                    <p><strong class="text-neon-pink">Loyalty</strong> is a story you tell in confessionals.</p>
                    <p><strong class="text-neon-pink">Utility</strong> is how you stay alive.</p>
                </blockquote>
                <p class="leading-relaxed pt-4">
                    If you can treat every twist as a change in terrain rather than a rupture in narrative, you’ll float while others sink. Volatility becomes oxygen rather than threat.
                    The rest of the guide can plug this matrix into specific scenarios—duos, tribe steals, forced exile—but this is your foundation. When instability becomes predictable, the player who embraces it becomes inevitable.
                </p>
            </div>
        </main>
    `;
    // --- CONTENT FOR RENAISSANCE VIEW ---
    document.getElementById('renaissance-view').innerHTML = `
        <button onclick="closeRenaissancePage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Outplay
        </button>
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald"><span class="text-neon-pink">Survivor</span> Québec</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">Field Report: The "Old School" Renaissance</h2>
                 <div class="mt-4 text-xs uppercase tracking-widest text-zinc-600">
                    Host: Patrice Bélanger | Est. 2023 | Status: Active
                </div>
            </div>
        </header>
        <main class="container mx-auto px-4 py-12 font-roboto text-zinc-300">
             <section class="mb-16 max-w-4xl mx-auto !h-auto !p-0">
                <p class="text-lg leading-relaxed border-l-4 border-neon-pink pl-6 py-2 bg-zinc-900/50">
                    While the US version has turned into a sanitized game of chess played by lawyers, <strong class="text-white">Survivor Québec</strong> has gone rogue. It’s a throwback to the franchise's grittier roots (think Borneo or Australia). The challenges are heavier, the edges are sharper, and the "Outplay" component is genuinely dangerous. It’s not just about solving a puzzle; it’s about surviving the attempt.
                </p>
            </section>
             <section class="mb-16 max-w-4xl mx-auto !h-auto !p-0">
                <div class="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div class="flex-1">
                        <h2 class="text-3xl font-oswald text-white mb-6 uppercase"><span class="text-neon-pink">01.</span> Brute Force Returns</h2>
                        <p class="mb-4">In modern US Survivor, puzzles are the "Great Equalizer" designed to stop athletes from dominating. In Québec? Not so much. The challenges here place a massive premium on raw horsepower.</p>
                        <h3 class="text-xl font-bold text-white mt-6 mb-2">Case Study: The "Brouette" (Wheelbarrow)</h3>
                        <p>In Season 2, they didn't just run a course. They swam to get sandbags, hauled them in a wheelbarrow, <em>dismantled</em> the wheelbarrow to build a turnstile, and then pushed a massive beam to rotate it. The mechanical complexity and weight dwarf anything seen in the "New Era" US seasons.</p>
                        <p>This environment breeds "Physical Dominators" like <strong class="text-white">Jean-Junior (JJ)</strong> and <strong class="text-white">Ghyslain</strong>. Ghyslain winning 12 out of 17 tribal challenges is a stat line that shouldn't exist in a balanced game—but in Québec, athleticism is king.</p>
                    </div>
                     <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl rotate-2 md:w-64 shrink-0 text-center">
                        <span class="block text-5xl font-black text-neon-pink mb-2">12/17</span>
                        <span class="text-xs uppercase tracking-widest text-zinc-500">Ghyslain's Win Rate<br>(Season 2)</span>
                    </div>
                </div>
            </section>
             <section class="mb-16 max-w-4xl mx-auto !h-auto !p-0">
                <h2 class="text-3xl font-oswald text-white mb-6 uppercase"><span class="text-neon-pink">02.</span> The "Jean-Junior" Incident</h2>
                <p>If you want to understand the difference in production standards, look at Season 1. In the US, obstacles are padded with foam. In Québec, they use solid timber.</p>
                <div class="bg-zinc-900 border-l-4 border-neon-pink p-6 my-6 rounded-r-lg">
                    <strong class="text-neon-pink block mb-2 uppercase tracking-wider">⚠️ Injury Report: Jean-Junior (S1)</strong>
                    <span class="italic text-white">During a blindfolded block challenge, JJ struck his head violently against an unpadded wooden prop. Result? His fifth lifetime concussion, a bloody lip, and severe dizziness.</span>
                </div>
                <p><strong class="text-white">The Implication:</strong> The danger is real. You can't just be a "puzzle specialist" here; you have to be physically resilient enough to survive the course. The environment rewards those who can push through pain and disorientation, adding a layer of grit that the US version has long abandoned.</p>
            </section>
             <section class="mb-16 max-w-4xl mx-auto !h-auto !p-0">
                <h2 class="text-3xl font-oswald text-white mb-6 uppercase"><span class="text-neon-pink">03.</span> Complexity: The Parity Cube</h2>
                <p>Just because they like heavy lifting doesn't mean they're dumb. Season 2 introduced a $3 \times 3 \times 3$ Cube Puzzle that was mathematically beautiful. It required fitting $2 \times 2$ blocks and $1 \times 1$ blocks into a perfect cube.</p>
                <h3 class="text-xl font-bold text-white mt-6 mb-2">The "Sudoku" Logic</h3>
                <p>Most players tried to build it intuitively. They failed. The puzzle is governed by <strong class="text-white">Parity Constraints</strong>:</p>
                <div class="bg-zinc-900 p-8 rounded-lg border border-zinc-800 my-6">
                    <div class="flex justify-between py-3 border-b border-zinc-800">
                        <span class="text-neon-pink font-bold">The Constraint:</span>
                        <span>A $3 \times 3$ layer has 9 units (Odd number).</span>
                    </div>
                    <div class="flex justify-between py-3 border-b border-zinc-800">
                        <span class="text-neon-pink font-bold">The Problem:</span>
                        <span>$2 \times 2$ blocks take up 4 units (Even number).</span>
                    </div>
                    <div class="flex justify-between py-3 border-b border-zinc-800">
                        <span class="text-neon-pink font-bold">The Math:</span>
                        <span>You can NEVER fill an odd space with even blocks.</span>
                    </div>
                    <div class="flex justify-between py-3 mt-2 pt-4 bg-zinc-950/50 px-4 -mx-4 rounded">
                        <span class="text-white font-black">THE SOLUTION:</span>
                        <span class="text-white">Every single layer must contain exactly ONE $1 \times 1$ block.</span>
                    </div>
                </div>
                <p>This means the $1 \times 1$ blocks can never touch. They must form a $3D$ diagonal line through the center of the cube. Spotting this pattern turns a 30-minute nightmare into a 30-second finish.</p>
            </section>
             <section class="mb-16 max-w-4xl mx-auto !h-auto !p-0">
                <h2 class="text-3xl font-oswald text-white mb-6 uppercase"><span class="text-neon-pink">04.</span> Cultural Heat</h2>
                <p>The francophone format changes the vibe entirely. Word scrambles are harder (accents, silent letters), and the emotional temperature runs hotter.</p>
                <div class="bg-zinc-900 border-l-4 border-neon-pink p-6 my-6 rounded-r-lg">
                    <strong class="text-neon-pink block mb-2 uppercase tracking-wider">🗣️ The "Caroline" Moment</strong>
                    <span class="italic text-white">"Tu ne l'auras pas ma cr***!"</span><br>
                    <span class="text-zinc-500 text-sm">(roughly: "You won't get it, you f***er!")</span><br><br>
                    <span class="text-zinc-300">When Caroline screamed this at an opponent in Season 1, it went viral. It highlighted that in Québec, the rivalry isn't just strategic—it's personal.</span>
                </div>
                <p><strong class="text-white">Survival Matters Again:</strong> In Season 2, the Nawa (Orange) tribe dominated so hard that the Bayani (Blue) tribe literally started falling apart, leading to a medical evac (Anabelle). In the US, you lose and get a slightly worse campsite. In Québec, you lose and you starve. Challenge performance is directly tied to basic survival.</p>
            </section>
        </main>
    `;
    // --- CONTENT FOR HYGIENE VIEW ---
    document.getElementById('hygiene-view').innerHTML = `
         <button onclick="closeHygienePage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Outlast
        </button>
        
        <div class="min-h-screen p-8 md:p-16 font-roboto text-zinc-300">
             <div class="max-w-4xl mx-auto dark-card p-8 md:p-16 rounded-xl shadow-2xl">
                 <h1 class="text-4xl font-bold text-center dark-header border-b-4 border-neon-pink pb-4 mb-8 font-oswald">HYGIENE AND TROPICAL SELF-CARE</h1>
                 
                 <div class="bg-zinc-950 border-l-4 border-neon-pink/50 p-4 mb-8 italic text-sm text-zinc-400 rounded-r-lg">
                    <h2 class="text-2xl font-oswald dark-header mb-3">Concept & Key Insights</h2>
                    <p>In a high-humidity, tropical environment, hygiene is a combat strategy against fungal infection, chronic skin irritation, and eventual evacuation. Since potable water is provided via a well, the focus shifts entirely from securing safe water to maximizing its utility for cleanliness and preservation of health and gear.</p>
                </div>

                <h3 class="text-xl font-bold text-neon-pink mt-6 mb-3 border-l-4 border-zinc-700 pl-4">Key Insight (Fungal Warfare)</h3>
                <p class="mb-4 leading-relaxed">Moisture is the single greatest threat to your mobility. Feet, groin, and underarms are ideal breeding grounds for fungus (like athlete's foot/tinea, often called "crotch rot" in the field). You must dedicate energy to drying these areas and your clothing daily. [Image of skin fungal infection diagram]</p>

                <h3 class="text-xl font-bold text-neon-pink mt-6 mb-3 border-l-4 border-zinc-700 pl-4">Key Insight (Feet are the Priority)</h3>
                <p class="mb-4 leading-relaxed">Foot care is non-negotiable. Walking on coral, sharp roots, or constantly wet sand will lead to cuts and softened skin. If an infection takes hold, it will rapidly escalate, compromising your challenge performance and potentially removing you from the game.</p>
                
                <h2 class="text-2xl font-bold text-white border-b-2 border-zinc-700 pb-2 mt-12 mb-6 font-oswald dark-header">Expanded Protocols: The Daily Maintenance Routine</h2>
                <p class="mb-4 leading-relaxed">The provided water supply means you must implement a rigorous, three-part protocol:</p>

                <div class="space-y-8">
                    <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                        <h3 class="text-2xl font-oswald text-neon-pink mb-4">1. Foot & Skin Defense Protocol</h3>
                        <ul class="list-disc pl-6 space-y-3 mb-6 text-zinc-300">
                            <li class="leading-relaxed"><strong class="text-white">Airing & Drying:</strong> Immediately upon returning to camp, take off shoes/socks. Air your feet for a minimum of 30 minutes. Prop them near the fire's edge or high up near the dry shelter center. Never wear wet shoes to bed.</li>
                            <li class="leading-relaxed"><strong class="text-white">Cleaning:</strong> Use a handful of fine, dry sand or a rough cloth to exfoliate and clean your feet, removing softened, dead skin (which feeds fungus). Use provided soap sparingly, focusing only on high-odor areas (armpits, groin).</li>
                            <li class="leading-relaxed"><strong class="text-white">The Between-Toe Check:</strong> Thoroughly dry the skin between your toes. This area is the flashpoint for fungal infection.</li>
                        </ul>
                    </div>
                    
                    <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                        <h3 class="text-2xl font-oswald text-neon-pink mb-4">2. Clothing & Gear Maintenance</h3>
                        <ul class="list-disc pl-6 space-y-3 mb-6 text-zinc-300">
                            <li class="leading-relaxed"><strong class="text-white">The Boiling Sanitize:</strong> Clothing that touches sweat-prone areas (socks, bandanas, undergarments) should be boiled briefly in a pot over the fire when possible. Boiling kills bacteria and spores that flourish in tropical dampness, helping reduce body odor and skin infections.</li>
                            <li class="leading-relaxed"><strong class="text-white">Air-Drying Strategy:</strong> Never lay wet clothes directly on the damp ground. Hang them in the sun or, ideally, near the fire's smoke. The smoke acts as a mild, natural anti-fungal agent and speeds up the drying process.</li>
                            <li class="leading-relaxed"><strong class="text-white">Critter Check:</strong> Always shake out shoes, clothing, and blankets before using them. Spiders, scorpions, and small insects seek warm, dry shelter and can cause debilitating bites.</li>
                        </ul>
                    </div>

                    <div class="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                        <h3 class="text-2xl font-oswald text-neon-pink mb-4">3. Wounds & Infection Control</h3>
                        <ul class="list-disc pl-6 space-y-3 mb-6 text-zinc-300">
                            <li class="leading-relaxed"><strong class="text-white">The Well Flush:</strong> Use the abundance of well water to immediately and rigorously flush any small cut, scrape, or insect bite. In the tropics, a pinprick can become a serious infection in 24 hours.</li>
                            <li class="leading-relaxed"><strong class="text-white">Microbial Control:</strong> Since you likely lack alcohol or antiseptic, use the strongest available cleaning agent—saltwater (if close to the ocean) or fire heat (boiling water) for sterilization purposes on small injuries.</li>
                            <li class="leading-relaxed"><strong class="text-white">The Latrine Discipline:</strong> Rigorous handwashing (even if only a high-volume water rinse) after using the designated latrine area is non-negotiable to prevent the spread of fecal contamination and illness.</li>
                        </ul>
                    </div>
                </div>
             </div>
        </div>
    `;
    // --- CONTENT FOR FTC VIEW ---
    document.getElementById('ftc-view').innerHTML = `
        <button onclick="closeFTCPage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to End Game
        </button>
        
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald">Strategies at FTC</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">The Art of the Win</h2>
            </div>
        </header>

        <main class="container mx-auto px-4 py-12 max-w-7xl font-roboto text-zinc-300">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <!-- LEFT COLUMN -->
                <div class="space-y-12">
                    <section class="text-center mb-6 !h-auto">
                           <h3 class="text-2xl font-bold text-white font-oswald uppercase border-b-4 border-neon-pink inline-block pb-2 px-4 text-center">The Two Essential Strategies Summarized</h3>
                           
                           <h4 class="text-xl font-bold text-neon-pink mb-3 text-left mt-8">1. The Rhetorical Blueprint (The Structure)</h4>
                           <p class="mb-4 text-left">This is the required three-part framework for your opening statement, ensuring you address every angle of your game:</p>
                           <ul class="space-y-4 list-none pl-4 border-l border-zinc-800 text-left">
                                <li>
                                    <strong class="text-white block mb-1">The Strategic Case ("What I Did"):</strong>
                                    Outline your entire game trajectory with Intentionality. Identify key alliances, critical votes, and idol plays to establish yourself as the active competitor.
                                </li>
                                <li>
                                    <strong class="text-white block mb-1">The Social Case ("How I Managed You"):</strong>
                                    Address the emotional reality of the game. Acknowledge betrayal, reframe negative reputations, and secure respect by demonstrating superior social intelligence.
                                </li>
                                <li>
                                    <strong class="text-white block mb-1">The Closing Case ("Why Me Now"):</strong>
                                    Isolate and highlight your Endgame Moves (post-Final 6) to prove you engineered the final result.
                                </li>
                           </ul>
                    </section>

                    <article class="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-xl !h-auto">
                        <h1 class="text-2xl md:text-4xl font-black font-oswald text-white uppercase mb-6 leading-tight">
                            The Emotional Sweep: <span class="text-neon-pink">How Adam Klein Turned Paranoia into a Perfect 10-0-0</span>
                        </h1>
                        <p class="text-lg leading-relaxed mb-6">
                            If Todd Herzog is the master of the strategic flip, <strong class="text-white">Adam Klein</strong> (<em>Survivor: Millennials vs. Gen X</em>) is the master of the emotional clean sweep. Adam's gameplay was often messy, frantic, and paranoid, yet he walked away with a unanimous 10-0-0 victory. How? He used the Rhetorical Blueprint to clean up the strategic chaos and connect with the jury's deepest sympathies.
                        </p>

                        <h4 class="text-xl font-bold text-white font-oswald uppercase border-l-4 border-neon-pink pl-4 mb-4">🌪️ The Adam Model: Intentionality Over Chaos</h4>
                        <p class="mb-4">
                            Adam didn't pretend his game was flawless. Instead, he owned his paranoia and reframed it as necessary vigilance. His strategy wasn't to deny the mess, but to justify it as a function of the pressure he felt and the chaotic environment.
                        </p>
                        <div class="bg-zinc-900 p-4 rounded mb-6 border border-zinc-800 italic text-center text-white">
                            "My chaos was a reflection of how hard I fought, not how poorly I played."
                        </div>
                        <p class="mb-6">He needed the jury to look past the Millennial flailing and see the competitor fighting for the highest stakes.</p>

                        <h4 class="text-xl font-bold text-white font-oswald uppercase border-l-4 border-neon-pink pl-4 mb-4">🧭 The Rhetorical Blueprint in Action</h4>
                        <p class="mb-4">Adam's speech was designed to validate his strategy while connecting his personal life to the game's stakes:</p>
                        <ul class="space-y-4 mb-6 list-disc pl-5">
                            <li><strong class="text-white">The Strategic Case:</strong> Adam didn't let the jury focus on his errors. He highlighted his proactive hunt for advantages and his perfect Idol play on Hannah. This demonstrated that his frantic energy was actually strategic aggression—he was playing the game the season demanded.</li>
                            <li><strong class="text-white">The Social Case:</strong> Adam secured a crucial vote by being honest about his betrayal of his closest ally, Taylor. He took ownership but explained it was the strategic necessity of the moment. Furthermore, he used his reputation for being emotional not as a flaw, but as a symptom of the immense pressure he felt, demonstrating humility and relatability.</li>
                            <li><strong class="text-white">The Closing Case:</strong> Adam secured his spot with two major endgame moves: winning the Final Immunity Challenge and expertly cutting the biggest threat, David. He showed he deserved to be there on merit. The true final move, however, was his emotional closer. He revealed his mother's battle with cancer, tying his fight for the million dollars to her fight for life. This emotional climax gave the jury a compelling, genuine reason to reward him, transcending gameplay and resulting in the clean sweep.</li>
                        </ul>

                        <blockquote class="bg-zinc-900 border-l-4 border-neon-pink p-4 rounded">
                            <p class="text-white font-bold uppercase tracking-wider mb-1 text-sm">The Takeaway</p>
                            <p class="italic text-zinc-300 text-sm">
                                If your game is chaotic, control the narrative. Use honesty and humility to disarm the jury, and give them a meaningful, human reason to reward your strategic fight. That's the Adam Klein way.
                            </p>
                        </blockquote>
                    </article>
                </div>

                <!-- RIGHT COLUMN -->
                <div class="space-y-12">
                     <section class="!h-auto">
                           <!-- FAILS CARD -->
                        <div class="bg-zinc-950 border-l-4 border-red-600 p-6 mb-8 rounded-r shadow-lg animate-[slideInRight_0.5s_ease-out]">
                            <div class="flex justify-between items-center mb-4 border-b border-zinc-800 pb-2">
                                 <h3 class="text-2xl font-bold text-red-500 font-oswald uppercase">FAILS</h3>
                                 <span class="text-xs text-zinc-500 uppercase tracking-widest">Cautionary Tales</span>
                            </div>
                              <div class="space-y-6">
                                 <!-- Amanda -->
                                 <div>
                                     <h4 class="text-white font-bold text-sm uppercase mb-1">The Apology Narrative <span class="text-zinc-500 font-normal text-xs ml-2">(Amanda Kimmel)</span></h4>
                                     <p class="text-xs text-zinc-400">Failed because she apologized for playing strategically instead of owning the moves. Made her look weak.</p>
                                 </div>
                                 <!-- Russell -->
                                 <div>
                                     <h4 class="text-white font-bold text-sm uppercase mb-1">The Narcissistic Delusion <span class="text-zinc-500 font-normal text-xs ml-2">(Russell Hantz)</span></h4>
                                     <p class="text-xs text-zinc-400">Failed because he treated jurors like pawns and offered vague compliments instead of strategic respect.</p>
                                 </div>
                                 <!-- Albert -->
                                 <div>
                                     <h4 class="text-white font-bold text-sm uppercase mb-1">The Tactical Compliment <span class="text-zinc-500 font-normal text-xs ml-2">(Albert Destrade)</span></h4>
                                     <p class="text-xs text-zinc-400">Failed by using insincere flattery on a bitter juror who explicitly demanded honesty. Lost vote instantly.</p>
                                 </div>
                             </div>
                        </div>

                           <h4 class="text-xl font-bold text-neon-pink mb-3">2. The Winner's Narrative (The Content)</h4>
                           <p class="mb-4">This is the thematic lens you apply to your story to overcome jury resentment and spin flaws into strategic assets:</p>
                           <ul class="space-y-4 list-none pl-4 border-l border-zinc-800">
                                <li>
                                    <strong class="text-white block mb-1">The Todd Model:</strong>
                                    Reframe Ruthlessness as Necessary Competence. Own the lies, but pivot immediately to the strategic benefit, asking the jury to reward effectiveness over ethical consistency.
                                </li>
                                <li>
                                    <strong class="text-white block mb-1">The Sandra Model:</strong>
                                    Reframe Physical Weakness as Superior Social Cunning. Argue that being underestimated was a deliberate social strategy, asking the jury to reward the master manipulator over the athlete.
                                </li>
                           </ul>
                    </section>

                    <article class="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-xl !h-auto">
                        <h1 class="text-2xl md:text-4xl font-black font-oswald text-white uppercase mb-6 leading-tight">
                            The FTC GOAT: <span class="text-neon-pink">How Todd Herzog Mastered the Jury</span> and Bagged the Million
                        </h1>
                        
                        <p class="text-lg leading-relaxed mb-6">
                            If you want to know how to win Survivor, you don't look at the challenge beasts—you look at the Final Tribal Council (FTC) legends. And leading the pack is <strong class="text-white">Todd Herzog</strong> from <em>Survivor: China</em>. Todd didn't just win; he gave a masterclass in reading the room, owning his ruthless game, and delivering one of the most persuasive final speeches ever.
                        </p>
                        <p class="text-lg leading-relaxed mb-8">
                            He didn't just survive to the end, he designed it. Here’s the breakdown of how the little flight attendant slayed the jury with pure charisma and strategic truth bombs.
                        </p>

                        <h4 class="text-xl font-bold text-white font-oswald uppercase border-l-4 border-neon-pink pl-4 mb-4">👑 The Todd Model: Ruthlessness is Just Competence</h4>
                        <p class="mb-6">
                            Todd knew the jury was bitter. He had lied, flipped, and generally played a cutthroat game. But instead of apologizing for being a player, he apologized for the pain it caused, and then immediately pivoted to the strategic genius of the move.
                        </p>
                        <div class="bg-zinc-900 p-4 rounded mb-6 border border-zinc-800 italic text-center text-white">
                            "I am a liar, but only because I am a better player than you."
                        </div>
                        <p class="mb-8">
                            When he faced a question about betrayal, he didn't mince words. He acknowledged the hurt feelings, made eye contact, and then explained that the very act of betraying them was a testament to his necessary, calculated strategy. He was telling the jury: <em>"You're smart enough to recognize a million-dollar move, even if it cost you the game."</em> By treating them like intelligent competitors, he earned their respect back.
                        </p>

                        <h4 class="text-xl font-bold text-white font-oswald uppercase border-l-4 border-neon-pink pl-4 mb-4">🧭 The Rhetorical Blueprint in Action</h4>
                        <p class="mb-4">Todd’s speech was perfectly structured to leave no doubt about his control:</p>
                        <ul class="list-disc pl-6 space-y-4 mb-8">
                            <li>
                                <strong class="text-white">The Strategic Case:</strong> He didn't wait for questions; he laid out his entire plan first. He explained his initial alliance, the shift at the merge, and how he controlled the numbers without ever seeming too dominant. He framed his gameplay as a flawless chain of intentional decisions.
                            </li>
                            <li>
                                <strong class="text-white">The Social Case:</strong> When Jean-Robert criticized his passive attitude around camp, Todd didn't get defensive. He calmly explained that he was managing Jean-Robert's volatility as part of his strategy. He turned a social flaw into proof of social skill. It was a surgical strike showing he understood the personal dynamics better than anyone else.
                            </li>
                            <li>
                                <strong class="text-white">The Endgame Moves:</strong> He hammered home the Final 4 Tribal Council—when he, Amanda, and Denise blindsided James (with James sitting on two unused idols!). This proved he was the one actively engineering the end game, not just riding along.
                            </li>
                        </ul>

                        <h4 class="text-xl font-bold text-white font-oswald uppercase border-l-4 border-neon-pink pl-4 mb-4">The Human Key: A Moment of Vulnerability</h4>
                        <p class="mb-8">
                            The final piece of Todd's winning formula was injecting genuine emotion. He spoke about his deep desire to win and the immense pressure he felt, even shedding a few tears. This was crucial: by being briefly vulnerable, he reminded the jury that behind the ruthless strategy was a person playing for their dreams. This human moment gave the bitter jurors the permission they needed to cast their vote for the strategic genius, and not just the manipulator.
                        </p>

                        <div class="mb-8">
                            <p class="text-sm uppercase tracking-widest text-neon-pink mb-2 font-bold">Watch the genius at work below:</p>
                            <div class="aspect-video w-full border border-zinc-800 rounded overflow-hidden">
                                <iframe class="w-full h-full" src="https://www.youtube.com/embed/5FXF23mz_4o?si=5R0bjviecM8McXuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <p class="text-xs text-zinc-500 mt-2 text-center">The gold standard for how to win the jury.</p>
                        </div>

                        <blockquote class="bg-gradient-to-r from-neon-pink/20 to-transparent border-l-4 border-neon-pink p-6 rounded">
                            <p class="text-white font-bold uppercase tracking-wider mb-2 text-sm">The Takeaway</p>
                            <p class="italic text-zinc-300 text-sm">
                                If you make it to the end, don't beg. Don't hide. Own your game. Look every single juror in the eye and prove that you played a better game than they did. That's the Todd Herzog way.
                            </p>
                        </blockquote>
                    </article>
                </div>
            </div>
        </main>
    `;
    // --- CONTENT FOR JURY VIEW ---
    document.getElementById('jury-view').innerHTML = `
        <button onclick="closeJuryPage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to End Game
        </button>
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald">General Jury Management Principles</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">The Québec Context</h2>
            </div>
        </header>
        <main class="container mx-auto px-4 py-12 max-w-4xl font-roboto text-zinc-300">
            <div class="space-y-12">
                <p class="text-lg leading-relaxed">Successfully managing the jury is less about being universally liked and more about controlling the narrative and respecting the jury's perspective. In the specific context of Survivor Québec, where social bonds and personal integrity often weigh heavily, these principles become even more crucial.</p>

                <div class="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold text-neon-pink font-oswald uppercase mb-4">1. The Principle of Continuous Jury Management (La Gestion du Jury)</h3>
                    <p class="leading-relaxed">The concept of "Jury Management" emphasizes that the game doesn't end when the votes are cast; it ends when the last juror has cast their vote for the winner. In Survivor Québec, this means every interaction, from the first alliance to the final vote, must be considered part of your defense. You must proactively shape the perception of your moves throughout the game, rather than waiting until the Final Tribal Council (FTC) to explain them.</p>
                </div>

                <div class="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold text-neon-pink font-oswald uppercase mb-4">2. The Art of the Opening Statement (L'Ouverture)</h3>
                    <p class="leading-relaxed">A successful opening statement must achieve humility without weakness. It's crucial to acknowledge physical and social shortcomings (e.g., "I may not have won every challenge...") and, most importantly in the socially sensitive Québec environment, sincerely apologize for the damage caused by necessary strategic moves. A sincere, direct apology for hurting someone's feelings is often more valuable than a detailed explanation of a tactical flip, as it validates the juror's emotional journey.</p>
                </div>

                <div class="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold text-neon-pink font-oswald uppercase mb-4">3. Owning Your Game (Posséder son Jeu)</h3>
                    <p class="leading-relaxed">The most critical principle is to own your game completely. Finalists often fail when they hesitate or struggle to deliver the essential strategic truth: "I voted you out because I knew I couldn't beat you." This honest justification demonstrates respect for the juror's strategic ability. In Survivor Québec, where <em>le veto social</em> (social veto) is a risk, owning a move shows confidence and maturity, signaling to the jury that your decisions were calculated and not driven by <em>méchanceté</em> (malice).</p>
                </div>

                <div class="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold text-neon-pink font-oswald uppercase mb-4">4. Understanding Jury Composition (La Composition du Jury)</h3>
                    <p class="leading-relaxed">The specific blend of jurors dictates the rhetorical style needed to win. You must analyze the archetypes represented on the jury (e.g., the dominant challenge beast, the betrayed loyalist, the strategic outsider). If a player like Amanda—an experienced finalist—is on the jury, they will look for strategic depth and intentionality. Knowing the composition allows you to tailor your arguments: address the physical threats with respect for their game, and address the betrayed with deep empathy for the pain you inflicted, always ensuring your narrative caters to the majority of the votes you need.</p>
                </div>
            </div>
        </main>
    `;
    // --- CONTENT FOR PANAMA VIEW ---
    document.getElementById('panama-view').innerHTML = `
        <button onclick="closePanamaPage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Outlast
        </button>
        
        <header class="bg-black text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald">Destination: Panama</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">Survivor Québec Season 4 Location Guide</h2>
                <p class="mt-4 text-neon-pink font-bold text-sm uppercase tracking-widest">Coordinates: $8.5380^\circ$ N, $80.7821^\circ$ W</p>
            </div>
        </header>

        <main class="container mx-auto px-4 py-12 font-roboto text-zinc-300 max-w-5xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Climate Section -->
                <section class="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg !h-auto !p-8">
                    <h3 class="text-3xl font-oswald text-white uppercase mb-6 border-l-4 border-neon-pink pl-4">The Climate</h3>
                    <div class="space-y-6">
                        <div>
                            <strong class="text-neon-pink block mb-1 uppercase text-sm">Temperature</strong>
                            <p>Expect relentless heat. Daytime highs average $30^\circ\text{C}$ - $32^\circ\text{C}$ ($86^\circ\text{F}$ - $90^\circ\text{F}$), but high humidity makes it feel closer to $38^\circ\text{C}$. Nighttime lows rarely drop below $24^\circ\text{C}$ ($75^\circ\text{F}$).</p>
                        </div>
                        <div>
                            <strong class="text-neon-pink block mb-1 uppercase text-sm">The Rainy Season (Invierno)</strong>
                            <p>Panama has a distinct wet season. Rainstorms are intense, sudden, and heavy. While they provide fresh water, they destroy morale and lower body temperature rapidly if shelter isn't adequate. Hypothermia is a risk even in the tropics when wet and calorie-deficient.</p>
                        </div>
                          <div>
                            <strong class="text-neon-pink block mb-1 uppercase text-sm">Daylight</strong>
                            <p>Located near the equator, Panama has roughly 12 hours of daylight year-round. Sunset is usually around 6:30 PM. Darkness falls quickly.</p>
                        </div>
                    </div>
                </section>

                <!-- Environment Section -->
                <section class="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg !h-auto !p-8">
                    <h3 class="text-3xl font-oswald text-white uppercase mb-6 border-l-4 border-neon-pink pl-4">The Elements</h3>
                    <div class="space-y-6">
                        <div>
                            <strong class="text-neon-pink block mb-1 uppercase text-sm">Water Temperature</strong>
                            <p>The ocean is warm, typically $27^\circ\text{C}$ - $29^\circ\text{C}$ ($80^\circ\text{F}$ - $84^\circ\text{F}$). While comfortable for swimming, it doesn't provide much relief from the air heat.</p>
                        </div>
                        <div>
                            <strong class="text-neon-pink block mb-1 uppercase text-sm">Terrain</strong>
                            <p>Volcanic origins mean varied terrain. Expect dense rainforests, mangroves (difficult to traverse), and sandy beaches. The jungle floor is teeming with life and potential hazards.</p>
                        </div>
                        <div class="bg-zinc-900 p-4 rounded border border-zinc-800">
                             <strong class="text-white block mb-1 uppercase text-xs">Survival Tip</strong>
                             <p class="text-sm italic">"Fire is harder to start here due to the pervasive humidity. Dead wood is often waterlogged inside. Look for standing dead wood rather than ground wood."</p>
                        </div>
                    </div>
                </section>

                <!-- Wildlife Section (Full Width) -->
                <section class="lg:col-span-2 bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg !h-auto !p-8">
                    <h3 class="text-3xl font-oswald text-white uppercase mb-6 border-l-4 border-neon-pink pl-4">Wildlife & Hazards</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <strong class="text-neon-pink block mb-2 uppercase text-sm">The Chitras (Sandflies)</strong>
                            <p>The true villain of Panama. These tiny biting midges are worse than mosquitoes. They are active at dawn and dusk. Their bites itch intensely for days and can get infected. Smoke is the only effective deterrent.</p>
                        </div>
                        <div>
                            <strong class="text-neon-pink block mb-2 uppercase text-sm">Marine Life</strong>
                            <p>Stingrays bury themselves in the shallow sand—shuffle your feet! Jellyfish are common. Sharks are present but rarely aggressive near shore. Sea urchins on rocks are a common injury risk.</p>
                        </div>
                          <div>
                            <strong class="text-neon-pink block mb-2 uppercase text-sm">Jungle Critters</strong>
                            <p>Howler monkeys will wake you up at 4 AM with terrifying screams. Sloths, iguanas, and colorful poison dart frogs (don't touch!) inhabit the forest.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    `;
    // --- CONTENT FOR CITY GIRL VIEW ---
    document.getElementById('city-girl-view').innerHTML = `
         <button onclick="closeCityGirlPage()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Outlast
        </button>
        
        <div class="min-h-screen p-8 md:p-16 font-roboto text-zinc-300">
             <div class="max-w-4xl mx-auto dark-card p-8 md:p-16 rounded-xl shadow-2xl">
                 <h1 class="text-4xl font-bold text-center dark-header border-b-4 border-neon-pink pb-4 mb-8 font-oswald">Expeditionary Field Manual: Tactical Camp Utility</h1>
                 
                 <div class="bg-zinc-950 border-l-4 border-neon-pink/50 p-4 mb-8 italic text-sm text-zinc-400 rounded-r-lg">
                    <h2 class="text-2xl font-oswald dark-header mb-3">CITY GIRL</h2>
                    <p>This module focuses on the physical and environmental adaptations required for a 42-day campaign in a hot, tropical location, prioritizing efficiency, safety, and energy conservation.</p>
                </div>

                <h2 class="text-2xl font-bold text-white border-b-2 border-zinc-700 pb-2 mt-12 mb-6 font-oswald dark-header">1. Environmental Adaptation: The Tropical Hierarchy 💧</h2>
                
                <p class="mb-4 leading-relaxed">In a hot, humid environment like Panama, the immediate threat is functional collapse due to heat and dehydration, requiring a shift in traditional survival priorities.</p>
                
                <h3 class="text-xl font-bold text-neon-pink mt-6 mb-3">A. Modified Survival Hierarchy</h3>
                <p class="mb-4 leading-relaxed">
                    Prioritize <strong class="text-white">Water (Hydration & Shade)</strong>: This must be secured above all other forms of traditional, insulated shelter.
                </p>
                <div class="bg-zinc-950 border-2 border-neon-pink/50 p-4 mb-6 text-neon-pink font-bold text-center rounded">
                    HIERARCHY: Water (Hydration & Shade) $>$ Shelter (Elevation) $>$ Fire $>$ Food.
                </div>
                <p class="mb-4 leading-relaxed">
                    The Threat: <strong class="text-white">Heat stress and dehydration</strong> are the most acute risks, making constant hydration and aggressive use of shade non-negotiable.
                </p>

                <h2 class="text-2xl font-bold text-white border-b-2 border-zinc-700 pb-2 mt-12 mb-6 font-oswald dark-header">2. Shelter Engineering for Tropical Resilience 🏗️</h2>
                <p class="mb-4 leading-relaxed">The shelter's purpose is to mitigate dampness, provide shade, and prevent ground-transfer energy loss, ensuring efficient rest.</p>
                
                <h3 class="text-xl font-bold text-neon-pink mt-6 mb-3">A. Elevation and Insulation</h3>
                <ul class="list-disc pl-6 space-y-3 mb-6 text-zinc-300">
                    <li class="leading-relaxed"><strong class="text-white">Elevation is MANDATORY:</strong> Build a sleeping platform a minimum of 6 inches off the forest floor. This foundation is critical to mitigate dampness, keep you away from pests, and reduce conductive heat loss. </li>
                    <li class="leading-relaxed"><strong class="text-white">Failure Case:</strong> Never dig below the natural ground line for a dwelling; this guarantees catastrophic flooding during rain.</li>
                    <li class="leading-relaxed"><strong class="text-white">Insulation:</strong> Combat conductive heat loss (up to $\approx 80\%$ of total heat loss) by placing a thick mattress (6 to 12 inches) of compacted, dry debris (leaves/grasses) on top of the elevated platform.</li>
                    <li class="leading-relaxed"><strong class="text-white">Steep Roof Pitch:</strong> Design the roof with a minimum $45$-degree angle to ensure rapid water runoff during heavy tropical downpours.</li>
                </ul>

                <h3 class="text-xl font-bold text-neon-pink mt-6 mb-3">B. Camp Layout (Triangulation Model)</h3>
                <p class="mb-4 leading-relaxed">
                    <strong class="text-white">Triangulate Your Camp:</strong> Arrange the three critical functional areas—Shelter/Rest, Fire/Cooking, and Water Source/Storage—in a tight, efficient triangle.
                </p>
                <p class="bg-zinc-950 border-l-4 border-neon-pink p-4 mb-6 text-sm text-zinc-400 rounded-r-lg">
                    <strong class="text-white block mb-1">Goal:</strong> This layout minimizes the travel time and energy expended on routine tasks, reinforcing the principle of energy conservation. 
                </p>
                
                <h2 class="text-2xl font-bold text-white border-b-2 border-zinc-700 pb-2 mt-12 mb-6 font-oswald dark-header">3. Fire-Starting Utility and Maintenance 🔥</h2>
                <p class="mb-4 leading-relaxed">The ability to produce and maintain fire consistently is a life-critical technical skill that secures immediate utility without projecting excessive physical dominance.</p>
                
                <h3 class="text-xl font-bold text-neon-pink mt-6 mb-3">A. Fire Mastery Protocols</h3>
                <ul class="list-disc pl-6 space-y-3 mb-6 text-zinc-300">
                    <li class="leading-relaxed"><strong class="text-white">Tinder Preparation (The Powder Rule):</strong> Initial tinder material must be broken down until it achieves a "cotton ball-consistency" or powder-like fluffiness. This ensures it can reliably catch low heat (like a coal or a spark).</li>
                    <li class="leading-relaxed"><strong class="text-white">Coal Transfer Protocol:</strong> Master the gentle, slow transfer of the glowing coal into the tinder. Use controlled blowing (avoiding premature aggression) to slowly transform the ember into a sustainable flame.</li>
                    <li class="leading-relaxed"><strong class="text-white">Staging Materials:</strong> Upon arrival, aggressively gather a massive, tiered supply of dry wood and logs. This transitions the fire process from high-visibility effort (gathering) to low-visibility maintenance (feeding the existing fire).</li>
                </ul>

                <h2 class="text-2xl font-bold text-white border-b-2 border-zinc-700 pb-2 mt-12 mb-6 font-oswald dark-header">4. Risk Mitigation and Hygiene Protocol ⚕️</h2>
                <p class="mb-4 leading-relaxed">The majority of medical issues that threaten a player's longevity are preventable trauma and infections.</p>

                <h3 class="text-xl font-bold text-neon-pink mt-6 mb-3">A. Water and Infection Control</h3>
                <ul class="list-disc pl-6 space-y-3 mb-6 text-zinc-300">
                    <li class="leading-relaxed"><strong class="text-white">Water Purification:</strong> All ground-sourced water must be treated. It must reach a <strong class="text-neon-pink">FULL ROLLING BOIL for ONE MINUTE</strong> to inactivate all waterborne pathogens.</li>
                    <li class="leading-relaxed"><strong class="text-white">Safest Procurement:</strong> Rainwater harvesting (collecting water via a clean tarp) is the safest, lowest-effort source.</li>
                    <li class="leading-relaxed"><strong class="text-white">Infection Control:</strong> Meticulous hand hygiene is mandatory, especially before food preparation, to prevent gastrointestinal and respiratory illnesses. [Image of basic hand hygiene guidelines]</li>
                </ul>
                
                <h3 class="text-xl font-bold text-neon-pink mt-6 mb-3">B. Physical Safety and Wardrobe</h3>
                <ul class="list-disc pl-6 space-y-3 mb-6 text-zinc-300">
                    <li class="leading-relaxed"><strong class="text-white">Ergonomic Lifting:</strong> Prevent musculoskeletal trauma (a leading reason for escalated care) by adhering strictly to proper lifting form: lift with the legs, keep items close to the body, and maintain a straight back.</li>
                    <li class="leading-relaxed"><strong class="text-white">Night Movement Safety:</strong> To prevent catastrophic, game-ending injuries, clear the immediate camp surroundings and use conservative speed after sunset.</li>
                    <li class="leading-relaxed"><strong class="text-white">Wardrobe:</strong> Choose quick-dry, long-sleeved shirts and long pants to mitigate sun exposure, cold, and dampness.</li>
                </ul>

             </div>
        </div>
    `;
    // --- CONTENT FOR DAY 1 VIEW ---
    document.getElementById('day1-view').innerHTML = `
        <button onclick="closeDay1Page()" class="fixed top-4 left-4 z-50 bg-zinc-900 text-zinc-300 px-4 py-2 rounded shadow-lg uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-black transition-colors border border-zinc-700 hover:border-neon-pink">
            &larr; Back to Meta Game
        </button>
        
        <header class="bg-zinc-950 text-white py-12 shadow-lg border-b-8 border-neon-pink">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl uppercase tracking-wider mb-4 font-oswald"><span class="text-neon-pink">Stratégie</span> Survivor Québec</h1>
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-zinc-400 font-oswald">Analyse des Fondamentaux et Recommandations pour le Jour 1</h2>
            </div>
        </header>
        
        <main class="container mx-auto px-4 py-12 font-roboto text-zinc-300 max-w-5xl">
             <!-- Section I -->
            <section class="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg mb-12 !h-auto">
                <h2 class="text-3xl font-oswald text-white uppercase mb-6 border-l-4 border-neon-pink pl-4">I. Mécaniques du Jour 1 : USA vs. Québec</h2>
                <p class="mb-6 leading-relaxed">Contrairement à la version moderne américaine, <em>Survivor Québec (SQ)</em> adhère à une approche plus "old school" dans sa structure de départ, déplaçant l'accent de la navigation de twists vers la gestion des ressources et les dynamiques sociales classiques.</p>
                
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-zinc-900 text-white">
                                <th class="p-4 border border-zinc-800">Aspect</th>
                                <th class="p-4 border border-zinc-800">Survivor USA (Moderne)</th>
                                <th class="p-4 border border-zinc-800 text-neon-pink">Survivor Québec (SQ)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="p-4 border border-zinc-800 font-bold text-white">Objectif du "Marooning"</td>
                                <td class="p-4 border border-zinc-800">Gagner une Récompense/Immunité à twists (Flint, Pot).</td>
                                <td class="p-4 border border-zinc-800">Scramble pour les ressources physiques, axé sur l'utilité visible.</td>
                            </tr>
                            <tr>
                                <td class="p-4 border border-zinc-800 font-bold text-white">Idoles/Avantages</td>
                                <td class="p-4 border border-zinc-800">Forte probabilité de recherche immédiate.</td>
                                <td class="p-4 border border-zinc-800"><strong class="text-white">Absence notable</strong>. L'accent est mis sur les fondamentaux sociaux.</td>
                            </tr>
                            <tr>
                                <td class="p-4 border border-zinc-800 font-bold text-white">Taille des Tribus</td>
                                <td class="p-4 border border-zinc-800">Typiquement 6 à 9 joueurs.</td>
                                <td class="p-4 border border-zinc-800">Tribus plus grandes (10 joueurs). Urgence de former une alliance majoritaire accrue.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

             <!-- Section II -->
            <section class="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg mb-12 !h-auto">
                <h2 class="text-3xl font-oswald text-white uppercase mb-6 border-l-4 border-neon-pink pl-4">II. Contraintes de Production</h2>
                
                <div class="mb-8">
                    <h3 class="text-xl font-bold text-neon-pink mb-2">Caméra et "Règle du Mur"</h3>
                    <p class="mb-2">La production influence directement la vie du camp :</p>
                    <ul class="list-disc pl-6 space-y-2 text-zinc-400">
                        <li><strong class="text-white">Variables Stratégiques Externes:</strong> L'équipe de tournage devient un signal stratégique.</li>
                        <li><strong class="text-white">La Règle de Non-Clôture:</strong> Interdiction des murs fermés. Élimine la vie privée, accélérant le stress émotionnel.</li>
                    </ul>
                </div>

                <div class="bg-zinc-900 p-6 rounded border border-zinc-800">
                    <strong class="text-neon-pink block mb-2 uppercase tracking-wider text-sm">Le Rôle de la Production</strong>
                    <p>Les producteurs dirigent les confessionnaux avec des questions précises ("Qui contrôle ton alliance?"). Un joueur astucieux utilise ces questions comme <strong class="text-white">intelligence sociale</strong> pour confirmer ce que ses coéquipiers disent de lui.</p>
                </div>
            </section>

            <!-- Section III -->
            <section class="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg mb-12 !h-auto">
                <h2 class="text-3xl font-oswald text-white uppercase mb-6 border-l-4 border-neon-pink pl-4">III. Priorités de Survie</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-4">Hiérarchie d'Utilité</h3>
                        <ul class="list-none space-y-4">
                            <li class="pl-4 border-l-2 border-neon-pink">
                                <strong class="text-neon-pink block">Feu (Fire)</strong>
                                La démonstration de compétence la plus essentielle. Accumule un capital social positif immédiat.
                            </li>
                            <li class="pl-4 border-l-2 border-neon-pink">
                                <strong class="text-neon-pink block">Alliance Urgence</strong>
                                Former une alliance de 4-5 joueurs immédiatement pour atténuer le risque du premier vote.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-4">Pièges Sociaux</h3>
                         <ul class="list-none space-y-4">
                            <li class="pl-4 border-l-2 border-zinc-700">
                                <strong class="text-white block">Ciblage Accéléré</strong>
                                L'affirmation de soi et les ordres sont codifiés comme négatifs. L'impatience crée une cible.
                            </li>
                            <li class="pl-4 border-l-2 border-zinc-700">
                                <strong class="text-white block">Le Paradoxe de la Vulnérabilité</strong>
                                Le "trauma dumping" excessif le Jour 1 est souvent perçu comme manipulateur.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Section IV -->
            <section class="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg !h-auto">
                <h2 class="text-3xl font-oswald text-white uppercase mb-6 border-l-4 border-neon-pink pl-4">IV. Recommandations Stratégiques (SQ)</h2>
                <div class="space-y-4">
                    <div class="flex items-start">
                        <span class="text-neon-pink font-black text-xl mr-4">01</span>
                        <p><strong class="text-white">Leadership Contrôlé :</strong> Diriger collaborativement par la compétence pratique, pas par l'autorité.</p>
                    </div>
                    <div class="flex items-start">
                        <span class="text-neon-pink font-black text-xl mr-4">02</span>
                        <p><strong class="text-white">Authenticité Élevée :</strong> Prioriser la connexion véritable sur les manœuvres stratégiques trop complexes.</p>
                    </div>
                    <div class="flex items-start">
                        <span class="text-neon-pink font-black text-xl mr-4">03</span>
                        <p><strong class="text-white">Utilité Physique :</strong> Contribuer visiblement au scramble de ressources est un bouclier anti-élimination.</p>
                    </div>
                </div>
            </section>

        </main>
    `;
}

// --- CUSTOM PAGE LOGIC ---
let chartsInitialized = false;

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
