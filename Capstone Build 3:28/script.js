$(document) .ready(function() {
  
  
  var g= true;
    $(".navbutton").hover(function(){
        
        if (g==true) {
            $(".navbutton").css("width", "85px");
            g=false;
        }
        else {
            $(".navbutton").css("width", "75px");
            g=true;
        }
    });  
  
  
   var gg= true;
    $(".navbutton").click(function(){
        if (gg==true) {
            $( ".nav" ).css("position", "fixed");
            $( ".nav" ).css("display", "inherit");
            
            gg=false;
        }
        else {

            $( ".nav" ).css("display", "none");

            gg=true;
            
        }   
    });
  
  
    var o= true;
    $("#termA").hover(function(){
        if (o==true) {
            
            $("#termA").html('Rockefell<a class="underline">ah</a></br>Cent<a class="underline">ah</a>');
            $("#termA").css("color", "#DE6E64");
            o=false;
        }
        else {
            $("#termA").html('Rockefeller</br>Center');
            $("#termA").css("color", "#1D7FCA");
            o=true;
        }    
    });
  
  
  
     var termclick= true;
    $("#termA").click(function(){
        if (termclick==true) {
            
            $("#termA").css("top", "15%");
            $(this).unbind("mouseenter mouseleave");
            termclick=false;
        }
        else {
            $("#termA").css("top", "40%");
            
            termclick=true;
        }    
    });
  


  
  
  
       var termBclick= true;
    $(".term").click(function(){
        if (termBclick==true) {
          
          $( "#termB" ).animate({
              opacity: "1"
              }, 200);
            
            $("#termB").css("top", "48%");
            $("#termB").css("visibility", "visible");
            termBclick=false;
        }
        else {
          
          $( "#termB" ).animate({
              opacity: "0"
              }, 200);
          
            $("#termB").css("top", "23%");
            $("#termB").css("visibility", "hidden");
            
            termBclick=true;
        }    
    });
  
         var di= true;
    $(".term").click(function(){
        if (di==true) {
          
          $( ".dialect" ).animate({
              opacity: "1"
              }, 800);
      
            di=false;
        }
        else {
          
          $( ".dialect" ).animate({
              opacity: "0"
              }, 800);
          
           
            di=true;
        }    
    });
  
  
           var info= true;
    $(".term").click(function(){
        if (info==true) {
          
          $( ".infobutton" ).animate({
              opacity: "1"
              }, 300);
      
            info=false;
        }
        else {
          
          $( ".infobutton" ).animate({
              opacity: "0"
              }, 300);
          
           
            info=true;
        }    
    });
  
  

  jQuery(function( $ ) {
    var keymap = {};

    // LEFT
    keymap[ 37 ] = "#prev";
    // RIGHT
    keymap[ 39 ] = "#next";

    $( document ).on( "keyup", function(event) {
        var href,
            selector = keymap[ event.which ];
        // if the key pressed was in our map, check for the href
        if ( selector ) {
            href = $( selector ).attr( "href" );
            if ( href ) {
                // navigate where the link points
                window.location = href;
            }
        }
    });
});
  
  
  
  
   var ggg= true;
    $(".infobutton").click(function(){
        if (ggg==true) {
            $( ".sideinfo" ).css("position", "fixed");
            $( ".sideinfo" ).css("width", "400px");
            
            ggg=false;
        }
        else {

            $( ".sideinfo" ).css("width", "0");

            ggg=true;
            
        }   
    });
  
  
}); 