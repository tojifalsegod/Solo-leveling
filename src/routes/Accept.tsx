import Carousel from "../components/Carousel";
import MyButton from "../components/MyButton";
import { images } from "../components/images";
import s from "./../styles/Accept.module.css";

const Accept = () => {
  return (
    <div className={s.box}>
      <div className={s.choose}>
        <h1> choose your class </h1>
        <div className={s.chooseBox}>
          <Carousel img={images} />
        </div>
        <MyButton>this</MyButton>
      </div>
    </div>
  );
};

export default Accept;
