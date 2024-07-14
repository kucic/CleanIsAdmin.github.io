import styled from 'styled-components';
import {  useNavigate } from 'react-router-dom';
import {  useTranslation } from 'react-i18next';
import { useState } from 'react';
import * as images from './../images.js'
import styles from './Sitemap.module.css'
 
import Cross from '/resource/icon/icon-cross.svg?react';
import Globe from '/resource/icon/icon-globe.svg?react';

 
const GlobeIcon = styled(Globe)`
    width: 1rem;
    height: 1rem;
    fill: white;
    margin-right: 1rem;
`
const CrossIcon = styled(Cross)`
    width: 1rem;
    height: 1rem;
    fill: white;
    margin-right: 1rem;
`
 
function Sitemap(){
    const {t, i18n} = useTranslation(); 
    const navigate = useNavigate(); 
    const [lng, setLng] = useState(i18n.language);

    const onChangeLanguage = () => { 
        if(lng === "en") {
            i18n.changeLanguage("ko")
            setLng("ko")
        }else{
            i18n.changeLanguage("en")
            setLng("en")
        }
    }

    const onMoveHome = () => {
         
        navigate("/", {replace: true})
    } 

    const onClose = () => { 
        navigate(-1)

    }

    const onMove = (route) => { 
        navigate("/" + route, {replace: true})
    }

    return (
        <div className={styles.modal}> 
            <main className={styles.main_box}> 
                <div className={styles.top_box}>
                    <img className={styles.logo_icon} onClick={onMoveHome} src={images.logo_w}  />
                    <div>
                        <GlobeIcon onClick={onChangeLanguage}/>
                        <CrossIcon onClick={onClose}/>
                    </div> 
                 </div>
                 <div className={styles.middle_box}> 
                    <div className={styles.l_btn} onClick= {()=>{onMove("user")}}>{t("menu_title.users")}</div>
                    <div className={styles.l_btn} onClick= {()=>{onMove("product-info")}}>{t("menu_title.productInfo")}</div>
                    <div className={styles.l_btn} onClick= {()=>{onMove("company-info")}}>{t("menu_title.companyInfo")}</div>
                </div>
            </main>
        </div> 
    )
}
 

export default Sitemap;