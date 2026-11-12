(function(){
  var root=document.documentElement;
  var burger=document.querySelector('.hamburger');
  var drawer=document.getElementById('mob-drawer');
  var overlay=document.querySelector('.mob-overlay');
  var closeBtn=document.querySelector('.drawer-close');
  function openDrawer(){
    if(!drawer)return;
    drawer.hidden=false;
    overlay.classList.add('visible');
    burger.setAttribute('aria-expanded','true');
    root.style.overflow='hidden';
  }
  function closeDrawer(){
    if(!drawer)return;
    drawer.hidden=true;
    overlay.classList.remove('visible');
    burger.setAttribute('aria-expanded','false');
    root.style.overflow='';
  }
  if(burger){burger.addEventListener('click',function(){burger.getAttribute('aria-expanded')==='true'?closeDrawer():openDrawer();});}
  if(closeBtn){closeBtn.addEventListener('click',closeDrawer);}
  if(overlay){overlay.addEventListener('click',closeDrawer);}
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeDrawer();});
  window.addEventListener('resize',function(){if(window.innerWidth>768)closeDrawer();});
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click',function(){
      var item=btn.closest('.faq-item');
      var open=item.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
  });
})();
