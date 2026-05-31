/**
 * ASSOCIAÇÃO MILK — MOTOR CINÉTICO
 * Pilar 3: Script Institucional
 * Versão 1.0 | Maio 2026 | EUPL 1.2
 *
 * Responsabilidades:
 * 1. Reveal progressivo via IntersectionObserver
 * 2. Linhas cinemáticas de fundo animadas por scroll
 * 3. Degradação graciosa (sem erros em ausência de elementos)
 */

(function () {
    'use strict';

    /* ------------------------------------------------------------------
       CONSTANTES
    ------------------------------------------------------------------ */
    var SCROLL_THRESHOLD = 50;        // px antes de activar as linhas
    var REVEAL_THRESHOLD = 0.1;       // % do elemento visível para revelar
    var FALLBACK_DELAY   = 1500;      // ms fallback para revelar sem scroll

    /* ------------------------------------------------------------------
       UTILITÁRIO: selecção segura de elementos
    ------------------------------------------------------------------ */
    function $(selector) {
        return document.querySelector(selector);
    }
    function $$(selector) {
        return Array.from(document.querySelectorAll(selector));
    }

    /* ------------------------------------------------------------------
       1. REVEAL PROGRESSIVO
       Usa IntersectionObserver para revelar .reveal quando entra no viewport.
       Fallback de timeout para quando o JS corre antes de qualquer scroll.
    ------------------------------------------------------------------ */
    function initReveal() {
        var elements = $$('.reveal');
        if (!elements.length) return;

        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Parar de observar após reveal (performance)
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: REVEAL_THRESHOLD });

            elements.forEach(function (el) { observer.observe(el); });
        } else {
            // Fallback: revelar tudo imediatamente
            elements.forEach(function (el) { el.classList.add('active'); });
        }

        // Fallback de timeout: garante visibilidade mesmo sem scroll inicial
        setTimeout(function () {
            elements.forEach(function (el) { el.classList.add('active'); });
        }, FALLBACK_DELAY);
    }

    /* ------------------------------------------------------------------
       2. LINHAS CINEMÁTICAS
       Anima as linhas SVG de fundo em resposta ao scroll.
       Usa requestAnimationFrame para performance.
    ------------------------------------------------------------------ */
    function initCinematicLines() {
        var lines = $('#background-lines');
        var paths = $$('.cinematic-line');
        if (!lines || !paths.length) return;

        var ticking = false;
        var lastScroll = 0;

        function updateLines(scrollY) {
            if (scrollY > SCROLL_THRESHOLD) {
                lines.classList.add('visible');
                paths.forEach(function (path, i) {
                    var speed  = 0.002 + (i * 0.001);
                    var wave   = Math.sin(scrollY * speed) * (10 + i * 5);
                    var origin = 20 + (i * 30);
                    path.setAttribute('d',
                        'M' + (origin + wave) + ',-10 '
                        + 'Q' + (origin - wave) + ',300 '
                        + origin + ',600 '
                        + 'T' + origin + ',1100'
                    );
                });
            } else {
                lines.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', function () {
            lastScroll = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    updateLines(lastScroll);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    /* ------------------------------------------------------------------
       3. INICIALIZAÇÃO
    ------------------------------------------------------------------ */
    document.addEventListener('DOMContentLoaded', function () {
        initReveal();
        initCinematicLines();
    });

})();
