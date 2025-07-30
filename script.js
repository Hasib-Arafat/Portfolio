// Award Slideshow Functionality
function initAwardSlideshows() {
    console.log('Initializing award slideshows');
    
    // Handle NASA Award slideshow
    const nasaCard = document.querySelector('.nasa-award');
    console.log('NASA card found:', !!nasaCard);
    if (nasaCard) {
        const nasaSlideshow = nasaCard.querySelector('.award-slideshow');
        console.log('NASA slideshow found:', !!nasaSlideshow);
        if (nasaSlideshow) {
            initHoverSlideshow(nasaCard, nasaSlideshow);
        }
    }
    
    // Handle Science Week Award slideshow
    const scienceWeekCard = document.querySelector('.science-week-award');
    console.log('Science Week card found:', !!scienceWeekCard);
    if (scienceWeekCard) {
        const scienceWeekSlideshow = scienceWeekCard.querySelector('.award-slideshow');
        console.log('Science Week slideshow found:', !!scienceWeekSlideshow);
        if (scienceWeekSlideshow) {
            initHoverSlideshow(scienceWeekCard, scienceWeekSlideshow);
        }
    }
    
    // Handle Robotics Award slideshow
    const roboticsCard = document.querySelector('.robotics-award');
    console.log('Robotics card found:', !!roboticsCard);
    if (roboticsCard) {
        const roboticsSlideshow = roboticsCard.querySelector('.award-slideshow');
        console.log('Robotics slideshow found:', !!roboticsSlideshow);
        if (roboticsSlideshow) {
            initHoverSlideshow(roboticsCard, roboticsSlideshow);
        }
    }
    
    // Handle Leadership Robotics slideshow
    const leadershipCard = document.querySelector('.robotics-leadership');
    console.log('Leadership card found:', !!leadershipCard);
    if (leadershipCard) {
        const leadershipSlideshow = leadershipCard.querySelector('.leadership-slideshow');
        console.log('Leadership slideshow found:', !!leadershipSlideshow);
        if (leadershipSlideshow) {
            initLeadershipSlideshow(leadershipCard, leadershipSlideshow);
        }
    }
    
    // Handle BASIS Executive slideshow
    const basisCard = document.querySelector('.basis-executive');
    console.log('BASIS Executive card found:', !!basisCard);
    if (basisCard) {
        const basisSlideshow = basisCard.querySelector('.leadership-slideshow');
        console.log('BASIS Executive slideshow found:', !!basisSlideshow);
        if (basisSlideshow) {
            initLeadershipSlideshow(basisCard, basisSlideshow);
        }
    }
    
    // Handle TEDx Team slideshow
    const tedxCard = document.querySelector('.tedx-team');
    console.log('TEDx Team card found:', !!tedxCard);
    if (tedxCard) {
        const tedxSlideshow = tedxCard.querySelector('.leadership-slideshow');
        console.log('TEDx Team slideshow found:', !!tedxSlideshow);
        if (tedxSlideshow) {
            initLeadershipSlideshow(tedxCard, tedxSlideshow);
        }
    }
}

function initHoverSlideshow(cardElement, slideshowContainer) {
    const photos = slideshowContainer.querySelectorAll('.award-photo');
    
    console.log('Initializing slideshow for:', cardElement.className);
    console.log('Found photos:', photos.length);
    
    if (photos.length < 2) {
        console.log('Not enough photos for slideshow');
        return; // Need at least 2 photos for slideshow
    }
    
    let currentIndex = 0;
    let slideshowInterval = null;
    
    function showNextPhoto() {
        console.log('Switching from photo', currentIndex, 'to', (currentIndex + 1) % photos.length);
        
        // Remove active class from current photo
        photos[currentIndex].classList.remove('active');
        
        // Move to next photo (loop back to 0 if at end)
        currentIndex = (currentIndex + 1) % photos.length;
        
        // Add active class to new photo
        photos[currentIndex].classList.add('active');
    }
    
    function startSlideshow() {
        if (slideshowInterval) return; // Already running
        console.log('Starting slideshow');
        // Start the slideshow - change every 2 seconds for continuous loop
        slideshowInterval = setInterval(showNextPhoto, 2000);
    }
    
    function stopSlideshow() {
        console.log('Stopping slideshow');
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        }
        // Reset to first image
        photos.forEach(photo => photo.classList.remove('active'));
        photos[0].classList.add('active');
        currentIndex = 0;
    }
    
    // Add hover event listeners
    cardElement.addEventListener('mouseenter', startSlideshow);
    cardElement.addEventListener('mouseleave', stopSlideshow);
}

