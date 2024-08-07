import React from "react";
import "./intro.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "@mui/material";
const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__wrapper">
        <div className="intro__left">
          <h2 className="intro__title">Таргетолог Антон Вакуленко</h2>
          <p className="intro__text">
            Увеличу продажи с помощью рекламы в интернете и предоставлю первые
            обращения клиентов уже через 48 часов
          </p>
        </div>
        <div className="intro__right">
          <form className="intro__form">
            <h3 className="intro__subtitle">СТРАТЕГИЯ БЕСПЛАТНО</h3>
            <p className="intro__subtext">
              Напишу стратегию по Таргетированной Рекламе для Вашей компании
              бесплатно и презентую ее!
            </p>

            <input type="text" placeholder="Name" required className="intro__input" />

            <PhoneInput
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}

              inputClass="intro__phone"

              cla
            />

            <Button  className="intro__btn"  size="large" variant="contained" color="primary">
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Intro;
