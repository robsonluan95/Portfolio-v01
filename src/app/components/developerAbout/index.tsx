import React from 'react'
import styles from './styles.module.css'
import { GoCode } from "react-icons/go";
import { FaMobile } from "react-icons/fa6";
import { FaPersonChalkboard } from "react-icons/fa6";
import { AiFillCode } from "react-icons/ai";


export const DeveloperAbout = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <GoCode />
            <p>Desenvolvimento de projetos end-to-end, criando API's no padrão REST e criando websites dinâmicos ou estáticos.</p>
        </div>
        <div className={styles.content}>
            <FaMobile />
            <p>Design responsivo tornando seu site acessível, independentemente do dispositivo. Criando telas a partir do conceito Mobile First.</p>
        </div>

        <div className={styles.content}>
            <FaPersonChalkboard  />
            <p>Desenvolvo meus projetos para extrair o máximo valor do cliente de forma simples e intuitiva. Meu objetivo é criar soluções que garantam uma interação fluida, priorizando a clareza e a eficiência, para que meus clientes alcancem seus objetivos rapidamente.</p>
        </div>
        <div className={styles.content}>
            <AiFillCode />
            <p>Desenvolvimento seguindo os principais design patterns, com objetivo de tornar o código mais intuitivo, elegante e com fácil manutenção.</p>
        </div>
    </section>
  )
}
