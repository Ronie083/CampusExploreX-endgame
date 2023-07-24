import { useLoaderData } from "react-router-dom";



const CollegeDetails = () => {

    const colleges = useLoaderData();
    console.log(colleges)


    return (
        <div>
            <h1 className="text-5xl text-center p-24 bg-[#ffdbab] rounded-b-3xl">Details of colleges</h1>
            <div className="py-10 flex flex-col justify-center">
                <div className="grid md:grid-cols-2 justify-items-center">
                    <div>
                        <h1 className="text-4xl font-bold">{colleges.name}</h1>
                        <p>Research Counts: {colleges.researchCount}</p>
                        <div className="flex col-start-1">
                            {colleges.researchPapers.map(research => (
                                <div>
                                    <div className="card-body max-w-full">
                                        <strong>Famous Research:</strong>
                                        <h3>{research.title}</h3>
                                        <p>{research.authors}</p>
                                        <a href={research.link}>{research.link}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <img className="md:max-w-lg border-4 border-[#F56A1E] rounded-2xl" src={colleges.image} alt="" />
                    </div>
                </div>


                <div className="md:flex justify-between items-center my-5">
                    <strong>Popular Events:</strong>
                    {colleges.events.map(event => (
                        <div>
                            <div className="card-body max-w-lg border border-3 border-black rounded-2xl">
                                <h3>{event.name}</h3>
                                <p>{event.description}</p>
                                <p>{event.date}</p>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="md:flex justify-between items-center">
                    <strong>Sports Club:</strong>
                    {colleges.sports.map(sport => (
                        <div>
                            <div className="card-body max-w-lg border border-3 border-black rounded-2xl my-3">
                                <h3>{sport.name}</h3>
                                <p>{sport.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:flex justify-between items-center m-5">
                    {colleges.imageGallery.map(image => (
                        <div>
                            <div className="card-body rounded-2xl">
                                <img src={image.image} className="md:h-[400px] rounded-2xl" />
                                <p className="text-2xl font-bold p-2">{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;