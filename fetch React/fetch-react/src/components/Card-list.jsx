import Card from "./Card";

export default function CardList({data}){
  return(
    <div className="card-list">
      {data.map((obj, index) => <Card key={`tarjeta ${index}`} nombre={obj.name} descripcion={obj.description} precio={obj.price}/>)}
    </div>
  )
}