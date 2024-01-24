/* eslint-disable @next/next/no-img-element */
// 'use client'
import React from "react";
import styles from "./ProductList.module.css";
import Image from "next/image";
import Link from "next/link";

interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: any[]
  
}

const ProductList = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();
  const Products: product[] = products.products;

  console.log(Products.map((i) => i.images[0]));
  // console.log(products.products);
  return (
    <div>
      <Link href={"/products/details"}>
    <ul className={styles.prod_items}>
          {Products.map((p) => (
            <div key={p.id} className={styles.prod_flex} >
                <li >
                     <div className={styles.prod_imgs}>
                    <img 
                    src={p.images[0]} 
                    alt="photo" width={155} 
                    height={180} />   
               </div>
               <div className={styles.prod_labels}>
                <div className={styles.prod_title_box}>
                    <h4 className={styles.prod_title}>{p.title}</h4>
                
                </div>
                <div className={styles.prod_category_box}>
                    <p >{p.category}</p>
                </div>
                
                
                <div className={styles.prod_prices}>
                    <p className={styles.prod_price}>$ {p.price}</p> 
                    <p className={styles.prod_discountPercentage}><s>{p.discountPercentage}%</s></p>
                </div>
               </div>
              
            </li>
                </div>
            
          ))}
        </ul>
    </Link>
    </div>
    
        
       
  );
};

export default ProductList;
