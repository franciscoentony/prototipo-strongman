import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function LoginForm() {
  const [etapa, setEtapa] = useState(0);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirma, setConfirma] = useState("");

  const navigate = useNavigate();

  const transition = { type: "tween", duration: 0.4, ease: "easeIn" };

  const proximaEtapa = () => setEtapa((prev) => prev + 1);

  return (
    <div className="fullPage flex items-center justify-center">
      <div
        className={`bg-white rounded-2xl p-8 w-190 h-150 shadow-lg flex flex-col items-center justify-around`}
      >
        <div className={`textos ${etapa != 0 ? "hidden" : "block"}`}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 mb-1 text-center"
          >
            Olá, Usuário! Seja bem-vindo(a)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 0.5 }}
            className="text-gray-700 text-center mb-6"
          >
            Vamos iniciar a sessão para melhor experiência possível.
          </motion.p>
        </div>

        <form className="w-full h-40  flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            {etapa === 1 && (
              <motion.div
                key="email"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={transition}
                className="bg-gray-200 p-3 rounded-xl flex items-center w-100 mb-4 gap-3 hover:bg-gray-300 transition"
              >
                <FontAwesomeIcon icon={faEnvelope} color="gray" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu email"
                  className="flex-1 bg-transparent outline-none text-gray-900"
                />
              </motion.div>
            )}

            {etapa === 2 && (
              <motion.div
                key="senha"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={transition}
                className="bg-gray-200 p-3 rounded-xl flex items-center w-100 mb-4 gap-3 hover:bg-gray-300 transition"
              >
                <FontAwesomeIcon icon={faLock} color="gray" />
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Digite uma senha"
                  className="flex-1 bg-transparent outline-none text-gray-900"
                />
              </motion.div>
            )}

            {etapa === 3 && (
              <motion.div
                key="confirma"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={transition}
                className="bg-gray-200 p-3 rounded-xl flex items-center w-100 mb-4 gap-3 hover:bg-gray-300 transition"
              >
                <FontAwesomeIcon icon={faLock} color="gray" />
                <input
                  type="password"
                  value={confirma}
                  onChange={(e) => setConfirma(e.target.value)}
                  placeholder="Confirme a senha"
                  className="flex-1 bg-transparent outline-none text-gray-900"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </form>
        <div className="divBotao w-50 h-20 flex items-center justify-center">
          <button
            type="button"
            onClick={() => {
              if (etapa === 3) navigate("/dashboard");
              else proximaEtapa();
            }}
            className={`botaoanimado w-50 h-12  flex items-center justify-center gap-2 text-white font-medium transition-colors cursor-pointer ${
              etapa === 3
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-400 hover:bg-blue-800"
            }`}
          >
            <span>{etapa === 3 ? "Entrar" : "Continuar"}</span>
            <FontAwesomeIcon
              icon={etapa === 3 ? faCheck : faArrowRight}
              color="white"
              className="icone-button"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
