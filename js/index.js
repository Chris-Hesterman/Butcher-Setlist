$(document).ready(function() {
  //DECLARE VARIABLES
  var songArray = [];
  
  
//ENTER YOUR SONG TITLES, STORE IN ARRAY
  $("#song").focus();
  $(document).on("keyup", this, enterSong);
  
//RANDOMIZE ORDER OF SONGS WITH FISHER-YATES SHUFFLE, CREATE SET LIST  
  $("#done").on("click", function() {
    shuffle(songArray);
  });
   
  
//***************************************FUNCTIONS THAT MAKE IT HAPPEN  
  function enterSong(event) {
    if (event.which === 13) {
     var songInput = $("#song").val();
     songArray.push(songInput);
     $("#song").val("");
     if (/Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)){
     $("#song").blur();
    }
   }
  }
  
  function shuffle(arr) {
    var m = arr.length, i, temp;
    
    while(m) {
      i = Math.floor(Math.random() *m);
      m--;
      temp = arr[m];
      arr[m] = arr[i];
      arr[i] = temp; 
    }
    createSetList(arr);
    return arr;
  } 
   
  function createSetList(arr) {
    $("body").empty();
    $("body").css("margin", "0");
    $("body").css("background", "none");
    $("body").append("<button type = 'button' class = 'hide-buttons'>" + "HIDE/SHOW" + "</button>");
    $("body").append("<button type = 'button' class = 'reshuffle'>" + "RESHUFFLE" + "</button>");
    $("body").append("<button type = 'button' class = 'fontsize'>" + "FONT SIZE" + "</button>");
    $("body").append("<button type = 'button' class = 'align'>" + "ALIGN" + "</button>");
    $("body").append("<button type = 'button' class = 'print'>" + "PRINT" + "</button>");
    $("body").css("display", "inline");
    $("body").append("<ul/>");
    $("body").css("background-image", "none");
    
    for (var item of arr) {
      $("ul").append("<li>" + item + "</li>")
    }
    
    //SET LIST OPTIONS - FONT SIZE, ALIGNMENT, RE-SHUFFLE  
  $(".reshuffle").on('click', function() {
    shuffle(songArray);
  });
  
  $(".fontsize").on('click', function () {
    $("li").each(function(){
      var classes = ['class1','class2','class3'];
      this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
    });
  });
  
  $(".align").on('click', function() {
      $("li").toggleClass("liststyle");
  });
    
  $(".hide-buttons").on('click', function() {
    $("button").toggle();
    $(".hide-buttons").show();
  });
  
  $(".print").on('click', function() {
    $("button").hide();
    window.print();
  });
 }
});