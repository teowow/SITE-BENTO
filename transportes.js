(function(){
  'use strict';
  const filters=document.querySelector('[data-transport-filters]');
  if(!filters)return;
  const search=filters.querySelector('input[type="search"]');
  const buttons=[...filters.querySelectorAll('[data-transport-period]')];
  const clear=filters.querySelector('[data-transport-clear]');
  const status=document.querySelector('[data-transport-status]');
  const empty=document.querySelector('[data-transport-empty]');
  const normalize=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR').trim();
  // O HTML é a fonte dos contatos. Por orientação do colégio, os registros
  // sem indicação de período são classificados como matutinos.
  const contacts=[...document.querySelectorAll('[data-transport-contact]')].map(card=>({
    card,
    text:normalize(card.querySelector('h3').textContent+' '+card.querySelector('.transport-region').textContent),
    periods:(card.dataset.periodos||'matutino').split(/\s+/).filter(Boolean)
  }));
  let period='';
  function update(){
    const terms=normalize(search.value).split(/\s+/).filter(Boolean);
    let count=0;
    contacts.forEach(contact=>{
      const visible=(!period||contact.periods.includes(period))&&terms.every(term=>contact.text.includes(term));
      contact.card.hidden=!visible;
      if(visible)count++;
    });
    buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.transportPeriod===period)));
    status.textContent=count===1?'1 transportador encontrado.':`${count} transportadores encontrados.`;
    empty.hidden=count!==0;
    clear.disabled=!search.value&&!period;
  }
  search.addEventListener('input',update);
  buttons.forEach(button=>button.addEventListener('click',()=>{
    period=period===button.dataset.transportPeriod?'':button.dataset.transportPeriod;
    update();
  }));
  filters.addEventListener('reset',event=>{
    event.preventDefault();
    search.value='';
    period='';
    update();
    search.focus();
  });
  filters.addEventListener('submit',event=>event.preventDefault());
  update();
  filters.hidden=false;
})();
