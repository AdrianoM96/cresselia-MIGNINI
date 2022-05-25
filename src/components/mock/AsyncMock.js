import zapas2 from '../assets/zapas-mujer1.jpg'
import zapas3 from '../assets/zapas-puma-hombre.jpg'
import buzo1 from '../assets/buzo-billabong-mujer.jpg'
import pantalon1 from '../assets/pantalon-hombre.jpg'

const itemsBd = [
    {
      id: 1,
      title: 'Zapatillas puma',
      description:'Zapatillas puma hombre future rider',
      image: zapas3,
      category: 'hombre',
      price: 999
    },
  {
    id: 2,
    title: 'Pantalon sport',
    description:'Pantalon sport hombre black urban',
    image: pantalon1,
    category: 'hombre',
    price: 111
  },
  {
    id: 3,
    title: 'Zapatillas sport',
    description:'Zapatilla sport mujer  AQ shoes',
    image: zapas2,
    category: 'mujer',
    price: 222
  },
  {
    id: 4,
    title: 'Buzo billabong',
    description:'Buzo billabong mujer classic',
    image: buzo1,
    category: 'mujer',
    price: 444
  }
]

export const  getProducts = () => {   
      
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(
          itemsBd
          );
      }, 2000);
    })
  }
