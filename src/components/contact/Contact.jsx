import {useState} from "react";
import BrandModal from "../UI/brandModal/BrandModal";

function Contact({lang, phone}) {
    const [clientPhone, setClientPhone] = useState("+380");

    function inputHandler(e) {
        setClientPhone(e);
    }

    function sentMessage() {
        if (clientPhone.length == 13) {
            // axios post ....

            setVisible(true);
            setClientPhone("+380");
        }
    }

    let [visible, setVisible] = useState(false);

    return (
        <>
            <div id="contacts" className="section  contact-section__container">
                <h2>{lang.contact1}</h2>
                <div className="contact-section__holder">
                    <div className="contact-section__block">
                        <div className="contact-section__form">
                            {/* <div className="contact-section__title">
                                {lang.contact2}
                            </div>
                            <input
                                required
                                value={clientPhone}
                                onChange={(e) => inputHandler(e.target.value)}
                                className="contact-section__form-input"
                                type="tel"
                                maxLength={13}
                            />
                            <span
                                className="contact-section__form-submit"
                                onClick={() => sentMessage()}
                            >
                                {lang.contact3}
                            </span> */}

                            <div className="contact-section__title">
                                {lang.contact4}
                            </div>
                            <a className="phone" href={phone.phone}>
                                {phone.showPhone}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <BrandModal visible={visible} setVisible={setVisible}>
                <img src="images/sended.png" alt="" />
                {lang.contact5}
            </BrandModal>
        </>
    );
}

export default Contact;
