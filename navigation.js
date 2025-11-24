/* ==========================================
   NAVIGATION - View Switching Logic
   Controls which overlay is visible
   ========================================== */

import { TOPICS } from './config.js';
import { renderTopicView } from './renderer.js';

// Open Main Topic View
export function openTopic(id) {
    renderTopicView(id);
    
    // Toggle Views
    document.getElementById('topic-view').style.display = 'block';
    document.getElementById('main-view').style.display = 'none';
    document.getElementById('topic-view').scrollTop = 0;
}

// Close Topic View
export function closeTopic() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('main-view').style.display = 'block';
}

// Handle Subtopic Clicks (Routes to specialized pages)
export function handleSubTopicClick(topicId, index) {
    const topic = TOPICS[topicId];
    if (!topic) return;
    const sub = topic.subTopics[index];
    
    // Route to specialized pages based on subtopic
    if (topicId === 'outwit' && sub.title === 'Advantages & Twists') {
        openAdvantagesPage();
    }
    else if (topicId === 'pregame' && sub.title === 'How Have Others Prepared') {
        openPreparationPage();
    }
    else if (topicId === 'outplay' && sub.title === 'SQ: Old School Renaissance') {
        openRenaissancePage();
    }
    else if (topicId === 'outlast' && sub.title === 'Destination: Panama') {
        openPanamaPage();
    }
    else if (topicId === 'outlast' && sub.title === "I'M A CITY GIRL") {
        openCityGirlPage();
    }
    else if (topicId === 'endgame' && sub.title === 'Final Tribal Council') {
        openFTCPage();
    }
    else if (topicId === 'endgame' && sub.title === 'Jury Management') {
        openJuryPage();
    }
    else if (topicId === 'meta' && sub.title === 'Day 1: USA VS. QC') {
        openDay1Page();
    }
}

// ========== SPECIALIZED PAGE FUNCTIONS ==========

export function openAdvantagesPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('advantages-view').style.display = 'block';
    
    // Initialize charts if needed
    if (!window.chartsInitialized) {
        import('./charts.js').then(module => {
            module.initAdvantagesCharts();
            window.chartsInitialized = true;
        });
    }
}

export function closeAdvantagesPage() {
    document.getElementById('advantages-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

export function openPreparationPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('preparation-view').style.display = 'block';
}

export function closePreparationPage() {
    document.getElementById('preparation-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

export function openRenaissancePage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('renaissance-view').style.display = 'block';
}

export function closeRenaissancePage() {
    document.getElementById('renaissance-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

export function openFTCPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('ftc-view').style.display = 'block';
}

export function closeFTCPage() {
    document.getElementById('ftc-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

export function openJuryPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('jury-view').style.display = 'block';
}

export function closeJuryPage() {
    document.getElementById('jury-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

export function openPanamaPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('panama-view').style.display = 'block';
}

export function closePanamaPage() {
    document.getElementById('panama-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

export function openDay1Page() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('day1-view').style.display = 'block';
}

export function closeDay1Page() {
    document.getElementById('day1-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

export function openCityGirlPage() {
    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('city-girl-view').style.display = 'block';
}

export function closeCityGirlPage() {
    document.getElementById('city-girl-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
}

// Make functions globally accessible for onclick handlers
window.openTopic = openTopic;
window.closeTopic = closeTopic;
window.handleSubTopicClick = handleSubTopicClick;
window.closeAdvantagesPage = closeAdvantagesPage;
window.closePreparationPage = closePreparationPage;
window.closeRenaissancePage = closeRenaissancePage;
window.closeFTCPage = closeFTCPage;
window.closeJuryPage = closeJuryPage;
window.closePanamaPage = closePanamaPage;
window.closeDay1Page = closeDay1Page;
window.closeCityGirlPage = closeCityGirlPage;
