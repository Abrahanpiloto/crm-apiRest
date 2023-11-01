import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom"
import {obtenerCliente, actualizarCliente} from "../data/clientes.js"
import Formulario from "../components/Formulario.jsx"
import Error from "../components/Error.jsx"

export async function loader({params}) {
  
  const cliente = await obtenerCliente(params.clienteId)

  if(Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 400,
      statusText:"No hay resultados"
    })
  }
  
  return cliente
}

// con el action pasaremos a la db los nuevos datos ingresados en el formulario
export async function action({request, params}) {
  
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

  // actualizar clientes
   await actualizarCliente(params.clienteId, datos) 
   return redirect('/')
};

function EditarCliente() {
  const errores = useActionData();
  const navigate = useNavigate()
  const cliente = useLoaderData()
  
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3 italic">Selecciona los datos que desees editar:</p>

      <div className="flex justify-end">
        <button className="bg-blue-800 text-white px-3 py-1 rounded-md font-bold hover:bg-blue-600" onClick={() => navigate(-1)}>Volver</button>
      </div>

      <div className="bg-white rounded-md shadow-lg md:w-3/4 mx-auto px-3 py-10 mt-16">
        
        {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error>)}

        <Form
          method="post"
          noValidate
        >
          <Formulario 
            cliente={cliente}
          />

          <input 
            type="submit"
            className="mt-5 w-full bg-blue-900 text-white text-base hover:bg-blue-600 transition-colors duration-300 cursor-pointer ease-in-out font-bold rounded uppercase p-1"
            value="Guardar Cambios"
          />
        </Form>
        
      </div>
      
    </>
  )
}

export default EditarCliente;