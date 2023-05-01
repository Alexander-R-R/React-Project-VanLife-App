import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetails() {
  const params = useParams();
  const [van, setVan] = React.useState(null);
  const location = useLocation();
  
  
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);



const search = location.state?.search || ""

console.log(` search results - ${search}`)

  return (
    <div className="van-detail-container">
      <Link
                to={`..${search} `}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
