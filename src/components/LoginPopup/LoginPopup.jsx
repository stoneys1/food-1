import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign Up");

  return (
    <div className='login-popup'>
        <div className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2> <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Sign Up"?<input type="text" placeholder='Seu nome' />:<></>}
                <input type="email" placeholder='Seu email' />
                <input type="password" placeholder='Senha' />
            </div>
            <button>{currState==="Login"?"Login":"Criar conta"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" />
                <p>Ao continuar, concordo com os termos de uso e política de privacidade.</p>
            </div>
            {currState==="Login"
                ?<p>Criar uma nova conta? <span onClick={()=>setCurrState('Sign Up')}>Clique aqui</span></p>
                :<p>Já tem uma conta? <span onClick={()=>setCurrState('Login')}>Login aqui</span></p>
            }
        </div>
    </div>
  )
}

export default LoginPopup
