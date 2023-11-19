import React, { useState } from "react";
import { UseState } from "react";

export default () => {
  const tmp = {
    nome: "",
    apelido: "",
    cidade: "",
    email: "",
  }

  const [cliente, setClient] = useState(tmp)

return (
  <>
    <h3>exercico 07</h3>
    <hr />
  <ul>
    <li>nome: {cliente.nome}</li>
    <li>apelido {cliente.apelido}</li>
    <li>cidade {cliente.cidade}</li>
    <li>email {cliente.email}</li>
  </ul>
    <hr />

    <button
      onClick={() => {
        const c = { ...cliente };
        c.nome = "Joao";
        setClient(c);
      }}
    >
      nome
    </button>

    <button
      onClick={() => {
        const c = { ...cliente };
        c.apelido = "ribeiro";
        setClient(c);
      }}
    >
      apelido
    </button>

    <button
      onClick={() => {
        const c = { ...cliente };
        c.cidade = "lisboa";
        setClient(c);
      }}
    >
      cidade
    </button>

    <button
      onClick={() => {
        const c = { ...cliente };
        c.email = "Joao@.com";
        setClient(c);
      }}
    >
      email
    </button>
  </>
);
}