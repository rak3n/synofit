import React from 'react'
import Button from '../../components/Button';
import heroImage from '../../assets/hero-background.svg';
import taglineImage from '../../assets/tagline-background.svg';
import heroRight from '../../assets/hero-right.png';
import testimonialImage from '../../assets/testimonial.png';
import testimonialImage2 from '../../assets/testimonial-second.png';
import synoFitGradient from '../../assets/Synofit_Gradients.png';
import contactImage from '../../assets/contact-image.png';
import vitaminstore from '../../assets/vitaminstore_logo.png'
import daLogo from '../../assets/da_logo.png';
import footerSearch from '../../assets/footer-search.png';

import Huid from '../../assets/Huid.svg';
import Lutchwegen from '../../assets/Luchtwegen.svg';
import Spieren from '../../assets/Spieren.svg';
import Gewrichten from '../../assets/Gewrichten.svg';
import Hart from '../../assets/Hart.svg';
import Botten from '../../assets/Botten.svg';


import styles from './style.module.css';

const Card = () => {
  return (
    <section className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.cardRating}>5.0</div>
        <div>*****</div>
      </div>
      <div className={styles.cardBody}>
      I Used Synofit premium liquid for 40 days, then the synofit primium liquid as a maintenance dose. It's fine, it works very well, and it moves me well.
I also think the customer friendliness and delivery are very good.
I am very satisfied so far.
      </div>
      <div className={styles.cardFooter}>
        <div style={{ width: 22, height: 22, borderRadius: '50%' }}>im</div>
        <div>J. Johnson</div>
      </div>
    </section>
  );
};

export default function Home() {

  return (
    <>
      <section className={styles.container}>
        <img src={heroImage} className={styles.backgroundImage} />
        <div className={styles.containerInfo}>
          <div className={styles.containerChildLeft}>
            <div className={styles.heroTitle}>Optimal in beweging</div>
            <div className={styles.heroSubTitle}>Unique products for the musculoskeletal system</div>
            <Button text="More About Synofit" />
          </div>
          <div styles={styles.containerChildRight}>
            <img src={heroRight} className={styles.childRightImage} />
          </div>
        </div>
      </section>

      <section className={styles.shopIntro}>
        <div className={styles.shopTitle}>Shop by Category</div>
        <div className={styles.shopTitleContainer}>
          <img src={Huid} />
          <img src={Lutchwegen} />
          <img src={Spieren} />
          <img src={Gewrichten} />
          <img src={Hart} />
          <img src={Botten} />
        </div>
      </section>

      <section className={styles.container}>
        <img src={taglineImage} className={styles.backgroundImage} />
        <div className={styles.containerInfo}>
          <div className={styles.containerChildLeft}>
            <div className={styles.tagLineTitle}>Innovative and unique nutritional supplements</div>
            <div className={styles.tagLineSubTitle}>Thanks to our focus, we can continuously work on quality and on improving our products. As a result, we can permanently guarantee a high-quality end product. Our inspiration lies in nature, combined with the latest insights from science.</div>
            <div className={styles.tagLineFooter}>
              <Button text="More about Synofit" />
              <Button text="Our Ingredients" />
            </div>
          </div>
          <div />
        </div>
      </section>

      <section className={`${styles.containerInfo} ${styles.testimonialContainer}`}>
        <div className={styles.containerChildLeft}>
          <img src={testimonialImage} className={styles.testimonialImage} />
        </div>
        <div className={`${styles.containerChildRight} ${styles.testimonialText}`}>
          <div className={styles.testimonialTitle}>Titel</div>
          <div className={styles.testimonialSubTitle}>Est ut amet, viverra proin maecenas. Pellentesque nisi curabitur sed sed habitant. Enim odio quis viverra tristique. Nec quisque felis, ipsum tempor. Tristique nulla tempus porta tempor nulla scelerisque. Donec malesuada. Consectetur enim augue blandit ut. Est ut amet, viverra proin maecenas. Pellentesque nisi curabitur sed sed habitant.</div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.testimonialBackground}`} style={{ height: '100%' }} >
        <img src={testimonialImage2} className={styles.testimonialImage2} />
        <div className={styles.containerInfo}>
          <div className={styles.containerChildLeft}>
          </div>
          <div className={`${styles.containerChildRight} ${styles.testimonial2Text}`}>
            <div className={styles.testimonialTitle}>Actie</div>
            <div className={styles.testimonialSubTitle} style={{ marginBottom: 34 }}>Est ut amet, viverra proin maecenas. Pellentesque nisi curabitur sed sed habitant. Enim odio quis viverra tristique. Nec quisque felis, ipsum tempor. Tristique nulla tempus porta tempor nulla scelerisque. Donec malesuada. Consectetur enim augue blandit ut. Est ut amet, viverra proin maecenas. Pellentesque nisi curabitur sed sed habitant.</div>
            <Button text="learn more" />
          </div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.testimonialBackground}`} style={{ height: '80vh' }} >
        <img src={synoFitGradient} className={styles.testimonialImage2} />
        <div className={styles.testimonialCard}>
          <div className={styles.testimonalCardHeader}>Reviews</div>
          <div className={styles.testimonialCardContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.contactContainer}`}>
        <img src={heroImage} className={`${styles.backgroundImage} ${styles.contactContainer}`} />
        <div className={styles.containerInfo}>
          <div className={styles.containerChildLeft} style={{maxWidth: 562, gridGap: 18}} >
            <div className={styles.contactTitle}>Kunnen we u ergens mee helpen?</div>
            <div className={styles.contactSubTitle} style={{marginBottom: 74}}>U kunt telefoish contact zoeken met het Care Team, of uw vragen stellen via het contacformulier.</div>
            
            <div className={styles.contactFooterText}>
              <div className={styles.contactColumn}>
                <div className={styles.contactColumnHeader}>Give us a call </div>
                <div className={styles.contactColumnBody}>036 – 76 30 350</div>
              </div>
              <div className={styles.contactColumn}>
                <div className={styles.contactColumnHeader}>Send us an email</div>
                <div className={styles.contactColumnBody}>info@synofit.nl</div>
              </div>
            </div>

            <Button text="Fill the contact form" style={{ padding: '12px 34px' }}/>
          </div>
          <div styles={styles.containerChildRight} style={{textAlign: 'right'}}>
            <img src={contactImage} style={{background: '#fff'}}/>
          </div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.productContainer}`}>
        <div className={styles.partnersTitle}>Our Partners</div>
        <div className={`${styles.containerInfo} ${styles.productLogos}`}>
            <img src={vitaminstore} />
            <img src={daLogo} />
            <img src={vitaminstore} />
            <img src={daLogo} />
        </div>
      </section>

      <section className={`${styles.container} ${styles.testimonialBackground}`} style={{height: '100%'}} >
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
            <div style={{ height: 86}}/>
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
