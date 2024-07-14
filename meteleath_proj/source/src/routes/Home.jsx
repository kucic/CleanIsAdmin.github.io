import { Outlet, useNavigate } from 'react-router-dom';
 import { useTranslation } from 'react-i18next';
 import * as images from "./../images.js"
import  styles from './Home.module.css';
import neweastData from "./../../resource/neweast_data.json"
  
// box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
function Home() {  
    const {t} = useTranslation();
    const navigate = useNavigate();


    const actItem = (title) => {
        let _title = "home.company." + title;
        let img = ""
        switch(title) {
            case 'act1':
                img = images.act1
                break;
            case 'act2':
                img = images.act2
                break;
            case 'act3':
                img = images.act3
                break;
            case 'act4':
                img = images.act4
                break; 

        }
        return (
            <div className={styles.act_item}>
                <div className={styles.act_circle} >
                    <img src={img} className={styles.act_img} />
                </div>
                <p className={styles.act_title} >{t(_title)}</p>
            </div> 
        )
    }
    const neweatItem = (data, index) => {
        let source_date = data.source + " | " + data.date; 
        let content = data.content;
        let backgroundColor = data.color;
        let backgroundImage = images.neweast_root +  data.image;
        console.log("DATA : ", backgroundImage)
        return (
            <div className={styles.newest_item} key={index} style={{backgroundColor: backgroundColor}} 
                onClick = {() => {
                    if(data.link)
                        window.open(data.link);
                    else{
                        alert("링크가 없습니다.")
                    }
                }}
            >
                <div className={styles.box}>
                    <img className={styles.newest_item_img} src={backgroundImage}  ></img>
                    <div className={styles.newest_item_inbox}
                    >
                        <p className={styles.act_date_title}  >{source_date}</p> 
                        <p className={styles.act_content_title} >{content}</p> 
                    </div>
                </div>
                
            </div>
        )
    }
    
    return (
        <>
            <Outlet /> 
            <main> 
                {/* 메인 */}
                <div className={styles.content_box}>
                    <img src={images.home_main} style={{objectPosition: "0% 50%", objectFit:'cover', width:"100%", height:"30vw"}} />
                    <div className={styles.inner_box}>
                        <p className={styles.main_title}>{t("home.vision.title1")}</p>
                        <p className={styles.main_title_sub}>{t("home.vision.title2")}</p>
                    </div>
                
                </div>
                {/* ACT */}
                <div className={styles.content_box} style={{backgroundColor: "#e8d7c5"}}>
                    <p className={ styles.act_main_title}>{t("home.company.title1")}</p>
                    <p className={styles.act_main_title_sub}>{t("home.company.title2")}</p>                     
                    <div className={styles.act_box}>
                        {actItem('act1')}
                        {actItem('act2')}
                        {actItem('act3')}
                        {actItem('act4')}
                    </div>
                </div>
                {/* product */}
                <div className={styles.content_box}>
                      <div className={styles.product_box}>
                         <div className={`${styles.product_inbox} ${styles.product_box_title}`}> 
                            <p className={styles.product_title}>{t("home.product.title1")}</p>
                            <p className={styles.product_title_sub}>{t("home.product.title2")}</p> 
                        </div>
                         <div  className={`${styles.product_inbox} ${styles.product_box_image}`}>
                            <div className={styles.product_img_box}>
                                 <img className={styles.product_img} src={images.home_company} />
                            </div>
                        </div>
                    </div>   
                 </div> 
                {/* 새소식 */}
                <div className={`${styles.content_box} ${styles.newest_box}`}> 
                    <ul className={styles.scroll_h}>
                        <div className={styles.empty} />
                        {neweastData.data.map( (item,index)=> neweatItem(item, index))}
                    </ul>
                </div>
                {/* 회사알아보기 */}
                <div className={styles.company_box}>
                <p className={styles.company_title} >{t("home.suggest.title")}</p>
                    <div className={styles.company_btn_box}>
                        <div className={styles.company_btn} onClick={()=>{navigate("company-info")}}>{t("home.suggest.btn")}</div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;