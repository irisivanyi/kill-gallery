document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('bouncing-logo');
    const container = document.querySelector('.container');
    
    // Initial position and velocity
    let x = 0;
    let y = 0;
    let dx = 2; // X velocity
    let dy = 2; // Y velocity
    
    // Get dimensions
    const logoWidth = logo.clientWidth;
    const logoHeight = logo.clientHeight;
    
    function animate() {
        // Get container dimensions (in case of window resize)
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        
        // Update position
        x += dx;
        y += dy;
        
        // Check for collision with edges
        if (x + logoWidth > containerWidth || x < 0) {
            dx = -dx; // Reverse X direction
            x = x < 0 ? 0 : containerWidth - logoWidth; // Prevent sticking to edges
        }
        
        if (y + logoHeight > containerHeight || y < 0) {
            dy = -dy; // Reverse Y direction
            y = y < 0 ? 0 : containerHeight - logoHeight; // Prevent sticking to edges
        }
        
        // Apply new position
        logo.style.transform = `translate(${x}px, ${y}px)`;
        
        // Continue animation
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
}); 