import React, { useState, useEffect } from 'react';
//import { FaAngleUp } from 'react-icons/fa';
//credit for most of the code: https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/ Joel Olawanle

import './index.css';

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
            {showTopBtn && (<button className="button-position"
             onClick={goToTop}>^</button>)
                /*<FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />*/
            }
        </div>
    );
};
export default ScrollToTop;