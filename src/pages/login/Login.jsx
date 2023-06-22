
import { useState } from "react";
import "./Login.css"
import { NavLink } from "react-router-dom";

const Login = () => {
    const [valueLogin, setValueLogin] = useState('')
    const [valuePassword, setValuePassword] = useState('')

    return ( 
        <main className="auth">
            <div className="container">
                <div className="main__auth">
                    <form
                        action=""
                        className="auth__form"
                        onSubmit={(e)=>{
                            e.preventDefault()
                            e.target.reset()
                            
                        }}
                    >
                        <input
                            type="text"
                            className='auth__input'
                            placeholder='Телефон или E-mail'
                            required
                            onChange={(e) => { setValueLogin(e.target.value) }}
                        />

                        <input
                            type="password"
                            className='auth__input'
                            placeholder='Пароль'
                            required
                            onChange={(e) => { setValuePassword(e.target.value) }}
                        />
                        <button className='auth__main-btn'>Войти</button>
                        <div className="auth__form-link">
                            <NavLink to='snake-shop-deploy/registr'>Нет аккаунта?</NavLink>
                            
                        </div>
                    </form>

                </div>
            </div>
        </main>
     );
}
 
export default Login;