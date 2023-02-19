import React from 'react'
import Button from '../Button';

import heartIcon from '../../assets/heart.svg';
import productImage from '../../assets/product-image.svg';


import styles from './style.module.css';
import { useHistory } from 'react-router-dom';

const Card = () => {
    const [showCardInfo, setShowCardInfo] = React.useState(false);
    const history = useHistory();

    const onMouseEnter=()=>{
        setShowCardInfo(true);
    }
    const onMouseLeave=()=>{
        setShowCardInfo(false);
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <span className={styles.bestsellerTag}>BESTSELLER</span>
                <img src={heartIcon} />
            </div>
            <div className={styles.cardTitle}>
                Synofit Premium Plus Liquid
            </div>
            <div className={styles.cardImage}>
                <img src={productImage} className={styles.productImage} onMouseEnter={onMouseEnter}  />
            </div>
            <div className={styles.cardFooter}>
                <Button text="Add to Bag" style={{ padding: '11px 84px', height: 18, cursor: 'pointer' }} onClick={()=>history.push('/product/id')}/>
                <div className={styles.secondaryButton}>200Ml</div>
            </div>
            <div className={styles.cardHover} style={{ opacity: showCardInfo?1:0, zIndex: showCardInfo?1:-1, bottom:0}} onMouseLeave={onMouseLeave}>
                <span className={styles.cardHoverTitle}>Ontdek de Gewrichts Gel voor uitwendige verzorging van gewrichten, spieren en bindweefsels</span>
                <div className={styles.cardHoverButton}>learn more</div>
            </div>
        </div>
    );
}

export default Card;