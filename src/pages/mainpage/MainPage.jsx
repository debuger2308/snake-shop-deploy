
import './MainPage.css'
import bannerImg from "./../../images/mainbanner.png"
import MainpSlider from '../../components/mainpslider/MainpSlider';


const MainPage = () => {
    return (
        <main className="main">
            <section className="main__banner">
                <div className="container">
                    <h1 className="banner__title">Акции</h1>
                </div>
                <img src={bannerImg} alt="" className="banner__img" />
            </section>

            <MainpSlider title={'Вессення коллекция'} filterParam={item => item.collection ==='spring' && item.sizes!==''}/>
            <MainpSlider title={'Мужчинам'} filterParam={item => item.sex ==='man' && item.sizes!==''} />
            <MainpSlider title={'Женщинам'} filterParam={item => item.sex ==='woman' && item.sizes!==''}/>
        </main>
    );
}

export default MainPage;