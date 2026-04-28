// Theme Management
const ThemeManager = {
    setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        this.updateThemeIcons();
    },
    
    toggleTheme() {
        this.setTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
    },
    
    updateThemeIcons() {
        const isDark = document.documentElement.classList.contains('dark');
        document.querySelectorAll('[id^="theme-toggle"] .fa-moon, [id^="theme-toggle"] .fa-sun').forEach(icon => {
            if (icon.classList.contains('fa-moon')) {
                icon.classList.toggle('hidden', isDark);
            } else if (icon.classList.contains('fa-sun')) {
                icon.classList.toggle('hidden', !isDark);
            }
        });
    },
    
    initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
};