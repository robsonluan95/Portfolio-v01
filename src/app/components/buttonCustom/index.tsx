import React from 'react'
import styles from './styles.module.css'
import { link } from 'fs';
interface ButtonProps{
    text: string;
    Url:string;

}

export const ButtonCustom = ({text,Url}:ButtonProps) => {
    async function handleAlert() {
        window.open(Url,'_blanck')
    }
  return (
    <button className={styles.stylesButton} onClick={handleAlert}>
        {text}
    </button>
  )
}
