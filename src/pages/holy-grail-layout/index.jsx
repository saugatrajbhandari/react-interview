import style from "./holy-grail-layout.module.css";
import React from "react";

function HolyGrailLayout() {
  return (
    <div className={style.container}>
      <div className={style.header}>this is header</div>
      <div className={style.leftSidebar}>this is left sidebar</div>
      <div className={style.main}>this is main sidebar</div>
      <div className={style.rightSidebar}>this is right sidebar</div>
      <div className={style.footer}>this is footer</div>
    </div>
  );
}

export default HolyGrailLayout;
