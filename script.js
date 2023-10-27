$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

  
function setStyleSheet(url){
  var stylesheet = document.getElementById("stylesheet");
  stylesheet.setAttribute('href', url);
  // frames['frr'].document.head.appendChild(cssLink);
}
document.getElementsByTagName('head')(0).getElementById('stylesheet').href='stylesheet2.css';
document.getElementsByTagName('menu.html')(0).getElementById('stylesheet').href='stylesheet2.css';
// document.getElementsByTagName('frr')(0).getElementById('stylesheet').href='stylesheet2.css';

function setStyleSheet_l(url){
  var cssLink = document.createElement("link");
  cssLink.href = "index.css"; 
  cssLink.rel = "stylesheet"; 
  cssLink.type = "text/css"; 
  frames['frr'].document.head.appendChild(cssLink);
}
function setStyleSheet_d(url){
  var cssLink = document.createElement("link");
  cssLink.href = "index_dark.css"; 
  cssLink.rel = "stylesheet"; 
  cssLink.type = "text/css"; 
  frames['frr'].document.head.appendChild(cssLink);
}

function setStyleSheet_ll(url){
  var cssLink = document.createElement("link");
  cssLink.href = "index.css"; 
  cssLink.rel = "stylesheet"; 
  cssLink.type = "text/css"; 
  frames['fr'].document.head.appendChild(cssLink);
}
function setStyleSheet_dd(url){
  var cssLink = document.createElement("link");
  cssLink.href = "index_dark.css"; 
  cssLink.rel = "stylesheet"; 
  cssLink.type = "text/css"; 
  frames['fr'].document.head.appendChild(cssLink);
}
