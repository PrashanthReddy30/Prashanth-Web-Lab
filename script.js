/* ==========================================================================
   PRASHANTH WEB LAB - SCRIPT & DATA
   ========================================================================== */

// --- Centralized Data --- //

const skillsData = [
    { id: 'html', name: 'HTML', icon: 'fab fa-html5', colorClass: 'html-color' },
    { id: 'css', name: 'CSS', icon: 'fab fa-css3-alt', colorClass: 'css-color' },
    { id: 'js', name: 'JavaScript', icon: 'fab fa-js', colorClass: 'js-color' },
    { id: 'node', name: 'Node.js', icon: 'fab fa-node-js', colorClass: 'node-color' },
    { id: 'firebase', name: 'Firebase', icon: 'fas fa-fire', colorClass: 'firebase-color' },
    { id: 'git', name: 'Git', icon: 'fab fa-git-alt', colorClass: 'git-color' },
    { id: 'github', name: 'GitHub', icon: 'fab fa-github', colorClass: 'text-main' },
    { id: 'netlify', name: 'Netlify', icon: 'fas fa-cloud', colorClass: 'netlify-color' },
    { id: 'uiux', name: 'UI/UX Design', icon: 'fas fa-pen-nib', colorClass: 'ui-color' },
    { id: 'responsive', name: 'Responsive Layouts', icon: 'fas fa-desktop', colorClass: 'responsive-color' },
    { id: 'ai', name: 'AI-Assisted Dev', icon: 'fas fa-robot', colorClass: 'cyan' }
];

const projectsData = [
    {
        id: 'hospital',
        title: 'Hospital Website',
        category: 'websites',
        type: 'Healthcare & Medical',
        description: 'Healthcare and medical web application providing seamless patient information and department layouts.',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        liveUrl: 'https://prashanth-hospital.netlify.app/',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        features: ['Appointment Booking UI', 'Department Layouts', 'Clean Card Elevation'],
        caseStudy: {
            problem: 'The client needed a modern, accessible healthcare portal for patients to easily find department information and book appointments.',
            solution: 'Developed a fast, responsive website with clear visual hierarchy, utilizing modal previews and intuitive navigation.'
        }
    },
    {
        id: 'hrms',
        title: 'HRMS Portal',
        category: 'business',
        type: 'Enterprise Solution',
        description: 'Comprehensive HR management system interface for enterprise employee tracking.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        liveUrl: 'public/HRMS_Portal_Professional_12_Slides.pdf#page=1&view=FitH&toolbar=0&navpanes=0',
        technologies: ['UI/UX', 'Web Development'],
        features: ['Employee Dashboards', 'Attendance Tracking UI', 'Enterprise Layout'],
        caseStudy: {
            problem: 'Managing employee data and attendance required a streamlined, centralized interface.',
            solution: 'Designed a comprehensive portal layout with clean data tables, analytics dashboards, and simple user flows.'
        }
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce Website',
        category: 'ecommerce',
        type: 'Shopping & Retail',
        description: 'Modern shopping platform with advanced product filtering and cart management interfaces.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        liveUrl: 'public/E_Commerce_Website_Professional_12_Slides.pdf#page=1&view=FitH&toolbar=0&navpanes=0',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        features: ['Product Filtering', 'Shopping Cart UI', 'Checkout Flow'],
        caseStudy: {
            problem: 'The client needed a highly visual, easy-to-navigate online store to increase conversion rates.',
            solution: 'Created a responsive grid layout with dynamic product cards, hover zooms, and a streamlined checkout UI.'
        }
    },
    {
        id: 'business',
        title: 'Business Website',
        category: 'business',
        type: 'Corporate & Business',
        description: 'Professional corporate presence with service showcases and lead generation forms.',
        image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        liveUrl: 'public/Corporate_Business_Website_Professional_12_Slides.pdf#page=1&view=FitH&toolbar=0&navpanes=0',
        technologies: ['Responsive Layouts', 'UI/UX'],
        features: ['Service Showcases', 'Contact Forms', 'Corporate Identity'],
        caseStudy: {
            problem: 'A corporate entity needed a modern facelift to establish trust and generate online leads.',
            solution: 'Delivered a premium, fast-loading business site with clear calls-to-action and professional typography.'
        }
    },
    {
        id: 'carrentals',
        title: 'SL Self Drive Car Rentals',
        category: 'business',
        type: 'Automotive & Transport',
        description: 'Full-stack car rental booking platform with intuitive user flows and vehicle listings.',
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        liveUrl: 'https://slcarrentals.in/',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        features: ['Rental Selection', 'Booking Confirmation', 'Filter Toggles'],
        caseStudy: {
            problem: 'Users struggled to filter and book cars efficiently on mobile devices.',
            solution: 'Implemented a mobile-first booking flow with dynamic filters and smooth modal transitions.'
        }
    },
    {
        id: 'mprshopping',
        title: 'MPR Shopping Mall',
        category: 'ecommerce',
        type: 'E-Commerce',
        description: 'E-commerce shopping application designed with product showcases and category navigation.',
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        liveUrl: 'https://mpr-shopping-mall.netlify.app/',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        features: ['Category Navigation', 'Product Showcases', 'Add-to-cart Flow'],
        caseStudy: {
            problem: 'Needed a scalable front-end architecture for a large retail mall inventory.',
            solution: 'Designed a highly performant grid system with shadow transitions and lazy-loaded product imagery.'
        }
    },
    {
        id: 'aiporfolio',
        title: 'Prashanth AI Portfolio',
        category: 'ai',
        type: 'Personal Portfolio',
        description: 'Experimental personal showcase featuring modern UI/UX design and AI workflow integration.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        liveUrl: 'https://prashanth-reddy-2026.netlify.app/',
        technologies: ['HTML', 'CSS', 'JavaScript', 'AI Workflows'],
        features: ['Glassmorphism', 'Dynamic Modals', 'Fluid Backgrounds'],
        caseStudy: {
            problem: 'Needed a professional space to demonstrate AI-assisted development capabilities.',
            solution: 'Built a sleek, dark-themed portfolio highlighting rapid development speed and pixel-perfect execution.'
        }
    },
    {
        id: 'demoportfolio',
        title: 'Demo Portfolio Live',
        category: 'websites',
        type: 'Experimental Layout',
        description: 'Experimental performance layout showcasing advanced styling and visual components.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        liveUrl: 'https://demo-portfolio-live-2026.netlify.app/',
        technologies: ['CSS Animations', 'UI/UX'],
        features: ['Keyframe Animations', 'Gradient Shifts', 'High Performance'],
        caseStudy: {
            problem: 'Exploring the limits of CSS performance without heavy JavaScript libraries.',
            solution: 'Created a highly optimized, purely CSS-animated layout achieving 60fps scrolling and interactions.'
        }
    }
];

