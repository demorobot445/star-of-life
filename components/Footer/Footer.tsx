import Link from "next/link";
import { Logo, Star } from "../Svg/Svg";
import s from "./footer.module.scss";
import Elements from "./Elements";
import CustomLink from "./CustomLink";

const Footer = () => {
  return (
    <footer id="footer" className={s.main}>
      <Elements />
      {/* <div className={`footer-star-1 ${s.star}`}>
        <Star />
      </div>
      <div className={s.logo}>
        <Logo />
      </div> */}
      {/* <div className={`call ${s.call}`}>
        <h2>Join us Newsletter</h2>
        <div>
          <input placeholder="Enter Your Email" type="text" />
          <button>submit</button>
        </div>
      </div> */}
      <div className={`footer-star-2 ${s.star}`}>
        <Star />
      </div>
      <nav className={`footer-nav-1 ${s.nav}`}>
        <CustomLink href="/" text="Work" />
        <CustomLink href="/" text="Archive" />
        <CustomLink href="/" text="Clients" />
        <CustomLink href="/" text="Services" />
        <CustomLink href="/" text="About" />
        <CustomLink href="/" text="Contact" />
      </nav>
      <div className={`footer-nav-2 ${s.nav}`}>
        <CustomLink
          href="https://www.linkedin.com/in/philippe-layani-56636a77"
          text="Linkedin"
        />
        <CustomLink
          href="https://www.instagram.com/layanidigital/?hl=de"
          text="Instagram"
        />
        <CustomLink href="https://www.behance.net/Layani" text="Behance" />
      </div>
      <div className={s.foot}>
        <p className="footer-foot">From Berlin & Vienna with Heart</p>
      </div>
    </footer>
  );
};

export default Footer;
