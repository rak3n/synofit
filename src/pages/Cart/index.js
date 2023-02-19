import React from 'react'
import productImage from '../../assets/product-image.svg';
import Button from '../../components/Button';

import Card from '../../components/Card';

import styles from './style.module.css';
import PageFooter from '../../container/PageFooter';
import { useHistory } from 'react-router-dom';

const CartItem = () => {
    return (
        <div className={styles.cartRow}>
            <div className={styles.cartSectionRow}>
                <div className={styles.productInfoColumn}>
                    <div className={styles.productImage}>
                        <img src={productImage} width={160} />
                    </div>
                    <div className={styles.productInfo}>
                        <div className={styles.productStatus}>IN PROGRESS</div>
                        <div className={styles.productDetails}>
                            <div className={styles.orderNumber}>
                                <span className={styles.productField}>Order No.</span>
                                <span className={styles.productValues}>1022</span>
                            </div>
                            <div className={styles.from}>
                                <span className={styles.productField}>From</span>
                                <span className={styles.productValues}>Nov 01 2022</span>
                            </div>
                        </div>
                        <div className={styles.productTotalPrice}>
                            <span className={styles.productField}>From</span>
                            <span className={styles.productValues}>60,-</span>
                        </div>
                    </div>
                </div>
                <div className={styles.subHead}>
                    <div className={styles.secondaryButton}>1</div>
                </div>
                <div className={`${styles.totalPrice} ${styles.productValues}`}>60,-</div>
            </div>
            <div className={styles.rowFooter}>
                <span className={styles.deleteProduct}>Delete product</span>
                <span className={styles.whishListLink}>Move to wishlist</span>
            </div>
        </div>
    );
}

const Cart = () => {
    const history = useHistory();

    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <section className={styles.productDetailsContainer}>
                <div className={styles.childContainerLeft}>
                    <div className={styles.routeHeading}>home/search/Synofit Premium Plus Liquid</div>
                    <div className={styles.cartTitle}>Shopping Bag</div>
                    {/* <div className={styles.productImageContainer}>
                        <img src={productImage} className={styles.productImageCard} />
                    </div> */}
                    <div className={styles.cartSectionHeader}>
                        <div className={styles.head}>Product</div>
                        <div className={styles.subHead}>Q-ty</div>
                        <div className={styles.subHead}>Total</div>
                    </div>
                    <div className={styles.cartSectionItem}>
                        <CartItem />
                    </div>
                </div>
                <div className={styles.childContainerRight}>
                    <div className={styles.productPurchaseTitle}>Oder Summary</div>
                    <div className={styles.discount}>
                        <div className={styles.discountInput}>Discount</div>
                        <Button text="apply" style={{textTransform: 'uppercase', background: '#003049', padding: '12px 34px'}}/>
                    </div>

                    <div className={styles.cartPriceDetails}>
                        <div className={styles.priceDetailsRow}>
                            <span className={styles.priceDetailsField}>Subtotal</span>
                            <span className={styles.priceDetailsValue}>60,- </span>
                        </div>
                        <div className={styles.priceDetailsRow}>
                            <span className={styles.priceDetailsField}>Subtotal</span>
                            <span className={styles.priceDetailsValue}>60,- </span>
                        </div>
                    </div>

                    <div className={styles.priceTotalRow}>
                            <span className={styles.priceTotalField}>Total</span>
                            <span className={styles.priceTotalField}>60,- </span>
                    </div>

                    <Button text="Check out" style={{ width:'100%', marginTop: 42, cursor: 'pointer' }} onClick={()=>history.push('/billing')}/>
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

            <div style={{ marginTop: 30 }}>
                <PageFooter />
            </div>
        </>
    )
}

export default Cart;