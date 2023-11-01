// Con este hook: useLoaderData podre acceder al return de la funcion loader
import {useLoaderData} from "react-router-dom"
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";

// Esta funcion es muy similar a un useEffect, es una funcion que se ejecuta cuando el componente carga, es ideal para cargar un state o para consultar una API, para luego mostrarlo en un componente.
export function loader() {
  
  const clientes = obtenerClientes();
  return clientes
 
};

function Index() {

  const clientes = useLoaderData();
  
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3 italic'>Administra tus clientes</p>

     {clientes.length ? (
      <table className="w-full bg-white shadow mt-5 rounded-md table-auto">
        <thead className="bg-blue-800 text-white rounded-md">
          <tr>
            <th className="p-2">Client</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map(cliente =>(
            <Cliente 
              cliente={cliente}
              key={cliente.id}
            />
          ))}
        </tbody>
      </table>
     ) : (
      <p>No hay clientes aun</p>
     )}
    </>
  )
};

export default Index;