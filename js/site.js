(() => {
  "use strict";

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.getElementById("menuToggle");
  const nav = document.getElementById("primaryNav");
  if (menuButton && nav) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
      nav.classList.remove("is-open");
    };
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("is-open", open);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  }

  const revealTargets = document.querySelectorAll(".section-label, .section-heading, .story-card, .care-row, .doctor-photo-frame, .doctor-copy, .online-card, .urgent-banner, .visit-layout > div");
  revealTargets.forEach((element) => element.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
    revealTargets.forEach((element) => observer.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
  }

  const track = document.getElementById("coatTrack");
  const stage = document.getElementById("coatStage");
  const canvas = document.getElementById("heroCanvas");
  if (!track || !stage || !canvas) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const frameCount = 197;
  const frames = new Array(frameCount);
  const context = canvas.getContext("2d", { alpha: false });
  let currentFrame = 0;
  let scheduled = false;
  let lastProgress = -1;
  let frameFolder = "assets/hero-sequence/";
  let frameWidth = 1440;
  let frameHeight = 810;

  const mobileFrames = window.matchMedia("(max-width: 880px)");
  let activeMobile = null;
  function selectFrameSet() {
    if (mobileFrames.matches === activeMobile && frames[0]) return;
    activeMobile = mobileFrames.matches;
    if (activeMobile) {
      frameFolder = "assets/hero-mobile/";
      frameWidth = 540;
      frameHeight = 960;
    } else {
      frameFolder = "assets/hero-sequence/";
      frameWidth = 1440;
      frameHeight = 810;
    }
    frames.fill(undefined);
    loadFrames();
  }

  function sizeCanvas() {
    const rect = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    draw(currentFrame);
  }

  function draw(index) {
    currentFrame = Math.max(0, Math.min(frameCount - 1, index));
    let image = frames[currentFrame];
    if (!image?.complete) {
      for (let distance = 1; distance < frameCount; distance += 1) {
        const before = currentFrame - distance;
        const after = currentFrame + distance;
        if (before >= 0 && frames[before]?.complete) { image = frames[before]; break; }
        if (after < frameCount && frames[after]?.complete) { image = frames[after]; break; }
      }
    }
    if (!image?.complete || !context) return;

    const width = canvas.width;
    const height = canvas.height;
    const scale = Math.max(width / frameWidth, height / frameHeight);
    const drawWidth = frameWidth * scale;
    const drawHeight = frameHeight * scale;
    const x = (width - drawWidth) / 2;
    const y = (height - drawHeight) / 2;
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.fillStyle = "#171514";
    context.fillRect(0, 0, width, height);
    if (!mobileFrames.matches) {
      const backgroundScale = Math.max(width / frameWidth, height / frameHeight) * 1.08;
      const backgroundWidth = frameWidth * backgroundScale;
      const backgroundHeight = frameHeight * backgroundScale;
      context.save();
      context.filter = "blur(22px) brightness(.55) saturate(.72)";
      context.drawImage(image, 0, 0, frameWidth, frameHeight,
        (width - backgroundWidth) / 2, (height - backgroundHeight) / 2, backgroundWidth, backgroundHeight);
      context.restore();
      const shade = context.createLinearGradient(0, 0, width, 0);
      shade.addColorStop(0, "rgba(8,7,6,.32)");
      shade.addColorStop(.5, "rgba(8,7,6,.04)");
      shade.addColorStop(1, "rgba(8,7,6,.32)");
      context.fillStyle = shade;
      context.fillRect(0, 0, width, height);
    }
    context.drawImage(image, 0, 0, frameWidth, frameHeight, x, y, drawWidth, drawHeight);
    stage.classList.add("has-canvas");
  }

  function loadFrame(index) {
    if (index < 0 || index >= frameCount || frames[index]) return;
    const image = new Image();
    image.decoding = "async";
    image.src = `${frameFolder}frame_${String(index + 1).padStart(4, "0")}.webp`;
    image.onload = () => {
      frames[index] = image;
      if (index === 0 || index === currentFrame) draw(currentFrame);
    };
    image.onerror = () => { frames[index] = null; };
  }

  function loadFrames() {
    loadFrame(0);
    if (reducedMotion) return;
    for (let offset = 1; offset <= 8; offset += 1) {
      loadFrame(currentFrame - offset);
      loadFrame(currentFrame + offset);
    }
    const loadRemainder = () => {
      for (let index = 0; index < frameCount; index += 1) loadFrame(index);
    };
    if ("requestIdleCallback" in window) window.requestIdleCallback(loadRemainder, { timeout: 1200 });
    else window.setTimeout(loadRemainder, 450);
  }

  function fade(progress, start, end) {
    if (progress < start || progress > end) return 0;
    const fadeSize = (end - start) * .24;
    return Math.min(1, (progress - start) / fadeSize, (end - progress) / fadeSize);
  }

  function update() {
    scheduled = false;
    if (reducedMotion) return;
    const travel = Math.max(1, track.offsetHeight - stage.offsetHeight);
    const progress = Math.min(1, Math.max(0, -track.getBoundingClientRect().top / travel));
    if (Math.abs(progress - lastProgress) > .002) {
      lastProgress = progress;
      draw(Math.round(progress * (frameCount - 1)));
      const first = document.getElementById("hook1");
      const second = document.getElementById("hook2");
      const third = document.getElementById("hook3");
      const identity = document.getElementById("identityBlock");
      const cue = document.getElementById("scrollCue");
      const fill = document.getElementById("progressFill");
      if (first) first.style.opacity = String(fade(progress, .025, .24));
      if (second) second.style.opacity = String(fade(progress, .23, .47));
      if (third) third.style.opacity = String(fade(progress, .46, .68));
      if (identity) identity.style.opacity = String(Math.max(0, Math.min(1, (progress - .58) / .17)));
      if (cue) cue.style.opacity = progress > .04 ? "0" : "1";
      if (fill) fill.style.transform = `translateY(${progress * 112}px)`;
    }
  }

  function requestUpdate() {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(update);
    }
  }

  sizeCanvas();
  selectFrameSet();
  if (!reducedMotion) {
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", () => { sizeCanvas(); selectFrameSet(); requestUpdate(); }, { passive: true });
    mobileFrames.addEventListener?.("change", () => { sizeCanvas(); selectFrameSet(); });
    requestUpdate();
  }
})();
