import React from 'react'
import productImage from '../../assets/product-image.svg';
import Button from '../../components/Button';
import heartIcon from '../../assets/heart.svg';
import tickMark from '../../assets/verified-ticks.svg';
import infoIcon from '../../assets/information.svg';
import purchaseCard from '../../assets/purchase-cards.svg';

import Card from '../../components/Card';

import styles from './style.module.css';
import PageFooter from '../../container/PageFooter';
import { useHistory } from 'react-router-dom';

const ProductDetails = () => {
    const [productExist, setProductExist] = React.useState(true);
    const history = useHistory();

    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <section className={styles.productDetailsContainer}>
                <div className={styles.childContainerLeft}>
                    <div className={styles.routeHeading}>home/search/Synofit Premium Plus Liquid</div>
                    <div className={styles.productImageContainer}>
                        <img src={productImage} className={styles.productImageCard} />
                    </div>
                    <div className={styles.productIntelContainer}>
                        <div className={styles.productIntelTitle}>Description</div>
                        <div className={styles.productIntelSubTitle}>Est ut amet, viverra proin maecenas. Pellentesque nisi curabitur sed sed habitant. Enim odio quis viverra tristique. Nec quisque felis, ipsum tempor. Tristique nulla tempus porta tempor nulla scelerisque. Donec malesuada. </div>
                    </div>
                </div>
                <div className={styles.childContainerRight}>
                    <div className={styles.productPurchaseHeading}>The best choice for the joints.</div>
                    <div className={styles.productPurchaseTitle}>Synofit Premium Plus Liquid</div>
                    <div className={styles.newUserBanner}>
                        New user?  Advice: 80 days 10 ml/day
                    </div>
                    <div className={styles.productPrice}>
                        <div className={styles.productPriceBold}>
                            <span>60,-</span>
                            <img src={infoIcon} width={24} />
                        </div>
                        <div className={styles.productDropdown}>1</div>
                    </div>
                    <div className={styles.purchaseOptions}>
                        <div className={styles.purchaseOptionsButton}>240ML</div>
                        <div className={styles.purchaseOptionsButton}>2 x 240ML</div>
                        <div className={styles.purchaseOptionsButton}>400ML</div>
                        <div className={styles.purchaseOptionsButton}>2 x 400ML</div>

                    </div>
                    {
                        productExist ?
                        null
                        :
                        <div className={styles.productNotExistText}>This product is out of stock</div>
                    }
                    <div className={styles.productPurchaseButtons}>
                        {
                            productExist?
                            <Button text="Add to Bag" style={{ height: '12px', width: '95%', cursor: 'pointer' }} onClick={()=>history.push('/cart')} />
                            :
                            <Button text="Notify me when available" style={{ height: '12px', width: '95%', background: '#202320' }} />
                        }
                        <div className={styles.heartIconContainer}>
                            <img src={heartIcon} />
                        </div>
                    </div>
                    <img src={purchaseCard} className={styles.purchaseCardStyles} />
                    <div className={styles.productVerificationContainer}>
                        <div className={styles.verificationLine}>
                            <img src={tickMark} width={'12px'} />
                            <span>Letterbox package</span>
                        </div>
                        <div className={styles.verificationLine}>
                            <img src={tickMark} width={'12px'} />
                            <span>Ordered on weekdays before 9 pm, sent today</span>
                        </div>
                        <div className={styles.verificationLine}>
                            <img src={tickMark} width={'12px'} />
                            <span>Free delivery for orders over €25,-</span>
                        </div>
                        <div className={styles.verificationLine}>
                            <img src={tickMark} width={'12px'} />
                            <span>Safe payment options in advance or after delivery</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.backgroundImage}>
                <div className={styles.backgroundTitle}>You might also like</div>
                <div className={styles.backgroundCard}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

            <div style={{ marginTop: 120 }}>
                <PageFooter />
            </div>
        </>
    )
}

export default ProductDetails;