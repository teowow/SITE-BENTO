(function(){
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets=[...document.querySelectorAll('.cb-video-grid>*,.cb-about .cb-two-columns>*,.cb-test .section-heading>*,.cb-subjects article,.cb-timeline>.container>*,.cb-steps article,.cb-form-grid>*,.cb-faq>.container>*')];
  targets.forEach((item,index)=>{
    item.classList.add('cb-reveal');
    item.style.transitionDelay=`${Math.min(index%5,4)*60}ms`;
  });
  if(reduce||!('IntersectionObserver' in window)) targets.forEach(item=>item.classList.add('is-visible'));
  else{
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
    }),{threshold:.12,rootMargin:'0px 0px -7%'});
    targets.forEach(item=>observer.observe(item));
  }
  const art=document.querySelector('.cb-art');
  if(art&&!reduce&&window.matchMedia('(pointer:fine)').matches){
    art.addEventListener('pointermove',event=>{
      const rect=art.getBoundingClientRect();
      const x=(event.clientX-rect.left)/rect.width-.5;
      const y=(event.clientY-rect.top)/rect.height-.5;
      art.style.transform=`perspective(900px) rotateY(${x*4}deg) rotateX(${-y*4}deg)`;
    });
    art.addEventListener('pointerleave',()=>art.style.transform='');
  }
})();
