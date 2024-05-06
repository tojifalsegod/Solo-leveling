import s from "./../styles/Notification.module.css";
import TwoButtons from "./../components/TwoButtons";

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
