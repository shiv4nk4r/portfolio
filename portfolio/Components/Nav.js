import Link from "next/link";

import navStyles from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <div className={navStyles.nav}>
      <div className={navStyles.title}>
        <span>Shivankar</span> Sharma
      </div>
      <div className={navStyles.menu}>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#project">Projects</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#skill">Skills</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li className={navStyles.resumeLink}>
            <Link href="#contact">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
