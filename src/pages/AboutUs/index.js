import React from 'react'
import heroImage from '../../assets/hero-background.svg';
import heroRight from '../../assets/about-us-hero.png';
import testimonialImage from '../../assets/synofit_into_about_us.png';
import footerSearch from '../../assets/footer-search.png';

import formulaImageTop from '../../assets/formula-image-top.png';
import formulaImageBottom from '../../assets/formula-image-bottom.png';
import person from '../../assets/Person.png';
import team from '../../assets/team.png';
import aboutusTestimonial from '../../assets/aboutus-testimoney.png';
import testimonialBackground from '../../assets/gradient-synofit.png';
import testimonialBackgroundCurve from '../../assets/curved-gradient.png';

import styles from './style.module.css';

export default function Home() {

    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <section className={styles.container}>
                <img src={heroImage} className={styles.backgroundImage} />
                <div className={styles.containerInfo}>
                    <div className={styles.containerChildLeft}>
                        <div className={styles.heroTitle}>About us</div>
                        <div className={styles.heroSubTitle}>Synofit specializes in developing and marketing innovative and unique nutritional supplements (nutraceuticals) with a substantiated, proven effect.</div>
                    </div>
                    <div styles={styles.containerChildRight}>
                        <img src={heroRight} className={styles.childRightImage} style={{ top:0 }} />
                    </div>
                </div>
            </section>

            <section className={`${styles.containerInfo} ${styles.testimonialContainer}`}>
                <div className={`${styles.containerChildRight} ${styles.testimonialText}`}>
                    <div className={styles.testimonialTitle}>Since 2010, Synofit has focused on the natural improvement of the musculoskeletal system. </div>
                    <div className={styles.testimonialSubTitle}>Safe natural products have been introduced under the brand name Synofit (and Synopet for animals), targeting joints, bones and muscles. In 2017, the Synocare brand introduced with natural products that deliver noticeable benefits in other areas of health (heart health and skin). With this extensive range of nutraceuticals we hope to contribute to prevention, good health and the best quality of life.</div>
                </div>
                <div className={styles.containerChildLeft}>
                    <img src={testimonialImage} className={styles.testimonialImage} />
                </div>
            </section>

            <section className={`${styles.container} ${styles.testimonialBackground}`} style={{ height: '100%', marginTop: 194 }} >
                <img src={testimonialBackgroundCurve} className={styles.curvedBackground} />
                <img src={testimonialBackground} className={styles.testimonialImage2} />
                <div className={styles.testimonialCOntainerAbsolute}>
                    <div className={styles.containerChildLeftTestimonial}>
                        <span>Thanks to our focus, we can continuously work on quality and on improving our products.</span>
                    </div>
                    <div className={styles.containerChildRight}>
                        <div className={styles.testimonialTitle} style={{maxWidth: '521px'}}>As a result, we can permanently guarantee a high-quality end product</div>
                        <div className={styles.testimonialSubTitle} style={{ marginBottom: 34, maxWidth: 412 }}>Our inspiration lies in nature, combined with the latest insights from science. Not only the legislation changes, but also technologies and developments of new ingredients. Synofit combines both aspects in the development of its nutraceuticals, in order to be able to offer you a high- quality product.</div>
                    </div>
                </div>
                <div className={styles.containerInfo}>
                    <div className={`${styles.containerChildRight} ${styles.testimonial2Text}`} style={{ height: '300px' }}>
                    </div>
                </div>
            </section>

            <section className={`${styles.container} ${styles.testimonialBackground}`} >
                <img src={aboutusTestimonial} className={styles.testimonialImageFooter} />
            </section>

            <section className={`${styles.container} ${styles.formulaContainer}`}>
                <div className={styles.aboutCompanyAbsoluteContainer}>
                    <img src={formulaImageTop} className={styles.fomulaImageTop} />
                    <img src={formulaImageBottom} className={styles.fomulaImageBottom} />
                </div>
                <div className={styles.companyFormulaRelativeContainer}>
                    <span className={styles.formulaTitle}>About the Synofit Premium Plus formula</span>
                    <span className={styles.formulaBody1}>The Synofit Premium Plus Joint Cure has been developed in the Netherlands according to the latest scientific insights and contains only high-quality ingredients . The composition is the result of more than 30 years of product development and experience in the veterinary market.</span>
                    <span className={styles.formulaBody2}>The product is produced in the Netherlands according to the standard HACCP standards. The production location is also FSSC 22000 certified . This means that the production location adheres to stricter standards than is required. We therefore guarantee that our products are absolutely of the best possible quality .</span>
                </div>
            </section>

            <section className={`${styles.container} ${styles.founderSpeakingContainer}`}>
                <div className={styles.speakerContainerLeft}></div>
                <div className={styles.speakerContainerRight}>
                    <span className={styles.speakerContainerTitle}>Founder Synofit speaking</span>
                    <span className={styles.speakerContainerSubTitle}>Synofit was founded in 2010 by Camiel Hofstee. Camiel was the first person to use Synofit. At that time the formula was only used for joints of horses . He was so enthusiastic that he launched Synofit on the human market. Therefore, today it is possible to keep moving with Synofit .</span>
                </div>
            </section>

            <section className={`${styles.container} ${styles.peopleOfSynoFit}`}>
                <div className={styles.sectionHead}>The people of Synofit</div>
                <div className={styles.imageContainer}>
                    <div className={styles.peopleContainer}>
                        <img className={styles.peopleFace} src={person} />
                        <div className={styles.peopleInfo}>
                            <span className={styles.peopleName}>Tom Sanders</span>
                            <span className={styles.peopleDesignation}>Directie</span>
                        </div>
                    </div>
                    <div className={styles.peopleContainer}>
                        <img className={styles.peopleFace} src={person} />
                        <div className={`${styles.peopleInfo} ${styles.peopleDesignationOffset}`}>
                            <span className={styles.peopleName}>Name</span>
                            <span className={styles.peopleDesignation}>Designation</span>
                        </div>
                    </div>
                    <div className={styles.peopleContainer}>
                        <img className={styles.peopleFace} src={person} />
                        <div className={`${styles.peopleInfo} ${styles.peopleDesignationOffset}`}>
                            <span className={styles.peopleName}>Name</span>
                            <span className={styles.peopleDesignation}>Designation</span>
                        </div>
                    </div>
                    <div className={styles.peopleContainer}>
                        <img className={styles.peopleFace} src={person} />
                        <div className={`${styles.peopleInfo} ${styles.peopleDesignationOffset}`}>
                            <span className={styles.peopleName}>Name</span>
                            <span className={styles.peopleDesignation}>Designation</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.container} ${styles.teamContainer}`}>
                <div className={styles.absoluteTeamContainer}>
                    <img src={team} className={styles.teamImage} />
                </div>
                <div className={styles.relativeTeamContainer}>
                    <span>A team photo from 2019 Top row from left to right: Sabine, Rieneke, Vincent, Siska, Camiel, Gabi, René, Gea. Second row from left to right: Berna, Jolanda, Evelien, José.</span>
                </div>
            </section>

            <section className={`${styles.container} ${styles.imageFooter}`}>
                <span className={styles.imageFooterText}>
                    Chamber of Commerce number: 51516128 | VAT identification number: NL850068514B01 | IBAN: NL53INGB0007120709 | VWA registration number (food supplement): 34068254
                </span>
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
