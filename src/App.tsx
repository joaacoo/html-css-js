import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ProductList from "./compoments/ProductList";
import { Container } from "react-bootstrap";
import Formulario from "./compoments/Formulario";

function App () { 
  const [products, setProducts] = useState ([
    {
      id: Math.random().toString(),
      name: "iPhone",
    },
  ]);

  const comienzo = () =>{
    let product = { 
      id: Math.random().toString(), name: "Andorid"
    };
    setProducts([product, ...products]);
  };

  const final = () => {
      let product = { 
      id: Math.random().toString(), name: "Andorid"
    };
    setProducts([...products,product]);
  }

  const eliminar = () => {
    setProducts(products.slice(0,-1))
  }


  const limpiar = () => {
    setProducts([]);
  }


  return (

    <Container>
      <Formulario></Formulario>
      
      <br /><br /><br />
{/*   <Button onClick={comienzo}>Comienzo</Button>
      <Button onClick={final}>Final</Button>
      <Button onClick={eliminar}>Eliminar ultimo</Button>
      <Button onClick={limpiar}>Limpiar</Button>
      <ProductList products={products} />
 */}
    </Container>
  )
}

export default App;