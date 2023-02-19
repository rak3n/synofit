import React from 'react'

import footerSearch from '../../assets/footer-search.png';

import styles from './style.module.css';

function PageFooter() {
    return (
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
    )
}

export default PageFooter