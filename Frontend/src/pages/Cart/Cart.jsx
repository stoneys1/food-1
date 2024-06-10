import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Itens</p> <p>Titulo</p> <p>Preço</p> <p>Quantidade</p> <p>Total</p> <p>Remover</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.food_id]>0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={item.food_image} alt="" />
                <p>{item.food_name}</p>
                <p>${item.food_price}</p>
                <div>{cartItems[item.food_id]}</div>
                <p>${item.food_price*cartItems[item.food_id]}</p>
                <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item.food_id)}>x</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total do carrinho</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>R${getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Taxa de entrega</p><p>R${getTotalCartAmount()===0?0:5}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>R${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</b></div>
          </div>
          <button onClick={()=>navigate('/order')}>Prosseguir para entrega</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Coloque aqui seu código promocional</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Codigo promocional'/>
              <button>Inserir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
