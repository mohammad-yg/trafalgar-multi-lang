import { FC } from "react";
import style from './style.module.scss'

const Description: FC = () => {
  return (
    <>
      <p className={style.descriptiton}>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
    </>
  );
};

export default Description;
