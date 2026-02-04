const Progress = (() => {
  const progressElement = document.querySelector("#shed-progress");
  const slots = Array.from(progressElement.querySelectorAll(".spark-slot"));

  const state = {
    sparks: new Set()
  };

  const update = () => {
    slots.forEach((slot) => {
      const sparkId = slot.dataset.spark;
      slot.classList.toggle("filled", state.sparks.has(sparkId));
    });
    progressElement.classList.toggle("complete", state.sparks.size === 3);
  };

  const addSpark = (sparkId) => {
    state.sparks.add(sparkId);
    update();
  };

  const hasAllSparks = () => state.sparks.size === 3;

  return {
    addSpark,
    hasAllSparks,
    update
  };
})();