import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
        <div className="place-order-left">
          <p className='title'>Informaçao de entrega</p>
          <div className="multi-fields">
            <input type="text" placeholder='Nome' />
            <input type="text" placeholder='Sobrenome' />
          </div>
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='Endereço' />
        <div className="multi-fields">
            <input type="text" placeholder='Cidade' />
            <input type="text" placeholder='Estado' />
          </div>
            <input type="text" placeholder='Telefone' />
            </div>
          <div className="place-order-right">
            <div className="cart-total">
          <h2>Total do carrinho</h2>
            <div>
              <div className="cart-total-details"><p>Subtotal</p><p>R${getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Taxa de entrega</p><p>R${getTotalCartAmount()===0?0:5}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>R${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</b></div>
          </div>
          <button onClick={()=>navigate('/order')}>Prosseguir para pagamento</button>
        </div>
          </div>
            
    </form>
      
  
  )
}

export default PlaceOrder
