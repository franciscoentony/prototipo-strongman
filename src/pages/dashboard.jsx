import { faArrowCircleDown, faCircleArrowLeft, faCircleArrowRight, faEye, faHand, faLink, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react"


import imagem1 from "../assets/slide/imagem1.jpg"
import imagem2 from "../assets/slide/imagem2.jpg"
import imagem3 from "../assets/slide/imagem3.jpg"
import { useState } from "react";


export default function Dashboard() {
  const [slide, setSlide] = useState(1);
  const [etapa1, setEtapa1] = useState("");
  const [etapa2, setEtapa2] = useState("");
  const [etapa3, setEtapa3] = useState("");

  const proximaEtapa = () => setSlide(prev => (prev % 3) + 1);
  const voltarEtapa = () => setSlide(prev => (prev - 2 + 3) % 3 + 1);


  return (
    <>
      <div className="container">
        <header className="flex justify-between items-center w-full bg-gray-900 p-3 pl-50 pr-50 relative">
          <div className="logo text-xl flex items-center gap-1">
            <div className="content-none bg-gray-400 w-5 h-5 rounded-br-xl rounded-tl-xl"></div>
            <a href="#" className="text-white">Strong<strong>Man</strong></a>
          </div>
          <div className="right flex gap-10">
            <div className="acoes flex gap-2">
              <button type="button" className="botao-acao cursor-pointer outline-none w-10 h-10">
                <FontAwesomeIcon icon={faEye} color="#cacaca" className="icone-acao scale-130" />
              </button>
              <button type="button" className="botao-acao cursor-pointer outline-none w-10 h-10">
                <FontAwesomeIcon icon={faHand} color="#cacaca" className="icone-acao scale-130" />
              </button>
              <button type="button" className="botao-acao cursor-pointer outline-none w-10 h-10">
                <FontAwesomeIcon icon={faLink} color="#cacaca" className="icone-acao scale-130" />
              </button>
            </div>
            <div className="input-search bg-gray-600 flex items-center rounded-xl">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="pl-2" />
              <input type="text" placeholder="Buscar" className="p-2" />
            </div>

            <button type="button" className="perfil-foto bg-gray-500 w-10 rounded-4xl cursor-pointer">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <div className="submenu bg-gray-700 fixed rounded-lg w-70 p-5 font-semibold">
              <ul>
                <li><a href="">Perfil</a></li>
                <li><a href="">Recursos</a></li>
                <li><a href="">Gerenciamento de Contas</a></li>
                <li><a href="">Financeiro</a></li>
                <li><a href="">Parceiros</a></li>
              </ul>
            </div>
          </div>
        </header>
        {/*<div className="menu-lateral border border-red-600">
          <p>Entrou</p>
        </div>*/}

        <main className="justify-center">
          <div className="tituloDash flex flex-col items-center h-200 justify-center">
            <h1 className="text-4xl w-130 text-start font-bold p-3 m-2">Toda experiência serve como aprendizado.</h1>
            <strong className="opacity-70"><i>"Quem faz a história é você."</i></strong>
            <a href="#" className="border-2 border-sky-800 p-3 w-50 rounded-4xl hover:bg-sky-800 font-semibold mt-10">Saiba Mais</a>
          </div>
        </main>
        <div className="conteudo h-auto">
          <div className="apresentamos bg-black pt-50 h-auto pb-50">
            <h1 className="text-4xl font-bold p-10">Apresentamos:</h1>
            <div className="textos">
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi eos doloremque similique. Veniam aliquid necessitatibus consequuntur cupiditate sequi dolorum cum molestias, tempore quos quo provident amet obcaecati expedita facilis.</p>
            </div>
              <div className="carrossel flex justify-center items-center gap-20">
              <button type="button" onClick={voltarEtapa} className="botaoproximo cursor-pointer w-15 h-15 opacity-60 hover:opacity-100 hover:scale-120">
                <FontAwesomeIcon icon={faCircleArrowLeft} size="3x"/>
              </button>
              <div className="imagens w-400 max-w-full h-200 overflow-hidden rounded-2xl">
                {slide === 1 && (
                    <img src={imagem1} alt="imagem1" key="etapa1" className="w-full max-w-full  relative bottom-80 grayscale-100 brightness-50 contrast-110"/>
                )}
                {slide === 2 && (
                    <img src={imagem2} alt="imagem2" key="etapa2" className="w-full max-w-full  relative bottom-20 grayscale-100 brightness-50 contrast-110"/>
                  )}
                {slide === 3 && (
                    <img src={imagem3} alt="imagem2" key="etapa3" className="w-full max-w-full bottom-20  relative  grayscale-100 brightness-50 contrast-110"/>
                  )}
              </div>
                
              <button type="button" onClick={proximaEtapa} className="botaoproximo cursor-pointer w-15 h-15 opacity-60 hover:opacity-100 hover:scale-120">
                <FontAwesomeIcon icon={faCircleArrowRight} size="3x"/>
              </button>
              </div>
              <div className="circulos-progresso flex justify-center gap-2 mt-5 ">
                <div className={`circulo w-5 h-5 rounded-4xl ${slide === 1 ? "bg-gray-700" : "bg-white"}`}></div>
                <div className={`circulo w-5 h-5 rounded-4xl ${slide === 2 ? "bg-gray-700" : "bg-white"}`}></div>
                <div className={`circulo w-5 h-5 rounded-4xl ${slide === 3 ? "bg-gray-700" : "bg-white"}`}></div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}