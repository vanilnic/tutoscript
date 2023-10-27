$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

  
function setStyleSheet(url){
  var stylesheet = document.getElementById("stylesheet");
  stylesheet.setAttribute('href', url);
}
document.getElementsByTagName('head')(0).getElementById('stylesheet').href='stylesheet2.css';
document.getElementsByTagName('menu.html')(0).getElementById('stylesheet').href='stylesheet2.css';
document.getElementsByTagName('frr')(0).getElementById('stylesheet').href='stylesheet2.css';