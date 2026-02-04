const Inventory = (() => {
  const grid = document.querySelector("#inventory-grid");
  const inventoryPanel = document.querySelector("#inventory");
  const backpackButton = document.querySelector("#backpack-button");

  const state = {
    items: [],
    selectedItem: null
  };

  const render = () => {
    grid.innerHTML = "";
    const slots = 6;
    for (let i = 0; i < slots; i += 1) {
      const slot = document.createElement("button");
      slot.className = "inventory-slot";
      slot.type = "button";
      const item = state.items[i];
      slot.textContent = item ? item.name : "Empty";
      if (item && state.selectedItem?.id === item.id) {
        slot.classList.add("selected");
      }
      slot.addEventListener("click", () => {
        state.selectedItem = item || null;
        render();
      });
      grid.appendChild(slot);
    }
  };

  const addItem = (item) => {
    if (state.items.length >= 6) {
      return;
    }
    state.items.push(item);
    render();
  };

  const removeItem = (itemId) => {
    state.items = state.items.filter((item) => item.id !== itemId);
    if (state.selectedItem?.id === itemId) {
      state.selectedItem = null;
    }
    render();
  };

  const toggle = () => {
    inventoryPanel.classList.toggle("open");
  };

  backpackButton.addEventListener("click", toggle);

  return {
    addItem,
    removeItem,
    render,
    get selectedItem() {
      return state.selectedItem;
    }
  };
})();