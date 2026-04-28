// Renderer Functions
const Renderers = {
    renderNavItems(items) {
        return items.map(item => 
            `<li>
                <a href="${item.href}" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center" data-nav-link>
                    <i class="${item.icon} mr-2"></i>${item.label}
                </a>
            </li>`
        ).join("");
    },
    
    renderProjectCards(items) {
        return items.map((item, index) => `
            <div class="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300" 
                data-category="${item.category}"
                data-aos="fade-up"
                data-aos-delay="${index * 100}">
                <div class="project-image-container">
                    <img src="${item.image}" alt="${item.alt}" class="project-image" loading="lazy">
                    <!-- REMOVED: stats-badge div -->
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="${item.github}" target="_blank" rel="noopener noreferrer" class="project-link-btn github-btn" title="View on GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="${item.live}" target="_blank" rel="noopener noreferrer" class="project-link-btn demo-btn" title="View Live Demo">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                            <a href="${item.github}/archive/main.zip" class="project-link-btn" title="Download Project">
                                <i class="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${item.title}</h3>
                    <p class="project-description">${item.description}</p>
                    <div class="flex flex-wrap gap-2 mt-4">
                        ${item.technologies.map(tech => `<span class="project-tech-tag">${tech}</span>`).join("")}
                    </div>
                    <div class="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <i class="fas fa-code-branch mr-2"></i>
                            <span>Main branch</span> <!-- Simplified text -->
                        </div>
                        <a href="${item.github}" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-blue-700 transition flex items-center gap-1 group">
                            <span>View Code</span>
                            <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join("");
    },
    
    renderSkillBars(items) {
        return items.map(item => `
            <div class="mb-6">
                <div class="flex justify-between mb-2">
                    <span class="font-medium text-secondary dark:text-white">${item.name}</span>
                    <span class="text-primary font-semibold">${item.level}%</span>
                </div>
                <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div class="skill-bar h-full rounded-full bg-primary" data-skill="${item.name.replace(/\s+/g, '-').toLowerCase()}" style="width: 0%;"></div>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${item.description}</p>
            </div>
        `).join("");
    },
    
    renderExperienceTimeline(items) {
        return items.map((item, index) => `
            <div class="mb-10 relative">
                <div class="absolute -left-11 md:-left-14 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <i class="fas fa-briefcase text-white"></i>
                </div>
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-secondary dark:text-white">${item.title}</h3>
                            <p class="text-primary font-medium">${item.company}</p>
                        </div>
                        <span class="inline-block bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">${item.period}</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">${item.description}</p>
                    <div>
                        <h4 class="font-semibold text-secondary dark:text-white mb-2">Key Achievements:</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            ${item.achievements.map(achievement => `<li class="text-gray-600 dark:text-gray-300">${achievement}</li>`).join("")}
                        </ul>
                    </div>
                </div>
            </div>
        `).join("");
    },
    
    renderEducationCards(items) {
        return items.map(item => `
            <div class="education-card">
                <span class="education-year">${item.period}</span>
                <h3 class="education-degree">${item.degree}</h3>
                
                <div class="education-institution mb-2">
                    <i class="fas fa-university text-primary"></i>
                    <span>${item.institution}</span>
                </div>
                
                <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <i class="fas fa-map-marker-alt text-primary"></i>
                    <span>${item.location}</span>
                </div>
                
                ${item.major ? `
                    <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <i class="fas fa-book-open text-primary"></i>
                        <span class="font-medium">Major:</span> ${item.major}
                    </div>
                ` : ''}
                
                ${item.courses ? `
                    <div class="mb-4">
                        <h4 class="font-semibold text-secondary dark:text-white mb-2">Relevant Coursework:</h4>
                        <div class="flex flex-wrap gap-2">
                            ${item.courses.map(course => `<span class="project-tech-tag">${course}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${item.achievements ? `
                    <div>
                        <h4 class="font-semibold text-secondary dark:text-white mb-2">Achievements:</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            ${item.achievements.map(achievement => `<li class="text-gray-600 dark:text-gray-300">${achievement}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `).join('');
    },
    
    renderCertificateCards(items) {
        return items.map(item => `
            <div class="cert-card">
                <div class="cert-card-accent bg-gradient-to-b ${item.color}">
                    <i class="${item.icon} cert-card-icon"></i>
                </div>
                <div class="cert-card-body">
                    <h3 class="cert-card-title">${item.title}</h3>
                    <div class="cert-card-meta">
                        <span class="cert-issuer"><i class="fas fa-building"></i> ${item.issuer}</span>
                        <span class="cert-separator">·</span>
                        <span class="cert-year"><i class="far fa-calendar-alt"></i> ${item.date}</span>
                    </div>
                    ${item.credentialId ? `
                        <div class="cert-credential">
                            <i class="fas fa-fingerprint"></i>
                            <span>${item.credentialId}</span>
                        </div>
                    ` : ''}
                    <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="cert-verify-btn">
                        <i class="fas fa-external-link-alt"></i> Verify Credential
                    </a>
                </div>
            </div>
        `).join('');
    },
    
    renderContactInfo(items) {
        return items.map(item => `
            <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <i class="${item.icon} text-primary"></i>
                </div>
                <div>
                    <p class="font-semibold">${item.type}</p>
                    <a href="${item.link}" target="_blank" class="text-gray-300 hover:text-white transition">${item.value}</a>
                </div>
            </div>
        `).join("");
    },
    
    renderSocialLinks(items) {
        return items.map(item => `
            <a href="${item.url}" target="_blank" class="${item.color} w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-90 transition hover:scale-110" aria-label="${item.platform}">
                <i class="${item.icon}"></i>
            </a>
        `).join("");
    },
    
    renderFooterLinks(items) {
        return items.map(item => 
            `<a href="${item.href}" class="text-gray-400 hover:text-white transition">${item.label}</a>`
        ).join("");
    }
};