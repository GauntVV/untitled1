import Section from "../Sections/Sections";
import SectionSwiper from "../swiper/Swiper";
import { firstSectionsInfo, secondSectionsInfo } from "../../Helper/API";
import styles from "./Main.module.scss";

export default function Main() {
    return (
        <main className={styles.main}>
            <h1 className='visually-hidden'>Lorem ipsume</h1>
            <Section payload={firstSectionsInfo} />
            <SectionSwiper />
            <Section payload={secondSectionsInfo} />
        </main>
    );
}