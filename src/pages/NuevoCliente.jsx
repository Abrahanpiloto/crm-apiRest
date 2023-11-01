import {useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarCliente } from "../data/clientes";

// La funcion "action" se utiliza para procesar la entrada de datos en un Form, el Form debe ser un componente <Form /> de "react-router-dom" no funciona en un tag html asi: <form></form>

// Siempre en un action que este asociado a un formulario se necesita usar "request" el cual es una peticion que se le esta realizando al action, el request tiene una funcion llamada formData la cual sirve para acceder a la informacion de un formulario
export async function action({request}) {
  
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  
  const email = formData.get("email");
  
  // Validation:
  const errores = []

   if(Object.values(datos).includes("")) {
    errores.push("all fields are required")
   }

   let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

   if(!regex.test(email)) {
    errores.push("The Email is invalid")
   }
   
  //  Retornar datos si hay errores:
  if(Object.keys(errores).length) {
   return errores
   
  }
   await agregarCliente(datos) 
   return redirect('/')
};

function NuevoCliente() {
  const errores = useActionData();
  const navigate = useNavigate();
  
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3 italic">LLena todos los campos para registrar un nuevo cliente:</p>

      <div className="flex justify-end">
        <button className="bg-blue-800 text-white px-3 py-1 rounded-md font-bold hover:bg-blue-600" onClick={() => navigate(-1)}>Volver</button>
      </div>

      <div className="bg-white rounded-md shadow-lg md:w-3/4 mx-auto px-3 py-10 mt-16">
        
        {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error>)}

        <Form
          method="post"
          noValidate
        >
          <Formulario />

          <input 
            type="submit"
            className="mt-5 w-full bg-blue-900 text-white text-base hover:bg-blue-600 transition-colors duration-300 cursor-pointer ease-in-out font-bold rounded uppercase p-1"
            value="Save client"
          />
        </Form>
        
      </div>
      
    </>
  )
};

export default NuevoCliente;