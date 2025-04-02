// take out
const menu = {
    "Appetizers / Sides": [
      ["Tandoori Spiced Hummus", 8.99],
      ["Masala Baba Ganoush", 7.99],
      ["Spiced Feta and Paneer Samosas", 9.49],
      ["Za’atar Spiced Aloo Gobi Kofta", 8.25],
      ["Paneer and Pomegranate Dolma", 8.95],
      ["French Fries", 4.50]
    ],
    "Salads": [
      ["Arabic Salad", 7.25],
      ["Tahini Salad", 6.95],
      ["Tabbouleh", 6.50],
      ["Greek Salad", 7.75],
      ["Cesear Salad", 7.00]
    ],
    "Mains": [
      ["Butter Paneer Shawarma", 12.99],
      ["Falafel Chaat", 10.75],
      ["Biryani Makloubeh", 13.95],
      ["Harissa Dal Makhani", 11.25]
    ],
    "Desserts": [
      ["Gulab Baklava", 6.50],
      ["Kunafa Cheesecake", 6.95],
      ["Rosewater Basbousa", 5.99]
    ],
    "Drinks": [
    ["Rose and mint cumin lemonade", 4.75],
    ["Mango Lassi", 4.25],
    ["Spiced Chai Iced Arabic Coffee", 5.00],
    ["Chai", 2.50],
    ["Saratoga Water", 2.50],
    ["Saratoga Sparkling Water", 3.00]
  ]
  
  };
  
  const menuContainer = document.getElementById('menu-items');
  const orderSummary = document.getElementById('order-summary');
  const orderTotal = document.getElementById('order-total');
  const order = {};
  
  for (const [category, items] of Object.entries(menu)) {
    const section = document.createElement('div');
    const id = category.toLowerCase().split(" ")[0];
    section.setAttribute('id', id);
    section.innerHTML = `<h3 class="text-xl font-bold mb-4">${category}</h3>`;
  
    items.forEach(([name, price]) => {
      const itemId = name.toLowerCase().replace(/\s+/g, "-");
      section.innerHTML += `
        <div class="flex justify-between items-center mb-2">
          <div>
            <p class="font-medium">${name}</p>
            <p class="text-sm text-gray-600">$${price.toFixed(2)}</p>
          </div>
          <input type="number" id="${itemId}" min="0" value="0" data-name="${name}" data-price="${price}"
            class="w-16 px-2 py-1 border rounded text-center" />
        </div>`;
    });
  
    menuContainer.appendChild(section);
  }
  
  menuContainer.addEventListener('input', (e) => {
    if (e.target.tagName === 'INPUT') {
      const name = e.target.dataset.name;
      const price = parseFloat(e.target.dataset.price);
      const qty = parseInt(e.target.value) || 0;
      if (qty > 0) {
        order[name] = { price, qty };
      } else {
        delete order[name];
      }
      renderOrder();
    }
  });
  
  function renderOrder() {
    orderSummary.innerHTML = "";
    let total = 0;
    Object.entries(order).forEach(([name, { price, qty }]) => {
      const itemTotal = price * qty;
      total += itemTotal;
      orderSummary.innerHTML += `<div class="flex justify-between"><span>${qty} × ${name}</span><span>$${itemTotal.toFixed(2)}</span></div>`;
    });
    orderTotal.textContent = total.toFixed(2);
  }
  
  // Step handling
  document.getElementById("takeout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector('[data-step="1"]').classList.add("hidden");
    document.querySelector('[data-step="2"]').classList.remove("hidden");
  });
  
  document.getElementById("checkout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector('[data-step="2"]').classList.add("hidden");
    document.getElementById("thank-you").classList.remove("hidden");
  });
  
  // Dropdown scroll inside scroll container
  const dropdown = document.getElementById("section-jump");
  const menuScrollContainer = document.getElementById("menu-items");
  dropdown.addEventListener("change", function () {
    const targetId = this.value;
    const target = document.getElementById(targetId);
    if (target && menuScrollContainer) {
      const offsetTop = target.offsetTop - menuScrollContainer.offsetTop;
      menuScrollContainer.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
  // Handle "Place Another Order" button
  document.getElementById("new-order-btn").addEventListener("click", () => {
    // Clear order object
    for (const key in order) {
      delete order[key];
    }
  
    // Reset inputs
    document.querySelectorAll("#menu-items input[type='number']").forEach(input => {
      input.value = 0;
    });
  
    // Clear order summary + total
    renderOrder();
  //   const checkoutTotal = document.getElementById('checkout-total');
  // if (checkoutTotal) checkoutTotal.textContent = total.toFixed(2);
  
  
    // Show step 1 again
    document.querySelector('[data-step="1"]').classList.remove("hidden");
    document.getElementById("thank-you").classList.add("hidden");
  
    // Scroll to top of the form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  