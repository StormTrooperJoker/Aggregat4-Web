 /*---Copyright by Simon Duerr---*/

/*Easter Egg - change Color in day and night on webpage*/
 function setNavigationColor() {
    const nav = document.querySelector('.navigation');

    const hour = new Date().getHours();

    if (hour >= 6 && hour < 18) {
      nav.classList.remove('bg-color-black');
      nav.classList.add('bg-color-darkblue');
    } else {
      nav.classList.remove('bg-color-darkblue');
      nav.classList.add('bg-color-black');
    }
  }
  setNavigationColor();

  