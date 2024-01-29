import Image from "next/image";
import React from "react";
import styles from "./ProductCard.module.css";
import ProdsListCard from "./prodsListCard";

const ProductCard = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.photo_flex}>
        <div className={styles.photo_flex_1}>
          <Image src="/imgs/img_1.jpg" alt="photo" width={300} height={340} />

          <div className={styles.photo_flex_2}>
            <Image src="/imgs/img_2.jpg" alt="photo" width={440} height={164} />

            <div className={styles.photo_flex_3}>
              <Image
                src="/imgs/img_3.jpg"
                alt="photo"
                width={220}
                height={165}
              />
              <Image
                src="/imgs/img_3.jpg"
                alt="photo"
                width={220}
                height={165}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProdsListCard />
      </div>

      <div className={styles.section_about_us}>
        <div>
          <div className={styles.text_1}>
            <h4 className={styles.h4}>What they say about us</h4>
          </div>
          <div className={styles.about_us_profile_img_box}>
            <img
              className={styles.about_us_profile_img}
              src="imgs/photo6.jpg"
              alt="photo"
              width={75}
              height={75}
            />
          </div>
          <div className={styles.feature_text_box}>
            <p className={styles.feature_text}>
              late heips you see how many days you need to work to reach your
              final goal
            </p>
          </div>
          <div className={styles.feature_text_box}>
            <p className={styles.feature_text}>Regina Miles</p>
          </div>
          <div className={styles.learn_more}>
            <h5 className={styles.h3}>Designer</h5>
          </div>
        </div>

        <div className={styles.about_us_images}>
          <div className={styles.about_us_imgs}>
            <img src="imgs/photo2.jpg" alt="photo" width={115} height={90} />
          </div>
          <div className={styles.about_us_imgs}>
            <img src="imgs/photo3.jpg" alt="photo" width={115} height={90} />
          </div>
          <div className={styles.about_us_imgs}>
            <img src="imgs/photo4.jpg" alt="photo" width={115} height={90} />
          </div>
          <div className={styles.about_us_imgs}>
            <img src="imgs/photo5.jpg" alt="photo" width={115} height={90} />
          </div>
          <div className={styles.about_us_imgs}>
            <img src="imgs/photo6.jpg" alt="photo" width={115} height={90} />
          </div>
          <div className={styles.about_us_imgs}>
            <img src="imgs/photo7.jpg" alt="photo" width={115} height={90} />
          </div>
          <div className={styles.about_us_imgs}>
            <img src="imgs/photo8.jpg" alt="photo" width={115} height={90} />
          </div>
          <div className={styles.about_us_imgs}>
            <img src="imgs/photo9.jpg" alt="photo" width={115} height={90} />
          </div>
          <div className={styles.about_us_imgs}>
            <img src="imgs/photo10.jpg" alt="photo" width={115} height={90} />
          </div>
        </div>

        

      </div>
      
      <div>
        <div> 
          <div className={styles.box}>
          <Image className={styles.text_img} src={"/imgs/photo8.jpg"} alt={"photo"} width={800} height={400}></Image>
           <div className={styles.text_container}>
            <div className={styles.text_box}>
            <p className={styles.text_1}>Designing Better Experience</p>
            <h2 className={styles.text_2}>PROBLEMS TRYING TO RESOLVE THE CONFLICT BETWEEN</h2>
            <p className={styles.text_3}>
              problems trying to resolve the conflict between the two major realms of physics
            </p>
            <h3 className={styles.text_4}>$24.18</h3>
          </div>
          
          <button className={styles.button_load_more}>
            ADD YOUR CALL TO ACTION
          </button>
        
           </div>
          
        </div>
        
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;
 