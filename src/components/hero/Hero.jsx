import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero(hero) {
    let images = hero.lang.images;

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
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div
            id="krovelnie-raboty"
            className="section hero-section hero-section__container"
        >
            <h1 className="">{hero.lang.head1}</h1>
            <div className="works-block">
                <div className="works-block__list"></div>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="works-block__item works-block__first-item"
                        >
                            <img
                                className="works-block__item-img"
                                src={image.path}
                                alt={image.alt}
                                title={image.title}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <h2>{hero.lang.head2}</h2>
            <p className="text">{hero.lang.text}</p>
        </div>
    );
}

export default Hero;
