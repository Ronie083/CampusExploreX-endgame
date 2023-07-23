import ClgCards from "../../../Comp/ClgCards/ClgCards";

const College = () => {
    const limit = 3;

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
                    />
                </div>
            </div>
            <div>
                <ClgCards limit={limit} />
            </div>
        </div>
    );
};

export default College;
