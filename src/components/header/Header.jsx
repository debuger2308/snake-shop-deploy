
import './Header.css'
import logo from "./../../images/logo.svg"
import bagIcon from "./../../images/bag-icon.svg"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from "react-redux";

const Header = () => {

    const bagCounter = useSelector(state => state.bagCount.bagCount)

    const [isBurgerActive, handleBurgerToggle] = useState(false)

    window.addEventListener('resize', () => { handleBurgerToggle(false) })
    return (

        <header>
            <button
                onClick={() => {
                    isBurgerActive ? handleBurgerToggle(false) : handleBurgerToggle(true)
                }}
                className="header__burger">
                <span className="header__burger-span"></span>
            </button>


            <div className="container">
                <div className={isBurgerActive ? "header header--active" : "header"}>
                    <NavLink to="snake-shop-deploy/" className="header__logo" onClick={() => handleBurgerToggle(false)}>

                        <img src={logo} alt="" />
                    </NavLink>

                    <div className="header__nav">
                        <NavLink
                            className={({ isActive }) => { return isActive ? "header__nav-link header__nav-link--active" : "header__nav-link" }}
                            to="snake-shop-deploy/catalog" onClick={() => handleBurgerToggle(false)}>
                            каталог
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => { return isActive ? "header__nav-link header__nav-link--active" : "header__nav-link" }}
                            to="snake-shop-deploy/FAQ" onClick={() => handleBurgerToggle(false)}>
                            FAQ
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => { return isActive ? "header__nav-link header__nav-link--active" : "header__nav-link" }}
                            to="snake-shop-deploy/reviews" onClick={() => handleBurgerToggle(false)}>
                            отзывы
                        </NavLink>


                    </div>

                    <aside className="header__aside">
                        <NavLink to="snake-shop-deploy/login" className="header__login-btn" onClick={() => handleBurgerToggle(false)}>
                            Вход
                        </NavLink>
                        <NavLink to="snake-shop-deploy/bag" className="header__aside-bag" onClick={() => handleBurgerToggle(false)}>
                            <img src={bagIcon} alt="" className="header__bag-icon" />
                            <div className={bagCounter > 0 ? "header__bag-counter header__bag-counter--active" : "header__bag-counter"}>
                                {bagCounter}
                            </div>
                        </NavLink>

                    </aside>
                </div>

                <div className="header-burger">
                    <NavLink to="snake-shop-deploy/" className="header__logo">

                        <img src={logo} alt="" />
                    </NavLink>
                </div>
            </div>

            <div
                onClick={() => handleBurgerToggle(false)}
                className={isBurgerActive ? "blur--active blur" : "blur"}></div>
        </header>

    );
}

export default Header;