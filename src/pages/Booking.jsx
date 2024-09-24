import Logo from "../components/icons/Logo";
import GoBackIcon from "../components/icons/GoBack";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getBookingForm } from "../services/api";

import "./Booking.scss";
import { useEffect, useState } from "react";

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
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(createBookingSchema)
  });
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true)

  async function getFormFields() {
    try {
      const { data } = await getBookingForm();
      setFields(data);
    } catch {
      console.error('Erro ao buscar campos do formulário');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getFormFields();
  }, []);

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

      <Form className="booking__form" onSubmit={handleSubmit(submitForm)}>
        {loading && <p>Carregando formulário...</p>}

        {fields.map((field, index) => (
          <Form.Group key={index}>
            <Form.Label>{field.label}</Form.Label>

            <Form.Control
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.id, { valueAsNumber: field.type === 'number' })}
            />

            {errors.name && <span>{errors.name.message}</span>}
          </Form.Group>
        ))}

        <Button
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Reservar
        </Button>
      </Form>
    </section>

    <img className="booking__page-image" src="/background-2.png" alt="Homem segurando um gato" />

    <div className="booking__top-right-detail">
      <Logo />
    </div>
  </div>
  )
}