import PriceItem from "./PriceItem";

function Price(lang) {
    let items = lang.lang.price.items;

    return (
        <div id="price-tseny" className="section price-section__container">
            <h2>{lang.lang.price.head1}</h2>
            <div className="price-blocks">
                <div className="price-blocks__list">
                    {items.map((item) => (
                        <PriceItem
                            key={item.id}
                            item={item}
                            action={lang.lang.price.action}
                            lang={lang}
                        />
                    ))}
                </div>
            </div>
            <h2>{lang.lang.price.head2}</h2>
            <p className="text">{lang.lang.price.text}</p>
        </div>
    );
}

export default Price;
