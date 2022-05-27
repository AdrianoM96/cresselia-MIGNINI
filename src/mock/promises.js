import {itemsBd} from './mock'

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
