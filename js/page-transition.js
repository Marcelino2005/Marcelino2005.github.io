console.log('page transition loaded');

document.addEventListener('click', function (e) {
  const link = e.target.closest('a');

  if (!link) return;

  const href = link.getAttribute('href');
  console.log('clicked:', href);

  if (
    !href ||
    href.startsWith('#') ||
    href.startsWith('javascript:') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    link.target === '_blank' ||
    e.ctrlKey ||
    e.metaKey ||
    e.shiftKey ||
    e.altKey
  ) {
    console.log('skipped');
    return;
  }

  const isExternal = /^https?:\/\//.test(href) && !href.includes(location.hostname);
  if (isExternal) {
    console.log('external skipped');
    return;
  }

  e.preventDefault();

  console.log('adding page-leaving');
  document.body.classList.add('page-leaving');

  setTimeout(() => {
    window.location.href = href;
  }, 400);
});