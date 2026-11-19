/* Publication label filter for /publications/ (loaded from _pages/publications.html) */
(function () {
  var buttons = document.querySelectorAll('.pub-filter .pub-label');
  var pubs = document.querySelectorAll('.pub');
  var sections = document.querySelectorAll('.pub-section');
  var empty = document.querySelector('.pub-empty');
  var current = '';

  function apply(label) {
    current = label;
    var anyShown = false;
    buttons.forEach(function (b) {
      var on = b.getAttribute('data-label') === label;
      b.classList.toggle('is-active', on);
      b.classList.toggle('is-dimmed', label !== '' && !on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    pubs.forEach(function (p) {
      var labels = (p.getAttribute('data-labels') || '').split(' ');
      p.classList.toggle('is-hidden', label !== '' && labels.indexOf(label) === -1);
    });
    // Also dim the non-matching labels on each paper card.
    document.querySelectorAll('.pub__labels .pub-label').forEach(function (t) {
      t.classList.toggle('is-dimmed', label !== '' && t.getAttribute('data-label') !== label);
    });
    sections.forEach(function (s) {
      var shown = s.querySelectorAll('.pub:not(.is-hidden)').length > 0;
      s.classList.toggle('is-hidden', !shown);
      if (shown) anyShown = true;
    });
    empty.classList.toggle('is-hidden', anyShown);
  }

  // Filter bar: click a label to filter, click it again (or "All") to clear.
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var label = b.getAttribute('data-label');
      apply(label === current ? '' : label);
    });
  });

  // Labels on each paper are also clickable shortcuts.
  document.querySelectorAll('.pub__labels .pub-label').forEach(function (tag) {
    tag.addEventListener('click', function () {
      apply(tag.getAttribute('data-label'));
      document.querySelector('.pub-filter').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
