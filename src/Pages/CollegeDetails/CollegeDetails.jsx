import { useLoaderData } from "react-router-dom";



const CollegeDetails = () => {

    const colleges = useLoaderData();
    console.log(colleges)


    return (
        <div>
            <h1 className="text-5xl text-center p-24 bg-[#ffdbab] rounded-b-3xl">Details of colleges</h1>
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold">{colleges.name}</h1>
                    <p>Research Counts: {colleges.researchCount}</p>
                </div>
                <div className="col-start-2 col-end-2">
                    <img className="max-w-lg border-4 border-[#F56A1E] rounded-2xl" src={colleges.image} alt="" />
                </div>
                <div className="flex col-start-1">
                    <strong>Famous Research:</strong>
                    {colleges.researchPapers.map(research => (
                        <div>
                            <div className="card-body max-w-sm border border-3">
                                <h3>{research.title}</h3>
                                <p>{research.authors}</p>
                                <a href={research.link}>{research.link}</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex col-start-1">
                    {colleges.events.map(event => (
                        <div>
                            <div className="card-body max-w-sm border border-3">
                                <h3>{event.name}</h3>
                                <p>{event.description}</p>
                                <p>{event.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex col-start-1">
                    {colleges.sports.map(sport => (
                        <div>
                            <div className="card-body max-w-sm border border-3">
                                <h3>{sport.name}</h3>
                                <p>{sport.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex col-start-1 col-span-2">
                    {colleges.imageGallery.map(image => (
                        <div>
                            <div className="card-body border border-3">
                                <img src={image.image} alt="" />
                                <p>{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;