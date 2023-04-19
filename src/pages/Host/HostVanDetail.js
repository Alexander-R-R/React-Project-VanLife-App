import React from "react";
import { useParams } from "react-router-dom";


export default function HostVansDetail() {

  const params = useParams()
  const [currentVan, setCurrentVan] = React.useState([])

  React.useEffect(() => {
      fetch(`{/api/host/vans/${params.id}`)
       .then(res => res.json())
       .then(data => setCurrentVan(data.vans))

  }, [])

  if (!currentVan) {
    return <h1>Loading...</h1>
  }

  // const vanElement = currentVan.map((van) => (
  //   <div key={van.id}>
  //     <h1>{van.name}</h1>
  //   </div>
  // ))

  return (
    <div>
      <p>{currentVan.type}</p>
      <img src={currentVan.imageUrl} width={150}  />
      <h1>{currentVan.name}</h1>
      <p>${currentVan.price}/day</p>

    </div>
  );
}
