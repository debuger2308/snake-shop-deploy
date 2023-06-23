
import { useState } from "react";
import "./Faq.css"

const Faq = () => {


    const [accItem, setAccItem] = useState(0)
    
    return (
        <main className="faq">
            <div className="container">
                <div className="main__faq">
                    <ul className="main__faq-list">
                        <li className="main__list-item">
                            <h1 className="main__item-title">Вы доставляете товар по всей cтране?</h1>
                            <p className={accItem === 1 ? "main__item-subtitle main__item-subtitle--active" : "main__item-subtitle"}>
                                Да. Мы доставляем свой товар во все города страны где присутствуют отделения почты
                            </p>
                            <button
                                onClick={() => { accItem === 1 ? setAccItem(0) : setAccItem(1) }}
                                className={accItem === 1 ? 'main__item-btn main__item-btn--active' : 'main__item-btn'}></button>
                        </li>
                        <li className="main__list-item">
                            <h1 className="main__item-title">Возможен ли возврат?</h1>
                            <p className={accItem === 2 ? "main__item-subtitle main__item-subtitle--active" : "main__item-subtitle"}>Да, возврат возможет в течении 14 дней, если товар был не испорчен самим заказчиком </p>
                            <button
                                onClick={() => { accItem === 2 ? setAccItem(0) : setAccItem(2) }}
                                className={accItem === 2 ? 'main__item-btn main__item-btn--active' : 'main__item-btn'}></button>
                        </li>
                        <li className="main__list-item">
                            <h1 className="main__item-title">Как осуществляется оплата?</h1>
                            <p className={accItem === 3 ? "main__item-subtitle main__item-subtitle--active" : "main__item-subtitle"}>
                                Оплата осуществляется или онлайн полностью, или при получении в точке выдачи
                            </p>
                            <button
                                onClick={() => { accItem === 3 ? setAccItem(0) : setAccItem(3) }}
                                className={accItem === 3 ? 'main__item-btn main__item-btn--active' : 'main__item-btn'}></button>
                        </li>
                        <li className="main__list-item">
                            <h1 className="main__item-title">Как оформить заказ?</h1>
                            <p className={accItem === 4 ? "main__item-subtitle main__item-subtitle--active" : "main__item-subtitle"}>
                                Заказ оформляется в разделе корзина
                            </p>
                            <button
                                onClick={() => { accItem === 4 ? setAccItem(0) : setAccItem(4) }}
                                className={accItem === 4 ? 'main__item-btn main__item-btn--active' : 'main__item-btn'}></button>
                        </li>
                    </ul>
                </div>
            </div>
        </main >
    );
}

export default Faq;