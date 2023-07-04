import styles from "./Swiper.module.scss";
import { useEffect, useRef } from "react";
import mySwiper from "../../Helper/MySwiper";

export default function Swiper() {
    const classes = `${styles.containerSwiper} container`;
    const itemClasses = `${styles.item} item`;
    const sliderClasses = `${styles.slider} slider`;
    const titleClasses = `${styles.title} title`;

    const slides = [
        `${styles.slideOne}`,
        `${styles.slideTwo}`,
        `${styles.slideThree}`,
        `${styles.slideFour}`,
        `${styles.slideFive}`,
        `${styles.slideSix}`,
    ].map((el) => el + " " + styles.slide);

    const sliderRef = useRef(null);

    useEffect(() => {
        mySwiper();
    }, [sliderRef]);

    return (
        <div className={classes} id='swiper-container'>
            <h2 className={titleClasses} id='swiper-title'>
                Lorem ipsum dolor sit amet
            </h2>
            <div className={sliderClasses} ref={sliderRef}>
                <div className={styles.sliderInner}>
                    {slides.map((image, index) => (
                        <div key={index} className={itemClasses}>
                            <div className={image}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}