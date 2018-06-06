$(window).load(function() {
  $.fn.shuffle = function() {
    var allElems = this.get(),
      getRandom = function(max) {
        return Math.floor(Math.random() * max);
      },
      shuffled = $.map(allElems, function(){
        var random = getRandom(allElems.length),
        randEl = $(allElems[random]).clone(true)[0];
        allElems.splice(random, 1);
          return randEl;
      });
        this.each(function(i){
          $(this).replaceWith($(shuffled[i]));
        });
          return $(shuffled);
  };
  $('.list #person-left').shuffle();
  $('.list #person-right').shuffle();
  
  // var audioElement = document.querySelector("audio");
  // console.log(audioElement);
  // var textTracks = audioElement.textTracks;
  // console.log(textTracks);
  // var textTrack = textTracks[0];
  // console.log(textTrack);
  // var kind = textTrack.kind
  // console.log(kind);
  // var mode = textTrack.mode
  // console.log(mode);
  // var ques = textTrack.cues;
  // console.log(ques);
  // textTrack.mode = 'hidden';
  // console.log(textTrack.mode);

  var audio = new Audio();
  [].forEach.call(document.querySelectorAll('#audio'), function(item) {
    item.addEventListener('click', function() {
      $('span#stop').hide();
      $('span#audio').show();
      $('a>img#image').show();
      $('a>img#image-bw').hide();
      // $('.right-story').show();
      // $('.right-story-subt').hide();

      audio.pause();
      $(this).parent().find('a>img#image').hide();
      $(this).parent().find('a>img#image-bw').show();
      // $(this).closest('#story').find('.right-story').hide();
      // $(this).closest('#story').find('.right-story-subt').show();
      // console.log(subt);
        var path = './sounds/';
        var audioName = item.querySelector('source').getAttribute('src');
        var fullPath = path+audioName;
        audio.src = fullPath;
          audio.play();
          $(this).hide();
          $(this).parent().find('span#stop').show();
    });
  });
  $('span#stop').click(function(e){
    audio.pause();
    $('span#stop').hide();
    $('span#audio').show();
     $('a>img#image').show();
    $('a>img#image-bw').hide();
    // $(this).closest('#story').find('.right-story').show();
    // $(this).closest('#story').find('.right-story-subt').hide();
  });
  audio.onended=function(){
    $('span#stop').hide();
    $('span#audio').show();
    $('a>img#image').show();
    $('a>img#image-bw').hide();
    // $('.right-story').show();
    // $('.right-story-subt').hide();
  }; 

/*MODAL*/
  $('.modal').click( function(event){
    event.preventDefault();
    $('#overlay').fadeIn(400, // анимируем показ обложки
      function(){ // далее показываем мод. окно
        $('#modal_form') 
          .css('display', 'block')
          .animate({opacity: 1, top: '10%'}, 200);
        });
    });
  $('#modal_close, #overlay').click( function(){
    $('#modal_form')
      .animate({opacity: 0, top: '10%'}, 200,  // уменьшаем прозрачность
      function(){ // пoсле aнимaции
        $(this).css('display', 'none'); // скрываем окно
        $('#overlay').fadeOut(400); // скрывaем пoдлoжку
      }
    );
  });
/*Scroll*/
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } 
      else {
        $('.scrollup').fadeOut();
      }
  });
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
