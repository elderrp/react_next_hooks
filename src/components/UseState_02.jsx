import { useState } from "react"

export default () =>{

    const [valor, setValor] = useState(0);

    function diminuir() {
       setValor( v => v -1) 
    }

    function aumentar() {
       setValor( v => v +1) 
    }

    function diminui_valor(a){
   setValor(valor => v - a)
    }

    return(
        <>
        <h4>useState</h4>
         <p>valor: {valor}</p>

        <button onClick={() => diminui_valor(10)}>diminuir+</button>
        <button onClick={diminuir}>diminuir</button>
        <button onClick={aumentar}>aumentar</button>
        </>
    )
}