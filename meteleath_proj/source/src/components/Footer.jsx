/**
 * 변경 사항이 없는 footer 페이지
 * @param {*} props 
 * @returns 
 */
 
import styles from './Footer.module.css';
import * as images from './../images.js'
import { useTranslation } from 'react-i18next';

 

function Footer(){
    const {t} = useTranslation()
    return (
        <footer className={styles.bottom_box}>
            <div className={styles.icon_box} >
                <img className={styles.company_icon} src={images.logo}  />  
            </div>
            
            <div className={styles.company_info_box}>
                <div className={styles.info_box}>
                    <p className={styles.company_name_txt}>{t("footer.company_name")}</p>
                </div>

                <div className={styles.company_info_sub_box}>
                    <div className={styles.info_sub_box}>
                        <p className={styles.content_txt}>{t("footer.address")}</p>
                        
                    </div>

                    <div className={styles.info_sub_box}>
                        <p className={`${styles.content_txt}`}>{t("footer.ceo_name")}</p>
                        <p className={`${styles.content_txt}`}>{t("footer.id")}</p>
                        
                    </div>

                    <div className={styles.info_sub_box}>
                        <p className={`${styles.content_txt}`}>{t("footer.call")}</p>
                        <p className={`${styles.content_txt}`}>{t("footer.email")}</p>
                    </div>
                </div>
                <div className={styles.term_box}>
                    <p className={`${styles.term_txt} `}>{t("footer.term")}</p>
                    <p className={`${styles.term_txt}`}>{t("footer.per")}</p>
                    <p className={`${styles.term_txt}`}>{t("footer.ser")}</p>
                </div>
            </div>
           
            <div className={styles.sns_box}>
                <p className={styles.content_txt}>SNS</p>
            </div>
            
             
               
        </footer>
    )
}

export default Footer;