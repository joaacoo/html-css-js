interface TituloProps {
  name?: string;
}

function Titulo({ name = "mundo" }: TituloProps) {
  return <h1 className="display-6 mb-4">Hola, {name}</h1>;
}

export default Titulo;