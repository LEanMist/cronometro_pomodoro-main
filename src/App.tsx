import './styles/global.css';
import './styles/theme.css';
import {Heading} from './components/Heading';
import {Container} from './components/Container';
import {Logo} from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Footer } from './components/Footer';
import { MainTemplates } from './Templates/MainTemplates/index.tsx';
import { useState } from 'react';

export function App(){
  //aqui da para criar variaveis e funçoes
  //e uma lista criando o numero 
  const [numero, setNumero] = useState(0);
  function hendleclick(){
    setNumero(prev => prev + 1);
  }

  return(
    <>
      <Heading>
        <Container>
          <MainTemplates> ola do Main Template filho </MainTemplates>
        </Container>
      </Heading>
      <Heading>
        Número: <span>{numero}</span>
      </Heading>
      {/* handleclick e chamado e incrementa de 1 em 1 em todo o codigo que possua a variavel numero */} 
      <button onClick={hendleclick}>Aumentar numero</button>
      <Container>
        <Logo/>
      </Container>

      <Container>
        <Menu/>
      </Container>
        
      <Container>
        <CountDown/>
      </Container>

      <Container>
        <Footer />
      </Container>

    </>
  )
}
