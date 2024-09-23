import Logo from "../components/icons/Logo";
import LinkButton from "../components/LinkButton";

import "./Success.scss";

export default function Booking() {
  return (
  <div className="success">
    <Logo dark />

    <img src="/cat.png" alt="Desenho de um gato feliz segurando uma xícara de café" />

    <h1 className="bold">
      Reserva concluída com sucesso!
    </h1>

    <LinkButton to="/">
      Voltar para página inicial
    </LinkButton>
  </div>
  )
}