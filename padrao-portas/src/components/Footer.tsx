import React from "react";
import styles from "./Footer.module.css";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.container}>
        {/* Coluna 1 - Contato */}
        <div className={styles.info}>
          <h2 className={styles.title}>Entre em Contato</h2>
          <div className={styles.line}></div>

          <div className={styles.item}>
            <MapPin size={18} />
            <p>
              R. Maria do Nascimento Bôz Vidal, 1823 <br />
              Vila Suissa, Mogi das Cruzes - SP <br />
              CEP 08810-100
            </p>
          </div>

          <div className={styles.item}>
            <Phone size={18} />
            <p>(11) 2378-8353</p>
          </div>

          <div className={styles.item}>
            <Mail size={18} />
            <p>padraoportas2@gmail.com</p>
          </div>

          <div className={styles.item}>
            <Clock size={18} />
            <div>
              <p>Terça a Sexta: 08:00–18:00</p>
              <p>Sábado: 08:00–15:00</p>
              <p>Domingo e Segunda: Fechado</p>
            </div>
          </div>

          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={22} />
            </a>
          </div>
        </div>

        {/* Coluna 2 - Formulário */}
        <div className={styles.form}>
          <div className={styles.formRow}>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenome" />
          </div>
          <div className={styles.formRow}>
            <input type="email" placeholder="Email *" />
          </div>
          <div className={styles.formRow}>
            <input type="text" placeholder="Telefone" />
            <input type="text" placeholder="Assunto" />
          </div>
          <button className={styles.btnEnviar}>Enviar</button>
        </div>

        {/* Coluna 3 - WhatsApp */}
        <div className={styles.menu}>
          <a
            href="https://wa.me/551123788353"
            className={styles.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale no WhatsApp
          </a>
        </div>
      </div>

      <div className={styles.copy}>
        <p>© {new Date().getFullYear()} Padrão Portas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
