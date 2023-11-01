// este hook permite navegar de manera programada
import { useNavigate } from "react-router-dom";


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
        >Edit
        
        </button>

        <button 
          type='button' 
          className=' text-red-600 hover:text-red-800 uppercase font-semibold text-xs'
        
        >Delete
        </button>
        
      </td>
    </tr>
  )
}

export default Cliente;