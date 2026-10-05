/* ==========================================================================
   Eleftheria site — interaction & motion layer. No dependencies.
   Every animated behaviour degrades to a static, fully-readable page when
   prefers-reduced-motion is set.
   ========================================================================== */

(function () {
  'use strict';

  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduced = motionQuery.matches;

  var $ = function (sel, root) {
    return (root || document).querySelector(sel);
  };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  /* ── Language ──────────────────────────────────────────────────────── */

  function initLang() {
    var i18n = window.VostokI18n;
    if (!i18n) return;

    i18n.apply(i18n.detect());

    var wrap = $('#lang');
    var btn = $('#langBtn');
    if (!wrap || !btn) return;

    var close = function () {
      wrap.setAttribute('data-open', 'false');
      btn.setAttribute('aria-expanded', 'false');
    };

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = wrap.getAttribute('data-open') === 'true';
      wrap.setAttribute('data-open', String(!open));
      btn.setAttribute('aria-expanded', String(!open));
    });

    $$('.lang-opt').forEach(function (opt) {
      opt.addEventListener('click', function () {
        i18n.apply(opt.getAttribute('data-lang'));
        close();
      });
    });

    document.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ── Theme ─────────────────────────────────────────────────────────── */

  function initTheme() {
    var KEY = 'vostok_site_theme';
    var root = document.documentElement;
    var btn = $('#themeBtn');
    var ico = $('#themeIco');
    var ICON_LIGHT = '/assets/images/AppIcon.png';
    var ICON_DARK = '/assets/images/AppIconDark.png';

    var stored = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch (_) {
      /* private mode */
    }

    var initial =
      stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    var paint = function (theme) {
      root.setAttribute('data-theme', theme);
      if (ico) ico.innerHTML = '<use href="#i-' + (theme === 'dark' ? 'sun' : 'moon') + '"/>';
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', theme === 'dark' ? '#121212' : '#f1f1f1');
      var markSrc = theme === 'dark' ? ICON_DARK : ICON_LIGHT;
      $$('[data-brand-mark]').forEach(function (img) {
        img.setAttribute('src', markSrc);
      });
    };

    paint(initial);

    if (btn) {
      btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        paint(next);
        try {
          localStorage.setItem(KEY, next);
        } catch (_) {
          /* ignore */
        }
      });
    }
  }

  /* ── Sticky nav ────────────────────────────────────────────────────── */

  function initNav() {
    var nav = $('#nav');
    if (!nav) return;
    var onScroll = function () {
      nav.setAttribute('data-stuck', String(window.scrollY > 12));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Scroll reveals ────────────────────────────────────────────────── */

  function initReveals() {
    var items = $$('[data-reveal]');

    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach(function (el) {
        el.classList.add('is-in');
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    items.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ── Hero headline ─────────────────────────────────────────────────── */

  function initHeroTitle() {
    var title = $('#heroTitle');
    if (!title) return;
    if (reduced) {
      document.body.classList.add('no-motion');
      title.classList.add('is-in');
      return;
    }
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        title.classList.add('is-in');
      });
    });
  }

  /* ── Stat counters ─────────────────────────────────────────────────── */

  function initCounters() {
    var nums = $$('[data-count]');
    if (!nums.length) return;

    var render = function (el, value) {
      el.textContent = String(value) + (el.getAttribute('data-suffix') || '');
    };

    var run = function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      if (reduced || target === 0) {
        render(el, target);
        return;
      }

      var duration = 1500;
      var start = null;

      var step = function (ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        // easeOutExpo
        var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        render(el, Math.round(target * eased));
        if (p < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
      nums.forEach(run);
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          run(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    nums.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ── Hub tabs ──────────────────────────────────────────────────────── */

  function initHubs() {
    var section = $('#hubs');
    if (!section) return;

    var tabs = $$('.hub-tab', section);
    var panels = $$('.hub-panel', section);

    var select = function (name, accent) {
      tabs.forEach(function (tab) {
        tab.setAttribute('aria-selected', String(tab.getAttribute('data-hub') === name));
      });

      panels.forEach(function (panel) {
        var match = panel.getAttribute('data-panel') === name;
        panel.hidden = !match;
        panel.classList.remove('is-swap');
        if (match && !reduced) {
          // Force reflow so the entrance animation replays on every switch.
          void panel.offsetWidth;
          panel.classList.add('is-swap');
        }
      });

      section.style.setProperty('--accent', accent);
    };

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        select(tab.getAttribute('data-hub'), tab.getAttribute('data-accent'));
      });
    });
  }

  /* ── FAQ accordion ─────────────────────────────────────────────────── */

  function initFaq() {
    $$('.qa').forEach(function (qa) {
      var btn = $('.qa-q', qa);
      var body = $('.qa-a', qa);
      var inner = $('.qa-a-inner', qa);
      if (!btn || !body || !inner) return;

      var open = function () {
        qa.setAttribute('data-open', 'true');
        body.style.height = inner.offsetHeight + 'px';
      };

      var close = function () {
        qa.setAttribute('data-open', 'false');
        // From a fixed height so the transition has something to animate from.
        body.style.height = inner.offsetHeight + 'px';
        void body.offsetWidth;
        body.style.height = '0px';
      };

      btn.addEventListener('click', function () {
        if (qa.getAttribute('data-open') === 'true') close();
        else open();
      });

      // Copy length changes per language — re-measure any open panel.
      document.addEventListener('vostok:langchange', function () {
        if (qa.getAttribute('data-open') === 'true') {
          body.style.height = inner.offsetHeight + 'px';
        }
      });

      window.addEventListener('resize', function () {
        if (qa.getAttribute('data-open') === 'true') {
          body.style.height = inner.offsetHeight + 'px';
        }
      });
    });
  }

  /* ── Card spotlight ────────────────────────────────────────────────── */

  function initSpotlight() {
    if (reduced) return;
    $$('[data-spotlight]').forEach(function (card) {
      card.addEventListener(
        'pointermove',
        function (e) {
          var r = card.getBoundingClientRect();
          card.style.setProperty('--mx', e.clientX - r.left + 'px');
          card.style.setProperty('--my', e.clientY - r.top + 'px');
        },
        { passive: true }
      );
    });
  }

  /* ── Hero parallax ─────────────────────────────────────────────────── */

  function initParallax() {
    if (reduced) return;
    var frame = $('#heroFrame');
    if (!frame) return;

    var ticking = false;

    var update = function () {
      var y = window.scrollY;
      if (y < 900) {
        frame.style.setProperty('--ty', (-y * 0.045).toFixed(2) + 'px');
        frame.style.setProperty('--rx', Math.max(0, 2.4 - y * 0.006).toFixed(2) + 'deg');
      }
      ticking = false;
    };

    update();
    window.addEventListener(
      'scroll',
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
      },
      { passive: true }
    );
  }

  /* ── Marquee ───────────────────────────────────────────────────────── */

  function initMarquee() {
    var track = $('#marquee');
    if (!track) return;
    var row = $('.marquee-row', track);
    if (!row) return;
    // The CSS loop translates by -50%, which only reads as seamless with an
    // exact duplicate of the row sitting behind the original.
    track.appendChild(row.cloneNode(true));
  }

  /* ── Waitlist ──────────────────────────────────────────────────────── */

  function initWaitlist() {
    var dlg = $('#waitlist');
    var form = $('#wlForm');
    if (!dlg || !form) return;

    var email = $('#wlEmail');
    var hp = $('#wlSite');
    var err = $('#wlErr');
    var label = $('#wlSubmitLabel');

    var t = function (key, fallback) {
      var i18n = window.VostokI18n;
      var v = i18n && i18n.t(i18n.current(), key);
      return v || fallback;
    };

    var setState = function (state) {
      dlg.setAttribute('data-state', state);
    };

    var open = function () {
      setState('idle');
      err.textContent = '';
      if (typeof dlg.showModal === 'function') dlg.showModal();
      else dlg.setAttribute('open', '');
      // Deliberately not autofocusing: it scroll-jumps on mobile keyboards.
    };

    var close = function () {
      if (typeof dlg.close === 'function') dlg.close();
      else dlg.removeAttribute('open');
    };

    $$('[data-waitlist]').forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        open();
      });
    });

    var closeBtn = $('#wlClose');
    var doneBtn = $('#wlDoneClose');
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (doneBtn) doneBtn.addEventListener('click', close);

    // Clicking the backdrop (the dialog's own box outside the card) closes it.
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg) close();
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (dlg.getAttribute('data-state') === 'sending') return;

      // A filled honeypot means a bot: pretend it worked, store nothing.
      if (hp && hp.value) {
        setState('done');
        return;
      }

      var value = (email.value || '').trim();
      if (!/^[^@\s]+@[^@\s.]+(\.[^@\s.]+)+$/.test(value)) {
        setState('error');
        err.textContent = t('wait.errInvalid', 'Enter a valid email address.');
        email.focus();
        return;
      }

      setState('sending');
      err.textContent = '';
      var idle = label.textContent;
      label.textContent = t('wait.sending', 'Sending…');

      fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: value,
          locale: (window.VostokI18n && window.VostokI18n.current()) || 'en',
          source: 'site',
          website: (hp && hp.value) || '',
        }),
      })
        .then(function (res) {
          if (!res.ok) throw new Error(String(res.status));
          return res.json();
        })
        .then(function () {
          setState('done');
          form.reset();
        })
        .catch(function (e) {
          setState('error');
          label.textContent = idle;
          err.textContent =
            String(e.message) === '429'
              ? t('wait.errRate', 'Too many attempts. Please try again in a minute.')
              : t('wait.errGeneric', 'Could not send that. Please try again.');
        });
    });
  }

  /* ── Smooth in-page links ──────────────────────────────────────────── */

  function initAnchors() {
    $$('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        if (!id || id === '#' || id === '#waitlist') return;
        // Waitlist triggers use data-waitlist; skip dialog anchors here.
        if (link.hasAttribute('data-waitlist')) return;

        // Brand / top: always scroll all the way to the page start.
        if (id === '#top' || link.classList.contains('brand')) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
          try {
            history.replaceState(null, '', '#top');
          } catch (_) {
            /* ignore */
          }
          return;
        }

        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var nav = $('#nav');
        var navH = nav ? nav.offsetHeight : 0;
        var viewH = window.innerHeight;
        var absTop = target.getBoundingClientRect().top + window.scrollY;
        // Prefer centering the section in the viewport below the sticky nav.
        // Cap the focus height so tall sections still land with clear headroom.
        var focusH = Math.min(target.offsetHeight, Math.max(280, (viewH - navH) * 0.55));
        var absMid = absTop + focusH / 2;
        var visibleMid = navH + (viewH - navH) / 2;
        var top = absMid - visibleMid;
        // Extra headroom so titles aren't tight under the nav.
        top -= 28;
        var max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        if (top < 0) top = 0;
        if (top > max) top = max;
        window.scrollTo({ top: top, behavior: reduced ? 'auto' : 'smooth' });
        try {
          history.replaceState(null, '', id);
        } catch (_) {
          /* ignore */
        }
      });
    });
  }

  /* ── Boot ──────────────────────────────────────────────────────────── */

  function boot() {
    if (reduced) document.body.classList.add('no-motion');
    initLang();
    initTheme();
    initNav();
    initMarquee();
    initReveals();
    initHeroTitle();
    initCounters();
    initHubs();
    initFaq();
    initSpotlight();
    initParallax();
    initWaitlist();
    initAnchors();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Respond to a live OS-level motion-preference change.
  var onMotionChange = function (e) {
    reduced = e.matches;
    document.body.classList.toggle('no-motion', reduced);
  };
  if (motionQuery.addEventListener) motionQuery.addEventListener('change', onMotionChange);
  else if (motionQuery.addListener) motionQuery.addListener(onMotionChange);
})();
