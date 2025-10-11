 /*---Copyright by Simon Duerr---*/

 /*get mobile Menu - Hamburger Button*/
const toggleBtn = document.getElementById('toggleDisplayBtn');
const navMenu = document.getElementById('navigation-menu');
const mediaQuery = window.matchMedia('(max-width: 900px)');

/*when button clicked, rearrange ul list
/*set in layout.css - layout navigation ul.active*/
function menue_clicked(){
    toggleBtn.addEventListener('click', () => {
        if (mediaQuery.matches) {
          navMenu.classList.toggle('active');
          toggleBtn.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        }
      });
      
      // active Mediaquery, reset resize
      mediaQuery.addEventListener('change', (e) => {
        if (!e.matches) {
          navMenu.classList.remove('active');
          toggleBtn.setAttribute('aria-expanded', false);
        }
      });
}

menue_clicked(toggleBtn,navMenu,mediaQuery)