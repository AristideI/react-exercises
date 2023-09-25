import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange({ target: { name, value } }) {
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    alert(`Hello ${formData.firstName} ${formData.lastName}`);
  }
  return (
    <section className="w-screen h-screen bg-violet-800 grid place-content-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-6"
      >
        <input
          className="w-[30rem] border h-12 rounded-lg px-4"
          placeholder="First Name"
          type="text"
          name="firstName"
          id="Name1"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className="w-[30rem] border h-12 rounded-lg px-4"
          placeholder="Last Name"
          type="text"
          name="lastName"
          id="Name2"
          value={formData.lastName}
          onChange={handleChange}
        />
        <button className="w-[30rem] border  rounded-lg bg-red-500 font-bold text-3xl text-white py-2">
          Submit
        </button>
      </form>
    </section>
  );
}
