import Link from "next/link";
import s from "./contact.module.scss";
import Elements from "./Elements";
import { ContactPathOne } from "../Svg/Svg";

const Contact = () => {
  return (
    <section id="contact" className={s.main}>
      <Elements />
      <h1 className="contact-heading">
        <span>C</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
      </h1>
      <div className={`contact-grid ${s.grid}`}>
        <p>
          Lets start a project together
          <span className={`contact-path-1 ${s.pathOne}`}>
            <ContactPathOne />
          </span>
        </p>
        <div className={s.box}>
          <p>
            Mail:{" "}
            <Link href="mailto:philippe@layani.net">philippe@layani.net</Link>
          </p>
          <p>
            Phone: <Link href="tel:+491775252255">+49 177 52 52 255</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
