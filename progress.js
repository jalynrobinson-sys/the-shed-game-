// progress.js
(function(){
  const prog = {
    slotsEl: null,
    sparks: 0,
    max: 3
  };

  function initProgress(slotsEl){
    prog.slotsEl = slotsEl;
    render();
  }

  function render(){
    prog.slotsEl.innerHTML = "";
    for(let i=0;i<prog.max;i++){
      const slot = document.createElement("div");
      slot.className = "sparkSlot";
      slot.textContent = i < prog.sparks ? "✨" : "";
      prog.slotsEl.appendChild(slot);
    }
    prog.slotsEl.setAttribute("aria-label", `${prog.sparks} of ${prog.max} Wonder Sparks collected`);
  }

  function addSpark(){
    if(prog.sparks >= prog.max) return false;
    prog.sparks += 1;
    render();
    return true;
  }

  function getSparks(){ return prog.sparks; }
  function isComplete(){ return prog.sparks >= prog.max; }

  window.Progress = { initProgress, addSpark, getSparks, isComplete };
})();
