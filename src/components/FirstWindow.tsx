import s from "./../styles/FirstWindow.module.css";
import TwoButtons from "./TwoButtons";

const FirstWindow = () => {
  return (
    <div className={s.box}>
      <div className={s.content}>
        <h1> You have chance to awake and become a player.</h1>
      </div>
      <TwoButtons />
    </div>
  );
};

export default FirstWindow;
