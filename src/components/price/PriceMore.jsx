import PriceItem from "./PriceItem";

function PriceMore(lang) {
    let items = lang.lang.priceMore.items;
    return (
        <div className="section price-section__container">
            <h2>{lang.lang.priceMore.head1}</h2>
            <div className="price-blocks">
                <div className="price-blocks__list">
                    {items.map((item) => (
                        <PriceItem
                            key={item.id}
                            item={item}
                            action={lang.lang.priceMore.action}
                            lang={lang}
                        />
                    ))}
                </div>
            </div>
            <p className="text">{lang.lang.priceMore.text}</p>
        </div>
    );
}

export default PriceMore;
