(function () {
  'use strict';
  const categories = {vestibulares: 'Vestibulares & ENEM', robotica: 'Robótica & Tecnologia', matematica: 'Olimpíadas Acadêmicas', emprego: 'Emprego/Estágio'};
  const hasAchievementYear = item => Number.isInteger(item.year);
  const hasText = value => typeof value === 'string' && value.trim().length > 0;
  const isRecord = item => item && (hasText(item.name) || hasText(item.summary) || hasText(item.testimonial) || hasText(item.detail)) && (item.year == null || item.year === '' || hasAchievementYear(item)) && Object.hasOwn(categories, item.category);
  let records = (window.BQ_ACHIEVEMENTS || []).filter(isRecord);
  const testimonialsUrl = new URL('dados/depoimentos.json', document.currentScript.src);
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const form = document.getElementById('achievement-filters');
  const year = document.getElementById('achievement-year');
  const search = document.getElementById('achievement-search');
  const grid = document.getElementById('achievement-grid');
  const empty = document.getElementById('achievement-empty');
  const count = document.getElementById('achievement-count');
  const track = document.getElementById('highlight-track');
  let category = '';
  // Years come from the records, independently of the chosen category.
  const years = [...new Set(records.filter(hasAchievementYear).map(item => item.year))].sort((a, b) => b - a);
  year.replaceChildren(new Option('Todos os anos', ''));
  years.forEach(value => year.add(new Option(String(value), String(value))));
  year.closest('label').hidden = years.length === 0;
  function textElement(tag, content, className) {
    const element = document.createElement(tag);
    element.textContent = content;
    if (className) element.className = className;
    return element;
  }
  function card(item) {
    const article = document.createElement('article');
    article.className = 'achievement-card achievement-' + item.category;
    if (item.id) article.dataset.testimonialId = item.id;
    const media = document.createElement('div');
    media.className = 'achievement-photo';
    // Only local site images are accepted; no remote tracking URLs or inline code.
    if (item.photo && /^assets\/[\w\-./]+\.(?:webp|jpe?g|png)$/i.test(item.photo) && !item.photo.includes('..')) {
      const img = document.createElement('img');
      img.src = item.photo;
      img.alt = item.photoAlt || item.name || '';
      img.loading = 'lazy';
      img.decoding = 'async';
      if (Number.isInteger(item.photoWidth) && item.photoWidth > 0) img.width = item.photoWidth;
      if (Number.isInteger(item.photoHeight) && item.photoHeight > 0) img.height = item.photoHeight;
      img.addEventListener('error', () => {img.remove(); media.append(textElement('span', 'Orgulho Bentinho', 'photo-fallback'));}, {once: true});
      media.append(img);
    } else media.append(textElement('span', 'Orgulho Bentinho', 'photo-fallback'));
    const body = document.createElement('div');
    body.className = 'achievement-body';
    if (hasText(item.badge)) body.append(textElement('span', item.badge, 'achievement-badge'));
    const meta = [categories[item.category]];
    if (hasAchievementYear(item)) meta.push('Ano da conquista: ' + item.year);
    body.append(textElement('p', meta.join(' · '), 'achievement-meta'));
    if (hasText(item.name)) body.append(textElement('h3', item.name));
    if (hasText(item.institution)) body.append(textElement('p', (item.category === 'emprego' ? 'Empresa: ' : '') + item.institution, 'achievement-institution'));
    if (hasText(item.course)) body.append(textElement('p', 'Curso: ' + item.course, 'achievement-course'));
    const education = [];
    if (Number.isInteger(item.graduationYear)) education.push('Formação: ' + item.graduationYear);
    if (Number.isInteger(item.enrollmentYear)) education.push('Ingresso: ' + item.enrollmentYear);
    if (hasText(item.studyPeriod)) education.push('Período de estudos: ' + item.studyPeriod);
    if (Number.isInteger(item.expectedGraduationYear)) education.push('Formação prevista: ' + item.expectedGraduationYear);
    if (education.length) body.append(textElement('p', education.join(' · '), 'achievement-meta'));
    if (hasText(item.role)) body.append(textElement('p', 'Cargo: ' + item.role, 'achievement-role'));
    if (hasText(item.summary) || hasText(item.detail)) body.append(textElement('p', item.summary || item.detail));
    // The exact source-provided note type belongs in badge/detail; never infer ENEM averages.
    if (hasText(item.testimonial)) {
      const details = document.createElement('details');
      details.className = 'achievement-testimonial';
      const quote = document.createElement('blockquote');
      item.testimonial.split(/\n\s*\n/).filter(hasText).forEach(paragraph => quote.append(textElement('p', paragraph)));
      details.append(textElement('summary', 'Ler depoimento completo'), quote);
      body.append(details);
    }
    article.append(media, body);
    return article;
  }
  function render() {
    const query = normalize(search.value.trim());
    const matches = records.filter(item => (!category || item.category === category) && (!year.value || String(item.year) === year.value) && normalize([item.name, item.course, item.institution, item.role, item.badge, item.summary].join(' ')).includes(query));
    grid.replaceChildren(...matches.map(card));
    count.hidden = records.length === 0;
    count.textContent = `${matches.length} ${matches.length === 1 ? 'conquista encontrada' : 'conquistas encontradas'}`;
    empty.hidden = matches.length > 0;
    if (records.length) {
      empty.querySelector('h3').textContent = 'Nenhuma conquista encontrada';
      empty.querySelector('p').textContent = 'Tente outro nome, empresa ou cargo, ou limpe a seleção para ver todos os resultados.';
      if (!empty.querySelector('button')) {
        const clear = textElement('button', 'Limpar seleção', 'clear-filters');
        clear.type = 'button';clear.addEventListener('click', () => form.reset());empty.append(clear);
      }
    }
    const highlights = matches.filter(item => item.featured && item.photo);
    document.getElementById('achievement-highlights').hidden = highlights.length < 2;
    track.replaceChildren(...(highlights.length >= 2 ? highlights.map(card) : []));
    const teams = matches.filter(item => item.category === 'robotica' && item.team && item.photo);
    document.getElementById('robotics-gallery').hidden = teams.length < 2;
    document.getElementById('robotics-grid').replaceChildren(...(teams.length >= 2 ? teams.map(card) : []));
  }
  function scrollHighlights(direction) {
    track.scrollBy({left: direction * track.clientWidth * .85, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }
  document.querySelector('[data-highlight-prev]').addEventListener('click', () => scrollHighlights(-1));
  document.querySelector('[data-highlight-next]').addEventListener('click', () => scrollHighlights(1));
  track.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {event.preventDefault();scrollHighlights(event.key === 'ArrowRight' ? 1 : -1);}
    if (event.key === 'Home' || event.key === 'End') {event.preventDefault();track.scrollLeft = event.key === 'Home' ? 0 : track.scrollWidth;}
  });
  const buttons = [...form.querySelectorAll('[data-category]')];
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.category;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    render();
  }));
  year.addEventListener('change', render);
  search.addEventListener('input', render);
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('reset', () => {category = '';buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === '')));setTimeout(render, 0);});
  render();
  // Keep the supplied JSON as the source; map only public fields into the existing cards.
  fetch(testimonialsUrl).then(response => {
    if (!response.ok) throw new Error('HTTP ' + response.status);
    return response.json();
  }).then(testimonials => {
    if (!Array.isArray(testimonials)) throw new Error('Formato de depoimentos inválido');
    testimonials.forEach(item => {
      const record = {
        id: item.id,
        name: item.nome,
        category: 'emprego',
        course: item.curso,
        graduationYear: item.anoFormacao,
        enrollmentYear: item.anoIngresso,
        studyPeriod: item.periodo,
        role: item.cargo,
        badge: item.titulo,
        summary: item.resumo,
        testimonial: item.depoimento,
        photo: hasText(item.imagem) ? 'assets/conquistas/' + item.imagem : undefined,
        photoAlt: item.alt
      };
      if (!isRecord(record)) return;
      const existing = records.findIndex(saved => (record.id && saved.id === record.id) || (hasText(record.name) && normalize(saved.name) === normalize(record.name)));
      if (existing === -1) records.push(record);
      else records[existing] = {...records[existing], ...record};
    });
    render();
  }).catch(error => console.error('Não foi possível carregar os depoimentos.', error));
})();
