import { serverRequest } from '../functions/serverRequest';

const CartService = {
  endpoint: '/api/public/cart',

  async addToCart(product, cart) {
    const res = await serverRequest(this.endpoint + '/add', 'PUT', {
      _id: product._id,
      qty: product.qty,
      sz: product.sz,
    });

    if (res.err) throw res.err;

    return res.cart;
  },

  async updateCart(cart) {
    const res = await serverRequest(this.endpoint, 'PUT', cart);

    if (res.err) throw res.err;

    return res.cart;
  },

  async removeFromCart(id) {},
};

export default CartService;
