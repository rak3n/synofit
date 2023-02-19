import React, { useEffect } from 'react'
import heroImage from '../../assets/hero-background.svg';
import heroRight from '../../assets/about-us-hero.png';
import footerSearch from '../../assets/footer-search.png';
import Card from '../../components/Card';
import styles from './style.module.css';

export default function Product() {

    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <section className={styles.container}>
                <img src={heroImage} className={styles.backgroundImage} />
                <div className={styles.containerInfo}>
                    <div className={styles.containerChildLeft}>
                        <div className={styles.heroTitle}>Our Products</div>
                    </div>
                    <div styles={styles.containerChildRight}>
                        <img src={heroRight} className={styles.childRightImage} style={{ top:0 }} />
                    </div>
                </div>
            </section>

            <section className={styles.productContainer}>
                <div className={styles.filterContainer}>
                    <div className={styles.filterTitle}>Filter</div>
                    <hr style={{ width: '100%' }} />
                    <div>

                    </div>
                </div>
                <div className={styles.productSection}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>

            <section className={`${styles.container} ${styles.testimonialBackground}`} style={{ height: '100%' }} >
                <img src={footerSearch} className={styles.footerSearch} />
                <div className={styles.footerSearchPadding} />
                <div className={styles.footerSearchColumns}>
                    <div className={styles.footerColumn}>
                        <div className={styles.footerSearchTitle}>Wilt u op de hoogte blijven?</div>
                        <div>
                            <div className={styles.footerSearchInputTitle}>Typ hier uw e-mailadres</div>
                            <div>Input</div>
                        </div>
                    </div>
                    <div className={styles.footerColumn}>
                        <div style={{ height: 86 }} />
                        <div>
                            <div className={styles.footerSearchInputTitle}>Of vlog ons op social media</div>
                            <div>Input</div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>

        </>
    )
}
