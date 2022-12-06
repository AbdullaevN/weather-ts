import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import s from "./ThisDay.module.scss";

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  console.log(weather);

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>
            {weather.main.temp ? Math.ceil(weather.main.temp) : "5"}°
          </div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>21:45</span>
        </div>
        <div className={s.this__city}>
          Время: <span>Санкт-Петербург</span>
        </div>
      </div>
    </div>
  );
};
