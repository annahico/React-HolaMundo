function Titulo() {
  //estamos usando TypeScript
  const nombre = "Chanchito feliz";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola Mundo</h1>; //esto es código JSX pero es muy parecido a HTML.
}

export default Titulo;
