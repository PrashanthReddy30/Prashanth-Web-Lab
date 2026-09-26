// ==========================================
// TEMPORARY DESIGN ALIGNMENT GRID OVERLAY
// Remove or comment out the script tag in index.html to disable
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const GRID_SIZE = 100; // pixels per grid square
    
    // Create the main container
    const gridOverlay = document.createElement('div');
    gridOverlay.id = 'design-grid-overlay';
    
    // Apply styling to the container
    Object.assign(gridOverlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: '9999',
        opacity: '0.3',
        backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
        backgroundImage: `
            linear-gradient(to right, #00ffcc 1px, transparent 1px),
            linear-gradient(to bottom, #00ffcc 1px, transparent 1px)
        `
    });

    // Generate horizontal ruler (top edge)
    const windowWidth = window.innerWidth;
    for (let x = GRID_SIZE; x < windowWidth; x += GRID_SIZE) {
        const marker = document.createElement('div');
        marker.innerText = x;
        Object.assign(marker.style, {
            position: 'absolute',
            left: `${x}px`,
            top: '2px',
            color: '#00ffcc',
            fontSize: '12px',
            fontFamily: 'monospace',
            transform: 'translateX(-50%)',
            textShadow: '1px 1px 2px #000'
        });
        gridOverlay.appendChild(marker);
    }

    // Generate vertical ruler (left edge)
    const windowHeight = window.innerHeight;
    for (let y = GRID_SIZE; y < windowHeight; y += GRID_SIZE) {
        const marker = document.createElement('div');
        marker.innerText = y;
        Object.assign(marker.style, {
            position: 'absolute',
            top: `${y}px`,
            left: '4px',
            color: '#00ffcc',
            fontSize: '12px',
            fontFamily: 'monospace',
            transform: 'translateY(-50%)',
            textShadow: '1px 1px 2px #000'
        });
        gridOverlay.appendChild(marker);
    }

    document.body.appendChild(gridOverlay);
    
    // Handle window resize to regenerate rulers (optional but helpful)
    window.addEventListener('resize', () => {
        // A simple reload of the page or re-run could be done here, 
        // but for a static overlay it's fine as is on load.
    });
});