// --- Initialization --- //
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    renderSkills();
    renderProjects('all');
    initFilters();
    initModals();
    initNavigation();
    initScrollAnimations();
    initHeroParallax();
    
    // Set copyright year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

function initHeroParallax() {
    const heroImageParallax = document.querySelector('.hero-image-parallax');
    if (!heroImageParallax) return;

    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 90;
        const y = (window.innerHeight - e.pageY * 2) / 90;
        
        // Apply parallax via the wrapper so it doesn't conflict with CSS animation on the image itself
        heroImageParallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

// --- Render Functions --- //
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    container.innerHTML = '';
    skillsData.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card glass-card fade-in-scroll';
        card.setAttribute('data-tilt', '');
        card.setAttribute('data-tilt-max', '15');
        card.setAttribute('data-tilt-speed', '400');
        
        // If colorClass is just a name like 'cyan', use style, else use the class
        const iconClass = skill.colorClass.includes('-color') ? skill.colorClass : '';
        const iconStyle = !skill.colorClass.includes('-color') && skill.colorClass !== 'text-main' ? `color: var(--${skill.colorClass});` : '';
        
        card.innerHTML = `
            <i class="${skill.icon} ${iconClass}" style="${iconStyle}"></i>
            <span>${skill.name}</span>
        `;
        container.appendChild(card);
    });
    
    // Re-initialize VanillaTilt for new elements
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(container.querySelectorAll('.skill-card'));
    }
}

function renderProjects(filterCategory) {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredProjects = filterCategory === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filterCategory);
        
    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card glass-card fade-in-scroll is-visible'; // Force visible since they might render in view
        card.setAttribute('data-id', project.id);
        
        card.innerHTML = `
            <div class="mockup-header">
                <span class="dot close"></span>
                <span class="dot min"></span>
                <span class="dot max"></span>
            </div>
            <div class="project-img-wrapper">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-img-overlay">
                    <button class="btn btn-primary btn-glow" onclick="openCaseStudy('${project.id}', event)">EXPLORE PROJECT</button>
                    <a href="${project.liveUrl}" target="_blank" class="btn btn-outline" style="margin-top:10px;">LIVE DEMO</a>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.type}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            e.target.classList.add('active');
            
            const category = e.target.getAttribute('data-filter');
            renderProjects(category);
        });
    });
}

// --- Modals & Case Studies --- //
function openCaseStudy(projectId, event) {
    if (event) event.stopPropagation();
    
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('case-study-modal');
    const body = document.getElementById('case-study-body');
    
    if (!modal || !body) return;
    
    // Generate Tags HTML
    const techTags = project.technologies.map(t => `<span>${t}</span>`).join('');
    const featureTags = project.features.map(f => `<span>${f}</span>`).join('');
    
    body.innerHTML = `
        <div class="case-study-hero" style="background-image: url('${project.image}');">
            <div class="case-study-overlay">
                <h2>${project.title}</h2>
                <p style="color: var(--cyan); font-weight: 500; letter-spacing: 1px; text-transform: uppercase;">${project.type}</p>
            </div>
        </div>
        <div class="case-study-body-content">
            <div class="cs-section">
                <h3>OVERVIEW</h3>
                <p style="color: var(--text-muted);">${project.description}</p>
            </div>
            
            <div class="case-study-grid">
                <div>
                    <div class="cs-section">
                        <h3>PROBLEM</h3>
                        <p style="color: var(--text-muted);">${project.caseStudy.problem}</p>
                    </div>
                    <div class="cs-section">
                        <h3>SOLUTION</h3>
                        <p style="color: var(--text-muted);">${project.caseStudy.solution}</p>
                    </div>
                </div>
                
                <div>
                    <div class="cs-section">
                        <h3>TECHNOLOGIES</h3>
                        <div class="cs-tags">${techTags}</div>
                    </div>
                    <div class="cs-section">
                        <h3>KEY FEATURES</h3>
                        <div class="cs-tags">${featureTags}</div>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--glass-border);">
                <button class="btn btn-primary btn-glow" onclick="openLivePreview('${project.liveUrl}', event)">
                    <i class="fas fa-external-link-alt"></i> VIEW LIVE WEBSITE
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

