import styles from './styles.module.css';
import {HistoryIcon, HouseIcon, SettingsIcon, SunIcon , MoonIcon} from 'lucide-react';
import { useEffect, useState } from 'react';

type AvaliableThemes = 'dark' | 'light';
export function Menu() {
  //aqui farei meu hook interação com função aqui
  const [theme,setTheme] = useState<AvaliableThemes>('dark');
  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) 
  {
    event.preventDefault();
    setTheme(prevThem=>{
      const nextTheme = prevThem === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    return ()=>{
      console.log('o coponente esta atualizado', Date.now());
    };
  }, [theme]);

  return (
    <>
      <nav className = {styles.menu}>
        <h1>{theme}</h1>
        <a className={styles.menuLink} href="#"
        arial-label="ir para home"
        title="ir para home"
        ><HouseIcon/>
        </a>

        <a className={styles.menuLink} href="#"
        arial-label="ir para historico"
        title="ir para historico"
        ><HistoryIcon/>
        </a>

        <a className={styles.menuLink} href="#"
        arial-label="ir para configuracoes"
        title="ir para configuracoes"
        ><SettingsIcon/>
        </a>

        <a className={styles.menuLink} href="#"
        arial-label="Mudar tema"
        title="Mudar tema"
        onClick = {handleThemeChange}
        >{theme === 'light' ? <MoonIcon/> : <SunIcon/>} 
        </a>
      </nav>
    </>
  );
}