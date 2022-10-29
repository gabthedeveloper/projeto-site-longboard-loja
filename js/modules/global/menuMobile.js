import { ElementHandler } from "./elementHandler.js";
import outsideClick from "./outsideClick.js";

const elementHandler = new ElementHandler();

export default function menuMobile() {
  const menuMobile = document.querySelector('[data-menu="button"]');
  const listMobile = document.querySelector('[data-menu="list"]');

  function openMenuMobile(e) {
    e.stopPropagation();
    e.preventDefault();
    
    elementHandler.toogle('[data-menu="list"]');
    
    outsideClick(listMobile, () => {
      elementHandler.toogle('[data-menu="list"]');
    })
  }

  menuMobile.addEventListener('touchstart', openMenuMobile);
}
