function Error({children}) {
  return (
    <div className="text-center my-4 bg-red-500 text-white p-3 uppercase font-semibold">
      {children}
    </div>
  )
}

export default Error;