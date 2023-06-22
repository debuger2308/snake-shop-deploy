
import "./Registration.css"

import { NavLink, useNavigate } from "react-router-dom"
import {  useState } from 'react';


const Registration = () => {


    const [valuePassword, setValuePassword] = useState('')
    const [valuePasswordRepeat, setValuePasswordRepeat] = useState('')
    const [valuePhone, setValuePhone] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [errMessage, setErrMessage] = useState('')

    const navigate = useNavigate()

    return (
        <main className="registr">
            <div className="container">

                <div className="main__registr">
                    <form
                        action=""
                        className="registr__form"
                        onSubmit={(e) => {
                            if (valuePassword === valuePasswordRepeat) {
                                e.preventDefault()
                                e.target.reset()
                                sendData(valuePhone, valueEmail, valuePassword)
                                navigate('/auth')
                            }
                            else e.preventDefault()
                        }}
                    >
                        <input
                            type="text"
                            className='registr__input'
                            placeholder='Телефон'
                            required
                            onChange={(event) => {
                                setValuePhone(event.target.value)
                            }}
                        />
                        <input
                            type="email"
                            className='registr__input'
                            placeholder='Почта'
                            required
                            onChange={(event) => {
                                setValueEmail(event.target.value)
                            }}
                        />

                        <input
                            type="password"
                            className='registr__input'
                            placeholder='Пароль'
                            required minLength={8} maxLength={24}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Пароль должен содержать от 8ми до 24х символов, включая заглвную букву и цифру"
                            onChange={(event) => {
                                setErrMessage('')
                                setValuePassword(event.target.value)
                            }}
                        />
                        <input
                            type="password"
                            className='registr__input'
                            placeholder='Повторите пароль'
                            required
                            onChange={(event) => {
                                setErrMessage('')
                                setValuePasswordRepeat(event.target.value)
                            }}
                        />

                        <div className="registr__form--errmesage">
                            <strong className=''>{errMessage}</strong>
                        </div>

                        <button
                            className='registr__main-btn'
                            onClick={
                                (e) => {
                                    if (valuePassword !== valuePasswordRepeat) setErrMessage('Пароли несовпадают!')
                                    else setErrMessage('')
                                }
                            }
                        >Регистрация</button>
                        <div className="registr__form-link">
                            <NavLink to='/auth'>Есть аккаунт?</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Registration;