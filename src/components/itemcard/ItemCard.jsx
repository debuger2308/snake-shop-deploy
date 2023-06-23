
import { NavLink } from "react-router-dom";
import "./ItemCard.css"
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeCount } from "../../store/bagCountReducer";



const ItemCard = ({ item }) => {

    const dispatch = useDispatch()

    const itemSizes = item.sizes === undefined || item.sizes === '' ? null : item.sizes.split(' ')

    const [isDiplaySizes, handleDisplaySizes] = useState(false)
    const [activeSize, setActiveSize] = useState(-1)
    const [additInfoActive, setAdditInfoActive] = useState(false)

    const activeSizeBtn = 'itemcard__size-item--active itemcard__size-item'
    const nonActiveSizeBtn = 'itemcard__size-item'


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


    return (
        <div className="itemcard">
            <NavLink className="itemcard__link" to={`/snake-shop-deploy/${item.id}`}>
                <img src={`./goods/${item.img}`} className="itemcard__img" />
                <div className={item.sizes.length === 0 ? "itemcard__img-notification itemcard__img-notification--active" : "itemcard__img-notification"}>
                    <strong className="itemcard__img-message">{item.sizes.length === 0 ? "Нет в наличии😔" : ""}</strong>
                </div>


            </NavLink>
            <strong className="item__price">{item.price}₴</strong>
            <p className="items__name">{item.name}</p>

            <button
                onClick={() => {
                    handleDisplaySizes(true)
                }}
                className="items__addtobag-btn">
                В корзину
            </button>
            <div className={isDiplaySizes ? "itemcard__sizes itemcard__sizes--active" : "itemcard__sizes"}>
                <h3 className="itemcard__sizes-title">Выберите размер:</h3>
                {itemSizes?.map((size, index) => {
                    return (
                        <button
                            className={index === activeSize ? activeSizeBtn : nonActiveSizeBtn}
                            key={index}
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
                        >
                            {size}
                        </button>
                    )
                })}

                <button
                    className={activeSize >= 0 ? "itemcard__sizes-addtobag-btn itemcard__sizes-addtobag-btn--active" : "itemcard__sizes-addtobag-btn"}
                    onClick={() => {
                        if (activeSize >= 0) {
                            addToBag(item)
                            handleDisplaySizes(false)
                            dispatch(changeCount(JSON.parse(localStorage.getItem('bagItems'))))
                            setAdditInfoActive(true)
                            setTimeout(() => {
                                setAdditInfoActive(false)
                            }, 1000);
                        }
                    }}
                >
                    Добавить
                </button>

                <button
                    onClick={() => {
                        handleDisplaySizes(false)
                    }}
                    className="itemcard__sizrs-close-btn">

                </button>
            </div>

            <button className={additInfoActive ? "itemcard__additional-info-btn itemcard__additional-info-btn--active" : "itemcard__additional-info-btn"}>
                Добавлено !
            </button>
        </div>
    );
}

export default ItemCard;