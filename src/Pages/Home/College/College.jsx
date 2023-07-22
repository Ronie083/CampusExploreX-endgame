import React, { useState } from "react";
import ClgCards from "../../../Comp/ClgCards/ClgCards";
import useColleges from "../../../Hooks/useColleges/useColleges";

const College = () => {
    const [colleges] = useColleges();
    const [visibleCards, setVisibleCards] = useState(3);
    const totalCards = colleges.length;

    const [searchQuery, setSearchQuery] = useState("");

    const handleViewMore = () => {
        setVisibleCards(totalCards);
    };

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        setVisibleCards(3);
    };

    const filteredColleges = colleges.filter(
        (college) =>
            college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            college.researchCount.toString().includes(searchQuery)
    );

    const visibleColleges = filteredColleges.slice(0, visibleCards);

    return (
        <div className="bg-[#F5E1C7] rounded-3xl p-10">
            <div className="flex justify-between">
                <div>
                    <p className="text-lg text-[#F56A1E]">Featured universities here</p>
                    <h1 className="text-3xl">Choose your dream university from here</h1>
                </div>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 justify-items-center my-10">
                {visibleColleges.map(coll => (
                    <ClgCards
                        key={coll.id}
                        image={coll.image}
                        name={coll.name}
                        researchHistory={coll.researchCount}
                        sports={coll.sports}
                        events={coll.events}
                        dates={coll.admissionDate}
                    />
                ))}
            </div>
            <div className="text-center">
                {visibleCards < totalCards && (
                    <button className="btn btn-outline rounded-3xl mt-4" onClick={handleViewMore}>
                        View More
                    </button>
                )}
            </div>
        </div>
    );
};

export default College;
