//= require_tree .
//= require jquery

/* отвечает за фиксацию меню по всей странице */
/*  var h_hght = 100; // высота шапки
  var h_mrg = 0;    // отступ когда шапка уже не видна
  $(function(){
   $(window).scroll(function(){
      var top = $(this).scrollTop();
      var elem = $('#top_nav');
      if (top+h_mrg < h_hght) {
       elem.css('top', (h_hght-top));
      } else {
       elem.css('top', h_mrg);
      }
    });
  });

/* отвечает за плавный переход к якорю на странице*/
/*$(function(){
  $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 -длительность скроллинга в мс
  return false;
  });
});
