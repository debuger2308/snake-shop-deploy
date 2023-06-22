
import { NavLink } from "react-router-dom"
import reviews from "./../../utils/reviews.json"
import "./Reviews.css"

const Reviews = () => {
    console.log(reviews);

    function displayStars(item) {
        const stars = []
        for (let i = 0; i < item.grade; i++) {
            stars.push((
                <li className="reviews__stars-item">
                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3662 1.82936C13.5032 -0.255461 16.4968 -0.255465 17.6338 1.82936L19.9256 6.03174C20.3571 6.82292 21.1214 7.37822 22.0072 7.5441L26.7121 8.42517C29.0463 8.86228 29.9713 11.7093 28.3399 13.4349L25.0514 16.9132C24.4323 17.5681 24.1404 18.4666 24.2563 19.3603L24.8723 24.1072C25.1779 26.4621 22.756 28.2217 20.6107 27.2034L16.2865 25.1507C15.4724 24.7642 14.5276 24.7642 13.7135 25.1507L9.38927 27.2034C7.24399 28.2217 4.82214 26.4621 5.12772 24.1072L5.74367 19.3603C5.85964 18.4666 5.5677 17.5681 4.94858 16.9132L1.66009 13.4349C0.0286616 11.7093 0.953722 8.86228 3.28786 8.42517L7.99278 7.5441C8.87858 7.37822 9.64288 6.82293 10.0744 6.03174L12.3662 1.82936Z" fill="#FFB648" />
                    </svg>
                </li>
            ))
        }
        return stars
    }

    return (
        <main className="reviews">
            <div className="container">
                <div className="main__reviews">
                    <h1 className="reviews__title">Отзывы</h1>
                    <ul className="reviews__list">
                        {reviews.map((item) => {
                            return (
                                <li className="reviews__list-item">
                                    <NavLink to={`/snake-shop-deploy/${item.product.id}`} className="reviews__list-link">
                                        <img src={`./goods/${item?.product?.img}`} className="reviews__list-img" />
                                    </NavLink>
                                    <div className="rewiews__list-info">
                                        <h2 className="reviews__list-title">
                                            {item.product.name}
                                        </h2>
                                        <div className="rewiews__list-stars">
                                            {displayStars(item)}
                                        </div>
                                        <p className="reviews__list-desc">{item.title}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Reviews;