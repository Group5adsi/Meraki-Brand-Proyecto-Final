const app = new Vue({
  el:'#app',
  data:{
    titulo:'bienvenido',
   cambio: 'overflow:hidden'
      
   
  }
})



$(document).ready(function(){
  alert("este es jquery");
})






$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 1920,
  mode: 'fade',
  speed: 1000,
  slideMargin: 250,
  pager: false,
});

