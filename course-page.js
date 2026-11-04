(function(){
  'use strict';
  const routes=window.BQ_COURSE_ROUTES;
  if(routes){
    const params=new URLSearchParams(location.search),key=params.get('curso');
    if(key&&Object.prototype.hasOwnProperty.call(routes,key)){
      const destination=new URL(routes[key],location.origin);
      params.delete('curso');destination.search=params.toString();destination.hash=location.hash;
      location.replace(destination.href);return;
    }
    const status=document.getElementById('course-route-status');
    if(status)status.textContent=key?'Curso não encontrado. Escolha uma das formações do catálogo abaixo.':'Escolha uma das formações do catálogo abaixo.';
  }
  const b=document.querySelector('.menu-button'),n=document.querySelector('.nav');
  if(b&&n)b.onclick=()=>{const open=n.classList.toggle('open');b.setAttribute('aria-expanded',open)};
  if(!document.body.dataset.course)return;
  // Conteúdo e metadados estáticos são preservados; aqui só há comportamento visual.
  const targets=[...document.querySelectorAll('.course-page .page-section,.course-page .fact-strip')];
  targets.forEach((element,index)=>{element.classList.add('course-reveal');element.style.setProperty('--reveal-delay',`${Math.min(index,3)*55}ms`)});
  if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -48px'});
    targets.forEach(element=>observer.observe(element));
  }else targets.forEach(element=>element.classList.add('is-visible'));
  const curriculum=document.querySelector('.curriculum');
  if(curriculum){curriculum.addEventListener('toggle',()=>curriculum.classList.toggle('is-open',curriculum.open));curriculum.classList.toggle('is-open',curriculum.open)}
})();
