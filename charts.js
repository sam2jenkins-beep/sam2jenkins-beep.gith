/* ==========================================
   CHARTS - Chart.js Initialization
   Creates charts for the Advantages page
   ========================================== */

// Utility function to wrap long labels
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

// Initialize Both Charts
export function initAdvantagesCharts() {
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
                    '#FF69B4', '#FF69B4', '#FF69B4', // Neon Pink
                    '#db2777', // Darker Pink
                    '#a855f7', '#a855f7', // Purple
                    '#7c3aed', '#7c3aed', // Darker Purple
                    '#52525b', '#52525b'  // Zinc
                ],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: tooltipConfig
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Chaos/Impact Rating', color: '#a1a1aa' },
                    grid: { color: '#27272a' },
                    ticks: { color: '#a1a1aa' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#a1a1aa' }
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
                    '#FF69B4', // Neon Pink
                    '#db2777', // Dark Pink
                    '#a855f7', // Purple
                    '#52525b'  // Zinc
                ],
                borderColor: '#000000',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { usePointStyle: true, padding: 20, color: '#a1a1aa' }
                },
                tooltip: tooltipConfig
            }
        }
    });
}
