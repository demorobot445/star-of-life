import Elements from "./Elements";
import s from "./showreel.module.scss";

const Showreel = () => {
  return (
    <section id="showreel" className={s.main}>
      <Elements />
      <h1 className="showreel-heading">Showreel</h1>
      <video
        className={`showreel-video ${s.video}`}
        src="/demo-video.mp4"
        muted
        autoPlay
        playsInline
        loop
      />
    </section>
  );
};

export default Showreel;
