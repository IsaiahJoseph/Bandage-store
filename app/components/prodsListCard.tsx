import React from "react";
import styles from "./prodsListCard.module.css";
import ProductList from "./ProductList";
import FeatureCard from "./featureCard";

const ProdsListCard = () => {
  return (
    <div className={styles.body}>
      <div>
        <div className={styles.box}>
          <div className={styles.text_box}>
            <p className={styles.text_1}>Featured Products</p>
            <h3 className={styles.text_2}>BESTSELLER PRODUCTS</h3>
            <p className={styles.text_3}>
              problems trying to resolve the conflict between
            </p>
          </div>
        </div>

        <ProductList />

        <div>
          <button className={styles.button_load_more}>
            LOAD MORE PRODUCTS
          </button>
        </div>
        <div className={styles.box2}>
          <div className={styles.text_box}>
            <p className={styles.text_1}>Featured Products</p>
            <h3 className={styles.text_2}>BESTSELLER SERVICES</h3>
            <p className={styles.text_3}>
              problems trying to resolve the conflict between
            </p>
          </div>
        </div>

        <div className={styles.service_flex}>
          <li>
            <div className={styles.service_imgs}>
              <img src="imgs/icon1.jpg" alt="photo" width={155} height={180} />
            </div>
            <div className={styles.service_labels}>
              <div className={styles.service_title_box}>
                <h4 className={styles.service_title}>Easy Wins</h4>
              </div>
              <div className={styles.service_category_box}>
                <p className={styles.service_category}>
                  Get your best looking smile now!
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.service_imgs}>
              <img src="imgs/icon2.jpg" alt="photo" width={155} height={180} />
            </div>
            <div className={styles.service_labels}>
              <div className={styles.service_title_box}>
                <h4 className={styles.service_title}>Concrete</h4>
              </div>
              <div className={styles.service_category_box}>
                <p className={styles.service_category}>
                  Defalcate is most focus in helping your most beatiful smile
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.service_imgs}>
              <img src="imgs/icon2.jpg" alt="photo" width={155} height={180} />
            </div>
            <div className={styles.service_labels}>
              <div className={styles.service_title_box}>
                <h4 className={styles.service_title}>Hack Growth</h4>
              </div>
              <div className={styles.service_category_box}>
                <p className={styles.service_category}>
                  Overcome any hurdle or any other problem
                </p>
              </div>
            </div>
          </li>
        </div>
        <FeatureCard />
      </div>
    </div>
  );
};

export default ProdsListCard;
 