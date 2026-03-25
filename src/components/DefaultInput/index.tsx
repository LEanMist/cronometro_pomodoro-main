import styles from './styles.module.css'
type DefaultInputProps ={
    id: string;
    labelText: string;
    type?: string
    placeholder: string;
}& React.InputHTMLAttributes<HTMLInputElement>;

export function DefaultInput({
    id,
    type,  
    labelText,
    placeholder,
    ...rest
}: DefaultInputProps){
    return(
    <>
       
            <label htmlFor = {id}> {labelText} </label>
            <input className  = {styles.input} id = {id} type = {type} 
            placeholder= {placeholder} {...rest}/>
      
    </>
    );
}