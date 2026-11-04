(function(){
  'use strict';
  const links=[...document.querySelectorAll('[data-news-image]')],modal=document.querySelector('#news-modal');
  if(!links.length||!modal)return;
  const stage=modal.querySelector('.news-gallery-stage'),dialog=modal.querySelector('.news-modal-dialog'),prev=modal.querySelector('.news-gallery-prev'),next=modal.querySelector('.news-gallery-next'),status=modal.querySelector('.news-gallery-status');
  let index=0,lastTrigger,touch=0;
  const render=()=>{
    stage.replaceChildren(links[index].querySelector('img').cloneNode());
    prev.hidden=next.hidden=status.hidden=links.length<2;
    status.textContent=links.length>1?`${index+1} / ${links.length}`:'';
  };
  const change=step=>{index=(index+step+links.length)%links.length;render()};
  const close=()=>{modal.hidden=true;document.body.classList.remove('modal-open');lastTrigger?.focus()};
  links.forEach((link,i)=>link.addEventListener('click',event=>{
    event.preventDefault();index=i;lastTrigger=link;render();
    modal.querySelector('#news-modal-title').textContent=document.querySelector('h1').textContent;
    modal.querySelector('.news-modal-content p').textContent=document.querySelector('.news-story>.section-copy').textContent;
    modal.querySelector('.news-modal-content>span').textContent=document.querySelector('.news-date').textContent;
    modal.hidden=false;document.body.classList.add('modal-open');dialog.querySelector('.news-modal-close').focus();
  }));
  prev.addEventListener('click',()=>change(-1));next.addEventListener('click',()=>change(1));
  modal.querySelectorAll('[data-close-modal]').forEach(button=>button.addEventListener('click',close));
  document.addEventListener('keydown',event=>{if(modal.hidden)return;if(event.key==='Escape')close();if(event.key==='ArrowLeft')change(-1);if(event.key==='ArrowRight')change(1)});
  stage.addEventListener('touchstart',event=>{touch=event.changedTouches[0].clientX},{passive:true});
  stage.addEventListener('touchend',event=>{const delta=event.changedTouches[0].clientX-touch;if(Math.abs(delta)>45)change(delta>0?-1:1)},{passive:true});
})();
