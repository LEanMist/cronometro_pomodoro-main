import styles from './styles.module.css';
import {Copyright} from 'lucide-react';
export function Footer() {
  return (
    <>
    <div>
      <footer className={styles.footer}>
        <a href="">Entenda como funciona a tecnica pomodoro</a>
        <a href="">Cronometro pomodoro <Copyright/>{
          new Date().getFullYear()} - Feito com ❤️
        </a>
      </footer>
    </div>
    </>
  );
}