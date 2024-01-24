import React from 'react'
import styles from "./featureCard.module.css";

const FeatureCard = () => {
  return (
    <div>
         <div className={styles.box2}>
          <div className={styles.text_box}>
            <p className={styles.text_3}>
            Practice Advice</p>
            <h3 className={styles.text_2}> Featured Post</h3>
          </div>
        </div>

         <div>
            <div className={styles.feature_container}>
            <li >
                     <div className={styles.feature_imgs}>
                    <img 
                    src="imgs/photo1.jpg" 
                    alt="photo" width={255} 
                    height={190} />   
               </div>
               <div className={styles.feature_labels_box}>
                <div className={styles.feature_labels}>
                
                <div className={styles.feature_category_box}>
                    <p className={styles.feature_category}>Google </p>
                    <p className={styles.feature_category}>Trending </p>
                    <p className={styles.feature_category}>New </p>
                </div>
                
                <div className={styles.feature_title_box}>
                    <h4 className={styles.feature_title}>Loudest a la Madison #1 <br /> (L'integral)</h4>
                
                </div>
                <div className={styles.feature_text_box}>
                    <p className={styles.feature_text}>We focus on ergonomics and meeting you where you work it's only a keystroke away.</p>
                </div>

                <div className={styles.feature_comments}>
                    <p className={styles.feature_time}>22 April 2021</p> 
                    <p className={styles.feature_comment}>10 comments</p>
                </div>

                <div className={styles.learn_more}>
                    <h5 className={styles.h5}>Learn More</h5></div>
                
                </div>

               </div>
               
            </li>
            <li >
                     <div className={styles.feature_imgs}>
                    <img 
                    src="imgs/photo1.jpg" 
                    alt="photo" width={255} 
                    height={190} />   
               </div>
               <div className={styles.feature_labels_box}>
                <div className={styles.feature_labels}>
                
                <div className={styles.feature_category_box}>
                    <p className={styles.feature_category}>Google </p>
                    <p className={styles.feature_category}>Trending </p>
                    <p className={styles.feature_category}>New </p>
                </div>
                
                <div className={styles.feature_title_box}>
                    <h4 className={styles.feature_title}>Loudest a la Madison #1 <br /> (L'integral)</h4>
                
                </div>
                <div className={styles.feature_text_box}>
                    <p className={styles.feature_text}>We focus on ergonomics and meeting you where you work it's only a keystroke away.</p>
                </div>

                <div className={styles.feature_comments}>
                    <p className={styles.feature_time}>22 April 2021</p> 
                    <p className={styles.feature_comment}>10 comments</p>
                </div>

                <div className={styles.learn_more}>
                    <h5 className={styles.h5}>Learn More</h5></div>
                
                </div>

               </div>
               
            </li>

            <li >
                     <div className={styles.feature_imgs}>
                    <img 
                    src="imgs/photo1.jpg" 
                    alt="photo" width={255} 
                    height={190} />   
               </div>
               <div className={styles.feature_labels_box}>
                <div className={styles.feature_labels}>
                
                <div className={styles.feature_category_box}>
                    <p className={styles.feature_category}>Google </p>
                    <p className={styles.feature_category}>Trending </p>
                    <p className={styles.feature_category}>New </p>
                </div>
                
                <div className={styles.feature_title_box}>
                    <h4 className={styles.feature_title}>Loudest a la Madison #1 <br /> (L'integral)</h4>
                
                </div>
                <div className={styles.feature_text_box}>
                    <p className={styles.feature_text}>We focus on ergonomics and meeting you where you work it's only a keystroke away.</p>
                </div>

                <div className={styles.feature_comments}>
                    <p className={styles.feature_time}>22 April 2021</p> 
                    <p className={styles.feature_comment}>10 comments</p>
                </div>

                <div className={styles.learn_more}>
                    <h5 className={styles.h5}>Learn More</h5></div>
                
                </div>

               </div>
               
            </li>
            </div>
         </div>

    </div>
  )
}

export default FeatureCard