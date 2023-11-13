import { useState } from "react"

export default () =>{

    const [valor, setValor] = useState(0);

    function diminuir() {
       setValor( v => v -1) 
    }
    function aumentar() {
       setValor( v => v +1) 
    }

    return(
        <>
        <h4>useState</h4>

        <button>diminuir</button>
        <button>aumentar</button>
        </>
    )
}