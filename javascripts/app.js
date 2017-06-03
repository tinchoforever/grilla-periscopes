$(document).ready(function() {

  var forceCssLink = document.createElement("link");
  forceCssLink.href = "https://vivo-anfibio.herokuapp.com/css/force-periscope.css"; 
  forceCssLink.rel = "stylesheet"; 
  forceCssLink.type = "text/css"; 

  var stylesCssLink = document.createElement("link");
  stylesCssLink.href = "https://vivo-anfibio.herokuapp.com/css/main.css"; 
  stylesCssLink.rel = "stylesheet"; 
  stylesCssLink.type = "text/css"; 

  setTimeout(function(){
    $('iframe').each(function(d) { 
     $(this).contents().find("head").append($("<style type='text/css'>.TweetAuthor,.timeline-Header.timeline-InformationCircle-widgetParent,.timeline-Tweet-brand.u-floatRight,.timeline-Tweet-metadata,footer.timeline-Footer.u-cf,h1.timeline-Header-title,p.timeline-Tweet-text,ul.timeline-Tweet-actions{display:none}.timeline-Body.customisable-border,.timeline-Viewport{margin:0;padding:0;border:0}</style>"));

    });  
  },1000);
  
  

});