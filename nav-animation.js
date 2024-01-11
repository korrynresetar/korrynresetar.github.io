var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var nav = $('nav');
var line = $('<div></div>').addClass('line');

line.appendTo(nav);

var active = nav.find('.active');
var pos = 0;
var wid = 0;

if(active.length) {

  console.log("here");
  wid = (active.width()+10);
 
  if (wid % 4 != 0) {
    wid = wid + (4-(wid%4));
    console.log("odd ", wid);
  }

  pos = active.position().left - (.25*wid)

  line.css({
    left: pos,
    width: wid
  });
}

nav.find('ul li a').click(function(e) {
  e.preventDefault();
  console.log("trying");
  if(!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {

    nav.addClass('animate');

    var _this = $(this);

    nav.find('ul li').removeClass('active');

    var position = _this.parent().position();
    var width = (_this.parent().width())+10;

    if (width % 4 != 0) {
      width = width + (4-(width%4));
      console.log("odd ", width);
    }

    if(position.left >= pos) {
      _this.parent().addClass('active');
      line.animate({
        width: ((position.left - pos) + width)
        
      }, 150, function() {
        line.animate({
          width: width,
          left: position.left - (.25*width)
        }, 150, function() {
          nav.removeClass('animate');
        });
        
      });

    } else {
      _this.parent().addClass('active');
      line.animate({
        left: position.left - (.25*width),
        width: ((pos - position.left) + width)
      }, 150, function() {
        line.animate({
          width: width
        }, 150, function() {
          nav.removeClass('animate');
        });
        
      }); position.left - (.25*width)

    }
   
    // need to figure out if something is divisible by four and if not, make it
    if (width % 4 != 0) {
      width = width + (4-(width%4));
      console.log("odd ", width);
    }
    wid = width;
    
    pos = position.left - ((.25*width)+(width-active.width()));

    console.log(width, pos);
  }
});




