const   body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });

        modeSwitch.addEventListener("click", () => {
            body.classList.toggle("dark");
            
            if(body.classList.contains("dark")) {
                modeText.innerText = "Light Mode";
                localStorage.setItem('theme', 'dark');
            } else {
                modeText.innerText = "Dark Mode";
                localStorage.setItem('theme', 'light');
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            if(savedTheme === 'dark') {
                body.classList.add('dark');
                modeText.innerText = "Light Mode";
            }

            const navLinks = document.querySelectorAll('.nav-link a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.forEach(l => l.parentElement.classList.remove('active'));
                    this.parentElement.classList.add('active');
                });
            });
        });