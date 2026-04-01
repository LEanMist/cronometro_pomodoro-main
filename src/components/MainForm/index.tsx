import { DefaultInput } from '../DefaultInput/index.tsx';
import { Cycles } from '../Cycles/index.tsx';
import { DefaultButton } from '../DefaultButton/index.tsx';
import { CirclePlay, CircleStop } from 'lucide-react';
import { fooz}

export function MainForm(){
    return(
        <>
           <form className="form" action= "">
           
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
        </>
    )
}