'use client'
import styles from "./styles.module.css";
import Footer from "./components/footer/index";

import { useState } from "react";
import Header from "./components/header";
import { WiSolarEclipse } from "react-icons/wi";
import { PiMoonFill } from "react-icons/pi";
import { ThreeDModel } from "./components/ThreeDModel/ThreeDModel";
import About from "./components/About";
import { ButtonCustom } from "./components/buttonCustom";
import { Service } from "./components/service";
import { DeveloperAbout } from "./components/developerAbout";
export default function Home() {
  const [theme,setTheme]=useState("light");
  


  const toggleTheme =()=>{
    setTheme((prevTheme)=>(prevTheme=== 'light'? 'dark':'light'))
  }
  return (
    <div className={styles.page}>
      <main className={styles[theme]}>
        <section className={styles.containerNav}>
          <Header/>
          <button className={styles.buttonMod} onClick={toggleTheme}>{theme=== 'light'?<PiMoonFill size={25} />:<WiSolarEclipse size={25}/>}</button>
        </section>
        
        <section className={styles.containerBanner}>
          <div className={styles.containerMe}>
            <div className={styles.animated}>
              <p >Olá, sobre mim</p>
              <h2 >Robson Luan</h2>
              <p >Desenvolvedor Full-Stack</p>
              <ButtonCustom text={"Visitar GitHub"} Url={'https://github.com/robsonluan95'}/>
            </div>

            
          </div>
          <div className={`${styles.animated3d} ${styles.animated}`}>
              <ThreeDModel modelPath={`/models/imac_computer.glb`}/>
          </div>
        </section>
        <About/>
        <section className={styles.containerService} >
          <Service/>
          <DeveloperAbout/>
        </section>
        
        <footer className={styles.footer}>
          <Footer/>
        </footer>
      </main>
      
    </div>
  );
}
