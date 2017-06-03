$(document).ready(function() {

  var forceCssLink = document.createElement("link");
  forceCssLink.href = "https://vivo-anfibio.herokuapp.com/styles/force-periscope.css"; 
  forceCssLink.rel = "stylesheet"; 
  forceCssLink.type = "text/css"; 

  var stylesCssLink = document.createElement("link");
  stylesCssLink.href = "https://vivo-anfibio.herokuapp.com/styles/main.css"; 
  stylesCssLink.rel = "stylesheet"; 
  stylesCssLink.type = "text/css"; 

  setTimeout(function(){
    $('iframe').each(function(d) { 
      this.document.body.appendChild(stylesCss);
      this.document.body.appendChild(stylesCssLink);
    });  
  },10000)
  
  

});