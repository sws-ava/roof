function BrandModal({children, visible, setVisible, styleClass}) {
    let modalShow = visible ? "showModal" : "";
    let modalStyles = ["modalHolder", modalShow];

    const modalInnerStyles = ["modalInner", styleClass];

    return (
        <div
            className={modalStyles.join(" ")}
            onClick={() => setVisible(false)}
        >
            <div
                className={modalInnerStyles.join(" ")}
                onClick={(e) => e.stopPropagation()}
            >
                <svg
                    className="closeModal"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setVisible(false)}
                >
                    <rect
                        width="20"
                        height="1"
                        rx="0.5"
                        transform="matrix(-0.707107 0.707107 0.707107 0.707107 14.1421 0)"
                    />
                    <rect
                        x="0.707031"
                        width="20"
                        height="1"
                        rx="0.5"
                        transform="rotate(45 0.707031 0)"
                    />
                </svg>
                {children}
            </div>
        </div>
    );
}

export default BrandModal;
