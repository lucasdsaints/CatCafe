import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/lucasdsaints/CatCafe" 
})

export function getBookingForm() {
  // return api.get('/bookingForm');
  return new Promise(res => {
    setTimeout(() => {
      res({
        data: [
          {
            "id": "name",
            "label": "Como podemos te chamar?",
            "placeholder": "Digite seu nome",
            "type": "text"
          },
          {
            "id": "phone",
            "label": "Qual o seu whatsapp?",
            "placeholder": "Digite seu número de whatsapp",
            "type": "text"
          },
          {
            "id": "email",
            "label": "Qual o seu email?",
            "placeholder": "Exemplo: cat@cafe.com.br",
            "type": "email"
          },
          // {
          //   "id": "tablesCount",
          //   "label": "Mesa pra quantas pessoas?",
          //   "placeholder": "",
          //   "type": "number"
          // },
          {
            "id": "date",
            "label": "Quando vem nos visitar?",
            "placeholder": "",
            "type": "date"
          },
          {
            "id": "time",
            "label": "Que horas você vai chegar?",
            "placeholder": "",
            "type": "time"
          }
        ]
      })
    })
  })
};