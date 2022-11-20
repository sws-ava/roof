import {useState} from "react";
import BrandModal from "../UI/brandModal/BrandModal";

function PriceItem({item, action, lang}) {
    function getPriceTitle(title) {
        setVisible(true);
        setTitle(title);
    }

    const [title, setTitle] = useState("");
    const [visible, setVisible] = useState(false);
    const [visibleDone, setVisibleDone] = useState(false);

    const [clientPhone, setClientPhone] = useState("+380");

    function inputHandler(e) {
        setClientPhone(e);
    }

    function sentMessage() {
        if (clientPhone.length == 13) {
            console.log(title);
            console.log(clientPhone);
            // axios post ....

            setVisible(false);
            setVisibleDone(true);
            setClientPhone("+380");
        }
    }

    return (
        <>
            <div className="price-blocks__item">
                <div className="price-blocks__item-title">{item.title}</div>
                <div className="price-blocks__item-img">
                    <img src={item.img} alt={item.title} title={item.title} />
                </div>
                <div className="price-blocks__item-price">{item.price}</div>
                <div
                    className="price-blocks__item-action"
                    onClick={() => getPriceTitle(item.title)}
                >
                    {action}
                </div>
            </div>
            <BrandModal
                styleClass="priceItem__inner"
                visible={visible}
                setVisible={setVisible}
            >
                <div className="contact-section__form">
                    {/* <input
                        required
                        value={clientPhone}
                        onChange={(e) => inputHandler(e.target.value)}
                        className="contact-section__form-input"
                        type="tel"
                        maxLength={13}
                    />
                    <input
                        value={title}
                        className="contact-section__form-input"
                        type="hidden"
                    />
                    <span
                        className="contact-section__form-submit"
                        onClick={() => sentMessage()}
                    >
                        {lang.lang.contact.contact3}
                    </span> */}

                    <div className="contact-section__title">
                        {lang.lang.contact.contact4}
                    </div>
                    <a className="phone" href={lang.lang.phone.phone}>
                        {lang.lang.phone.showPhone}
                    </a>
                </div>
            </BrandModal>
            <BrandModal visible={visibleDone} setVisible={setVisibleDone}>
                <img src="images/sended.png" alt="" />
                {lang.lang.contact.contact5}
            </BrandModal>
        </>
    );
}

export default PriceItem;
