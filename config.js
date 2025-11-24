/* ==========================================
   CONTENT CONFIGURATION
   All site content and data lives here
   ========================================== */

// 1. MAIN HERO IMAGE
export const HERO_IMAGE_URL = 'katesurvivor.jpeg';

// 2. PORTFOLIO IMAGES
export const PORTFOLIO_ITEMS = [
    { id: '1', name: 'The Strategist', season: 'Season 45', image: 'https://picsum.photos/400/600?random=1' },
    { id: '2', name: 'The Socialite', season: 'Season 32', image: 'https://picsum.photos/400/600?random=2' },
    { id: '3', name: 'The Beast', season: 'Season 28', image: 'https://picsum.photos/400/600?random=3' },
    { id: '4', name: 'The Villain', season: 'Season 20', image: 'https://picsum.photos/400/600?random=4' },
];

// 3. TIMELINE EVENTS
export const TIMELINE_EVENTS = [
    { 
        day: 'Jour 1', 
        title: 'Marooned',
        description: 'Day of first impressions. Status is set by sweat and vibes. Be useful, not bossy. Fatigue exposes fakes fast. Win the boat scramble, save the chickens, don\'t be weird.'
    },
    { 
        day: 'Jour 2', 
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

// 4. TOPICS & SUB-TOPICS
export const TOPICS = {
    'pregame': {
        title: 'Pregame Guidelines',
        subtitle: 'The game begins before you hit the sand. Preparation is the only variable you can control.',
        subTopics: [
            { 
                title: 'How Have Others Prepared', 
                description: 'Analyzing the preparation routines of past winners. From physical training regimens to puzzle practice and social engineering research.', 
                image: 'https://placehold.co/600x400/000000/FF69B4?text=History' 
            },
            { 
                title: 'Suggestions Leading Up to Departure', 
                description: 'The final countdown. Physical tapering, caloric loading, mental checklists, and last-minute skill acquisition before marooning.', 
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Departure' 
            }
        ]
    },
    'meta': {
        title: 'Meta Game',
        subtitle: 'Understanding the invisible currents that drive the modern game.',
        subTopics: [
            { title: 'Threat Management', description: 'The art of lowering your profile while maintaining agency.', image: 'https://placehold.co/600x400/000000/FF69B4?text=Threats' },
            { title: 'Voting Blocs', description: 'Why rigid alliances are dead and how to surf the chaos of voting blocs.', image: 'https://placehold.co/600x400/000000/FF69B4?text=Voting+Blocs' },
            { title: 'Jury Management', description: 'Starting the game with the end in mind.', image: 'https://placehold.co/600x400/000000/FF69B4?text=The+Jury' },
            { 
                title: 'Day 1: USA VS. QC', 
                description: 'Analyse comparative des stratégies de départ. Les différences cruciales entre les formats.', 
                image: 'https://placehold.co/600x400/000000/FF69B4?text=USA+vs+QC' 
            }
        ]
    },
    'outwit': {
        title: 'Outwit',
        subtitle: 'The Social Game. People are the most dangerous puzzle pieces.',
        subTopics: [
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
                image: 'https://placehold.co/600x400/000000/FF69B4?text=Panama' 
            },
            { title: 'COLD', description: 'Managing hunger, sleep deprivation, and elements.', image: 'https://placehold.co/600x400/000000/FF69B4?text=COLD' },
            { title: 'I\'M A CITY GIRL', description: 'Pacing yourself for the 26-day marathon.', image: 'https://placehold.co/600x400/000000/FF69B4?text=CITY+GIRL' }
        ]
    },
    'endgame': {
        title: 'End Game',
        subtitle: 'Closing the deal. The final hurdles between you and the title.',
        subTopics: [
            { title: 'The Pitch', description: 'Resume building 101. Identifying your key moves and translating them into a winning narrative.', image: 'https://placehold.co/600x400/000000/FF69B4?text=The+Pitch' },
            { title: 'Final Tribal Council', description: 'Structuring your opening statement. How to articulate your game without sounding arrogant or passive.', image: 'https://placehold.co/600x400/000000/FF69B4?text=FTC' },
            { title: 'Jury Management', description: 'Managing relationships with the people you vote out.', image: 'https://placehold.co/600x400/000000/FF69B4?text=Jury' }
        ]
    }
};
