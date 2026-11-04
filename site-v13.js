(function(){
  if(window.__bqSiteInitialized)return;
  window.__bqSiteInitialized=true;
  const siteRoot=new URL('.',document.currentScript.src);
  const courseSlug=document.body.dataset.course||'';
  const filePage=location.pathname.split('/').pop()||'index.html';
  const page=courseSlug?'curso.html':filePage;
  window.BQ_KOMMO_FORMS=window.BQ_KOMMO_FORMS||{home:{id:'1566559',hash:'5c52a186a8cf28ad8e70b9013bdf03d0',cache:'1786984351'},agendamento:{id:'1566631',hash:'829b8ec72f4346d0c519de4816b30f09',cache:'1786984484'},fundamental:{id:'1566635',hash:'43160b37fb52f1e7c0cb85c0f8e6d41c',cache:'1786984546'},medio:{id:'1566659',hash:'dcc988953b12f00095bcf922a6af5a9b',cache:'1786984656'},noturno:{id:'1566663',hash:'a86ceb7bf8a2a3271399706c113f7c58',cache:'1786984686'}};
  const attributionKeys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','gbraid','wbraid','fbclid','ttclid'];
  const attributionMaxAge=90*24*60*60*1000;
  const currentQuery=new URLSearchParams(location.search);
  const attributionUrl=new URL(location.href);attributionUrl.searchParams.delete('oppref');
  const attributionPage=attributionUrl.pathname+attributionUrl.search;
  let attribution={};
  try{attribution=JSON.parse(localStorage.getItem('bq_attribution')||'{}');if(!attribution||typeof attribution!=='object'||Array.isArray(attribution))attribution={}}catch(_){attribution={}}
  if(!attribution.savedAt||Date.now()-attribution.savedAt>attributionMaxAge)attribution={savedAt:Date.now(),first_page:attributionPage};
  attributionKeys.forEach(key=>{const value=currentQuery.get(key);if(value)attribution[key]=value});
  attribution.last_page=attributionPage;attribution.savedAt=attribution.savedAt||Date.now();
  try{localStorage.setItem('bq_attribution',JSON.stringify(attribution))}catch(_){}
  window.bqOrigem=key=>attribution[key]||'';
  window.dataLayer=window.dataLayer||[];
  window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});
  if(!document.querySelector('script[src*="googletagmanager.com/gtm.js"]')){const gtm=document.createElement('script');gtm.async=true;gtm.src='https://www.googletagmanager.com/gtm.js?id=GTM-PH28V244';document.head.append(gtm)}
  window.BQ_PAGINA=courseSlug?'curso/'+courseSlug+'.html':page;
  document.querySelectorAll('.header .nav').forEach(nav=>{if(!nav.querySelector('a:is([href="noticias.html"],[href="/noticias.html"])')){const news=document.createElement('a');news.href='noticias.html';news.textContent='Notícias';nav.insertBefore(news,nav.querySelector('.button')||null)}});
  document.querySelectorAll('.header .nav').forEach(nav=>{if(!nav.querySelector('a:is([href="conquistas.html"],[href="/conquistas.html"])')){const link=document.createElement('a');link.href='conquistas.html';link.textContent='Conquistas';nav.insertBefore(link,nav.querySelector('.button')||null)}});
  const professor='http://177.103.219.254:38200/intranet/plano_de_ensino';
  const ead='https://eadbentoquirino.com.br/ead/';
  const header=document.querySelector('.header');
  if(header){let topbar=header.querySelector('.topbar');if(!topbar){topbar=document.createElement('div');topbar.className='topbar';header.prepend(topbar)}topbar.innerHTML='<div class="container topbar-inner"><span>Mais de 110 anos transformando histórias</span><div class="topbar-actions"><a href="contato.html">Fale conosco</a><a class="topbar-student" href="servicos.html">Aluno BQ</a><a class="topbar-professor" href="'+professor+'" target="_blank" rel="noopener">Área do Professor <span aria-hidden="true">↗</span></a></div></div>'}
  const main=document.querySelector('main');if(main&&!main.id)main.id='conteudo';
  if(main&&!document.querySelector('.skip-link')){const skip=document.createElement('a');skip.className='skip-link';skip.href='#conteudo';skip.textContent='Ir para o conteúdo';document.body.prepend(skip)}
  document.querySelectorAll('.nav a').forEach(a=>{const target=(a.getAttribute('href')||'').split('?')[0].split('#')[0].split('/').pop();if(target===page||(courseSlug&&target==='cursos.html'))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  if(page==='sobre.html')document.querySelector('.inner-hero')?.classList.add('institutional-photo-hero');
  if(page==='fundamental.html')document.querySelector('.inner-hero')?.classList.add('fundamental-photo-hero');
  document.body.classList.add('page-'+page.replace('.html','').replace(/[^a-z0-9-]/g,'-'));
  const coursesLink=document.querySelector('.nav > a:is([href="cursos.html"],[href="/cursos.html"]),.nav > a[href="/cursos.html"]');
  if(coursesLink){
    const groups=[
      {label:'Ensino Médio + Técnico',href:'medio-tecnico.html',courses:[['Administração','administracao'],['Análises Clínicas','analises-clinicas'],['Biotecnologia','biotecnologia'],['Edificações','edificacoes'],['Eletrotécnica','eletrotecnica'],['Enfermagem','enfermagem'],['Farmácia','farmacia'],['Games','games'],['Informática','informatica'],['Mecatrônica','mecatronica'],['Nutrição','nutricao'],['Publicidade','publicidade'],['Química','quimica'],['Segurança do Trabalho','seguranca-trabalho'],['Veterinária','veterinaria']]},
      {label:'Técnico Noturno',href:'tecnico-noturno.html',courses:[['Análises Clínicas','analises-clinicas'],['Edificações','edificacoes'],['Eletrotécnica','eletrotecnica'],['Enfermagem','enfermagem'],['Farmácia','farmacia'],['Mecatrônica','mecatronica'],['Nutrição','nutricao'],['Química','quimica'],['Segurança do Trabalho','seguranca-trabalho'],['Veterinária','veterinaria']]},
      {label:'Cursos EAD',href:ead,courses:[['Administração','administracao'],['Informática','informatica'],['Logística','logistica'],['Transações Imobiliárias','transacoes-imobiliarias']]}
    ];
    const wrapper=document.createElement('div');wrapper.className='nav-courses';
    const mainLink=coursesLink.cloneNode(true);mainLink.classList.add('nav-courses-link');
    const toggle=document.createElement('button');toggle.className='nav-courses-toggle';toggle.type='button';toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir opções de cursos');toggle.innerHTML='<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 7.5 5 5 5-5"/></svg>';
    const dropdown=document.createElement('div');dropdown.className='nav-courses-dropdown';dropdown.setAttribute('aria-label','Modalidades e cursos');
    const all=document.createElement('a');all.href='cursos.html';all.className='nav-courses-all';all.innerHTML='<span>Ver todos os cursos</span><b aria-hidden="true">↗</b>';dropdown.append(all);
    const fundamental=document.createElement('a');fundamental.href='fundamental.html';fundamental.className='nav-modality-link nav-modality-fundamental';fundamental.innerHTML='<span><small>6º ao 9º ano</small>Ensino Fundamental II</span><b aria-hidden="true">↗</b>';dropdown.append(fundamental);
    groups.forEach((group,index)=>{
      const item=document.createElement('div');item.className='nav-course-group';
      const row=document.createElement('div');row.className='nav-modality-row';
      const link=document.createElement('a');link.href=group.href;link.className='nav-modality-link';link.innerHTML='<span><small>Modalidade</small>'+group.label+'</span>';
      if(group.label==='Cursos EAD'){link.target='_blank';link.rel='noopener'}
      const subToggle=document.createElement('button');subToggle.type='button';subToggle.className='nav-submenu-toggle';subToggle.setAttribute('aria-expanded','false');subToggle.setAttribute('aria-label','Mostrar cursos de '+group.label);subToggle.innerHTML='<span aria-hidden="true">›</span>';
      row.append(link,subToggle);item.append(row);
      const list=document.createElement('div');list.className='nav-course-list';list.id='nav-course-list-'+index;subToggle.setAttribute('aria-controls',list.id);
      const heading=document.createElement('div');heading.className='nav-course-list-heading';heading.innerHTML='<small>Explore os cursos</small><strong>'+group.label+'</strong>';list.append(heading);
      group.courses.forEach(([name,slug])=>{const courseLink=document.createElement('a');courseLink.href=new URL('curso/'+slug+'.html',siteRoot).href;courseLink.textContent=name;list.append(courseLink)});
      item.append(list);dropdown.append(item);
      subToggle.addEventListener('click',()=>{const open=item.classList.toggle('submenu-open');subToggle.setAttribute('aria-expanded',open);dropdown.querySelectorAll('.nav-course-group').forEach(other=>{if(other!==item){other.classList.remove('submenu-open');other.querySelector('.nav-submenu-toggle')?.setAttribute('aria-expanded','false')}})});
    });
    wrapper.append(mainLink,toggle,dropdown);coursesLink.replaceWith(wrapper);
    const setOpen=open=>{wrapper.classList.toggle('menu-open',open);wrapper.classList.toggle('menu-dismissed',!open);toggle.setAttribute('aria-expanded',open)};
    wrapper.addEventListener('pointerenter',()=>wrapper.classList.remove('menu-dismissed'));
    wrapper.addEventListener('focusin',()=>wrapper.classList.remove('menu-dismissed'));
    toggle.addEventListener('click',()=>setOpen(!wrapper.classList.contains('menu-open')));
    document.addEventListener('click',event=>{if(!wrapper.contains(event.target))setOpen(false)});
    wrapper.addEventListener('keydown',event=>{if(event.key==='Escape'){mainLink.focus();setOpen(false)}});
  }
  document.querySelectorAll('a:not([data-bq-rematricula])').forEach(a=>{const href=a.getAttribute('href')||'';if(/modalidade=ead|eadbentoquirino\.com\.br\/?$/i.test(href)||(/^#?$/.test(href)&&/\bEAD\b/i.test(a.textContent))){a.href=ead;a.target='_blank';a.rel='noopener'}});
  document.querySelectorAll('a').forEach(a=>{if(/agend|visita presencial|conhecer o campus/i.test(a.textContent)&&/contato\.html|matriculas\.html/.test(a.getAttribute('href')||''))a.href='agendar-visita.html'});
  if(page==='tour-virtual.html'){const visitButton=document.querySelector('main .cta-band .button');if(visitButton){visitButton.href='agendar-visita.html';visitButton.textContent='Agendar visita'}}
  const nav=document.querySelector('.nav');if(nav&&!nav.querySelector('a:is([href="parceiros.html"],[href="/parceiros.html"])')){const partner=document.createElement('a');partner.href='parceiros.html';partner.textContent='BQ Business';const news=[...nav.children].find(a=>/notícias/i.test(a.textContent));nav.insertBefore(partner,news||nav.querySelector('.button'))}
  if(nav){let campaignLink=nav.querySelector('.nav-campaign');if(!campaignLink){campaignLink=document.createElement('a');campaignLink.className='nav-campaign';campaignLink.href='concurso2027.html';campaignLink.textContent='Concurso de Bolsas';nav.insertBefore(campaignLink,nav.querySelector('.button'))}if(page==='concurso2027.html')campaignLink.setAttribute('aria-current','page')}
  const navStudent=nav&&nav.querySelector('a:is([href="servicos.html"],[href="/servicos.html"])');if(navStudent)navStudent.classList.add('nav-student');
  if(!document.querySelector('.whatsapp-float')){
    const whatsapp=document.createElement('a');
    whatsapp.className='whatsapp-float';
    whatsapp.href='https://api.whatsapp.com/send/?phone=558007712712&text=Olá!%20Estou%20no%20site%20do%20Bento%20Quirino%20e%20gostaria%20de%20tirar%20uma%20dúvida.';
    whatsapp.target='_blank';whatsapp.rel='noopener';whatsapp.setAttribute('aria-label','Tirar dúvidas pelo WhatsApp');
    whatsapp.innerHTML='<span class="whatsapp-float-label"><strong>Olá! Posso ajudar?</strong><small>Fale com a equipe pelo WhatsApp</small></span><span class="whatsapp-float-character"><img src="assets/bentinho-whatsapp.webp" alt="" width="420" height="420"><b aria-hidden="true">WhatsApp</b></span>';
    document.body.append(whatsapp);
  }
  document.querySelectorAll('.footer').forEach(footer=>{const grid=footer.querySelector('.footer-grid');if(!grid)return;let social=grid.querySelector('.footer-social');if(!social){social=document.createElement('div');social.className='footer-social';social.innerHTML='<h3>Redes sociais</h3><div class="social-links"><a href="https://www.instagram.com/bentoquirino/" target="_blank" rel="noopener" aria-label="Instagram do Bento Quirino" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg></a><a href="https://www.facebook.com/colegiobentoquirino" target="_blank" rel="noopener" aria-label="Facebook do Bento Quirino" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.4l.6-4h-4V9c0-.7.3-1 1-1Z"/></svg></a><a href="https://www.youtube.com/@BentoQuirinovlog" target="_blank" rel="noopener" aria-label="YouTube do Bento Quirino" title="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15.3V8.7L15.5 12l-5.8 3.3Z"/></svg></a><a href="https://www.tiktok.com/@colegiobentoquirino" target="_blank" rel="noopener" aria-label="TikTok do Colégio Bento Quirino" title="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 3c.4 2.2 1.7 3.6 4 4v3.3a8.4 8.4 0 0 1-4-1.2v6.2a6.3 6.3 0 1 1-5.4-6.2v3.4a3 3 0 1 0 2 2.8V3h3.4Z"/></svg></a></div>';grid.append(social)}});
  document.querySelectorAll('.footer-grid').forEach(grid=>{
    const sections=[...grid.children];
    const explore=sections.find(section=>/Explore|Cursos|Modalidades/i.test(section.querySelector('h3')?.textContent||''));
    if(!explore)return;
    const rcc=grid.querySelector('[data-bq-rcc-link]')||[...grid.querySelectorAll('a')].find(a=>/^(experi[eê]ncia bq|rcc)$/i.test(a.textContent.trim()))||document.createElement('a');
    rcc.textContent='RCC';
    rcc.href='https://novo.eadbentoquirino.com.br/ead/matricula/';
    rcc.setAttribute('data-bq-rcc-link','');
    if(!rcc.parentElement)explore.append(rcc);
    if(!explore.querySelector('a:is([href="tour-virtual.html"],[href="/tour-virtual.html"])'))explore.insertAdjacentHTML('beforeend','<a href="tour-virtual.html">Tour Virtual</a>');
    if(!explore.querySelector('a:is([href="biblioteca.html"],[href="/biblioteca.html"])'))explore.insertAdjacentHTML('beforeend','<a href="biblioteca.html">Biblioteca</a>');
    if(!explore.querySelector('a:is([href="agendar-visita.html"],[href="/agendar-visita.html"])'))explore.insertAdjacentHTML('beforeend','<a href="agendar-visita.html">Agendar visita</a>');
  });
  // bq-directory-links: complement existing footers without replacing their contents.
  document.querySelectorAll('.footer-grid').forEach(grid=>{
    const explore=[...grid.children].find(x=>/Explore|Cursos|Modalidades/i.test(x.querySelector('h3')?.textContent||''));
    if(explore)[['conquistas.html','Conquistas'],['transportes.html','Transportes']].forEach(([href,label])=>{if(!grid.querySelector('a[href="'+href+'"]')){const a=document.createElement('a');a.href=href;a.textContent=label;explore.append(a)}});
    // The shared script lives in the site folder, including local previews and /novo/.
    if(explore){
      let a=grid.querySelector('[data-bq-transparency-link]');
      if(!a){
        a=document.createElement('a');a.textContent='Transparência salarial';a.setAttribute('data-bq-transparency-link','');
        const college=[...explore.querySelectorAll('a')].find(link=>/(?:^|\/)sobre\.html(?:[?#]|$)/.test(link.getAttribute('href')||''));
        if(college)college.after(a);else explore.querySelector('h3').after(a);
      }
      a.href=new URL('transparencia-salarial.html',document.currentScript?.src||location.href).href;
    }
    const rcc=grid.querySelector('[data-bq-rcc-link]');if(rcc){rcc.target='_blank';rcc.rel='noopener'}
  });
  if(page==='transportes.html'&&!document.querySelector('[data-bq-transport-pdf]')){
    const guidance=document.querySelector('.transport-guidance');if(guidance){const a=document.createElement('a');a.href='assets/documentos/lista-transportes.pdf?v=20261015-gianeri-1';a.dataset.bqTransportPdf='';a.className='text-link';a.textContent='Consultar lista de transportes em PDF ↗';a.target='_blank';a.rel='noopener';guidance.after(a)}
  }
  if(page==='sobre.html'&&!document.querySelector('.institutional-access')){const cta=document.querySelector('main .cta-band')?.closest('.page-section');if(cta){const section=document.createElement('section');section.className='page-section institutional-access';section.innerHTML='<div class="container"><span class="eyebrow">Explore o campus</span><h2 class="section-title">Conheça o Bentinho de perto</h2><p class="section-copy">Visite nossos ambientes e descubra os recursos disponíveis para a comunidade escolar.</p><div class="institutional-access-grid"><a class="institutional-access-card access-tour" href="tour-virtual.html"><span>Campus em 360º</span><h3>Tour Virtual</h3><p>Explore os três andares do campus no seu ritmo.</p><strong>Começar o tour <b>→</b></strong></a><a class="institutional-access-card access-library" href="biblioteca.html"><span>Conhecimento e pesquisa</span><h3>Biblioteca</h3><p>Conheça o acervo, os espaços e os serviços disponíveis.</p><strong>Conhecer a biblioteca <b>→</b></strong></a></div></div>';cta.before(section)}}
  const menuButton=document.querySelector('.menu-button'),menu=document.querySelector('.nav');if(menuButton&&menu){if(!menu.id)menu.id='menu-principal';if(['404.html','agendar-visita.html','biblioteca.html','tour-virtual.html'].includes(page)&&!menuButton.onclick)menuButton.onclick=()=>menu.classList.toggle('open');menuButton.setAttribute('aria-controls',menu.id);menuButton.setAttribute('aria-expanded',menu.classList.contains('open'));document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('open')){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.focus()}});menuButton.addEventListener('click',()=>requestAnimationFrame(()=>menuButton.setAttribute('aria-expanded',menu.classList.contains('open'))))}
  document.querySelectorAll('a[target="_blank"]').forEach(a=>{if(!a.rel)a.rel='noopener'});
  const params=new URLSearchParams(location.search),course=courseSlug||params.get('curso');
  if(page==='matriculas.html'&&course&&window.BQ_COURSES&&Object.hasOwn(BQ_COURSES,course)){
    const hero=document.querySelector('.inner-hero .container');
    if(hero){const note=document.createElement('p');note.className='course-context';note.textContent='Interesse registrado: '+BQ_COURSES[course][0]+'. A equipe continuará o atendimento com esse contexto.';hero.insertBefore(note,hero.querySelector('.hero-actions'))}
  }
  const eventId=prefix=>prefix+'_'+(window.crypto?.randomUUID?crypto.randomUUID():Date.now().toString(36)+'_'+Math.random().toString(36).slice(2));
  const institutionalWhatsApp=link=>{
    try{const url=new URL(link.href);if(!['api.whatsapp.com','wa.me'].includes(url.hostname))return null;const phone=(url.hostname==='wa.me'?url.pathname.slice(1):url.searchParams.get('phone')||'').replace(/\D/g,'');return phone==='558007712712'?url:null}catch(_){return null}
  };
  const sourceReference=()=>String(window.bqOrigem('utm_source')||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9_-]/g,'').slice(0,48);
  const prepareWhatsApp=link=>{
    const url=institutionalWhatsApp(link);if(!url)return false;
    const messages={'tecnico-noturno.html':'Olá! Quero informações sobre o Técnico Noturno.','medio-tecnico.html':'Olá! Quero informações sobre o Ensino Médio + Técnico 2027.','fundamental.html':'Olá! Tenho interesse no Fundamental II e no agendamento de visita.'};
    if(!link.dataset.bqOriginalMessage){
      let original=url.searchParams.get('text')||'';
      if(course&&(courseSlug||page==='matriculas.html')&&window.BQ_COURSES&&Object.hasOwn(BQ_COURSES,course)&&(link.classList.contains('whatsapp-float')||!original))original='Olá! Tenho interesse no curso de '+BQ_COURSES[course][0]+' do Bento Quirino.';
      else if(messages[page]&&(link.classList.contains('whatsapp-float')||!original))original=messages[page];
      link.dataset.bqOriginalMessage=original||'Olá! Quero informações sobre o Bento Quirino.';
    }
    const original=link.dataset.bqOriginalMessage.replace(/\s*\[ref:[^\]]*\]/gi,'').trim();
    const source=sourceReference();url.searchParams.set('text',original+(source?' [ref: '+source+']':''));
    link.href=url.href;link.dataset.bqWhatsapp='';return true;
  };
  document.querySelectorAll('a[href]').forEach(prepareWhatsApp);
  // Delegação única: também cobre ícones e links inseridos depois do carregamento.
  document.addEventListener('click',event=>{
    const link=event.target instanceof Element?event.target.closest('a[href]'):null;
    if(!link||!prepareWhatsApp(link))return;
    const id=eventId('whatsapp');
    try{window.dataLayer.push({event:'whatsapp_click',event_id:id,pagina_nome:window.BQ_PAGINA,origem:sourceReference()||'direto',campanha:window.bqOrigem('utm_campaign')||'-'})}catch(_){}
    try{if(typeof window.oaiq==='function')window.oaiq('measure','custom',{type:'custom'},{custom_event_name:'whatsapp_clicked',event_id:id})}catch(_){}
  });
  document.querySelectorAll('a[href*="eadbentoquirino.com.br"]:not([data-bq-rcc-link]):not([data-bq-rematricula])').forEach(a=>{try{const url=new URL(a.href);if(!url.searchParams.has('utm_source'))url.searchParams.set('utm_source','site_bento_quirino');if(!url.searchParams.has('utm_medium'))url.searchParams.set('utm_medium','referral');if(!url.searchParams.has('utm_campaign'))url.searchParams.set('utm_campaign','cursos_ead');if(course&&!url.searchParams.has('utm_content'))url.searchParams.set('utm_content',course);a.href=url.toString()}catch(_){}});
  // Rematrícula conserva o destino próprio e reutiliza somente a atribuição já capturada.
  document.querySelectorAll('a[data-bq-rematricula]').forEach(a=>{try{const url=new URL(a.href);attributionKeys.forEach(key=>{if(attribution[key]&&!url.searchParams.has(key))url.searchParams.set(key,attribution[key])});a.href=url.href}catch(_){}});
  document.querySelectorAll('a[href]:not([data-bq-salary-report])').forEach(a=>{const raw=a.getAttribute('href')||'';if(!raw||raw.startsWith('#')||/^(mailto:|tel:|javascript:)/i.test(raw))return;try{const url=new URL(raw,siteRoot);if(url.origin!==location.origin||/\.pdf(?:$)/i.test(url.pathname)||url.pathname.includes('/novo/'))return;if(currentQuery.get('oppref')&&!url.searchParams.has('oppref'))url.searchParams.set('oppref',currentQuery.get('oppref'));attributionKeys.forEach(key=>{if(attribution[key]&&!url.searchParams.has(key))url.searchParams.set(key,attribution[key])});a.href=url.href}catch(_){}});

  const kommoMap={
    'index.html':[['home','Receba informações']],
    'fundamental.html':[['fundamental','Agende uma visita ao Fundamental II']],
    'medio-tecnico.html':[['medio','Quero a proposta e os valores']],
    'tecnico-noturno.html':[['noturno','Falar com um consultor']],
    'matriculas.html':[['agendamento','Iniciar pré-matrícula']],
    'sobre.html':[['agendamento','Agendar visita presencial']],
    'tour-virtual.html':[['agendamento','Gostou? Agende a visita real']],
    'contato.html':[['home','Fale conosco']]
  };
  let requestedForms=kommoMap[page]||[];
  if(page==='curso.html'&&course){
    const modes=window.BQ_COURSES?.[course]?.[2]||[];requestedForms=[];
    if(modes.includes('Médio + Técnico'))requestedForms.push(['medio','Ensino Médio + Técnico']);
    if(modes.includes('Noturno / Pós-Médio'))requestedForms.push(['noturno','Técnico Noturno']);
  }
  const formConfig=window.BQ_KOMMO_FORMS||{};
  const availableForms=requestedForms.filter(([key])=>formConfig[key]?.hash);
  if(availableForms.length&&page!=='concurso2027.html'&&!document.querySelector('#formulario')){
    const target=page==='index.html'
      ? document.querySelector('main > .enroll')
      : document.querySelector('main > .page-section:last-of-type')||document.querySelector('main');
    if(target){const section=document.createElement('section');section.id='formulario';section.className='page-section lead-form-section';section.tabIndex=-1;const cards=availableForms.map(([key,label])=>'<article class="lead-form-card"><h3>'+label+'</h3><div class="bq-kommo-form" data-form="'+key+'"><p>Carregando formulário…</p></div></article>').join('');section.innerHTML='<div class="container"><span class="eyebrow">Atendimento BQ</span><h2 class="section-title">'+(requestedForms.length>1?'Escolha a modalidade e fale com nossa equipe':'Vamos conversar?')+'</h2><p class="section-copy">Preencha seus dados para receber informações e atendimento personalizado.</p><div class="lead-form-grid">'+cards+'</div></div>';target.before(section)}
  }
  const registeredForms=new Set();
  // Os formulários das modalidades são criados acima. Posicione o acesso estático
  // imediatamente antes deles, inclusive quando #formulario já existir no HTML.
  if(['medio-tecnico.html','tecnico-noturno.html','fundamental.html'].includes(page)){
    const transportSection=document.querySelector('main > .bq-transport-access');
    const leadForm=document.querySelector('main > #formulario.lead-form-section');
    if(transportSection&&leadForm)leadForm.before(transportSection);
  }
  let redirectScheduled=false;
  const registerConversion=cfg=>{
    if(registeredForms.has(cfg.id))return true;
    if(typeof window.amo_forms_params?.onFormSubmit!=='function')return false;
    const seen=new Set();let attempt={id:eventId('form_'+cfg.id),completed:false};
    // Um submit observável inicia outra tentativa. No iframe, a navegação de sucesso
    // encerra a instância; IDs de submissão fornecidos pelo Kommo distinguem tentativas.
    document.addEventListener('submit',event=>{if(event.target.closest('.bq-kommo-form')?.dataset.form===Object.keys(formConfig).find(key=>formConfig[key].id===cfg.id))attempt={id:eventId('form_'+cfg.id),completed:false}},true);
    window.amo_forms_params.onFormSubmit(p=>{
      if(!p||p.status!=='success')return;
      if(p.form_id!=null&&String(p.form_id)!==String(cfg.id))return;
      const token=p.submission_id||p.submissionId||p.request_id||p.requestId;
      const key=token?'submission:'+String(token):attempt.id;
      if(seen.has(key)||(!token&&attempt.completed))return;
      seen.add(key);attempt.completed=true;
      const id=token?eventId('form_'+cfg.id):attempt.id;
      if(page!=='concurso2027.html'&&!redirectScheduled){redirectScheduled=true;setTimeout(()=>{
        const destination=new URL('obrigado-inscricao.html',siteRoot);
        if(course)destination.searchParams.set('curso',course);
        attributionKeys.forEach(key=>{if(attribution[key])destination.searchParams.set(key,attribution[key])});
        if(currentQuery.get('oppref'))destination.searchParams.set('oppref',currentQuery.get('oppref'));
        location.href=destination.href;
      },800)}
      try{window.dataLayer.push({event:'lead_formulario',event_id:id,form_id:p.form_id||cfg.id,pagina_nome:window.BQ_PAGINA,origem:window.bqOrigem('utm_source')||'direto',campanha:window.bqOrigem('utm_campaign')||'-'})}catch(_){}
      try{if(typeof window.oaiq==='function')window.oaiq('measure','lead_created',{type:'customer_action'},{event_id:id})}catch(_){}
    },Number(cfg.id));
    registeredForms.add(cfg.id);return true;
  };
  const loadKommo=(container,key)=>{const cfg=formConfig[key];if(!cfg?.hash)return;window.amo_forms_params=window.amo_forms_params||{setMeta:function(p){this.params=(this.params||[]).concat([p])}};window.amo_forms_load=window.amo_forms_load||function(f){window.amo_forms_load.f=(window.amo_forms_load.f||[]).concat([f])};window.amo_forms_loaded=window.amo_forms_loaded||function(f,k){window.amo_forms_loaded.f=(window.amo_forms_loaded.f||[]).concat([[f,k]])};window.amo_forms_load({id:cfg.id,hash:cfg.hash,locale:'pt'});const meta={primeira_pagina:attribution.first_page||location.pathname,pagina_lead:attributionPage,curso_interesse:course||''};attributionKeys.forEach(k=>{if(attribution[k])meta[k]=attribution[k]});if(window.amo_forms_params.setMeta)window.amo_forms_params.setMeta(meta);const loading=document.createElement('p');loading.textContent='Carregando formulário…';container.replaceChildren(loading);const observer=new MutationObserver(()=>{const frame=container.querySelector('iframe');if(frame){if(!frame.title)frame.title=container.closest('.lead-form-card')?.querySelector('h3')?.textContent||'Formulário de atendimento Bento Quirino';loading.remove();observer.disconnect()}});observer.observe(container,{childList:true,subtree:true});const script=document.createElement('script');script.addEventListener('error',()=>{observer.disconnect();const message=document.createElement('p');message.textContent='Não foi possível carregar o formulário. Fale com nossa equipe pelo contato.';const link=document.createElement('a');link.className='text-link';link.textContent='Falar com a equipe →';const destination=new URL('contato.html',siteRoot);if(course)destination.searchParams.set('curso',course);attributionKeys.forEach(key=>{if(attribution[key])destination.searchParams.set(key,attribution[key])});link.href=destination.href;container.replaceChildren(message,link)},{once:true});script.id='amoforms_script_'+cfg.id;script.async=true;script.charset='utf-8';script.src='https://forms.kommo.com/forms/assets/js/amoforms.js?'+(cfg.cache||'1786984351');container.append(script);if(!registerConversion(cfg)){let attempts=0;const timer=setInterval(()=>{attempts++;if(registerConversion(cfg)||attempts>=20)clearInterval(timer)},250)}};
  document.querySelectorAll('.bq-kommo-form[data-form]').forEach(node=>loadKommo(node,node.dataset.form));
  if(availableForms.length){const primaryLabels={'fundamental.html':'Agendar visita ao Fundamental II','medio-tecnico.html':'Quero a proposta e os valores','tecnico-noturno.html':'Falar com um consultor','matriculas.html':'Iniciar pré-matrícula','sobre.html':'Agendar visita presencial'};if(primaryLabels[page]){const candidates=[...document.querySelectorAll('main a.button,main a.button-yellow')].filter(a=>!a.hasAttribute('data-bq-rematricula')&&!a.hasAttribute('data-bq-transport-link')&&!a.hasAttribute('data-bq-whatsapp')&&!a.hasAttribute('data-bq-lead-cta')&&!a.hasAttribute('data-bq-rcc-link')&&!/\.pdf(?:[?#]|$)/i.test(a.getAttribute('href')||'')&&!/documentos-matricula\.html(?:[?#]|$)/.test(a.getAttribute('href')||'')&&!/comparar|explorar|document|curso/i.test(a.textContent));candidates.forEach(a=>{if(!a.closest('.lead-form-section')){a.href='#formulario';a.textContent=primaryLabels[page]}})}if(page==='curso.html'){document.querySelectorAll('main a[href*="matriculas.html"]:not([data-bq-transport-link])').forEach(a=>{a.href='#formulario';if(/quero estudar|inscrever/i.test(a.textContent))a.textContent='Quero estudar este curso'})}}
  const compareCourseLink=[...document.querySelectorAll('a.button')].find(a=>/comparar cursos|explorar todos os cursos/i.test(a.textContent));
  if(compareCourseLink&&page==='medio-tecnico.html'){compareCourseLink.href='cursos.html?modalidade=integrado#catalogo';compareCourseLink.textContent='Comparar cursos'}
  if(compareCourseLink&&page==='tecnico-noturno.html'){compareCourseLink.href='cursos.html?modalidade=noturno#catalogo'}
  // Metadados e JSON-LD são entregues no HTML; não os recriar no cliente.
  const isInnerPage=page!=='index.html'&&!document.body.classList.contains('course-page');
  if(isInnerPage){
    document.body.classList.add('motion-page');
    const revealTargets=[];
    const hero=document.querySelector('.inner-hero .container');
    if(hero){hero.classList.add('page-reveal','page-reveal--hero');revealTargets.push(hero)}
    document.querySelectorAll('main > .fact-strip, main > .page-section').forEach((section,sectionIndex)=>{
      if(section.classList.contains('fact-strip')){
        section.classList.add('page-reveal');
        section.style.setProperty('--page-delay','90ms');
        revealTargets.push(section);
        return;
      }
      const container=section.querySelector(':scope > .container');
      if(!container)return;
      const children=[...container.children].filter(element=>!element.matches('script,style,[hidden],.achievement-grid,.directory-grid'));
      if(!children.length){container.classList.add('page-reveal');revealTargets.push(container);return}
      children.forEach((element,index)=>{
        element.classList.add('page-reveal');
        element.style.setProperty('--page-delay',`${Math.min(index,5)*65}ms`);
        element.style.setProperty('--page-section',sectionIndex);
        revealTargets.push(element);
      });
    });
    const show=element=>element.classList.add('is-visible');
    if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
      const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){show(entry.target);observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -7%'});
      revealTargets.forEach((element,index)=>{if(index===0)requestAnimationFrame(()=>show(element));else observer.observe(element)});
    }else revealTargets.forEach(show);
  }
  const imageExpand=document.querySelector('.news-image-expand'),modalMedia=document.querySelector('.news-modal-media');if(imageExpand&&modalMedia){const collapseImage=()=>{modalMedia.classList.remove('is-expanded');imageExpand.setAttribute('aria-expanded','false');imageExpand.textContent='Ver imagem completa'};imageExpand.addEventListener('click',e=>{e.stopPropagation();const expanded=modalMedia.classList.toggle('is-expanded');imageExpand.setAttribute('aria-expanded',String(expanded));imageExpand.textContent=expanded?'Voltar à notícia':'Ver imagem completa'});document.querySelectorAll('[data-close-modal]').forEach(button=>button.addEventListener('click',collapseImage));document.addEventListener('keydown',e=>{if(e.key==='Escape')collapseImage()})}
  const dialog=document.querySelector('.news-modal-dialog');if(dialog){dialog.tabIndex=-1;document.addEventListener('keydown',e=>{const modal=document.querySelector('.news-modal');if(!modal||modal.hidden||e.key!=='Tab')return;const focusable=[...dialog.querySelectorAll('button,[href],[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled);if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}})}
  document.querySelectorAll('[href],[src]').forEach(element=>{
    ['href','src'].forEach(attribute=>{
      const value=element.getAttribute(attribute);
      if(!value||value.startsWith('#')||value.startsWith('/')||/^[a-z][a-z0-9+.-]*:/i.test(value))return;
      element.setAttribute(attribute,new URL(value,siteRoot).href);
    });
  });
})();