function initLeadershipSlideshow(cardElement, slideshowContainer) {
    const photos = slideshowContainer.querySelectorAll('.leadership-photo');
    
    console.log('Initializing leadership slideshow for:', cardElement.className);
    console.log('Found photos:', photos.length);
    
    if (photos.length < 1) {
        console.log('No photos for slideshow');
        return;
    }
    
    let currentIndex = 0;
    let slideshowInterval = null;
    
    // Show specific photo
    function showPhoto(index) {
        photos.forEach(photo => photo.classList.remove('active'));
        photos[index].classList.add('active');
    }
    
    function showNextPhoto() {
        // Remove active class from current photo
        photos[currentIndex].classList.remove('active');
        
        // Move to next photo (loop back to 0 if at end)
        currentIndex = (currentIndex + 1) % photos.length;
        
        // Add active class to new photo
        photos[currentIndex].classList.add('active');
    }
    
    function startSlideshow() {
        if (photos.length < 2) return; // Need at least 2 photos for slideshow
        if (slideshowInterval) return; // Already running
        console.log('Starting leadership slideshow');
        // Start the slideshow - change every 2 seconds for continuous loop
        slideshowInterval = setInterval(showNextPhoto, 2000);
    }
    
    function stopSlideshow() {
        console.log('Stopping leadership slideshow');
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        }
        // Reset to first image
        photos.forEach(photo => photo.classList.remove('active'));
        photos[0].classList.add('active');
        currentIndex = 0;
    }
    
    // Add hover event listeners
    cardElement.addEventListener('mouseenter', startSlideshow);
    cardElement.addEventListener('mouseleave', stopSlideshow);
}

// Theme Toggle Functionality

// Floating Skills Animation and Interactivity
function initFloatingSkills() {
    const skillIcons = document.querySelectorAll('.skill-icon');
    
    // Add click interaction to skill icons
    skillIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Remove any existing tooltips first
            removeAllTooltips();
            
            // Create a ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.background = 'var(--accent-color)';
            ripple.style.borderRadius = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.top = '50%';
            ripple.style.left = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.opacity = '0.6';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            icon.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
            
            // Create and show tooltip
            const skillName = icon.getAttribute('data-skill');
            createSkillTooltip(icon, skillName);
            
            // Add temporary glow effect
            icon.style.boxShadow = '0 0 20px var(--primary-color)';
            setTimeout(() => {
                icon.style.boxShadow = 'var(--shadow-medium)';
            }, 1000);
        });
        
        // Add hover effects that don't interfere with animations
        icon.addEventListener('mouseenter', () => {
            if (!icon.classList.contains('active')) {
                icon.style.filter = 'drop-shadow(0 0 15px rgba(9, 255, 117, 0.8)) brightness(1.2)';
                icon.style.boxShadow = '0 0 25px rgba(9, 255, 117, 0.8)';
                icon.style.borderColor = 'var(--accent-color)';
                icon.style.zIndex = '200';
            }
        });
        
        icon.addEventListener('mouseleave', () => {
            if (!icon.classList.contains('active')) {
                icon.style.filter = 'drop-shadow(0 0 8px rgba(9, 255, 117, 0.4))';
                icon.style.boxShadow = 'var(--shadow-medium), 0 0 15px rgba(9, 255, 117, 0.3)';
                icon.style.borderColor = 'var(--primary-color)';
                icon.style.zIndex = '150';
            }
        });
    });
    
    // Let CSS animations handle all positioning - don't interfere with JavaScript
}

