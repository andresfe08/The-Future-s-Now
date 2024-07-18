const toggleBtn = document.getElementById('toggle-btn');
        let isModoOscuro = false;

        toggleBtn.addEventListener('click', () => { 
            isModoOscuro = !isModoOscuro;
            var section = document.getElementById(mySection);
            var body = document.getElementById("myBody");

            if (isModoOscuro) {
                document.body.classList.add('modo-oscuro');
                section.classList.add('modo-oscuro');
                toggleBtn.textContent = 'Modo claro';
            } else {
                document.body.classList.remove('modo-oscuro');
                section.classList.remove('modo-oscuro');
                toggleBtn.textContent = 'Modo oscuro';
            }
        });