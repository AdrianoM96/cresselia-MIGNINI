import zapas2 from '../images/assets/zapas-mujer1.jpg'
import zapas3 from '../images/assets/zapas-puma-hombre.jpg'
import buzo1 from '../images/assets/buzo-billabong-mujer.jpg'
import pantalon1 from '../images/assets/pantalon-hombre.jpg'

const itemsBd = [
    {
      id: "1",
      title: 'Zapatillas puma',
      description:'Zapatillas puma hombre future rider',
      image: zapas3,
      category: 'hombre',
      price: 999,
      stock: 5
    },
  {
    id: "2",
    title: 'Pantalon sport',
    description:'Pantalon sport hombre black urban',
    image: pantalon1,
    category: 'hombre',
    price: 111,
    stock: 10
  },
  {
    id: "3",
    title: 'Zapatillas sport',
    description:'Zapatilla sport mujer  AQ shoes',
    image: zapas2,
    category: 'mujer',
    price: 222,
      stock: 7
  },
  {
    id: "4",
    title: 'Buzo billabong',
    description:'Buzo billabong mujer classic',
    image: buzo1,
    category: 'mujer',
    price: 444,
    stock: 0
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
  
  export const  getProductDetail = (itemId) => {    
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(
          itemsBd.find(item=>item.id === itemId)
          );  
      }, 2000);
    })
  }

  export const  getProductsCategory = (category) => {   
      
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(
          itemsBd.filter(item=>item.category === category)
          );
      }, 2000);
    })
  }