// Create skill tooltip
function createSkillTooltip(icon, skillName) {
    const tooltip = document.createElement('div');
    tooltip.className = 'skill-tooltip';
    tooltip.textContent = skillName;
    
    // Position tooltip relative to the icon
    const iconRect = icon.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    tooltip.style.cssText = `
        position: absolute;
        background: var(--primary-color);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.9rem;
        font-weight: 500;
        white-space: nowrap;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.3s ease;
        pointer-events: none;
        top: ${iconRect.bottom + scrollTop + 10}px;
        left: ${iconRect.left + iconRect.width / 2}px;
        transform: translateX(-50%) translateY(10px);
    `;
    
    // Add arrow
    const arrow = document.createElement('div');
    arrow.style.cssText = `
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid var(--primary-color);
    `;
    tooltip.appendChild(arrow);
    
    document.body.appendChild(tooltip);
    
    // Animate in
    requestAnimationFrame(() => {
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateX(-50%) translateY(0)';
    });
    
    // Mark icon as active
    icon.classList.add('active');
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        removeSkillTooltip(tooltip, icon);
    }, 3000);
}

// Remove skill tooltip
function removeSkillTooltip(tooltip, icon) {
    if (tooltip && tooltip.parentNode) {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateX(-50%) translateY(10px)';
        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.remove();
            }
        }, 300);
    }
    if (icon) {
        icon.classList.remove('active');
    }
}

// Remove all tooltips
function removeAllTooltips() {
    const tooltips = document.querySelectorAll('.skill-tooltip');
    const activeIcons = document.querySelectorAll('.skill-icon.active');
    
    tooltips.forEach(tooltip => {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateX(-50%) translateY(10px)';
        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.remove();
            }
        }, 300);
    });
    
    activeIcons.forEach(icon => {
        icon.classList.remove('active');
    });
}

