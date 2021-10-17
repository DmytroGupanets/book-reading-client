import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { TimerLogicOfGoalStyled } from "./TimerLogicOfGoalStyled";

const TimerLogicOfGoal = () => {
  const endDate = "2021-11-10"; //нужно будет ссылатся на день конца чтения

  const goal = new Date(endDate).getTime();

  const [, setDateTime] = useState(new Date());
  const oneDay = 86400000;

  const diff = goal + oneDay - new Date().getTime();

  const days = () => {
    if (Math.floor(diff / (1000 * 60 * 60 * 24)) > 99) {
      return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
    if (Math.floor(diff / (1000 * 60 * 60 * 24)) > 9) {
      return "0" + Math.floor(diff / (1000 * 60 * 60 * 24));
    }
    return "00" + Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  const hours = () => {
    if (Math.floor((diff / (1000 * 60 * 60)) % 24) > 9) {
      return Math.floor((diff / (1000 * 60 * 60)) % 24);
    }
    return "0" + Math.floor((diff / (1000 * 60 * 60)) % 24);
  };
  const minutes = () => {
    if (Math.floor((diff / 1000 / 60) % 60) > 9) {
      return Math.floor((diff / 1000 / 60) % 60);
    }
    return "0" + Math.floor((diff / 1000 / 60) % 60);
  };

  const seconds = () => {
    if (Math.floor((diff / 1000) % 60) > 9) {
      return Math.floor((diff / 1000) % 60);
    }
    return "0" + Math.floor((diff / 1000) % 60);
  };

  const time = {
    days: days(),
    hours: hours(),
    minutes: minutes(),
    seconds: seconds(),
  };

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <TimerLogicOfGoalStyled>
      <div className="time">
        {`${time.days || "00"}`}
        <p className="text">ДН</p>
      </div>
      <p className="upText">До досягнення мети залишилось</p>
      <div className="time">{`:`}</div>
      <div className="time">
        {`${time.hours || "00"}`} <p className="text">ГОД</p>
      </div>
      <div className="time">{`:`}</div>
      <div className="time">
        {`${time.minutes || "00"}`} <p className="text">ХВ</p>
      </div>
      <div className="time">{`:`}</div>
      <div className="time">
        {`${time.seconds || "00"}`} <p className="text">СЕК</p>
      </div>
    </TimerLogicOfGoalStyled>
  );
};

export default TimerLogicOfGoal;
