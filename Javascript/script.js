const toggler = document.getElementByClassName("nav-toggler")
toggler.onclick = function(){
    document.getElementByClassName("collapse")

}


var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
