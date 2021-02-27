import {Store} from './store';

export const Mediaworld: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.product-add-to-cart',
      text: ['Aggiungi al carrello'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.mediaworld.it/product/i-147513',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.mediaworld.it/product/p-142383',
    }
  ],
  name: 'mediaworld',
};
