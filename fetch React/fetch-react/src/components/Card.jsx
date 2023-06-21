export default function Card({nombre, descripcion, precio}){
  
  return(
    <div className="card">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <span>${precio}</span>
    </div>
  )
}