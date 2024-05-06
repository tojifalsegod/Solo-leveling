import MyButton from "./MyButton";
import s from "./../styles/TwoButtons.module.css";
import { Link } from "react-router-dom";

const TwoButtons = () => {
  return (
    <div className={s.boxButtons}>
      <a>
        <Link to="/accept">
          <MyButton> Accept </MyButton>
        </Link>
      </a>
      <a>
        <Link to="/">
          <MyButton> Decline </MyButton>
        </Link>
      </a>
    </div>
  );
};

export default TwoButtons;
