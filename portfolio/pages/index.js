import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faBehance,
  faTwitter,
  faFacebook,
  faInstagram,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shivankar Sharma</title>
      </Head>

      <section className={styles.homeSection}>
        <div className={styles.imageDiv}>
          <Image
            src="/images/profile.jpg"
            layout="intrinsic"
            width={350}
            height={350}
          />
        </div>

        <div className={styles.aboutMe}>
          Amet dolore nulla id enim anim aute aliquip nisi in pariatur non ipsum
          veniam. Officia velit aliqua magna officia labore veniam.
          Reprehenderit officia deserunt sit laboris mollit velit amet
          incididunt veniam mollit dolor. Sunt cillum culpa dolor nisi ullamco
          voluptate. Laboris in tempor duis nisi sunt tempor sit velit. Mollit
          nostrud non exercitation esse. Adipisicing duis in sunt tempor duis
          est veniam velit.
          <div className={styles.Tags}>
            <ul>
              <li>
                <Link href="#WebDeveloper">webDeveloper</Link>
              </li>
              <li>
                <Link href="#UIUX">UI/UX</Link>
              </li>
              <li>
                <Link href="#software">softwareDeveloper</Link>
              </li>
            </ul>
          </div>
          <div className={styles.socialLinks}>
            <ul>
              <li>
                <Link href="https://github.com/shiv4nk4r" passHref={true}>
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/shivankar-sharma-801b55150/"
                  passHref={true}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.behance.net/shivankar199"
                  passHref={true}
                >
                  <FontAwesomeIcon icon={faBehance} />
                </Link>
              </li>
              <li>
                <Link href="#" passHref={true}>
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li>
                <Link href="#" passHref={true}>
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </li>
              <li>
                <Link href="#" passHref={true}>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li>
                <Link href="#" passHref={true}>
                  <FontAwesomeIcon icon={faSteam} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.statsForNerds}>
        <div className={styles.wrapper}>
          <div className={styles.Title}>Stats For Nerds</div>
        </div>
      </section>
      <section className={styles.Projects}></section>
      <section className={styles.Experience}></section>
      <section className={styles.Skill}></section>
      <section className={styles.Contact}></section>
    </>
  );
}
