/* =========================================================
   LUMIÈRE — Interaction Layer
   ========================================================= */

gsap.registerPlugin(ScrollTrigger);
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(hover: none)').matches;

/* ---------------------------------------------------------
   CONFIG — edit these to make the demo yours
--------------------------------------------------------- */
const RESTAURANT_WHATSAPP_NUMBER = '15550192847'; // country code + number, no + or spaces
const DELIVERY_FEE = 4.00;
const PROMO_CODES = { 'WELCOME10': 0.10, 'LUMIERE20': 0.20 };

/* ---------------------------------------------------------
   MENU DATA
--------------------------------------------------------- */
const MENU_TONES = { pizza:'copper', burger:'wine', steak:'wine', pasta:'gold', salads:'copper', desserts:'gold', drinks:'copper' };

const MENU_ITEMS = [
  { id:'pz1', cat:'pizza', name:'Wood-Fired Margherita', price:18, desc:'San Marzano tomato, fior di latte, basil, cold-pressed olive oil.', cal:780, time:'12 min', ing:'Tomato, mozzarella, basil, olive oil', img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80' },
  { id:'pz2', cat:'pizza', name:'Truffle Mushroom', price:24, desc:'Wild mushroom medley, black truffle cream, taleggio, thyme.', cal:860, time:'14 min', ing:'Mushroom, truffle cream, taleggio, thyme', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80' },
  { id:'pz3', cat:'pizza', name:'Diavola', price:20, desc:'Spicy salami, chili honey, mozzarella, oregano.', cal:820, time:'12 min', ing:'Salami, chili honey, mozzarella, oregano', img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80' },
  { id:'bg1', cat:'burger', name:'Smash Burger Duo', price:21, desc:'Double smashed beef, aged cheddar, house sauce, brioche.', cal:920, time:'10 min', ing:'Beef, cheddar, brioche, house sauce', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80' },
  { id:'bg2', cat:'burger', name:'Truffle Mushroom Burger', price:23, desc:'Beef patty, truffle aioli, swiss, roasted mushroom.', cal:940, time:'11 min', ing:'Beef, swiss, truffle aioli, mushroom', img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80' },
  { id:'bg3', cat:'burger', name:'Plant-Based Deluxe', price:19, desc:'Plant-based patty, vegan cheese, charcoal bun, pickles.', cal:680, time:'10 min', ing:'Plant patty, vegan cheese, charcoal bun', img:'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=80' },
  { id:'st1', cat:'steak', name:'Dry-Aged Ribeye', price:58, desc:'28-day dry-aged ribeye, bone marrow butter, roasted garlic.', cal:1120, time:'22 min', ing:'Ribeye, bone marrow butter, garlic', img:'https://images.unsplash.com/photo-1546833998-877b37c2e5c4?w=600&q=80' },
  { id:'st2', cat:'steak', name:'Filet Mignon', price:52, desc:'Center-cut filet, red wine jus, confit shallot.', cal:780, time:'20 min', ing:'Filet, red wine jus, shallot', img:'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80' },
  { id:'st3', cat:'steak', name:'Tomahawk to Share', price:96, desc:'32oz tomahawk, chimichurri, flaked sea salt. Serves two.', cal:1800, time:'28 min', ing:'Tomahawk cut, chimichurri, sea salt', img:'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80' },
  { id:'pa1', cat:'pasta', name:'Truffle Tagliatelle', price:34, desc:'Fresh tagliatelle, black truffle, parmesan cream.', cal:820, time:'16 min', ing:'Tagliatelle, truffle, parmesan cream', img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80' },
  { id:'pa2', cat:'pasta', name:'Lobster Linguine', price:38, desc:'Maine lobster, cherry tomato, chili, white wine.', cal:760, time:'18 min', ing:'Lobster, linguine, tomato, chili', img:'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80' },
  { id:'pa3', cat:'pasta', name:'Classic Carbonara', price:26, desc:'Guanciale, pecorino, egg yolk, cracked pepper.', cal:840, time:'14 min', ing:'Guanciale, pecorino, egg, pepper', img:'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80' },
  { id:'sl1', cat:'salads', name:'Heirloom Burrata', price:22, desc:'Heirloom tomato, burrata, basil oil, aged balsamic.', cal:420, time:'8 min', ing:'Tomato, burrata, basil oil, balsamic', img:'https://images.unsplash.com/photo-1529312266912-b33cf6227e24?w=600&q=80' },
  { id:'sl2', cat:'salads', name:'Charred Caesar', price:18, desc:'Grilled romaine, anchovy dressing, sourdough crumb.', cal:380, time:'8 min', ing:'Romaine, anchovy dressing, sourdough', img:'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&q=80' },
  { id:'sl3', cat:'salads', name:'Roasted Beet & Goat Cheese', price:19, desc:'Roasted beets, whipped goat cheese, candied walnut.', cal:410, time:'9 min', ing:'Beets, goat cheese, walnut', img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80' },
  { id:'ds1', cat:'desserts', name:'Dark Chocolate Fondant', price:14, desc:'Molten dark chocolate, vanilla bean ice cream.', cal:560, time:'12 min', ing:'Dark chocolate, vanilla ice cream', img:'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80' },
  { id:'ds2', cat:'desserts', name:'Crème Brûlée', price:12, desc:'Madagascar vanilla custard, caramelized sugar crust.', cal:420, time:'6 min', ing:'Vanilla custard, caramelized sugar', img:'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80' },
  { id:'ds3', cat:'desserts', name:'Tiramisu', price:13, desc:'Espresso-soaked ladyfingers, mascarpone, cocoa.', cal:480, time:'6 min', ing:'Ladyfingers, mascarpone, espresso, cocoa', img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80' },
  { id:'dr1', cat:'drinks', name:'Smoked Old Fashioned', price:16, desc:'Bourbon, smoked maple, orange bitters.', cal:180, time:'4 min', ing:'Bourbon, smoked maple, bitters', img:'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80' },
  { id:'dr2', cat:'drinks', name:'Elderflower Spritz', price:14, desc:'Prosecco, elderflower, soda, fresh mint.', cal:150, time:'4 min', ing:'Prosecco, elderflower, soda, mint', img:'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80' },
  { id:'dr3', cat:'drinks', name:'House Cold Brew', price:6, desc:'48-hour cold brew, oat milk optional.', cal:40, time:'3 min', ing:'Cold brew coffee, oat milk', img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80' }
];

const toneGradient = {
  copper:'linear-gradient(135deg, rgba(193,123,79,0.35), transparent 60%)',
  wine:'linear-gradient(135deg, rgba(107,39,55,0.4), transparent 60%)',
  gold:'linear-gradient(135deg, rgba(203,161,53,0.32), transparent 60%)'
};

/* ---------------------------------------------------------
   CART STATE
--------------------------------------------------------- */
let cart = [];
let appliedPromo = null;

function addToCart(item){
  const existing = cart.find(c => c.key === item.key);
  if(existing){ existing.qty += 1; }
  else{ cart.push({ ...item, qty:1 }); }
  renderCart();
  openCart();
}
function removeFromCart(key){
  cart = cart.filter(c => c.key !== key);
  renderCart();
}
function changeQty(key, delta){
  const line = cart.find(c => c.key === key);
  if(!line) return;
  line.qty += delta;
  if(line.qty <= 0) removeFromCart(key); else renderCart();
}
function cartSubtotal(){ return cart.reduce((sum,c)=> sum + c.price * c.qty, 0); }
function cartTotal(){
  const sub = cartSubtotal();
  const discount = appliedPromo ? sub * appliedPromo : 0;
  const delivery = cart.length ? DELIVERY_FEE : 0;
  return { sub, discount, delivery, total: sub - discount + delivery };
}

function renderCart(){
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');

  const totalQty = cart.reduce((s,c)=> s + c.qty, 0);
  countEl.textContent = totalQty;

  if(cart.length === 0){
    itemsEl.innerHTML = '';
    itemsEl.appendChild(emptyEl);
    emptyEl.style.display = 'block';
    footerEl.style.display = 'none';
    return;
  }
  emptyEl.style.display = 'none';
  footerEl.style.display = 'block';

  itemsEl.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-img" style="background-image:${c.tone ? toneGradient[c.tone] : 'none'}, url('${c.img||''}')"></div>
      <div class="cart-item-info">
        <h4>${c.name}</h4>
        <span>${c.subtitle || ''}</span>
        <div class="cart-item-controls">
          <div class="qty-control">
            <button onclick="changeQty('${c.key}',-1)">−</button>
            <span>${c.qty}</span>
            <button onclick="changeQty('${c.key}',1)">+</button>
          </div>
          <span class="cart-item-price">$${(c.price*c.qty).toFixed(2)}</span>
        </div>
        <span class="cart-item-remove" onclick="removeFromCart('${c.key}')" style="cursor:pointer">Remove</span>
      </div>
    </div>
  `).join('');

  const { sub, discount, delivery, total } = cartTotal();
  document.getElementById('cartSubtotal').textContent = '$' + sub.toFixed(2);
  document.getElementById('cartDelivery').textContent = '$' + delivery.toFixed(2);
  document.getElementById('cartTotal').textContent = '$' + total.toFixed(2);
  const discountRow = document.getElementById('cartDiscountRow');
  if(discount > 0){
    discountRow.style.display = 'flex';
    document.getElementById('cartDiscount').textContent = '-$' + discount.toFixed(2);
  } else {
    discountRow.style.display = 'none';
  }
}

function openCart(){ document.getElementById('cartDrawer').classList.add('is-open'); document.getElementById('drawerOverlay').classList.add('is-open'); }
function closeCart(){ document.getElementById('cartDrawer').classList.remove('is-open'); document.getElementById('drawerOverlay').classList.remove('is-open'); }

function initCart(){
  document.getElementById('cartToggle').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('drawerOverlay').addEventListener('click', ()=>{ closeCart(); closeCheckout(); });
  document.getElementById('promoBtn').addEventListener('click', ()=>{
    const code = document.getElementById('promoInput').value.trim().toUpperCase();
    if(PROMO_CODES[code]){ appliedPromo = PROMO_CODES[code]; renderCart(); }
    else if(code){ alert('Invalid promo code'); }
  });
  document.getElementById('checkoutBtn').addEventListener('click', ()=>{ closeCart(); openCheckout(); });
}

/* ---------------------------------------------------------
   SMART MENU RENDER + FILTER
--------------------------------------------------------- */
function renderMenu(cat){
  const grid = document.getElementById('menuGrid');
  const items = MENU_ITEMS.filter(i => i.cat === cat);
  grid.innerHTML = items.map(i => `
    <div class="menu-card">
      <div class="menu-card-img" style="background-image:${toneGradient[MENU_TONES[i.cat]]}, url('${i.img}')"></div>
      <div class="menu-card-body">
        <div class="menu-card-top"><h3>${i.name}</h3><span>$${i.price.toFixed(2)}</span></div>
        <p class="menu-card-desc">${i.desc}</p>
        <div class="menu-card-meta">
          <span>🔥 ${i.cal} cal</span>
          <span>⏱ ${i.time}</span>
        </div>
        <div class="menu-card-ingredients">${i.ing}</div>
        <button class="menu-add-btn" onclick='addToCart({key:"${i.id}-${Date.now()}", name:"${i.name.replace(/"/g,'')}", price:${i.price}, img:"${i.img}", tone:"${MENU_TONES[i.cat]}", subtitle:"${i.cat}"})'>Add to Cart — $${i.price.toFixed(2)}</button>
      </div>
    </div>
  `).join('');
}
function initMenuTabs(){
  const tabs = document.querySelectorAll('.menu-tab');
  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      tabs.forEach(t=> t.classList.remove('is-active'));
      tab.classList.add('is-active');
      renderMenu(tab.dataset.cat);
    });
  });
  renderMenu('pizza');
}

/* ---------------------------------------------------------
   PIZZA BUILDER
--------------------------------------------------------- */
const pizzaState = { size:{value:'Small',price:0}, crust:{value:'Thin',price:0}, sauce:{value:'Tomato',price:0}, toppings:[] };
const PIZZA_BASE_PRICE = 8;
const TOPPING_COLORS = { 'Extra Cheese':'#F2D06B', 'Pepperoni':'#B23A2E', 'Mushroom':'#D8C9A3', 'Chicken':'#E8C98C', 'Olives':'#3B3A2E', 'Corn':'#F0C93E', 'Onion':'#E9E2D0', 'Bacon':'#8B4A34' };

function initPizzaBuilder(){
  document.querySelectorAll('#pizzaVisual, .builder-section').forEach(()=>{});
  const groups = document.querySelectorAll('.builder-section .option-row[data-group]');
  groups.forEach(row=>{
    if(!row.closest('#builder')) return;
    const group = row.dataset.group;
    row.querySelectorAll('.option-chip').forEach(chip=>{
      chip.addEventListener('click', ()=>{
        if(group === 'toppings'){
          chip.classList.toggle('is-active');
          const value = chip.dataset.value;
          const price = parseFloat(chip.dataset.price);
          if(chip.classList.contains('is-active')) pizzaState.toppings.push({value,price});
          else pizzaState.toppings = pizzaState.toppings.filter(t=>t.value!==value);
        } else {
          row.querySelectorAll('.option-chip').forEach(c=> c.classList.remove('is-active'));
          chip.classList.add('is-active');
          pizzaState[group] = { value: chip.dataset.value, price: parseFloat(chip.dataset.price) };
        }
        updatePizzaVisual();
      });
    });
  });
  document.getElementById('pizzaAddBtn').addEventListener('click', ()=>{
    const total = pizzaTotal();
    const toppingNames = pizzaState.toppings.map(t=>t.value).join(', ') || 'No extra toppings';
    addToCart({
      key:'pizza-'+Date.now(), name:`Custom Pizza (${pizzaState.size.value})`, price: total,
      tone:'copper', subtitle:`${pizzaState.crust.value} crust · ${pizzaState.sauce.value} · ${toppingNames}`
    });
  });
  updatePizzaVisual();
}
function pizzaTotal(){
  const toppingsSum = pizzaState.toppings.reduce((s,t)=> s+t.price, 0);
  return PIZZA_BASE_PRICE + pizzaState.size.price + pizzaState.crust.price + pizzaState.sauce.price + toppingsSum;
}
function updatePizzaVisual(){
  document.getElementById('pizzaTotalPrice').textContent = '$' + pizzaTotal().toFixed(2);
  const layer = document.getElementById('pizzaToppingsLayer');
  layer.innerHTML = '';
  pizzaState.toppings.forEach((t)=>{
    for(let i=0;i<7;i++){
      const dot = document.createElement('div');
      dot.className = 'topping-dot';
      const size = 8 + Math.random()*10;
      dot.style.width = size+'px'; dot.style.height = size+'px';
      dot.style.left = (10 + Math.random()*80)+'%';
      dot.style.top = (10 + Math.random()*80)+'%';
      dot.style.background = TOPPING_COLORS[t.value] || '#ccc';
      layer.appendChild(dot);
    }
  });
}

/* ---------------------------------------------------------
   BURGER BUILDER
--------------------------------------------------------- */
const burgerState = { bread:{value:'Brioche',price:0}, patty:{value:'Beef',price:0}, cheese:{value:'Cheddar',price:0}, burgerSauceOpt:{value:'House Sauce',price:0}, veg:[], extras:[] };
const BURGER_BASE_PRICE = 7;

function initBurgerBuilder(){
  const section = document.querySelectorAll('.builder-section')[1];
  if(!section) return;
  const groups = section.querySelectorAll('.option-row[data-group]');
  groups.forEach(row=>{
    const group = row.dataset.group;
    row.querySelectorAll('.option-chip').forEach(chip=>{
      chip.addEventListener('click', ()=>{
        const multi = row.classList.contains('option-row--multi');
        if(multi){
          chip.classList.toggle('is-active');
          const value = chip.dataset.value;
          const price = parseFloat(chip.dataset.price);
          if(chip.classList.contains('is-active')) burgerState[group].push({value,price});
          else burgerState[group] = burgerState[group].filter(t=>t.value!==value);
        } else {
          row.querySelectorAll('.option-chip').forEach(c=> c.classList.remove('is-active'));
          chip.classList.add('is-active');
          burgerState[group] = { value: chip.dataset.value, price: parseFloat(chip.dataset.price) };
        }
        updateBurgerVisual();
      });
    });
  });
  document.getElementById('burgerAddBtn').addEventListener('click', ()=>{
    const total = burgerTotal();
    const vegNames = burgerState.veg.map(v=>v.value).join(', ') || 'No vegetables';
    const extraNames = burgerState.extras.map(v=>v.value).join(', ');
    addToCart({
      key:'burger-'+Date.now(), name:`Custom Burger (${burgerState.patty.value})`, price: total,
      tone:'wine', subtitle:`${burgerState.bread.value} bun · ${burgerState.cheese.value} · ${vegNames}${extraNames?' · +'+extraNames:''}`
    });
  });
  updateBurgerVisual();
}
function burgerTotal(){
  const vegSum = burgerState.veg.reduce((s,v)=>s+v.price,0);
  const extrasSum = burgerState.extras.reduce((s,v)=>s+v.price,0);
  return BURGER_BASE_PRICE + burgerState.bread.price + burgerState.patty.price + burgerState.cheese.price + burgerState.burgerSauceOpt.price + vegSum + extrasSum;
}
function updateBurgerVisual(){
  document.getElementById('burgerTotalPrice').textContent = '$' + burgerTotal().toFixed(2);
  document.getElementById('burgerCheese').classList.toggle('is-empty', burgerState.cheese.value === 'None');
  document.getElementById('burgerVeg').classList.toggle('is-empty', burgerState.veg.length === 0);
  document.getElementById('burgerExtras').classList.toggle('is-empty', burgerState.extras.length === 0);
}

/* ---------------------------------------------------------
   GALLERY LIGHTBOX
--------------------------------------------------------- */
function initGallery(){
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  document.querySelectorAll('.gallery-item').forEach(item=>{
    item.addEventListener('click', ()=>{
      lightboxImg.src = item.dataset.img;
      lightbox.classList.add('is-open');
    });
  });
  document.getElementById('lightboxClose').addEventListener('click', ()=> lightbox.classList.remove('is-open'));
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) lightbox.classList.remove('is-open'); });
}

/* ---------------------------------------------------------
   RESERVATION FORM
--------------------------------------------------------- */
function initReservation(){
  document.querySelectorAll('.pill-toggle').forEach(group=>{
    group.querySelectorAll('.pill').forEach(pill=>{
      pill.addEventListener('click', ()=>{
        group.querySelectorAll('.pill').forEach(p=>p.classList.remove('is-active'));
        pill.classList.add('is-active');
        if(group.dataset.group === 'fulfilment'){
          const isDelivery = pill.dataset.value === 'Delivery';
          document.getElementById('deliveryAddressField').style.display = isDelivery ? 'block' : 'none';
        }
      });
    });
  });

  const form = document.getElementById('reserveForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('rName').value;
    const date = document.getElementById('rDate').value;
    const time = document.getElementById('rTime').value;
    const guests = document.getElementById('rGuests').value;
    document.getElementById('reserveConfirmText').textContent = `${name}, your table for ${guests} on ${date} at ${time} is confirmed.`;
    form.style.display = 'none';
    document.getElementById('reserveConfirm').classList.add('is-visible');
  });
}

/* ---------------------------------------------------------
   CHECKOUT FLOW → WhatsApp handoff + order tracker
--------------------------------------------------------- */
let checkoutStep = 1;
let selectedPayment = 'Cash';

function openCheckout(){
  if(cart.length === 0){ alert('Your cart is empty — add something from the menu first.'); return; }
  document.getElementById('checkoutOverlay').classList.add('is-open');
  goToCheckoutStep(1);
}
function closeCheckout(){ document.getElementById('checkoutOverlay').classList.remove('is-open'); }
function goToCheckoutStep(n){
  checkoutStep = n;
  document.querySelectorAll('.checkout-step').forEach(s=> s.classList.toggle('is-active', parseInt(s.dataset.step) === n));
  if(n === 2) renderCheckoutSummary();
}
function renderCheckoutSummary(){
  const { sub, discount, delivery, total } = cartTotal();
  const summary = document.getElementById('checkoutSummary');
  summary.innerHTML = `
    ${cart.map(c=>`<div class="cart-line"><span>${c.qty}× ${c.name}</span><span>$${(c.price*c.qty).toFixed(2)}</span></div>`).join('')}
    <div class="cart-line"><span>Subtotal</span><span>$${sub.toFixed(2)}</span></div>
    ${discount>0?`<div class="cart-line"><span>Discount</span><span>-$${discount.toFixed(2)}</span></div>`:''}
    <div class="cart-line"><span>Delivery</span><span>$${delivery.toFixed(2)}</span></div>
    <div class="cart-line cart-total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
  `;
}

function initCheckout(){
  document.getElementById('checkoutClose').addEventListener('click', closeCheckout);
  document.querySelectorAll('[data-next]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(btn.dataset.next === '2'){
        const name = document.getElementById('coName').value;
        const phone = document.getElementById('coPhone').value;
        if(!name || !phone){ alert('Please fill in your name and phone number.'); return; }
      }
      goToCheckoutStep(parseInt(btn.dataset.next));
    });
  });
  document.querySelectorAll('#paymentGrid .payment-option').forEach(opt=>{
    opt.addEventListener('click', ()=>{
      document.querySelectorAll('#paymentGrid .payment-option').forEach(o=>o.classList.remove('is-active'));
      opt.classList.add('is-active');
      selectedPayment = opt.dataset.value;
    });
  });

  document.getElementById('placeOrderBtn').addEventListener('click', ()=>{
    const name = document.getElementById('coName').value;
    const phone = document.getElementById('coPhone').value;
    const fulfilment = document.querySelector('[data-group="fulfilment"] .is-active').dataset.value;
    const address = document.getElementById('coAddress').value;
    const { total } = cartTotal();

    let message = `Hi Lumière! I'd like to place an order.%0A%0A`;
    message += `*Name:* ${name}%0A*Phone:* ${phone}%0A*Fulfilment:* ${fulfilment}%0A`;
    if(fulfilment === 'Delivery') message += `*Address:* ${address}%0A`;
    message += `%0A*Order:*%0A`;
    cart.forEach(c=>{ message += `- ${c.qty}× ${c.name} ($${(c.price*c.qty).toFixed(2)})%0A`; });
    message += `%0A*Total: $${total.toFixed(2)}*%0A*Payment method:* ${selectedPayment}%0A%0AWe'll confirm payment together here on WhatsApp.`;

    const waUrl = `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${message}`;
    window.open(waUrl, '_blank');

    goToCheckoutStep(3);
    runOrderTracker();
    cart = []; appliedPromo = null; renderCart();
  });

  document.getElementById('trackerCloseBtn').addEventListener('click', closeCheckout);
}

function runOrderTracker(){
  const steps = document.querySelectorAll('#orderTracker .tracker-step');
  steps.forEach((s,i)=>{ s.classList.remove('is-active','is-done'); });
  steps[0].classList.add('is-active');
  let current = 0;
  const interval = setInterval(()=>{
    steps[current].classList.remove('is-active');
    steps[current].classList.add('is-done');
    current++;
    if(current >= steps.length){ clearInterval(interval); return; }
    steps[current].classList.add('is-active');
  }, 1800);
}

/* ---------------------------------------------------------
   WHATSAPP / CONTACT QUICK ACTIONS
--------------------------------------------------------- */
function initContactQuick(){
  document.getElementById('whatsappBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    window.open(`https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=Hi%20Lumière!%20I%20have%20a%20question.`, '_blank');
  });
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const btn = form.querySelector('button span');
    const original = btn.textContent;
    btn.textContent = 'Sent ✓';
    setTimeout(()=>{ btn.textContent = original; form.reset(); }, 2200);
  });
}

/* ---------------------------------------------------------
   GLOBAL FX: preloader, lenis, cursor-glow, magnetic, nav, reveals
--------------------------------------------------------- */
function runPreloader(){
  return new Promise((resolve)=>{
    const preloader = document.getElementById('preloader');
    const fill = document.getElementById('preloaderFill');
    if(prefersReducedMotion){ preloader.style.display='none'; resolve(); return; }
    gsap.to(fill, {
      width:'100%', duration:1.6, ease:'power1.inOut',
      onComplete(){
        gsap.to(preloader, { autoAlpha:0, duration:0.6, onComplete(){ preloader.style.display='none'; resolve(); } });
      }
    });
  });
}
function initLenis(){
  if(prefersReducedMotion || typeof Lenis === 'undefined') return;
  const lenis = new Lenis({ duration:1.1, smoothWheel:true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time)=>{ lenis.raf(time*1000); });
  gsap.ticker.lagSmoothing(0);
}
function initMouseGlow(){
  if(isTouch) return;
  const glow = document.getElementById('mouseGlow');
  let gx=0, gy=0, mx=0, my=0;
  window.addEventListener('mousemove', (e)=>{ mx=e.clientX; my=e.clientY; });
  gsap.ticker.add(()=>{
    gx += (mx-gx)*0.08; gy += (my-gy)*0.08;
    glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%,-50%)`;
  });
}
function initMagnetic(){
  if(isTouch) return;
  document.querySelectorAll('.magnetic').forEach(el=>{
    el.addEventListener('mousemove', (e)=>{
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2) * 0.3;
      const y = (e.clientY - r.top - r.height/2) * 0.3;
      gsap.to(el, { x, y, duration:0.4, ease:'power3.out' });
    });
    el.addEventListener('mouseleave', ()=> gsap.to(el, { x:0, y:0, duration:0.5, ease:'elastic.out(1,0.4)' }));
  });
}
function initNav(){
  const navbar = document.getElementById('navbar');
  ScrollTrigger.create({ start:'top -80', onUpdate:(self)=> navbar.classList.toggle('is-scrolled', self.scroll() > 80) });
  const burger = document.getElementById('navBurger');
  const mobileNav = document.getElementById('mobileNav');
  burger.addEventListener('click', ()=> mobileNav.classList.toggle('is-open'));
  mobileNav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> mobileNav.classList.remove('is-open')));
}
function initScrollProgress(){
  const bar = document.getElementById('scrollProgress');
  ScrollTrigger.create({ start:0, end:'max', onUpdate:(self)=>{ bar.style.width = (self.progress*100)+'%'; } });
}
function initReveals(){
  gsap.utils.toArray('.reveal-up').forEach(el=>{
    gsap.to(el, { opacity:1, y:0, duration:0.9, ease:'power3.out', scrollTrigger:{ trigger:el, start:'top 90%' } });
  });
  gsap.utils.toArray('.reveal-line').forEach(el=>{
    gsap.fromTo(el, { yPercent:110 }, { yPercent:0, duration:1, ease:'power4.out', scrollTrigger:{ trigger:el, start:'top 92%' } });
  });
}
function playHeroIntro(){
  const tl = gsap.timeline({ delay:0.1 });
  tl.to('.hero-content .eyebrow', { opacity:1, y:0, duration:0.7, ease:'power3.out' })
    .to('.hero-title .reveal-line', { yPercent:0, duration:1, ease:'power4.out', stagger:0.12 }, '-=0.3')
    .to('.hero-sub', { opacity:1, y:0, duration:0.8, ease:'power3.out' }, '-=0.5')
    .to('.hero-cta', { opacity:1, y:0, duration:0.8, ease:'power3.out' }, '-=0.55')
    .to('.scroll-indicator', { opacity:1, y:0, duration:0.6 }, '-=0.4');
}
function initSwiper(){
  if(typeof Swiper === 'undefined') return;
  new Swiper('.reviews-swiper', {
    slidesPerView:1.05, spaceBetween:20, loop:true, autoplay:{ delay:4000, disableOnInteraction:false },
    breakpoints:{ 680:{ slidesPerView:2, spaceBetween:24 }, 1020:{ slidesPerView:3, spaceBetween:28 } }
  });
}
function initSignature(){
  const path = document.getElementById('signaturePath');
  if(!path) return;
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  gsap.to(path, { strokeDashoffset:0, duration:2, ease:'power2.inOut', scrollTrigger:{ trigger:'#chefSignature', start:'top 85%' } });
}

/* ---------------------------------------------------------
   INIT
--------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', async ()=>{
  initLenis();
  initMouseGlow();
  initNav();
  initScrollProgress();
  initMagnetic();
  initReveals();
  initCart();
  initMenuTabs();
  initPizzaBuilder();
  initBurgerBuilder();
  initGallery();
  initReservation();
  initCheckout();
  initContactQuick();
  initSwiper();
  initSignature();

  await runPreloader();
  playHeroIntro();
  ScrollTrigger.refresh();
});
