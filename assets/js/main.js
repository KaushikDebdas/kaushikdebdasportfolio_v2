// Main Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    ThemeManager.initTheme();
    
    // Render navigation
    document.getElementById('nav-list').innerHTML = Renderers.renderNavItems(navigationItems);
    document.getElementById('mobile-nav-list').innerHTML = Renderers.renderNavItems(navigationItems);
    
    // Render education
    document.getElementById('education-list').innerHTML = Renderers.renderEducationCards(educationData);
    
    // Render certificates
    document.getElementById('certificates-grid').innerHTML = Renderers.renderCertificateCards(certificatesData);
    
    // Render skills
    document.getElementById('methodology-list').innerHTML = Renderers.renderSkillBars(testingMethodologies);
    document.getElementById('tools-list').innerHTML = Renderers.renderSkillBars(toolsTechnologies);
    
    // Render work experience
    document.getElementById('experience-timeline').innerHTML = Renderers.renderExperienceTimeline(workExperience);
    
    // Render projects
    document.getElementById('projects-grid').innerHTML = Renderers.renderProjectCards(projects);
    
    // Render contact info
    document.getElementById('contact-info').innerHTML = Renderers.renderContactInfo(contactInfo);
    
    // Render social links
    document.getElementById('social-links').innerHTML = Renderers.renderSocialLinks(socialLinks);
    
    // Render footer links
    document.getElementById('footer-links').innerHTML = Renderers.renderFooterLinks(footerLinks);
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Theme toggle buttons
    document.querySelectorAll('[id^="theme-toggle"]').forEach(btn => {
        btn.addEventListener('click', () => ThemeManager.toggleTheme());
    });
    
    // =====================================================
    // EXTRA FEATURES (moved from inline script in index.html)
    // =====================================================
    
    /* ── Scroll progress bar ── */
    window.addEventListener('scroll', () => {
        const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        const scrollBar = document.getElementById('scroll-bar');
        if (scrollBar) scrollBar.style.width = pct + '%';
    });
    
    /* ── Spawn animated dots (hero bg + philip frame) ── */
    function spawnDots(id, count, r, g, b) {
        const el = document.getElementById(id);
        if (!el) return;
        for (let i = 0; i < count; i++) {
            const d  = document.createElement('div');
            const sz = (Math.random() * 14 + 4).toFixed(1);
            const op = (Math.random() * 0.22 + 0.06).toFixed(2);
            const dr = (Math.random() * 4 + 3).toFixed(1);
            const dl = (Math.random() * 3).toFixed(1);
            d.style.cssText = `
                position:absolute; border-radius:50%;
                width:${sz}px; height:${sz}px;
                left:${(Math.random()*96).toFixed(1)}%;
                top:${(Math.random()*96).toFixed(1)}%;
                background:rgba(${r},${g},${b},${op});
                animation:dotFloat ${dr}s ease-in-out ${dl}s infinite;
            `;
            el.appendChild(d);
        }
    }
    spawnDots('hero-dots-bg', 30, 124, 58, 237);
    spawnDots('philip-dots',  18, 99, 102, 241);
    
    /* ── Interactive certificate filter ── */
    setTimeout(() => {
        const grid   = document.getElementById('certificates-grid');
        const tabsEl = document.getElementById('cert-filter-tabs');
        if (!grid || !tabsEl || typeof certificatesData === 'undefined') return;
    
        const cards = Array.from(grid.querySelectorAll('.cert-card'));
    
        // Attach category from data.js to each rendered card
        cards.forEach((card, i) => {
            card.dataset.certCat = certificatesData[i]?.category || 'General';
        });
    
        // Fixed tab order as requested
        const cats = ['All', 'Development', 'QA & Security', 'Tools'];
    
        tabsEl.innerHTML = cats.map((cat, i) =>
            `<button class="cert-tab-btn${i === 0 ? ' active' : ''}" data-cat="${cat}">${cat}</button>`
        ).join('');
    
        // Filter on click
        tabsEl.addEventListener('click', e => {
            const btn = e.target.closest('.cert-tab-btn');
            if (!btn) return;
            tabsEl.querySelectorAll('.cert-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const chosen = btn.dataset.cat;
            cards.forEach(card => {
                card.style.display = (chosen === 'All' || card.dataset.certCat === chosen) ? '' : 'none';
            });
        });
    }, 700);
    
    // =====================================================
    // EXISTING FUNCTIONALITY
    // =====================================================
    
    // Animate skill bars on scroll
    function animateSkillBars() {
        document.querySelectorAll('.skill-bar').forEach(bar => {
            const skillName = bar.dataset.skill;
            const skill = [...testingMethodologies, ...toolsTechnologies]
                .find(s => s.name.replace(/\s+/g, '-').toLowerCase() === skillName);
            if (skill) {
                bar.style.width = skill.level + '%';
            }
        });
    }
    
    // Intersection Observer for skill bars
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            PortfolioUtils.filterProjects(this.dataset.filter);
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            this.setAttribute('aria-expanded', !isHidden);
            
            const icon = mobileMenuBtn.querySelector('i');
            if (isHidden) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Sanitize inputs
            const name = PortfolioUtils.sanitizeInput(document.getElementById('name').value);
            const email = PortfolioUtils.sanitizeInput(document.getElementById('email').value);
            const subject = PortfolioUtils.sanitizeInput(document.getElementById('subject').value);
            const message = PortfolioUtils.sanitizeInput(document.getElementById('message').value);
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            try {
                // Simulate form submission (replace with actual API call)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Here you would typically send the data to your backend
                // const response = await fetch('your-api-endpoint', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({ name, email, subject, message })
                // });
                
                PortfolioUtils.showNotification('Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
            } catch (error) {
                PortfolioUtils.showNotification('Failed to send message. Please try again.', 'error');
                console.error('Form submission error:', error);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }
    
    // Smooth scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active navigation link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelectorAll('[data-nav-link]').forEach(link => link.classList.remove('active-section'));
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) activeLink.classList.add('active-section');
            }
        });
    }
    
    // Debounced scroll handler for performance
    const debouncedUpdateActiveNavLink = PortfolioUtils.debounce(updateActiveNavLink, 100);
    window.addEventListener('scroll', debouncedUpdateActiveNavLink);
    updateActiveNavLink();
});