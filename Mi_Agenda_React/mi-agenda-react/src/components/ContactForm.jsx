import { useState } from "react";

function ContactForm({ onAdd }) {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre && apellidos && telefono) {
      onAdd({ nombre, apellido: apellidos, telefono });
      setNombre("");
      setApellidos("");
      setTelefono("");
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Apellidos"
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
      />
      <button type="submit">Agregar contacto</button>
    </form>
  );
}

export default ContactForm;