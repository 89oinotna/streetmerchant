import {Store} from './store';

export const Unieuro: Store = {
  baseCartAdd: 'https://www.unieuro.it/online/precart/add',
  formKey: 'productCode',
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['Too Many Requests.'],
    },
    inStock: {
      container: '.price-container',
      text: ['Aggiungi al carrello'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      pid:'SAMT500',
      //pid: 'SONPS5DISC',
      url:'https://www.unieuro.it/online/Playstation-5/PlayStation-5-pidSAMT500',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      pid: 'SONPS5DIGITAL',
      url:
        'https://www.unieuro.it/online/Playstation-5/PlayStation-5-Digital-Edition-pidSONPS5DIGITAL',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.unieuro.it/online/Xbox-Series/Xbox-Series-X-pidDBLRRT00008',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url:
        'https://www.unieuro.it/online/Xbox-Series/Xbox-Series-S-pidDBLRRS00008',
    },
  ],
  name: 'unieuro',
};
