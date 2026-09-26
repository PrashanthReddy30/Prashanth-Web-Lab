// Add any interactive features here
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]:not(.resume-btn)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active state
                document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
                if (this.classList.contains('active') !== undefined) {
                    this.classList.add('active');
                }
            }
        });
    });
    // Live Preview Modal Logic
    const previewButtons = document.querySelectorAll('.preview-btn');
    const previewModal = document.getElementById('preview-modal');
    const previewIframe = document.getElementById('preview-iframe');
    const previewClose = document.getElementById('preview-close');

    if (previewModal && previewIframe && previewClose) {
        // Open modal
        previewButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                const url = this.getAttribute('href');
                if (url && url !== '#') {
                    e.preventDefault();
                    previewIframe.src = url;
                    previewModal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                }
            });
        });

        // Close modal function
        const closeModal = () => {
            previewModal.classList.remove('active');
            document.body.style.overflow = '';
            // Clear src after transition to stop video/audio playing in background
            setTimeout(() => {
                previewIframe.src = '';
            }, 300);
        };

        // Close on X button click
        previewClose.addEventListener('click', closeModal);

        // Close on clicking outside the modal content
        previewModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && previewModal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // Resume Modal Logic
    const resumeButtons = document.querySelectorAll('.resume-btn');
    const resumeModal = document.getElementById('resume-modal');
    const resumeClose = document.getElementById('resume-close');

    if (resumeModal && resumeClose) {
        // Open modal
        resumeButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                resumeModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        });

        // Close modal function
        const closeResumeModal = () => {
            resumeModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        // Close on X button click
        resumeClose.addEventListener('click', closeResumeModal);

        // Close on clicking outside the modal content wrapper
        resumeModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeResumeModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
                closeResumeModal();
            }
        });
    }

    // Scroll Fade Animation Observer
    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                fadeObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // Number Counter Animation for Workflow Banner
    const workflowBanner = document.querySelector('.workflow-banner');
    const daysCounter = document.getElementById('days-counter');
    const errorsCounter = document.getElementById('errors-counter');

    if (workflowBanner && daysCounter && errorsCounter) {
        let animated = false;
        const animateCounters = () => {
            const duration = 2000;
            const startTimestamp = performance.now();
            const daysStart = 30;
            const daysEnd = 10;
            const errorsStart = 50;
            const errorsEnd = 0;

            const step = (timestamp) => {
                // easeOut function for smoother deceleration
                const rawProgress = Math.min((timestamp - startTimestamp) / duration, 1);
                const progress = 1 - Math.pow(1 - rawProgress, 3);
                
                daysCounter.textContent = Math.floor(daysStart - ((daysStart - daysEnd) * progress));
                errorsCounter.textContent = Math.floor(errorsStart - ((errorsStart - errorsEnd) * progress));

                if (rawProgress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    // Ensure final values are precise
                    daysCounter.textContent = daysEnd;
                    errorsCounter.textContent = errorsEnd;
                }
            };
            
            // Set initial state immediately
            daysCounter.textContent = daysStart;
            errorsCounter.textContent = errorsStart;
            
            window.requestAnimationFrame(step);
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Trigger when 50% of the banner is visible
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    animateCounters();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counterObserver.observe(workflowBanner);
    }

    // Skill Modal Logic
    const skillCards = document.querySelectorAll('.skill-card');
    const skillModal = document.getElementById('skill-modal');
    const skillClose = document.getElementById('skill-close');
    
    if (skillModal && skillClose) {
        skillCards.forEach(card => {
            card.addEventListener('click', function() {
                const skillKey = this.getAttribute('data-skill');
                if (skillKey) {
                    let targetId = 'skill-' + skillKey;
                    if (skillKey === 'responsive') targetId = 'skill-uiux'; // Combines UI/UX and Responsive
                    
                    // Hide all blocks first
                    const allBlocks = skillModal.querySelectorAll('.skill-detail-block');
                    allBlocks.forEach(block => {
                        block.style.display = 'none';
                    });
                    
                    // Show the target block
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.style.display = 'block';
                    }
                    
                    skillModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        const closeSkillModal = () => {
            skillModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        skillClose.addEventListener('click', closeSkillModal);

        skillModal.addEventListener('click', function(e) {
            if (e.target.classList.contains('preview-modal') || e.target.classList.contains('resume-modal-wrapper')) {
                closeSkillModal();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && skillModal.classList.contains('active')) {
                closeSkillModal();
            }
        });
    }
});
