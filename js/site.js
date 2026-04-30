/* Now Hiring Salespeople — site.js */

(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('is-open');
      var expanded = links.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Highlight active nav link based on current page
  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').toLowerCase();
    if (href === here || (here === '' && href === 'index.html')) {
      a.classList.add('is-active');
    }
  });

  // Async form submission to Formspree, with inline success message
  document.querySelectorAll('form[data-formspree]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var endpoint = form.getAttribute('action');
      var successEl = form.parentElement.querySelector('.form-success');
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn ? submitBtn.textContent : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            if (successEl) {
              successEl.classList.add('is-visible');
              successEl.textContent = successEl.dataset.success || 'Thanks — you’re on the list.';
            }
          } else {
            response.json().then(function (data) {
              if (successEl) {
                successEl.classList.add('is-visible');
                successEl.style.borderLeftColor = '#0D0D0D';
                successEl.textContent = (data && data.error) || 'Something went wrong. Try again?';
              }
            });
          }
        })
        .catch(function () {
          if (successEl) {
            successEl.classList.add('is-visible');
            successEl.style.borderLeftColor = '#0D0D0D';
            successEl.textContent = 'Network error. Try again in a moment.';
          }
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        });
    });
  });
})();
