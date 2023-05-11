import React from "react";
import { useParams, Link, useLocation, useLoaderData, Await, defer } from "react-router-dom";
import { getVans } from "../../api";

export function loader({ params }) {
  return defer({ vans: getVans(params.id) });
}


export default function VanDetails() {
  const location = useLocation();
  const dataPromise = useLoaderData();
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  function renderVanDetails( van ) {
    return (
      <div className="van-detail-container">
      <Link to={`..${search} `} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
  
      <div className="van-detail">
        <img src={van.imageUrl} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
    )
  }

  return (
    <React.Suspense fallback={<h2>Loading van details...</h2>}>
        <Await resolve={dataPromise.vans}>{renderVanDetails}</Await>
    </React.Suspense>
    
  );
}
