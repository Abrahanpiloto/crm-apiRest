// este hook permite navegar de manera programada
import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarCliente } from "../data/clientes.js"

export async function action({params}) {
  await eliminarCliente(params.clienteId)
  return redirect("/")
}


function Cliente({cliente}) {
  const navigate = useNavigate();

  const {nombre, empresa, email, telefono, id} = cliente;
  
  return (
    <tr className='border-b text-center'>
      <td className="p-6 space-y-2">
        <p className='text-xl font-semibold'>{nombre}</p>
        <p className='text-gray-800'>{empresa}</p>
      </td>

      <td className='p-6'>
        <p className='text-gray-600'> <span className='text-gray-800 uppercase font-semibold'>Email: </span> {email}</p>
        <p className='text-gray-600'> <span className='text-gray-800 uppercase font-semibold'>Tel: </span> {telefono}</p>
      </td>

      <td className='flex p-6 gap-3'>
        <button 
          type='button' 
          className=' text-blue-600 hover:text-blue-800 uppercase font-semibold text-xs'
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >Editar
        
        </button>
        
        <Form
          method="post"
          action={`/clientes/${id}/eliminar`}
          onSubmit={(e) => {
            if(!confirm("¿Deseas Eliminar Este Registro?")) {
              e.preventDefault()
            }
          }}
        >
          <button 
            type='submit' 
            className=' text-red-600 hover:text-red-800 uppercase font-semibold text-xs'
          
          >Eliminar
          </button>
        </Form>
        
      </td>
    </tr>
  )
}

export default Cliente;