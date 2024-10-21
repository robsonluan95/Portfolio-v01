import Image from 'next/image'
import icone from '../../../../public/android-chrome-512x512.png'
import React from 'react'
import styles from './index.module.css'
import { ButtonCustom } from '../buttonCustom'

const About = () => {
  return (
    <section className={styles.container}  >
        <Image className={styles.bannerImage} alt='meu icone' src={icone} width={200} quality={100 }/>
        <div className={styles.bannerContent}>
            <h3>Sobre mim</h3>
            <p>Estou aqui para aprender e compartilhar conhecimentos</p>
            
            <ButtonCustom text={"Visite meu linkedin"} Url={'https://www.linkedin.com/in/robsonluan/'}/>
        </div>
    </section>
  )
}

export default About