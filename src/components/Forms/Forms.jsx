import FormsInput from "./FormsInput";
import "./Forms.css";
import { useState } from "react";

export default function Forms() {
  const [values, setValues] = useState({
    username: "",
    phone: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Имя",
      errorMessage: "От 3 до 5 символов",
      pattern: "^[A-Za-zА-ЯЁа-яё]{3,5}$",
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      placeholder: "Телефон",
      errorMessage: "10 символов",
      pattern: `^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$`,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      errorMessage: "Ваш email (@)",
      pattern:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <section className="forms">
      <div className="container form">
        <div className="forms-text">
          <p className="p-forms">
            Запишитесь на курс<br></br> со скидкой 10%
          </p>
          <p className="sale-date">Акция действительна до 10 марта 2022 года</p>
        </div>
        <div className="forms-input">
          <form className="forms-input-item" onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormsInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button className="button-forms">Оформить заявку</button>
          </form>
        </div>
      </div>
    </section>
  );
}
