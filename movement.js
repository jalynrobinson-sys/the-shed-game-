// movement.js (no frameworks)
(function(){
  const state = {
    baileeEl: null,
    markerEl: null,
    sceneEl: null,
    reduceMotion: false,
  };

  function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

  function setReduceMotion(on){
    state.reduceMotion = !!on;
  }

  function initMovement(sceneEl, baileeEl, markerEl){
    state.sceneEl = sceneEl;
    state.baileeEl = baileeEl;
    state.markerEl = markerEl;
  }

  function moveBaileeToClientPoint(clientX, clientY){
    if(!state.sceneEl || !state.baileeEl) return null;

    const rect = state.sceneEl.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Keep Bailee inside scene bounds
    const marginX = 50;
    const marginY = 70;

    const clampedX = clamp(x, marginX, rect.width - marginX);
    const clampedY = clamp(y, marginY, rect.height - marginY);

    // Show marker for "coordinate proof"
    if(state.markerEl){
      state.markerEl.style.left = `${clampedX}px`;
      state.markerEl.style.top = `${clampedY}px`;
      state.markerEl.classList.add("show");
      window.setTimeout(()=> state.markerEl.classList.remove("show"), 250);
    }

    // Move Bailee
    state.baileeEl.style.left = `${(clampedX / rect.width) * 100}%`;
    state.baileeEl.style.top = `${(clampedY / rect.height) * 100}%`;

    if(!state.reduceMotion){
      state.baileeEl.style.transition = "left .18s ease, top .18s ease";
    } else {
      state.baileeEl.style.transition = "none";
    }

    return {
      x: Math.round(clampedX),
      y: Math.round(clampedY),
      w: Math.round(rect.width),
      h: Math.round(rect.height)
    };
  }

  window.Movement = { initMovement, moveBaileeToClientPoint, setReduceMotion };
})();
