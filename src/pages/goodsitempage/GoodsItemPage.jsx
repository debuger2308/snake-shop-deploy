
import { useState } from "react";
import "./GoodsItemPage.css"
import { changeCount } from "../../store/bagCountReducer";
import { useDispatch } from "react-redux";

const GoodsItemPage = ({ item }) => {
    const dispatch = useDispatch()

    function addToBag(item) {
        const bagItems = 'bagItems'
        let currentValueLCStorage = localStorage.getItem(bagItems)
        item.chosenSize = item.sizes.split(' ')[activeSize]
    
        if (JSON.parse(localStorage.getItem(bagItems)) === null) {
            localStorage.setItem(bagItems, JSON.stringify([item]))
        }
        else {
            localStorage.setItem(bagItems, JSON.stringify(JSON.parse(currentValueLCStorage).concat(item)))
        }
    }

    const itemSizes = item.sizes === undefined || item.sizes === '' ? null : item.sizes.split(' ')
    const [activeSize, setActiveSize] = useState(-1)
    const activeSizeBtn = 'goods__size-item--active goods__size-item'
    const nonActiveSizeBtn = 'goods__size-item'
    return (
        <main className="goodsitem">
            <div className="container">
                <div className="main__goodsitem">
                    <div className="goodsitem__img-box">
                        <img src={`./goods/${item.img}`} className="goodsitem__img" />
                        <div className={item.sizes.length === 0 ? "goodsitem__img-notification goodsitem__img-notification--active" : "goodsitem__img-notification"}>
                            <strong className={item.sizes.length === 0 ? "goodsitem__img-message goodsitem__img-message--active" : "goodsitem__img-message"}>
                                {item.sizes.length === 0 ? "Нет в наличии😔" : ""}
                            </strong>
                        </div>
                    </div>
                    <div className="goodsitem__info">

                        <h1 className="goodsitem__title">
                            {item.name}
                        </h1>

                        <strong className="goodsitem__price">
                            {item.price}₴
                        </strong>

                        <div className="goodsitem__sizes">
                            {itemSizes === null
                                ? <strong>Нет в наличии</strong>
                                : <div className="goodsitem__sizes-list">
                                    <h3 className="goodsitem__sizes-title">Выберите размер:</h3>
                                    {itemSizes.map((size, index) => {
                                        return <button
                                            onClick={(e) => {
                                                setActiveSize(index)
                                                if (e.target.className === activeSizeBtn) {
                                                    e.target.className = nonActiveSizeBtn
                                                    setActiveSize(-1)
                                                }
                                                else {
                                                    e.target.className = activeSizeBtn
                                                }
                                            }}
                                            className={index === activeSize ? activeSizeBtn : nonActiveSizeBtn}
                                            key={index}
                                        >
                                            {size}
                                        </button>
                                    })}
                                </div>

                            }
                        </div>


                        

                        <button
                            onClick={() => {
                                if (activeSize >= 0) {
                                    addToBag(item)
                                    dispatch(changeCount(JSON.parse(localStorage.getItem('bagItems'))))
                                }
                            }}
                            className={activeSize >= 0?"goodsitem__tobag-btn goodsitem__tobag-btn--active":"goodsitem__tobag-btn"}>
                            В корзину
                        </button>

                        <p className="goodsitem__delinfo">
                            По адресу, курьером — с примеркой, бесплатно при покупке от 4 500 ₴
                        </p>

                        <p className="goodsitem__delinfo">
                            B пункты выдачи заказов — с примеркой, бесплатно при покупке от 3 500 ₴
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default GoodsItemPage;