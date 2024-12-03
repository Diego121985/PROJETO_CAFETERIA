// Seleciona o link "Sobre" e a seção "Sobre Nós"
const sobreLink = document.getElementById('sobre-link');
const sobreNosSection = document.getElementById('sobre-nos');
const btnMenu =document.getElementById('btn-menu')
const menu =document.getElementById('menu-mobile')
const overlay = document.getElementById('ovelay-menu')

btnMenu.addEventListener('click',() => {
  menu.classList.add('abrir-menu')

  
})
menu.addEventListener('click',() => {
  menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click',() => {
  menu.classList.remove('abrir-menu')
})

// Adiciona o evento de clique
sobreLink.addEventListener('click', (event) => {
  event.preventDefault(); // Evita o comportamento padrão do link


  // Rola suavemente até a seção "Sobre Nós"
  sobreNosSection.scrollIntoView({ behavior: 'smooth' });
});
