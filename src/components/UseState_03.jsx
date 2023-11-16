import { useState } from "react";

export default () => {

    const [valor1, setvalor1] = useState(1);
    const [valor2, setvalor2] = useState(2);

    function diminuir1(){

      setvalor1( v => v - 1) ; 
    }
    function aumentar1(){

      setvalor1( v => v + 1) ; 
    }

    function diminuir2(){

      setvalor2( v => v - 1) ; 
    }
    function aumentar2(){

      setvalor2( v => v + 1) ; 
    }

  return (
    <>
      <h4> useState - Exercicio 1</h4>

      <p>{valor1}</p>
      <button onClick={diminuir1}>-</button>
      <button onClick={aumentar1}>+</button>
      <hr />
      <p>{valor2}</p>
      <button onClick={diminuir2}>-</button>
      <button onClick={aumentar2}>+</button>

      <p>o resultado de {valor1} x {valor2} = {valor1 * valor2}</p>
      <p>o resultado de {valor1} % {valor2} = {valor1 / valor2}</p>
      <p>o resultado de {valor1} + {valor2} = {valor1 + valor2}</p>
      <p>o resultado de {valor1} - {valor2} = {valor1 - valor2}</p>
      <hr />
    </>
  );
};
