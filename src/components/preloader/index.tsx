import React from "react";
import css from "./Preloader.module.css";

interface PreloaderProps {
  full?: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ full }) => {
  return (
    <div className={full ? css.wrapper : css.pad}>
      <div className={css.container}>
        <svg className={css.loader} viewBox="0 0 340 340">
          <circle
            className={css.circle}
            cx="170"
            cy="170"
            r="160"
            stroke="#006D77"
          />
          <circle
            className={css.circle}
            cx="170"
            cy="170"
            r="135"
            stroke="#83C5BE"
          />
          <circle
            className={css.circle}
            cx="170"
            cy="170"
            r="110"
            stroke="#006D77"
          />
          <circle
            className={css.circle}
            cx="170"
            cy="170"
            r="85"
            stroke="#83C5BE"
          />
        </svg>
      </div>
    </div>
  );
};

export default React.memo(Preloader);
