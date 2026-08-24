/**
 * Input Manager — clavier, télécommande de présentation, tactile.
 *
 * Touches supportées :
 *   Suivant   : →, ↓, PageDown, Space, Enter (télécommandes Logitech, Kensington, génériques)
 *   Précédent : ←, ↑, PageUp,  Backspace   (télécommandes idem)
 *   Début     : Home
 *   Fin       : End
 *
 * Le plein écran (F) et le thème sont gérés dans index-dynamic.html / main.js.
 */
export class InputManager {
    constructor(slideManager) {
        this.slideManager = slideManager;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.setupEventListeners();
    }

    setupEventListeners() {
        const NEXT_KEYS = new Set(['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Spacebar', 'Enter']);
        const PREV_KEYS = new Set(['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace']);

        document.addEventListener('keydown', (e) => {
            // Ignorer si l'utilisateur tape dans un champ éditable
            const tag = (e.target && e.target.tagName) || '';
            if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) {
                return;
            }
            // Ne pas capter les combinaisons Ctrl/Cmd/Alt (raccourcis navigateur)
            if (e.ctrlKey || e.metaKey || e.altKey) {
                return;
            }

            if (NEXT_KEYS.has(e.key)) {
                e.preventDefault();
                this.slideManager.changeSlide(1);
                return;
            }
            if (PREV_KEYS.has(e.key)) {
                e.preventDefault();
                this.slideManager.changeSlide(-1);
                return;
            }
            if (e.key === 'Home') {
                e.preventDefault();
                this.slideManager.goToSlide(1);
                return;
            }
            if (e.key === 'End') {
                e.preventDefault();
                this.slideManager.goToSlide(this.slideManager.getTotalSlides());
                return;
            }
        });

        // Touch / swipe (tablette, téléphone)
        document.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });
    }

    handleSwipe() {
        if (this.touchEndX < this.touchStartX - 50) {
            this.slideManager.changeSlide(1);
        }
        if (this.touchEndX > this.touchStartX + 50) {
            this.slideManager.changeSlide(-1);
        }
    }
}
