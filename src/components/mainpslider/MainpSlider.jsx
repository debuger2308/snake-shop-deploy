

import GoodsItems from "./../../utils/items.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainpSlider.css"
import ItemCard from "../itemcard/ItemCard";

const MainpSlider = ({ title, filterParam }) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <button className="main__slider-arrow-right" onClick={onClick}>
                <svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 9.46718H32M32 9.46718L24.6154 1M32 9.46718L24.6154 16.876" stroke="white" strokeWidth="2" />
                </svg>
            </button>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <button className="main__slider-arrow-left" onClick={onClick}>
                <svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34 9.46718H2M2 9.46718L9.38462 1M2 9.46718L9.38462 16.876" stroke="white" strokeWidth="2" />
                </svg>
            </button>
        );
    }

    return (
        <section className="main__collection">
            <div className="container">
                <h1 className="main__collection-title">{title}</h1>
                <div className="main__collection-items">
                    <Slider {...settings}>
                        {GoodsItems.filter(filterParam).map((item) => {
                            return <ItemCard item={item} key={item.id} />
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default MainpSlider;