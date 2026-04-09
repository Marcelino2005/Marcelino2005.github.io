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
    return;
  }

  const isExternal = /^https?:\/\//.test(href) && !href.includes(location.hostname);
  if (isExternal) return;

  e.preventDefault();
  document.body.classList.add('page-leaving');

  setTimeout(function () {
    window.location.href = href;
  }, 450);
});