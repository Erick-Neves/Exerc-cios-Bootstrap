// Troca o texto do Sett

function trocaTextoSett(){
    let txtEncSett = document.getElementById('txtEncSett')
    txtEncSett.innerHTML = 'Líder de parte do próspero submundo do crime em Ionia, Sett deve todo o seu sucesso à guerra contra Noxus. Mesmo estreando como um simples desafiante nas arenas de combate em Navori, ele logo conquistou notoriedade com sua força bruta e capacidade de suportar dor contínua e extrema. Agora, após superar todos os combatentes locais, Sett chegou até o topo e reina sobre as arenas onde um dia lutara. <button class="p-button-sett" onclick="destrocaTextoSett()">Veja menos</button>'
}

// Troca o texto do Sett

function destrocaTextoSett(){
    let txtEncSett = document.getElementById('txtEncSett')
    txtEncSett.innerHTML = 'Líder de parte do próspero submundo do crime em Ionia, Sett deve todo o seu sucesso à guerra contra Noxus. Mesmo estreando como um simples desafiante nas arenas de combate em... <button class="p-button-sett" onclick="trocaTextoSett()">Veja mais</button>'
}

// Troca o texto da Kai'Sa

function trocaTextoKaisa(){
    let txtEncSett = document.getElementById('txtEncKaisa')
    txtEncSett.innerHTML = 'Capturada pelo Vazio quando era apenas uma criança, KaiSa conseguiu sobreviver por pura persistência e força de vontade. Suas experiências fizeram dela uma caçadora mortal e, para alguns, o prenúncio de um futuro que seria melhor não viver para ver. Inserida em uma desconfortável simbiose com uma carapaça viva do Vazio, é chegada a hora de decidir se ela perdoará os mortais que a chamam de monstro e derrotará a ameaçadora escuridão… ou se ela simplesmente os esquecerá, deixando o Vazio consumir o mundo que um dia também a deixou para trás. <button class="p-button-sett" onclick="destrocaTextoKaisa()">Veja menos</button>'
}

// Destroca o texto da Kai'Sa

function destrocaTextoKaisa(){
    let txtEncSett = document.getElementById('txtEncKaisa')
    txtEncSett.innerHTML = 'Capturada pelo Vazio quando era apenas uma criança, KaiSa conseguiu sobreviver por pura persistência e força de vontade. Suas experiências fizeram dela uma caçadora mortal e, para alguns... <button class="p-button-sett" onclick="trocaTextoKaisa()">Veja mais</button>'
}

// Validar os campos do formulário

function enviar() {
    let nome = document.querySelector('#nome')
    let email = document.querySelector('#email')
    let sugestao = document.querySelector('#sugestao')
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || nome.value == '' || sugestao.value == '') {
       alert('Preencha todos os campos antes de enviar o formulário!')
    } else {
       alert('Formulário enviado com sucesso!')
    }
}

// Identificar o clique no menu

const menuItens = document.querySelectorAll('.menu a')

// Verificar a distancia entre o alvo e o topo

function getScrollTopByHref(element) {
   const id = element.getAttribute('href')
   return document.querySelector(id).offsetTop
}

// Animar o scroll até o alvo

function scrollToPosition(to) {
   /*
   Caso queira o nativo do Chrome apenas
      window.scroll({
      top: to,
      behavior: "smooth"
   })
   */
   smoothScrollTo(0, to)

}

// Verificar se o item foi clicado e fazer a referencia para o alvo dele

function scrollToIdOnClick(event) {
   event.preventDefault()
   const to = getScrollTopByHref(event.currentTarget) - 80
   scrollToPosition(to)
}

menuItens.forEach(item => {
   item.addEventListener('click', scrollToIdOnClick)
})


// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
   const startX = window.scrollX || window.pageXOffset;
   const startY = window.scrollY || window.pageYOffset;
   const distanceX = endX - startX;
   const distanceY = endY - startY;
   const startTime = new Date().getTime();

   duration = typeof duration !== 'undefined' ? duration : 400;

   // Easing function
   const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
   };

   const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
         clearInterval(timer);
      }
      window.scroll(newX, newY);
   }, 1000 / 60); // 60 fps
};