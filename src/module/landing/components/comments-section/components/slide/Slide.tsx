import { FC } from "react";
import style from "./style.module.scss";

type Prop = {
  profile: string;
  name: string;
  jobPosition: string;
  comment: string;
};

const Slide: FC<Prop> = ({ comment, jobPosition, name, profile }) => {
  return (
    <>
      <div className={style.slide}>
        <div className={style.profile}>
          <div className={style.imageRing}>
            <div className={style.imageWrapper}>
              <img src={profile} alt="profile" />
            </div>
          </div>
          <div className={style.profileDetil}>
            <div className={style.name}>{name}</div>
            <div className={style.jobPosition}>{jobPosition}</div>
          </div>
        </div>
        <div className={style.comment}>
          <p>“{comment}”</p>
        </div>
      </div>
    </>
  );
};

export default Slide;
