jQuery(document).ready(function($) {
  var contentSlideDistance = '200px';
  var contentAnimationDuration = 100;

  $('.nav-collapse > .nav > li').hover(function(){
    $(' .arrow', this).css('visibility', 'visible');

  },function(){
    $('> .arrow', this).css('visibility', 'hidden');
  });

  $('.bxslider').bxSlider();

  var slide = jQuery('.content');
  var screenSize = $(window).width();
  console.log(screenSize);
  if (screenSize <= 979 && screenSize >= 750){
    slide.on('swipeleft', function() {
      slide.removeClass('active');
    })
    .on('swiperight', function() {
      slide.addClass('active');
    });
  }

  jQuery('.content').on('movestart', function(e) {
    // If the movestart is heading off in an upwards or downwards
    // direction, prevent it so that the browser scrolls normally.
    if ((e.distX > e.distY && e.distX < -e.distY) ||
      (e.distX < e.distY && e.distX > -e.distY)) {
      e.preventDefault();
    }
  });

  function my_animate(num, dur, callback) {
    $('.content').animate({left: num+'px'}, {
      duration: dur,
      easing: 'linear',
      complete: callback
    });
  }

  $('.sub-menu').find('ul[data-nav]').addClass('sub-menu-closed');
  $('.main-menu a').click(function(){
    // e.preventDefault();

    var $this = $(this);
    var $subMenu = $(".sub-menu");
    var $uls = $subMenu.find('ul[data-nav]');

    var $activeSubMenu = $subMenu.find('[data-nav=' + $this.attr('data-nav') + ']');

    if(!$activeSubMenu.hasClass('sub-menu-closed')) {
      // Close
      my_animate(0, 100, function () {
        $uls.addClass('sub-menu-closed');
      });
    } else {
      // Open
      my_animate(200, 100, function () {
        $uls.not($activeSubMenu).hide().slideUp('fast').addClass('sub-menu-closed');
        $activeSubMenu.hide().slideDown('fast').removeClass('sub-menu-closed');
      });
    }
  });

// Twitter plugin for home page
var twitterHandle = $('.twitter-handle').attr('data-url');
var url = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=' + twitterHandle;

  $.ajax({
      url : url,
      type: 'post',
      dataType:'jsonp',
      success : success
  });

  function success(data) {
    $('.twitter-feed').append('<li><p>' + data[0].text + data[0].created_at + '</p></li>');
    $('.twitter-feed').append('<li><p>' + data[1].text + data[1].created_at + '</p></li>');
    $('.twitter-feed').append('<li><p>' + data[2].text + data[2].created_at + '</p></li>');
  }

// Team member links
  $('.team-member-info a').slideUp();

  $('.team-member-info').hover(function(){
    $(this).find('a').slideDown('fast');
  },function(){
    $(this).find('a').slideUp('fast');
  });

  // $('span.twitter-date').prettyDate();
  // setInterval(function(){ $("span.twitter-date").prettyDate(); }, 5000);

});
