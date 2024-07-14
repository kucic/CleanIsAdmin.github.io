/**
 * 변경 사항이 없는 footer 페이지
 * @param {*} props 
 * @returns 
 */
 
import styles from './Footer.module.css';
import * as images from './../images.js'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

 

function Footer(){
    const {t} = useTranslation();
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("")
    

    const onMoveSns = (type) => {
        switch(type){
            case "youtube":
                window.open("https://www.youtube.com")
                break;
            case "facebook":
                window.open("https://www.facebook.com/")
                break;
            case "instagram":
                window.open("https://www.instagram.com/")
                break;
            case "naverblog":
                window.open("https://section.blog.naver.com")
                break;
        }
    }

    const onChangehandler= (event) =>{ 
        setEmail(event.target.value);
        if(Boolean(errorEmail) && event.target.value == "") {
            setErrorEmail("")
        }
    }

    const checkEmail = () => {
        // check email
        if(Boolean(email)) {
            const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
            if(exptext.test(email)==false){
                setErrorEmail("입력한 메일형식이 올바르지 않습니다.");
                return false;
            }else{
                setErrorEmail("");
            }
        }else{
            alert("이메일을 입력해주세요.");
            return false
        }
        return true;
    }
    const onSendSubscribe = (event) => {
        // form submit 처리 를 나중에
        event.preventDefault();
        /*
            google email 로 보내기

            1. sample spreadsheet 복사 https://docs.google.com/spreadsheets/d/1Bn4m6iA_Xch1zzhNvo_6CoQWqOAgwwkOWJKC-phHx2Q/copy
                - 사본만들기 클릭
                - 확장 프로그램 -> Apps Script 선택
                - var TO_ADDRESS 주석 삭제 및 이메일 변경
                - 배포

            https://script.google.com/macros/s/AKfycbwxM01gzUzwdBAAa8xNE1G9bwqM6LiYz1gx05i4EhPLuDppwZA8cWBA5vhSu6ZsOn4l/exec
         */
        if(checkEmail()) {

        }else{

        }
    }

    return (
        <footer >
            
             <div className={styles.subscribe_box}>
                <form className={styles.subscribe_inbox}
                    onSubmit={onSendSubscribe}
                    method='POST'
                    action="https://script.google.com/macros/s/AKfycbwxM01gzUzwdBAAa8xNE1G9bwqM6LiYz1gx05i4EhPLuDppwZA8cWBA5vhSu6ZsOn4l/exec"
                > 
                        <input className={styles.subscribe_hide} id="name" name="name" value="Subscribe User" />
                        <input className={styles.subscribe_hide} id="message" name="message" value="METEALTH Subscribe Request!" />
                        <input className={styles.subscribe_hide} id="honeypot" type="text" name="honeypot" value="" />

                        <input className={styles.subscribe_input} 
                            name="email"
                            type="email" placeholder="구독받을 이메일을 입력하주세요!" 
                            onChange={onChangehandler} /> 
                        <input className={styles.subscribe_btn} type="submit" value="구독하기"   ></input> 
                    
                   
                </form>
                <p className={styles.subscribe_error}>{errorEmail}</p>
            </div>
            <div className={styles.bottom_box}> 
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
                    <img className={styles.sns_icon} src={images.youtube} onClick={()=>{onMoveSns("youtube")}} />
                    <img className={styles.sns_icon} src={images.facebook} onClick={()=>{onMoveSns("facebook")}} />
                    <img className={styles.sns_icon} src={images.instagram} onClick={()=>{onMoveSns("instagram")}} />
                    <img className={styles.sns_icon} src={images.naver_blog} onClick={()=>{onMoveSns("naverblog")}} />
                </div>
                
                
                
            </div>
        </footer>
        
    )
}

export default Footer;