const loginMenu = document.querySelector('[data-menu^="login"]');
const loginUser = document.querySelector('[data-menu^="user"]');

// Verifica no localStorage se há um usuario logado
export default function loggedUser() {
  if(localStorage.loggedUser) {
    const userLogged = JSON.parse(localStorage[localStorage.loggedUser])
    loginMenu.setAttribute("data-menu", "login")
    loginUser.setAttribute("data-menu", "user-active")
    loginUser.firstElementChild.innerText = userLogged.nome;
  }
}