window.openLivePreview = function(url, event) {
    if (event) event.stopPropagation();
    
    // Close case study modal if open
    const caseModal = document.getElementById('case-study-modal');
    if (caseModal) caseModal.classList.remove('active');
    
    const previewModal = document.getElementById('preview-modal');
    const previewIframe = document.getElementById('preview-iframe');
    
    if (previewModal && previewIframe) {
        // If it's a PDF, sometimes iframes handle it poorly on mobile, but we will try
        previewIframe.src = url;
        previewModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function initModals() {
    // Universal Close Button Logic
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.premium-modal');
            closeModal(modal);
        });
    });
    
    // Close on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', function() {
            const modal = this.closest('.premium-modal');
            closeModal(modal);
        });
    });
    
    // Esc key close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.premium-modal.active').forEach(modal => {
                closeModal(modal);
            });
        }
    });
    
    // Resume Modal Triggers
    document.querySelectorAll('.resume-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.getElementById('resume-modal');
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    
    // If it's the preview modal, clear the iframe to stop audio/video
    if (modal.id === 'preview-modal') {
        const iframe = document.getElementById('preview-iframe');
        if (iframe) {
            setTimeout(() => iframe.src = '', 400); // Wait for transition
        }
    }
    
    // Only restore body scrolling if no other modals are active
    setTimeout(() => {
        const activeModals = document.querySelectorAll('.premium-modal.active');
        if (activeModals.length === 0) {
            document.body.style.overflow = '';
        }
    }, 400);
}

// --- Navigation & Scroll Logic --- //
function initNavigation() {
    const nav = document.querySelector('.glass-nav');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    
    // Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile Menu Toggle
    if (mobileBtn && mainNav) {
        mobileBtn.addEventListener('click', () => {
            mainNav.classList.toggle('open');
        });
        
        // Close menu on link click
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('open');
            });
        });
    }
    
    // Smooth Scroll with dynamic padding offset
    document.querySelectorAll('a[href^="#"]:not(.resume-btn)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            
            if (target) {
                e.preventDefault();
                
                const targetStyle = window.getComputedStyle(target);
                const paddingTop = parseFloat(targetStyle.paddingTop) || 0;
                
                // Offset calculation to snap target exactly to V70 (70px from top)
                const offset = 70;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: 'smooth'
                });
                
                // Active state
                document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => fadeObserver.observe(el));
    
    // Re-observe when dynamically rendering projects
    window.observeNewElements = function() {
        document.querySelectorAll('.fade-in-scroll:not(.is-visible)').forEach(el => {
            fadeObserver.observe(el);
        });
    };
}

// --- Three.js Background Animation --- //
function initThreeJS() {
    if (typeof THREE === 'undefined') return;
    
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;
    
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance optimization
    
    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = window.innerWidth < 768 ? 400 : 900; // Less on mobile
    
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
        // Spread particles out
        posArray[i] = (Math.random() - 0.5) * 100;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.15,
        color: 0x00f5d4,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Abstract Geometry (Wireframe Sphere)
    const geometry = new THREE.IcosahedronGeometry(12, 1);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x4361ee, 
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(15, 0, -10); // Offset to the right
    scene.add(sphere);
    
    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });
    
    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Animation Loop
    const clock = new THREE.Clock();
    
    const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        
        // Rotate sphere
        sphere.rotation.y = 0.1 * elapsedTime;
        sphere.rotation.x = 0.15 * elapsedTime;
        
        // Rotate particles slowly
        particlesMesh.rotation.y = -0.05 * elapsedTime;
        
        // Smooth mouse follow
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;
        
        particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
        particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
        
        // Subtle vertical float
        sphere.position.y = Math.sin(elapsedTime * 0.5) * 2;
        
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
    };
    
    tick();
}
