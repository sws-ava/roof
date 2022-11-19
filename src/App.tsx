import Main from './components/main/Main';
import { useState } from 'react';
import { translate } from './data/data'


function App() {

  const [lang, setLang] = useState<any>(translate.ru)



	function showMobileMenu(){
		var htmlTag = document.getElementsByTagName( 'html' )[0];
		htmlTag.classList.toggle("lock");
		htmlTag.classList.toggle("menu-open");
	}



  return (
  <div className="wrapper">
    


    <header className="header">
      <div className="header__container">
        <div className="header__menu menu">
        <a data-goto="#krovelnie-raboty" className="header__logo">
          <img src="img/logo.png" alt="logo" />
        </a>
        <nav className="menu__body">
          <ul className="menu__list">
            <li className="menu__item">
              <a   data-goto="#krovelnie-raboty" className="menu__link">{lang.menu.menu1}</a>
            </li>
            <li className="menu__item">
              <a data-goto-top="60" data-goto="#price-tseny" className="menu__link">{lang.menu.menu2}</a>
            </li>
            <li className="menu__item">
              <a data-goto-top="60"  data-goto="#portfolio" className="menu__link">{lang.menu.menu3}</a>
            </li>
            <li className="menu__item">
              <a data-goto-top="40" data-goto="#contacts" className="menu__link">{lang.menu.menu4}</a>
            </li>
            <li className="menu__item">
              <a className="header-phone phone" href={lang.phone.phone}>{lang.phone.showPhone}</a>
            </li>
            <li className="menu__item langSwiper">
              <span
                onClick={()=>setLang(translate.ru)}
              >
                RU
              </span>
              <span
                onClick={()=>setLang(translate.ua)}
              >
                UA
              </span>
            </li>
          </ul>
        </nav>
        <a className="header-phone phone-center" href={lang.phone.phone}>{lang.phone.showPhone}</a>
        <div className="icon-menu" onClick={() => showMobileMenu()}>
          <span></span><span></span>
        </div>
        </div>
      </div>
    </header>




    <Main lang={lang} />
    

    <footer className="footer">
      <div className="footer__container">
      <div className="footer__menu menu">
        <nav className="menu__body">
        <ul className="menu__list">
            <li className="menu__item">
              <a   data-goto="#krovelnie-raboty" className="menu__link">{lang.menu.menu1}</a>
            </li>
            <li className="menu__item">
              <a data-goto-top="60" data-goto="#price-tseny" className="menu__link">{lang.menu.menu2}</a>
            </li>
            <li className="menu__item">
              <a data-goto-top="60"  data-goto="#portfolio" className="menu__link">{lang.menu.menu3}</a>
            </li>
            <li className="menu__item">
              <a data-goto-top="40" data-goto="#contacts" className="menu__link">{lang.menu.menu4}</a>
            </li>
            <li className="menu__item">
              <a className="header-phone phone" href={lang.phone.phone}>{lang.phone.showPhone}</a>
            </li>
        </ul>
        </nav>
      </div>
      <div className="copy">
        Copyright ©2021-2022
      </div>
      </div>
    </footer>





  </div>
  );
}

export default App;
