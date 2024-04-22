import s from "./archive.module.scss";
import type { Data } from "./data";

type Props = Data & { id: number };

const Card: React.FC<Props> = ({ imgVarient, heading, para, position, id }) => {
  return (
    <div data-varient={position} className={`archive-card-${id} ${s.card}`}>
      <div data-varient={imgVarient} className={s.card_img}></div>
      <div className={s.card_box}>
        <div>
          {heading.map((e, i) => {
            return <h2 key={i}>{e}</h2>;
          })}
        </div>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Card;
