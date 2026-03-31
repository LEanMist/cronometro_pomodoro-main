import './styles/global.css';
import './styles/theme.css';
import {Heading} from './components/Heading';
import {Container} from './components/Container';
import {Logo} from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { CirclePlay, CircleStop } from 'lucide-react';
import { Footer } from './components/Footer';
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
        <form className="form" action= "">

          <div>
            
          </div>
          <div className='formRow'>
            <DefaultInput 
            id = 'meuInput'
            type ='text'
            labelText= {numero.toString()}
            placeholder = 'digite algo' />
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
          <DefaultButton icon = {<CirclePlay/>}color = 'green' />
          <DefaultButton icon = {<CircleStop/>} color= "red"/>
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>

    </>
  )
}
