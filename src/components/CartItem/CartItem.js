import './CartItem.css'
import { Link } from 'react-router-dom'
import  {useCartContext}  from '../../context/CartContext'

const CartItem = ({item}) => {

    const {removeItem} = useCartContext()
    
return (
    
    <div className='cartItem' key={item.id}> 
        <Link to={`/item/${item.id}`} >                 
            <div >   
                <h4 className=''>{item.title}</h4> 
                <img className="imageCart"
                    src={item.image}
                    alt={item.title}
                />
            </div> 
        </Link> 
        <div className='infoItemCartCointainer'>
            <div className='infoItemCart'>
                <p>Cantidad: {item.cantidad}</p>
                    
                <p>Precio unitario: ${item.price}</p>
              
                <p> Subtotal: ${item.price * item.cantidad}</p>
            </div>
        </div> 
                
        <button className="btn btn-danger btn-delete" onClick={()=>removeItem(item.id)}><i className="bi bi-trash-fill"></i></button>
    </div>  
   
    )
}

export default CartItem