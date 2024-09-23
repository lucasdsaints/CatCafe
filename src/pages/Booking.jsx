import Logo from "../components/icons/Logo";
import GoBackIcon from "../components/icons/GoBack";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

import "./Booking.scss";

const createBookingSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  phone: z.string(),
  email: z.string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido'),
  tablesCount: z.number().int().positive(),
  date: z.string(),
  hours: z.string(),
});

export default function Booking() {
  const { register, handleSubmit, formState: { errors, ...rest }, getValues } = useForm({
    resolver: zodResolver(createBookingSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      tablesCount: 1,
      date: '',
      hours: '',
    }
  });

  function submitForm(data) {
    console.log(data);
  }

  return (
  <div className="booking">
    <Link to="/" className="booking__go-back">
      <GoBackIcon />

      Voltar
    </Link>

    <section className="booking__main-section">
      <h1 className="semi-bold">
        Preencha os dados abertos para fazer sua <span>reserva</span>
      </h1>

      <form className="booking__form" onSubmit={handleSubmit(submitForm)} >
        <div className="semi-bold booking__input-wrapper booking__input-wrapper--text">
          <label htmlFor="name">Como podemos te chamar?</label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className="semi-bold booking__input-wrapper booking__input-wrapper--text">
          <label htmlFor="phone">Qual o seu whatsapp?</label>
          <input type="text" id="phone" {...register("phone")} />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <div className="semi-bold booking__input-wrapper booking__input-wrapper--text">
          <label htmlFor="email">Qual o seu email?</label>
          <input type="text" id="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="semi-bold booking__input-wrapper booking__input-wrapper--numeric">
          <label htmlFor="tablesCount">Mesa pra quantas pessoas?</label>
          <input type="number" min={1} id="tablesCount" {...register("tablesCount")} />
          {errors.tablesCount && <p>{errors.tablesCount.message}</p>}
        </div>

        <div className="semi-bold booking__input-wrapper booking__input-wrapper--date">
          <label htmlFor="date">Quando vem nos visitar?</label>
          <input type="date" id="date" {...register("date")} />
          {errors.date && <p>{errors.date.message}</p>}
        </div>

        <div className="semi-bold booking__input-wrapper booking__input-wrapper--time">
          <label htmlFor="hours">Que horas você vai chegar?</label>
          <input type="time" id="hours" {...register("hours")} />
          {errors.hours && <p>{errors.hours.message}</p>}
        </div>

        <button className="booking__confirm-button">
          Reservar
        </button>
      </form>
    </section>

    <img className="booking__page-image" src="/background-2.png" alt="Homem segurando um gato" />

    <div className="booking__top-right-detail">
      <Logo />
    </div>
  </div>
  )
}