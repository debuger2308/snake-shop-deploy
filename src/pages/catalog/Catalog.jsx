
import "./Catalog.css"

import GoodsItems from "./../../utils/items.json"
import { useEffect, useState } from "react";
import ItemCard from "../../components/itemcard/ItemCard";

const filterItemsByTerm = (searchText, listOfItems) => {
    if (!searchText) return listOfItems
    return listOfItems.filter(({ name }) => name.toLowerCase().includes(searchText.toLowerCase()))
}

const filterItemsByBrend = (searchByBrend, listOfItems) => {
    if (searchByBrend.length === 0) return listOfItems
    return listOfItems.filter(({ brend }) => searchByBrend.includes(brend))
}

const filteredItemsByInStock = (searchInStock, listOfItems) => {
    if (!searchInStock) return listOfItems
    return listOfItems.filter(({ sizes }) => sizes.length !== 0)
}

const Catalog = () => {

    const [searchByBrend, setSearchByBrend] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchInStock, setSearchInStock] = useState(true)

    const [styleForBrendMenu, setStyleForBrendMenu] = useState(false)


    const [ItemList, setItemList] = useState(GoodsItems)


    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredItems = filterItemsByTerm(searchTerm, filterItemsByBrend(searchByBrend, filteredItemsByInStock(searchInStock, GoodsItems)))
            setItemList(filteredItems)
        }, 100)
        return () => clearInterval(Debounce)
    }, [searchByBrend, searchTerm, searchInStock])

    const allBrends = []
    GoodsItems.map((item) => {
        if (!allBrends.includes(item.brend)) allBrends.push(item.brend)
    })


    return (
        <main className="catalog">
            <div className="container">
                <div className="main__catalog">
                    <h1 className="catalog__title">Каталог</h1>

                    <div className="catalog__filter">

                        <button
                            onClick={() => {
                                if (searchInStock) setSearchInStock(false)
                                else setSearchInStock(true)
                            }}
                            className="catalog__filter-instock">
                            <svg
                                className={searchInStock ? "catalog__filter-instock-svg catalog__filter-instock-svg--active" : "catalog__filter-instock-svg"}
                                fill="#000000" width="32px" height="32px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                <path d="m.153 526.146 92.168-92.299 867.767 867.636 867.636-867.636 92.429 92.299-960.065 959.935z" fillRule="evenodd" />
                            </svg>
                            Только в наличии
                        </button>

                        <div className="catalog__filter-brend">
                            <button
                                onClick={() => {
                                    if (styleForBrendMenu) setStyleForBrendMenu(false)
                                    else setStyleForBrendMenu(true)
                                }}
                                className="catalog__filter-brend-btn">
                                Бренд
                                <svg
                                    className={styleForBrendMenu ? "catalog__filter-brend-svg catalog__filter-brend-svg--active" : "catalog__filter-brend-svg"}
                                    fill="#000000" width="24px" height="24px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m.153 526.146 92.168-92.299 867.767 867.636 867.636-867.636 92.429 92.299-960.065 959.935z" fillRule="evenodd" />
                                </svg>
                            </button>
                            <div className={styleForBrendMenu ? "catalog__filter-brend-list catalog__filter-brend-list--active" : "catalog__filter-brend-list"}>
                                {allBrends.map((item, index) => {
                                    return (
                                        <button
                                            onClick={() => {
                                                if (!searchByBrend.includes(item)) setSearchByBrend(searchByBrend.concat([item]))
                                                if (searchByBrend.includes(item)) setSearchByBrend(searchByBrend.filter(brend => brend != item))


                                            }}
                                            key={index}
                                            className={searchByBrend.includes(item) ? "catalog__filter-brend-item--active catalog__filter-brend-item" : "catalog__filter-brend-item"}>
                                            {item}
                                        </button>
                                    )
                                })}

                            </div>
                        </div>

                        <input
                            type="text"
                            placeholder="поиск"
                            className="catalof__filter-input"
                            onChange={(e) => {
                                setSearchTerm(e.target.value)

                            }}
                        />
                    </div>

                    <ul className="catalog__list">
                        {ItemList?.map((item) => {
                            return <li key={item.id}>
                                <ItemCard item={item} />
                            </li>
                        })}
                    </ul>

                </div>
            </div>
        </main>
    );
}

export default Catalog;