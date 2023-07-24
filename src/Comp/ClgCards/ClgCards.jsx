import { Link } from "react-router-dom";
import "./ClgCards.css"
import useColleges from "../../Hooks/useColleges/useColleges";

const ClgCards = ({limit}) => {

    const [colleges] = useColleges()

    const collegesToShow = colleges.slice(0, limit);



    return (
        <div className="grid md:grid-cols-3 justify-items-center">
            {
                collegesToShow.map(college => (
                    <div key={college.id} className="card md:w-96 glass shadow-xl expandable-card my-5">
                        <div>
                            <figure className="px-10 pt-10">
                                <img src={college.image} alt="image" className="rounded-xl" />
                            </figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">{college.name}</h2>
                                <p><strong>
                                    Researches:
                                </strong>
                                    {college.researchCount}
                                </p>
                                <div className="hidden-event-sports">
                                    <p>
                                        <strong>Common Events:</strong>
                                    </p>
                                    {college.events.map(event => (
                                        <div key={event.id}>
                                            <h3 className="font-bold">{event.name}</h3>
                                            <p>{event.description}</p>
                                        </div>
                                    ))}
                                    <p>
                                        <strong>Sports Clubs:</strong>
                                    </p>
                                    {college.sports.map(sport => (
                                        <div key={sport.id}>
                                            <h3 className="font-bold">{sport.name}</h3>
                                            <p>{sport.description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Admission: {college.admissionDate}</div>
                                </div>
                                <div className="card-actions">
                                    <Link to={`/details/${college.id}`} className="btn btn-outline rounded-3xl">
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    );
};

export default ClgCards;


