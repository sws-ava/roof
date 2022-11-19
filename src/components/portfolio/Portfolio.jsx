import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Portfolio(lang) {
    let items = lang.lang.items;

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },
        ],
    };

    return (
        <div id="portfolio" className="section  portfolio-section__container">
            <h2>{lang.lang.head1}</h2>
            <Slider {...settings}>
                {items.map((item) => (
                    <div key={item.id} className="works-block__item">
                        <img
                            className="works-block__item-img"
                            src={item.img}
                            alt={item.title}
                            title={item.title}
                        />
                        <div className="title">{item.title}</div>
                    </div>
                ))}
            </Slider>
            <div className="works-block">
                <div className="works-block__list"></div>
            </div>
        </div>
    );
}

export default Portfolio;
