// Mobile Menu Toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });

        // Back to Top Button
        const backToTopButton = document.getElementById('backToTop');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header Style Change on Scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if(window.scrollY > 100) {
                header.style.padding = '10px 0';
                header.style.boxShadow = 'var(--shadow-lg)';
            } else {
                header.style.padding = '20px 0';
                header.style.boxShadow = 'var(--shadow)';
            }
        });

        // Newsletter Form Submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input');
            
            if(input.value) {
                // In a real application, you would send this to a server
                console.log('Newsletter subscription:', input.value);
                
                // Show success message
                alert('Thank you for subscribing to our newsletter!');
                
                // Clear input
                input.value = '';
            }
        });

        // Footer Newsletter Form Submission
        document.querySelector('.newsletter-form-footer').addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input');
            
            if(input.value) {
                // In a real application, you would send this to a server
                console.log('Footer newsletter subscription:', input.value);
                
                // Show success message
                alert('Thank you for subscribing to our newsletter!');
                
                // Clear input
                input.value = '';
            }
        });

        // Scroll Animation for Elements
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Apply animation to elements
        document.querySelectorAll('.category-card, .post-card, .author-card').forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });

        // Search functionality (basic implementation)
        document.querySelector('.search-icon').addEventListener('click', function() {
            const searchTerm = prompt('Enter search term:');
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}\n\nIn a real application, this would filter content based on your search.`);
            }
        });