function ContactList({ contactos }) {
  if (!contactos.length) {
    return <ul><li>No hay contactos registrados aún.</li></ul>;
  }

  return (
    <ul>
      {contactos.map((contacto, index) => (
        <li key={index}>
          {contacto.nombre} {contacto.apellido} - {contacto.telefono}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;