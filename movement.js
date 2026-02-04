const Movement = (() => {
  const state = {
    isMoving: false,
    target: { x: 0, y: 0 },
    speed: 180
  };

  const setTarget = (x, y) => {
    state.target = { x, y };
    state.isMoving = true;
  };

  const update = (delta, actor) => {
    if (!state.isMoving) {
      return;
    }

    const dx = state.target.x - actor.position.x;
    const dy = state.target.y - actor.position.y;
    const distance = Math.hypot(dx, dy);

    if (distance < 2) {
      actor.position.x = state.target.x;
      actor.position.y = state.target.y;
      state.isMoving = false;
      return;
    }

    const step = (state.speed * delta) / 1000;
    const stepRatio = Math.min(step / distance, 1);
    actor.position.x += dx * stepRatio;
    actor.position.y += dy * stepRatio;
  };

  return {
    setTarget,
    update,
    get isMoving() {
      return state.isMoving;
    }
  };
})();