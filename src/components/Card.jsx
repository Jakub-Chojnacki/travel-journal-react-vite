export default function Card(props){
    return (
        <div className="card">
           <img src={`/images/${props.card.imageUrl}`} alt="" />
           <div className="card__info">
               <div className="card__location">
                   <img src="/images/marker.svg" alt="marker" />
                   <h2 className="card__location-heading">{props.card.location}</h2>
                   <a className="card__link" href={props.card.googleMapsUrl}>View on Google Maps</a>
               </div>
               <h1 className="card__title">{props.card.title}</h1>
               <p className="card__date">{props.card.startDate} - {props.card.endDate}</p>
               <p className="card__description">{props.card.description}</p>
           </div>
        </div>
    )
}