import PhoneIcon from "../components/icons/PhoneIcon";
import MapLocationIcon from "../components/icons/MapLocationIcon";
import Logo from "../components/icons/Logo";
import LinkButton from "../components/LinkButton";

import "./HomePage.scss";

export default function HomePage() {
  return (
  <div className="home-page">
    <section className="home-page__main-section">
      <h2 className="bold">1º CAT CAFÉ DE UBERLÂNDIA</h2>

      <h1 className="semi-bold">Café que faz o coração <span>ronronar!</span></h1>

      <p className="home-page__description-text">
        Aqui, você pode saborear um café delicioso, explorar uma seleção de livros e, ao mesmo tempo, ajudar a cuidar dos nossos felinos, promovendo adoções e dando uma nova chance a esses gatinhos. 

        <strong>Quem sabe, você não encontra um amigo especial para chamar de seu?</strong>
      </p>

      <LinkButton className="home-page__booking-button" to="/booking">
        Fazer uma reserva
      </LinkButton>
    </section>

    <section className="home-page__contact-section">

      <div className="home-page__contact-card">
        <PhoneIcon />

        <span className="semi-bold">liga pra gente <br />34 9 9999 9999</span>
      </div>

      <div className="home-page__contact-card">
        <MapLocationIcon />

        <span className="semi-bold">visita a gente <br />Av.Landscape 3512</span>
      </div>
    </section>

    <img className="home-page__page-image" src="/background-1.png" alt="Mulher segurando um gato" />

    <div className="home-page__bottom-left-detail" />

    <div className="home-page__top-right-detail">
      <Logo />
    </div>
  </div>
  )
}