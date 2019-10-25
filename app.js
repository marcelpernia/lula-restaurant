$(document).ready(function() {
  const gallery = $('.gallery__canvas a');
  const navicon = $('#navicon');
  const nav = $('.nav');
  const itemMenu = $('nav a');

  gallery.simpleLightbox();

  navicon.click(function(e) {
    e.preventDefault();
    nav.toggleClass('open');
    $(this).toggleClass('icon-close');
  });

  itemMenu.click(function(){
    nav.removeClass('open');
    navicon.removeClass('icon-close');
  });



  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
    return false;
  });
});