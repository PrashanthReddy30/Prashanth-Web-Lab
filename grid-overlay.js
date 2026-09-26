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
    for (let x = 10; x < windowWidth; x += 10) {
        if (x % 100 === 0) {
            const marker = document.createElement('div');
            marker.innerText = 'H' + x;
            Object.assign(marker.style, {
                position: 'absolute',
                left: `${x}px`,
                top: '12px',
                color: '#00ffcc',
                fontSize: '12px',
                fontFamily: 'monospace',
                transform: 'translateX(-50%)',
                textShadow: '1px 1px 2px #000'
            });
            gridOverlay.appendChild(marker);
            
            // Major tick
            const tick = document.createElement('div');
            Object.assign(tick.style, {
                position: 'absolute', left: `${x}px`, top: '0', width: '1px', height: '15px', backgroundColor: '#00ffcc'
            });
            gridOverlay.appendChild(tick);
        } else {
            // Minor tick
            const tick = document.createElement('div');
            Object.assign(tick.style, {
                position: 'absolute', left: `${x}px`, top: '0', width: '1px', 
                height: x % 50 === 0 ? '10px' : '5px', 
                backgroundColor: 'rgba(0, 255, 204, 0.5)'
            });
            gridOverlay.appendChild(tick);
        }
    }

    // Generate vertical ruler (left edge)
    const windowHeight = window.innerHeight;
    for (let y = 10; y < windowHeight; y += 10) {
        if (y % 100 === 0) {
            const marker = document.createElement('div');
            marker.innerText = 'V' + y;
            Object.assign(marker.style, {
                position: 'absolute',
                top: `${y}px`,
                left: '14px',
                color: '#00ffcc',
                fontSize: '12px',
                fontFamily: 'monospace',
                transform: 'translateY(-50%)',
                textShadow: '1px 1px 2px #000'
            });
            gridOverlay.appendChild(marker);
            
            // Major tick
            const tick = document.createElement('div');
            Object.assign(tick.style, {
                position: 'absolute', top: `${y}px`, left: '0', width: '15px', height: '1px', backgroundColor: '#00ffcc'
            });
            gridOverlay.appendChild(tick);
        } else {
            // Minor tick
            const tick = document.createElement('div');
            Object.assign(tick.style, {
                position: 'absolute', top: `${y}px`, left: '0', height: '1px', 
                width: y % 50 === 0 ? '10px' : '5px', 
                backgroundColor: 'rgba(0, 255, 204, 0.5)'
            });
            gridOverlay.appendChild(tick);
        }
    }

    document.body.appendChild(gridOverlay);
    
    // Handle window resize to regenerate rulers (optional but helpful)
    window.addEventListener('resize', () => {
        // A simple reload of the page or re-run could be done here, 
        // but for a static overlay it's fine as is on load.
    });
});
