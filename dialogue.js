// dialogue.js
(function(){
  const ui = {
    box: null,
    speaker: null,
    text: null,
    choices: null,
    nextBtn: null
  };

  let queue = [];
  let onDone = null;

  function initDialogue(elements){
    ui.box = elements.box;
    ui.speaker = elements.speaker;
    ui.text = elements.text;
    ui.choices = elements.choices;
    ui.nextBtn = elements.nextBtn;

    ui.nextBtn.addEventListener("click", () => advance());
    ui.nextBtn.addEventListener("pointerdown", () => advance());
  }

  function show(){
    ui.box.hidden = false;
  }
  function hide(){
    ui.box.hidden = true;
  }

  function setContent(speaker, text){
    ui.speaker.textContent = speaker || "—";
    ui.text.textContent = text || "";
  }

  function clearChoices(){
    ui.choices.innerHTML = "";
  }

  function renderChoices(choices){
    clearChoices();
    if(!choices || choices.length === 0) return;

    choices.forEach(ch => {
      const btn = document.createElement("button");
      btn.className = "bigBtn";
      btn.type = "button";
      btn.textContent = ch.label;
      btn.addEventListener("click", () => {
        if(typeof ch.onPick === "function") ch.onPick();
        advance(true);
      });
      btn.addEventListener("pointerdown", () => {
        if(typeof ch.onPick === "function") ch.onPick();
        advance(true);
      });
      ui.choices.appendChild(btn);
    });
  }

  function startDialogue(nodes, doneCb){
    queue = Array.isArray(nodes) ? [...nodes] : [];
    onDone = doneCb || null;
    show();
    advance(true);
  }

  function advance(fromChoice){
    if(queue.length === 0){
      hide();
      if(onDone) onDone();
      return;
    }
    const node = queue.shift();
    setContent(node.speaker, node.text);

    // If node has choices, hide "continue" button
    if(node.choices && node.choices.length){
      ui.nextBtn.style.display = "none";
      renderChoices(node.choices);
    } else {
      clearChoices();
      ui.nextBtn.style.display = "inline-flex";
    }
  }

  window.Dialogue = { initDialogue, startDialogue, hide, show };
})();