// Close tooltips when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.skill-icon')) {
        removeAllTooltips();
    }
});

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            width: 20px;
            height: 20px;
            opacity: 0.6;
        }
        100% {
            width: 80px;
            height: 80px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

function initThemeToggle() {
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeBtn.addEventListener('click', () => {
        const theme = body.getAttribute('data-theme');
        
        if (theme === 'dark') {
            body.removeAttribute('data-theme');
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Navigation Functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Add active class to current nav item
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            if (document.body.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(26, 32, 44, 0.98)';
            }
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.body.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(26, 32, 44, 0.95)';
            }
        }
    });
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Project Modal Functionality
const projectData = {
    1: {
        title: "Ranger BOT v2",
        description: "Designed for emergency and search-and-rescue operations, Ranger BOT 2.0 is equipped with sensor modules for obstacle detection and a wireless camera for remote surveillance. The robot can be controlled manually using a joystick or remote controller and can adapt to hazardous terrain. Ideal for academic robotics and disaster tech.",
        technologies: ["SBC(Raspberry Pi 4)", "FC(Pixhawk 2.4.8)", "Sensors", "Camera Module", "C++", "Python","Water pump","DC Motors","Tank Mechanism Wheels"],
        features: [
            "Obstacle detection using Camera Module, openCV and ultrasonic sensors",
            "Wireless live video streaming",
            "Remote-controlled mobility",
            "Rugged chassis and tank mechanismed wheels for tough environments",
            "Battery-powered for field use",
            "Water pump system for firefighting rescue",
            "lightweight and portable design for easy transport",
            "4km range remote control",
            "Supports various sensor modules for extended functionality"
        ],
        github: "https://github.com/Hasib-Arafat",
        demo: "https://github.com/Hasib-Arafat",
        image: "Ranger BOT V2.jpeg"
    },
    2: {
        title: "AI-Based Parking Detection",
        description: "This computer vision-based project detects parking occupancy using OpenCV. A top-view camera continuously monitors a parking area, identifies vehicles, and determines free spots. Ideal for smart city and IoT projects, this system can be extended to generate live data, integrate sensors, and display availability in real-time.",
        technologies: ["Python", "OpenCV", "NumPy", "Orange Pi" ,"Raspberry Pi"],
        features: [
            "Video-based detection of cars in parking spots",
            "Real-time analysis and updates",
            "Visual indication of available/occupied slots",
            "Compatible with Orange Pi for live deployment",
            "Lightweight code for easy integration"
        ],
        github: "https://github.com/Hasib-Arafat/Car-Parking-Detection",
        demo: "https://github.com/Hasib-Arafat/Car-Parking-Detection",
        image: "Car Detection.jpeg"
    },
    3: {
        title: "Autonomous Drone Navigation System",
        description: "This drone system integrates the power of the Raspberry Pi 4 and Pixhawk 2.4.8 flight controller to perform real-time aerial surveillance and mapping. Designed for search-and-rescue or monitoring applications, the drone captures live video, processes sensor data, and can follow basic autonomous navigation paths. The Raspberry Pi handles onboard data processing while the Pixhawk manages flight control. This system can be used for smart farming, disaster zones, or industrial inspections.",
        technologies: ["Raspberry Pi 4", "Ultrasonic ", "Barometer ", "IMU ", "Scikit-USB/CSI camera for video input","Python", "C++ (for flight control & data processing)", "AT10 Radio Transmitter-Receiver", "Pixhawk 2.4.8 Flight Controller", "GPS Module"],
        features: [
            "Dual control: Manual via transmitter and semi-autonomous modes",
            "Real-time video feed using camera module",
            "Sensor integration for environment-aware navigation",
            "Data processing on SBC (Raspberry Pi 4)",
            "Flight stabilization using Pixhawk and GPS module"
        ],
        github: "https://github.com/Hasib-Arafat",
        demo: "https://github.com/Hasib-Arafat",
        image: "drone.jpg"
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('project-modal-content');
    const project = projectData[projectId];
    
    if (project) {
        modalContent.innerHTML = `
            <div class="project-modal-header">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 350px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
                <h2 style="color: var(--primary-color); margin-bottom: 1rem;">${project.title}</h2>
                <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">${project.description}</p>
            </div>
            
            <div class="project-modal-body">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Technologies Used</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Key Features</h3>
                <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <div class="project-modal-links" style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="${project.github}" target="_blank" class="btn btn-primary" style="text-decoration: none;">
                        <i class="fab fa-github"></i> View Code
                    </a>
                    <a href="${project.demo}" target="_blank" class="btn btn-secondary" style="text-decoration: none;">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Training Modal Functionality
const trainingData = {
    1: {
        title: "Advanced Machine Learning",
        provider: "Google AI",
        date: "December 2024",
        duration: "6 weeks",
        description: "Comprehensive course covering advanced machine learning concepts including deep learning, neural networks, and AI model optimization.",
        topics: [
            "Deep Neural Networks",
            "Convolutional Neural Networks (CNNs)",
            "Recurrent Neural Networks (RNNs)",
            "Transfer Learning",
            "Model Optimization Techniques",
            "AI Ethics and Bias Mitigation"
        ],
        certificate: "Certificate of Completion",
        skills: ["TensorFlow", "Keras", "PyTorch", "Model Deployment"]
    },
    2: {
        title: "Cloud Architecture Fundamentals",
        provider: "Amazon Web Services",
        date: "October 2024",
        duration: "4 weeks",
        description: "Comprehensive training on cloud computing principles, AWS services, and scalable architecture design patterns.",
        topics: [
            "Cloud Computing Fundamentals",
            "AWS Core Services (EC2, S3, RDS)",
            "Virtual Private Cloud (VPC)",
            "Load Balancing and Auto Scaling",
            "Security Best Practices",
            "Cost Optimization Strategies"
        ],
        certificate: "AWS Cloud Practitioner Preparation",
        skills: ["AWS", "Cloud Architecture", "DevOps", "Security"]
    },
    3: {
        title: "Cybersecurity Essentials",
        provider: "Cisco Networking Academy",
        date: "August 2024",
        duration: "8 weeks",
        description: "Foundational cybersecurity course covering security principles, threat analysis, and protective measures.",
        topics: [
            "Network Security Fundamentals",
            "Threat Intelligence and Analysis",
            "Cryptography and Encryption",
            "Incident Response Planning",
            "Ethical Hacking Basics",
            "Security Policy Development"
        ],
        certificate: "Cybersecurity Essentials Certificate",
        skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance"]
    },
    4: {
        title: "Full-Stack Web Development",
        provider: "freeCodeCamp",
        date: "June 2024",
        duration: "12 weeks",
        description: "Comprehensive full-stack development course covering both frontend and backend technologies with hands-on projects.",
        topics: [
            "HTML5, CSS3, and Responsive Design",
            "JavaScript ES6+ and DOM Manipulation",
            "React.js and Component Architecture",
            "Node.js and Express.js",
            "Database Design with MongoDB",
            "RESTful API Development"
        ],
        certificate: "Full-Stack Web Development Certificate",
        skills: ["React", "Node.js", "MongoDB", "RESTful APIs"]
    }
};

function openTrainingModal(trainingId) {
    const modal = document.getElementById('training-modal');
    const modalContent = document.getElementById('training-modal-content');
    const training = trainingData[trainingId];
    
    if (training) {
        modalContent.innerHTML = `
            <div class="training-modal-header">
                <h2 style="color: var(--primary-color); margin-bottom: 0.5rem;">${training.title}</h2>
                <p style="color: var(--secondary-color); font-weight: 600; margin-bottom: 0.5rem;">${training.provider}</p>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">${training.date} • ${training.duration}</p>
                <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">${training.description}</p>
            </div>
            
            <div class="training-modal-body">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Topics Covered</h3>
                <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">
                    ${training.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
                
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Skills Gained</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                    ${training.skills.map(skill => `<span class="tech-tag">${skill}</span>`).join('')}
                </div>
                
                <div style="background: var(--surface-color); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                    <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">Certificate</h4>
                    <p style="color: var(--text-secondary);">${training.certificate}</p>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close Modal Function
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const projectModal = document.getElementById('project-modal');
    const trainingModal = document.getElementById('training-modal');
    
    if (e.target === projectModal) {
        closeModal('project-modal');
    }
    if (e.target === trainingModal) {
        closeModal('training-modal');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal('project-modal');
        closeModal('training-modal');
    }
});

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Show success message (in a real application, you would send this to a server)
        showNotification('Thank you for your message! I will get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--accent-color)' : 'var(--primary-color)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-large);
        z-index: 9999;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.research-item, .award-card, .project-card, .leadership-card, .training-card, .education-card, .reference-card');
    animatedElements.forEach(el => observer.observe(el));
}

// Typing Animation for Hero Section - DISABLED FOR ROTATING TEXT
function initTypingAnimation() {
    // DISABLED - This was interfering with rotating text
    // const subtitle = document.querySelector('.hero-subtitle');
    // const text = "Software Engineering Undergraduate";
    // let index = 0;
    
    // subtitle.textContent = '';
    
    // function typeWriter() {
    //     if (index < text.length) {
    //         subtitle.textContent += text.charAt(index);
    //         index++;
    //         setTimeout(typeWriter, 100);
    //     }
    // }
    
    // // Start typing animation after a delay
    // setTimeout(typeWriter, 1000);
}

// Skill Progress Animation
function initSkillAnimation() {
    const skillBars = document.querySelectorAll('.proficiency-fill');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
                
                skillObserver.unobserve(bar);
            }
        });
    });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
}

