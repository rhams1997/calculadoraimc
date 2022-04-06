/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Head from "next/head";

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt * alt)

    if(imc < 16.00){
      setMensagem("Baixo peso Grau III => IMC de: " + imc.toFixed(2))
    } else if(imc >= 16.00 && imc < 16.99){
      setMensagem("Baixo peso Grau II => IMC de: " + imc.toFixed(2))
    } else if(imc >= 17.00 && imc < 18.49){
      setMensagem("Baixo peso Grau I => IMC de: " + imc.toFixed(2))
    } else if(imc >= 18.50 && imc < 24.99){
      setMensagem("Peso ideal => IMC de: " + imc.toFixed(2))
    } else if(imc >= 25.00 && imc < 29.99){
      setMensagem("Sobrepeso => IMC de: " + imc.toFixed(2))
    } else if(imc >= 30.00 && imc < 34.99){
      setMensagem("Obesidade Grau I => IMC de: " + imc.toFixed(2))
    } else if(imc >= 35.00 && imc < 34.99){
      setMensagem("Obesidade Grau II => IMC de: " + imc.toFixed(2))
    } else if(imc > 40.00){
      setMensagem("Obesidade Grau III => IMC de: " + imc.toFixed(2))
  }
}

  return(
    <div className="app">

      <Head>
        <title>Calculadora de IMC</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <img className="logo" src="../imc.svg" alt="imagem.svg" />

      <div className="areaInput">
        <input 
          type="text"
          placeholder="Peso em (Kg). Ex. 70"
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
        />
          <input 
          type="text" 
          placeholder="Altura em (cm). Ex. 175"
          value={altura}
          onChange={(event) => setAltura(event.target.value)}
        />
        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <section>
      <h2>{mensagem}</h2>
      </section>

      <button className="PDF">
        <a href="https://docdro.id/f7jXdSz">SAIBA MAIS SOBRE O IMC</a>
      </button>
    </div>
  )
}