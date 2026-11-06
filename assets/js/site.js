// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  };
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (nav.classList.contains('is-open') && !event.target.closest('.site-head')) setOpen(false);
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', () => setOpen(false));
}

// Marks the section in view in the "On this page" bar
const subnav = document.querySelector('.subnav');

if (subnav) {
  const list = subnav.querySelector('ul');
  const links = [...subnav.querySelectorAll('a')];
  const targets = links.map((link) => document.querySelector(link.hash));
  let active = null;
  let queued = false;

  const update = () => {
    queued = false;
    const line = window.innerHeight * 0.4;
    let index = -1;
    targets.forEach((target, i) => {
      if (target.getBoundingClientRect().top <= line) index = i;
    });
    const link = links[index] || null;
    if (link === active) return;
    if (active) active.removeAttribute('aria-current');
    active = link;
    if (link) {
      link.setAttribute('aria-current', 'true');
      list.scrollTo({ left: link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2 });
    }
  };

  const queue = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
  update();
}

// The interest form is not connected to a service yet, so it confirms that nothing was sent.
const form = document.getElementById('interest-form');

if (form) {
  const status = document.getElementById('form-status');
  const interest = form.elements.interest;
  const requested = new URLSearchParams(window.location.search).get('interest');

  if ([...interest.options].some((option) => option.value === requested)) interest.value = requested;

  const showError = (field) => {
    const error = document.getElementById(`${field.id}-error`);
    const invalid = !field.checkValidity();
    error.hidden = !invalid;
    if (invalid) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
    return invalid;
  };

  const required = [...form.querySelectorAll('[required]')];

  required.forEach((field) => {
    const clear = () => {
      if (field.hasAttribute('aria-invalid')) showError(field);
    };
    field.addEventListener('input', clear);
    field.addEventListener('change', clear);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalid = required.filter(showError);
    if (invalid.length) {
      status.classList.remove('is-sent');
      status.textContent = 'Please complete the highlighted fields. This form is not connected yet, so nothing is sent or saved.';
      invalid[0].focus();
      return;
    }
    status.textContent = 'This is a review mockup, so nothing was sent or saved. The live form will deliver this to ACDI.';
    status.classList.add('is-sent');
  });
}
