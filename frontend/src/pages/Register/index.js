import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Swal from "sweetalert2";

import "./styles.css";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post("/ongs", data);

      const confirmation = await Swal.fire({
        title: "INFO",
        text: `Seu ID de acesso: ${response.data.id}`,
        icon: "info"
      });

      if (confirmation.value) history.push("/");
    } catch (err) {
      console.log(err);
      await Swal.fire({
        title: "ERRO!",
        text: "Erro no cadastro, tente novamente.",
        icon: "error"
      });
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar
            os casos da sua ONG
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
