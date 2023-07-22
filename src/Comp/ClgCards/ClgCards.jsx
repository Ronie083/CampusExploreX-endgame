import "./ClgCards.css"

const ClgCards = ({ image, name, dates, events, researchHistory, sports }) => {
    return (
        <div className="card w-96 glass shadow-xl expandable-card my-5">
            <figure className="px-10 pt-10">
                <img src={image} alt="image" className="rounded-xl" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title">{name}</h2>
                <p><strong>
                    Research: 
                </strong>
                    {researchHistory}
                </p>
                <div className="hidden-event-sports">
                    <p>
                        <strong>Common Events:</strong>
                    </p>
                    {events.map(event => (
                        <div key={event.id}>
                            <h3 className="font-bold">{event.name}</h3>
                            <p>{event.description}</p>
                        </div>
                    ))}
                    <p>
                        <strong>Sports Clubs:</strong>
                    </p>
                    {sports.map(sport => (
                        <div key={sport.id}>
                            <h3 className="font-bold">{sport.name}</h3>
                            <p>{sport.description}</p>
                        </div>
                    ))}
                </div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Admission: {dates}</div>
                </div>
                <div className="card-actions">
                    <button className="btn btn-outline  rounded-3xl">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ClgCards;
