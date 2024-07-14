/**
 * Header -> 화면 사이즈마다 디자인 변경
 * link -> home, user, product, company, CustomersSupport, translate , sitemap
 * @param {*} props 
 * @returns 
 */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import  styles from './Header.module.css';
import * as images from './../images.js'
  
function Header(){ 
    const {t, i18n} = useTranslation();
    const [lng, setLng] = useState(i18n.language);

    const navigate = useNavigate();
    const onMoveHome = () => {
        navigate("/")
    }

    const onChangeLanguage = () => { 
        if(lng === "en") {
            i18n.changeLanguage("ko")
            setLng("ko")
        }else{
            i18n.changeLanguage("en")
            setLng("en")
        }
    }

    const onMoveSitemap = () => {
        navigate("menu")
    }

    return (
        <div className= {styles.top_box}> 
            <nav className={styles.row_l}  >
                <img className={styles.company_icon} src={images.logo} onClick={onMoveHome}/>
                <div className={styles.menu} > 
                    <Link className={styles.btn}  to="user" > {t("menu_title.users")} </Link>
                    <Link className={styles.btn}  to="product-info" > {t("menu_title.productInfo")} </Link>
                    <Link className={styles.btn}  to="company-info" > {t("menu_title.companyInfo")} </Link> 
                </div>
                
               
            </nav>
            <nav className={styles.row_l}  >
                <div className={styles.menu}>
                    <Link className={styles.btn}  to="cs" >{t("menu_title.cs")}</Link> 
                </div>
                <div className={styles.img_btn} onClick={onChangeLanguage} ><img src={images.globe} className={styles.icon} /></div>
                <div className={styles.img_btn} onClick={onMoveSitemap} ><img  src={images.menu} className={styles.icon}  /></div> 
            </nav> 
        </div>
    )
}

export default Header;