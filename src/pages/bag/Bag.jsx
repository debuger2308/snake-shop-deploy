
import { useState } from "react";
import "./Bag.css"
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCount } from "../../store/bagCountReducer";

const Bag = () => {
    const dispatch = useDispatch()

    const [bagItems, setBagItems] = useState(JSON.parse(localStorage.getItem('bagItems')))

    let sum = 0

    if (bagItems !== null) {
        bagItems.forEach(item => {
            if (item.sizes[0] !== undefined) sum += Number(item.price)
        });
    }
    
    useEffect(() => {
        localStorage.setItem('bagItems', JSON.stringify(bagItems))
        dispatch(changeCount(JSON.parse(localStorage.getItem('bagItems'))))
    }, [bagItems])

    return (
        <main className="bag">
            <div className="container">
                <div className="main__bag">
                    <h1 className="bag__title">
                        {bagItems !== null && bagItems.length !== 0 ? "Ваша корзина" : "Ваша корзина пуста"}
                    </h1>

                    {bagItems !== null && bagItems.map((item, index) => {

                        return (
                            <div key={index} className="bag__item">
                                <NavLink className="bag__item-link" to={`/snake-shop-deploy/${item.id}`}>
                                    <img src={`./goods/${item.img}`} className="bag__item-img" />
                                </NavLink>
                                <div className="bag__item-info">
                                    <h1 className="bag__item-name">{item.name}</h1>

                                    <div className="bag__item-sizes">
                                        Размер:
                                        {item.sizes.split(' ').map((size, sizeIndex) => {
                                            return (
                                                <button
                                                    onClick={(e) => {
                                                        setBagItems(bagItems.filter((bItem, bIndex) => {
                                                            
                                                            if (index === bIndex) {
                                                                bItem.chosenSize = size
                                                                return bItem
                                                            }
                                                            else return bItem
                                                        }))
                                                    }}
                                                    key={sizeIndex}
                                                    className={item.chosenSize === size ? "bag__item-sizes-btn bag__item-sizes-btn--active" : "bag__item-sizes-btn"}>
                                                    {size}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    <strong className="bag__item-price">Стоимость: {item.price}₴</strong>

                                    <button
                                        onClick={() => {
                                            setBagItems(bagItems.filter((bItem, bIndex) => {
                                                if (index !== bIndex) return bItem
                                            }))
                                            
                                        }}
                                        className="bag__item-delete">
                                        Удалить
                                    </button>

                                </div>
                            </div>


                        )
                    })}

                    {bagItems !== null && bagItems.length !== 0 &&
                        <div className="bag__foot">
                            <strong className="bag_sum">Сумма: {sum}₴</strong>
                            <button className='bag_order-btn main-btn'>Заказать</button>
                            <button
                                onClick={() => {
                                    setBagItems([])
                                    
                                }}
                                className='bag_delete-btn'>Удалить всё</button>
                        </div>}

                </div>
            </div>
        </main>
    );
}

export default Bag;