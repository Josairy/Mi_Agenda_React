import { useEffect, useState } from "react";
import "./style.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const API_URL = "http://www.raydelto.org/agenda.php";

function App() {
  const [contactos, setContactos] = useState([]);

  const cargarContactos = async () => {
    try {
      const respuesta = await fetch(API_URL);
      const data = await respuesta.json();
      setContactos(data);
    } catch (error) {
      console.error("Error al cargar contactos:", error);
      setContactos([]);
    }
  };

  const agregarContacto = async (nuevoContacto) => {
    try {
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(nuevoContacto),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTimeout(cargarContactos, 1000);
    } catch (error) {
      alert("Error al guardar el contacto");
      console.error(error);
    }
  };

  useEffect(() => {
    cargarContactos();
  }, []);

  return (
    <div className="agenda">
      <h1>📒 Mi Agenda Personal React</h1>
      <ContactForm onAdd={agregarContacto} />
      <h2>📋 Contactos guardados</h2>
      <ContactList contactos={contactos} />
    </div>
  );
}

export default App;