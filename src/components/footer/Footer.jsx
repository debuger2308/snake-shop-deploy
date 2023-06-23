
import './Footer.css'
import logo from './../../images/logo.svg'
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <NavLink to="/" className="footer__logo">
                        <img src={logo} alt="" />
                    </NavLink>

                    <div className="footer__support">
                        <strong className="footer__support-title">
                            Тех. поддержка
                        </strong>
                        <a href="tel:19998008999" className="footer__support-tel">+38-050-704-8935</a>
                        <a href="mailto:snakeshop@gmail.com" className="footer__support-mail">snakeshop@gmail.com</a>
                    </div>

                    <div className="footer__nav">
                        <NavLink to="snake-shop-deploy/catalog" className="footer__nav-link">Каталог</NavLink>
                        <NavLink to="snake-shop-deploy/reviews" className="footer__nav-link">Отзывы</NavLink>
                        <NavLink to="snake-shop-deploy/FAQ" className="footer__nav-link">FAQ</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;