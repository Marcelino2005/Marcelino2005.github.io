document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');

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

      setTimeout(() => {
        window.location.href = href;
      }, 380);
    });
  });
});