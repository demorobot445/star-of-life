import Link from "next/link";
import { Logo, Star } from "../Svg/Svg";
import s from "./footer.module.scss";
import Elements from "./Elements";

const Footer = () => {
  return (
    <footer id="footer" className={s.main}>
      <Elements />
      <div className={`footer-star-1 ${s.star}`}>
        <Star />
      </div>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={`footer-star-2 ${s.star}`}>
        <Star />
      </div>
      <nav className={`footer-nav-1 ${s.nav}`}>
        <Link href="/">Work</Link>
        <Link href="/">Archive</Link>
        <Link href="/">Clients</Link>
        <Link href="/">Services</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </nav>
      <div className={`footer-nav-2 ${s.nav}`}>
        <Link href="#">Linkedin</Link>
        <Link href="#">Instagram</Link>
        <Link href="#">Ehance</Link>
      </div>
      <div className={s.foot}>
        <p className="footer-foot">From Berlin & Vienna with Heart</p>
      </div>
    </footer>
  );
};

export default Footer;
