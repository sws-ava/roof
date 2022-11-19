import Hero from "../hero/Hero";
import Price from "../price/Price";
import PriceMore from "../price/PriceMore";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";

function Main(lang) {
    return (
        <main className="page">
            <Hero lang={lang.lang.hero} />
            <Price lang={lang.lang} />
            <PriceMore lang={lang.lang} />
            <Portfolio lang={lang.lang.portfolio} />
            <Contact lang={lang.lang.contact} phone={lang.lang.phone} />
        </main>
    );
}

export default Main;
