 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems );
  });
   function pageSelect(){
var pasirinkimas = document.getElementById('pasirinkimas').value;
 
 if(pasirinkimas=="1"){
 	window.location.href = "laurynas.html";
 }
  else if(pasirinkimas=="2"){
 	window.location.href = "justinas.html";
 }
  else if(pasirinkimas=="3"){
 	window.location.href = "sebastian.html";
 }

}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      
    });
  });


function open1(){
  window.location.href = "news2.html"
}
function open2(){
  window.location.href = "news3.html"
}
function open3(){
  window.location.href = "news4.html"
}
function open4(){
  window.location.href = "news5.html"
}
function open5(){
  window.location.href = "news1.html"
}

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  function openSeb(){
  window.location.href = "sebastian.html"
}

  function openJust(){
  window.location.href = "justinas.html"
}

  function openLaur(){
  window.location.href = "laurynas.html"
}