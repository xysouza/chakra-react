// A robust smooth scroll utility that animates window scroll
// Works even when native smooth scrolling is disabled.
export function smoothScrollTo(target, options = {}) {
  const { duration = 650, offset = 0, updateHash = false } = options;

  const element =
    typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const rect = element.getBoundingClientRect();
  const targetY = rect.top + startY - offset;

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const y = startY + (targetY - startY) * easeInOutCubic(progress);
    window.scrollTo(0, y);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else if (updateHash && typeof target === 'string') {
      // Update hash without triggering a jump
      history.replaceState(null, '', target);
    }
  }

  requestAnimationFrame(step);
}
