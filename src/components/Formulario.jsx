const Formulario = ({cliente}) => {
  return (
      <>
          <div className="mb-4">
              <label
                  className="text-blue-900 font-medium"
                  htmlFor="nombre"
              >Name:</label>
              <input 
                  id="nombre"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client Name"
                  name="nombre"
                  defaultValue={cliente?.nombre}
              />
          </div>
          <div className="mb-4">
              <label
                  className="text-blue-900 font-medium"
                  htmlFor="empresa"
              >Company:</label>
              <input 
                  id="empresa"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client Company"
                  name="empresa"
                  defaultValue={cliente?.empresa}
              />
          </div>

          <div className="mb-4">
              <label
                  className="text-blue-900 font-medium"
                  htmlFor="email"
              >E-mail:</label>
              <input 
                  id="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client Email"
                  name="email"
                  defaultValue={cliente?.email}
              />
          </div>

          <div className="mb-4">
              <label
                  className="text-blue-900 font-medium"
                  htmlFor="telefono"
              >Phone:</label>
              <input 
                  id="telefono"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client Phone"
                  name="telefono"
                  defaultValue={cliente?.telefono}
              />
          </div>

          <div className="mb-4">
              <label
                  className="text-blue-900 font-medium"
                  htmlFor="notas"
              >Notes:</label>
              <textarea
                  as="textarea"
                  id="notas"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                  placeholder="Client Notes"
                  name="notas"
                  defaultValue={cliente?.notas}
              />
          </div>
      </>
  )
}

export default Formulario;