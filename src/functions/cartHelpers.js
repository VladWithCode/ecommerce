export const addToCart = (c, p) => {
  const cart = { ...c };
  const newItems = cart.items.map(i => ({ ...i }));

  let inCart = false;

  for (const i of newItems) {
    if (i.product !== p._id) continue;

    i.qty += p.qty;
    i.totalPrice += i.price * p.qty;
    inCart = true;
    break;
  }

  if (!inCart) {
    newItems.push({
      product: p._id,
      name: p.name,
      qty: p.qty,
      price: p.price,
      imgs: p.imgs,
      totalPrice: p.price * p.qty,
    });
  }

  const cartTotals = calculateCartTotals(newItems, cart.tax, cart.shipment);

  return { ...cart, ...cartTotals, items: [...newItems] };
};

export const removeFromCart = (c, id) => {
  const cart = { ...c };
  const newItems = cart.items.filter(i => i.product !== id);

  const cartTotals = calculateCartTotals(newItems, cart.tax, cart.shipment);

  return { ...cart, ...cartTotals, items: newItems };
};

export const updateQty = (items, id, qty) => {
  const newItems = items.map(i => ({ ...i }));

  for (const i of newItems) {
    if (i.product === id) {
      i.qty = qty;
      i.totalPrice = i.price * qty;
      break;
    }
  }

  return newItems;
};

export const calculateCartTotals = (items, tax = 0, shipment = 0) => {
  let total = tax + shipment;
  let subtotal = 0;

  items?.forEach(i => {
    total += i.totalPrice;
    subtotal += i.totalPrice;
  });

  return { total, subtotal };
};
