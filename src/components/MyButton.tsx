import { FC } from "react";
import s from "./../styles/MyButton.module.css";

type MyButtonProps = {
  children: React.ReactNode;
};

const MyButton: FC<MyButtonProps> = ({ children }) => {
  return (
    <div className={s.container}>
      <div className={s.center}>
        <button className={s.box}>{children}</button>
      </div>
    </div>
  );
};

export default MyButton;