// Collapsible Sections (Optional Enhancement)
function initCollapsibleSections() {
    const collapsibleTriggers = document.querySelectorAll('[data-collapsible]');
    
    collapsibleTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const target = document.querySelector(trigger.dataset.collapsible);
            const isExpanded = target.style.maxHeight !== '0px' && target.style.maxHeight !== '';
            
            if (isExpanded) {
                target.style.maxHeight = '0px';
                target.style.opacity = '0';
                trigger.classList.remove('expanded');
            } else {
                target.style.maxHeight = target.scrollHeight + 'px';
                target.style.opacity = '1';
                trigger.classList.add('expanded');
            }
        });
    });
}

// Parallax Effect for Hero Section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Starting initialization...');
    
    // ONLY ROTATING TEXT - DISABLE EVERYTHING ELSE FOR TESTING
    const texts = ["Software Engineering Undergraduate", "Robotics and IoT Enthusiast", "ROS Learner", "Techentrepreneur"];
    let index = 0;
    const rotatingElement = document.getElementById('rotating-text');
    
    console.log('🔍 Element search result:', rotatingElement);
    console.log('🔍 Element content:', rotatingElement ? rotatingElement.textContent : 'NULL');
    
    if (rotatingElement) {
        console.log('✅ Starting rotating text with typing animation');
        
        function typeWriter(text, callback) {
            rotatingElement.textContent = '';
            let charIndex = 0;
            
            function addChar() {
                if (charIndex < text.length) {
                    rotatingElement.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(addChar, 180); // Slower typing: 180ms delay between characters
                } else if (callback) {
                    setTimeout(callback, 2500); // Longer pause: 2.5 seconds after typing completes
                }
            }
            
            addChar();
        }
        
        function rotateText() {
            index = (index + 1) % texts.length;
            console.log('🔄 Typing text:', texts[index]);
            typeWriter(texts[index]);
        }
        
        // Slower timing: 8 seconds allows for slower typing + longer pause
        setInterval(rotateText, 8000);
        
    } else {
        console.log('❌ Rotating text element not found');
    }
    
    // Initialize other functionality
    initAwardSlideshows();
    initFloatingSkills();
    initThemeToggle();
    initNavigation();
    initScrollToTop();
    initSmoothScrolling();
    initContactForm();
    initScrollAnimations();
    initTypingAnimation(); // Now disabled - was conflicting
    initSkillAnimation();
    initCollapsibleSections();
    // initFaceDetectionTooltipEnhanced(); // Removed - tooltip hover functionality disabled
    
    console.log('Portfolio initialized successfully!');
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Preloader (Optional)
function initPreloader() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    preloader.innerHTML = `
        <div style="
            width: 50px;
            height: 50px;
            border: 3px solid var(--border-color);
            border-top: 3px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    
    document.body.appendChild(preloader);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(preloader);
            }, 500);
        }, 1000);
    });
}

// Initialize preloader
// initPreloader();

// Face Detection Tooltip Functionality
function initFaceDetectionTooltip() {
    const faceDetectionMark = document.querySelector('.face-detection-mark');
    const detectionBox = document.querySelector('.detection-box');
    const detectionTooltip = document.querySelector('.detection-tooltip');
    
    if (!faceDetectionMark || !detectionBox || !detectionTooltip) {
        console.log('Face detection elements not found');
        return;
    }
    
    let isTyping = false;
    
    function typeTextEffect(element, text, speed = 50) {
        return new Promise((resolve) => {
            element.textContent = '';
            let i = 0;
            const typeInterval = setInterval(() => {
                element.textContent += text.charAt(i);
                i++;
                if (i >= text.length) {
                    clearInterval(typeInterval);
                    resolve();
                }
            }, speed);
        });
    }
    
    async function showTooltipWithAnimation() {
        if (isTyping) return;
        isTyping = true;
        
        console.log('🤖 Showing enhanced tooltip with animations');
        
        // Show tooltip container
        detectionTooltip.style.opacity = '1';
        detectionTooltip.style.visibility = 'visible';
        detectionTooltip.style.right = '30px';
        detectionTooltip.style.borderColor = '#40ff88';
        detectionTooltip.style.boxShadow = '-25px 0 80px rgba(0, 0, 0, 0.7), 0 0 40px rgba(9, 255, 117, 0.5)';
        detectionTooltip.style.pointerEvents = 'auto';
        
        // Add entrance animation
        detectionTooltip.style.animation = 'tooltipSlideIn 0.6s ease-out';
        
        // Wait a bit then start typing animation
        setTimeout(async () => {
            const details = detectionTooltip.querySelectorAll('.detection-detail .value');
            
            for (let i = 0; i < details.length; i++) {
                const detail = details[i];
                const originalText = detail.textContent;
                detail.style.opacity = '0.3';
                
                // Add a scanning effect
                detail.style.background = 'linear-gradient(90deg, transparent, rgba(9, 255, 117, 0.2), transparent)';
                detail.style.backgroundSize = '200% 100%';
                detail.style.animation = 'scan 0.8s ease-in-out';
                
                setTimeout(async () => {
                    detail.style.opacity = '1';
                    await typeTextEffect(detail, originalText, 30);
                    detail.style.background = 'none';
                    detail.style.animation = 'none';
                }, i * 200);
            }
            
            // Add final scan complete animation
            setTimeout(() => {
                const scanText = detectionTooltip.querySelector('.scan-text');
                if (scanText) {
                    scanText.style.animation = 'fadeInUp 0.5s ease-out';
                }
            }, details.length * 200 + 500);
            
        }, 300);
    }
    
    function hideTooltip() {
        console.log('🔴 Hiding enhanced tooltip');
        isTyping = false;
        
        detectionTooltip.style.opacity = '0';
        detectionTooltip.style.visibility = 'hidden';
        detectionTooltip.style.right = '-370px';
        detectionTooltip.style.borderColor = '#09ff75';
        detectionTooltip.style.pointerEvents = 'none';
        detectionTooltip.style.animation = 'none';
        
        // Reset all detail animations
        const details = detectionTooltip.querySelectorAll('.detection-detail .value');
        details.forEach(detail => {
            detail.style.opacity = '1';
            detail.style.background = 'none';
            detail.style.animation = 'none';
        });
    }
    
    // Hover events removed - tooltip no longer appears on hover
}

// Enhanced Face Detection Tooltip with Typing Animation
function initFaceDetectionTooltipEnhanced() {
    const faceDetectionMark = document.querySelector('.face-detection-mark');
    const detectionBox = document.querySelector('.detection-box');
    const detectionTooltip = document.querySelector('.detection-tooltip');
    
    if (!faceDetectionMark || !detectionBox || !detectionTooltip) {
        console.log('Face detection elements not found');
        return;
    }
    
    let isTyping = false;
    
    function typeTextEffect(element, text, speed = 50) {
        return new Promise((resolve) => {
            element.textContent = '';
            let i = 0;
            const typeInterval = setInterval(() => {
                element.textContent += text.charAt(i);
                i++;
                if (i >= text.length) {
                    clearInterval(typeInterval);
                    resolve();
                }
            }, speed);
        });
    }
    
    async function showTooltipWithAnimation() {
        if (isTyping) return;
        isTyping = true;
        
        console.log('🤖 Showing enhanced tooltip with animations');
        
        // Show tooltip container
        detectionTooltip.style.opacity = '1';
        detectionTooltip.style.visibility = 'visible';
        detectionTooltip.style.right = '30px';
        detectionTooltip.style.borderColor = '#40ff88';
        detectionTooltip.style.boxShadow = '-25px 0 80px rgba(0, 0, 0, 0.7), 0 0 40px rgba(9, 255, 117, 0.5)';
        detectionTooltip.style.pointerEvents = 'auto';
        
        // Add entrance animation
        detectionTooltip.style.animation = 'tooltipSlideIn 0.6s ease-out';
        
        // Wait a bit then start typing animation
        setTimeout(async () => {
            const details = detectionTooltip.querySelectorAll('.detection-detail .value');
            
            for (let i = 0; i < details.length; i++) {
                const detail = details[i];
                const originalText = detail.textContent;
                detail.style.opacity = '0.3';
                
                // Add a scanning effect
                detail.style.background = 'linear-gradient(90deg, transparent, rgba(9, 255, 117, 0.2), transparent)';
                detail.style.backgroundSize = '200% 100%';
                detail.style.animation = 'scan 0.8s ease-in-out';
                
                setTimeout(async () => {
                    detail.style.opacity = '1';
                    await typeTextEffect(detail, originalText, 30);
                    detail.style.background = 'none';
                    detail.style.animation = 'none';
                }, i * 200);
            }
            
            // Add final scan complete animation
            setTimeout(() => {
                const scanText = detectionTooltip.querySelector('.scan-text');
                if (scanText) {
                    scanText.style.animation = 'fadeInUp 0.5s ease-out';
                }
            }, details.length * 200 + 500);
            
        }, 300);
    }
    
    function hideTooltip() {
        console.log('🔴 Hiding enhanced tooltip');
        isTyping = false;
        
        detectionTooltip.style.opacity = '0';
        detectionTooltip.style.visibility = 'hidden';
        detectionTooltip.style.right = '-370px';
        detectionTooltip.style.borderColor = '#09ff75';
        detectionTooltip.style.pointerEvents = 'none';
        detectionTooltip.style.animation = 'none';
        
        // Reset all detail animations
        const details = detectionTooltip.querySelectorAll('.detection-detail .value');
        details.forEach(detail => {
            detail.style.opacity = '1';
            detail.style.background = 'none';
            detail.style.animation = 'none';
        });
    }
    
    // Hover events removed - tooltip no longer appears on hover
}
