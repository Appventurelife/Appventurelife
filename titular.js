/* Kiplan - datos del titular.
   No estan escritos en las paginas: se montan aqui cuando una persona pulsa el boton. */
(function(){
  function d(t){try{return decodeURIComponent(escape(atob(t.split("").reverse().join(""))))}catch(e){return ""}}
  var D={"n": "==gelRXrD7WZCBibhZXS", "f": "NVTO0UTM5czN", "l": "==QKhF7whB3cFhCIh52byl2R", "c": "t92YuUmZpxWZyVHduVmdwBXYA9GdjFGdu92Y"};
  function correo(){
    var c=d(D.c);
    var l=document.querySelectorAll(".corr");
    for(var i=0;i<l.length;i++){l[i].textContent=c;l[i].setAttribute("href","mailto:"+c)}
  }
  function datos(){
    var box=document.getElementById("titular");if(!box)return;
    box.innerHTML='<dl><dt>Titular</dt><dd></dd><dt>NIF</dt><dd></dd><dt>Domicilio</dt><dd></dd><dt>Correo electr\u00f3nico</dt><dd><a class="corr" href="#"></a></dd><dt>Sitio web</dt><dd>appventurelife.com</dd></dl>';
    var dd=box.getElementsByTagName("dd");
    dd[0].textContent=d(D.n);dd[1].textContent=d(D.f);dd[2].textContent=d(D.l);
    correo();
  }
  document.addEventListener("DOMContentLoaded",function(){
    correo();
    var b=document.getElementById("ver-titular");
    if(b)b.addEventListener("click",function(e){if(e.isTrusted)datos()});
  });
})();
