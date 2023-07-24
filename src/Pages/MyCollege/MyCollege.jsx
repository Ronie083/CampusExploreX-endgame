import UseMyCollege from "../../Hooks/useMyCollege/UseMyCollege";



const MyCollege = () => {

    const [applied, isLoading] = UseMyCollege();

    if (isLoading) {
        // Show a loading indicator while data is being fetched
        return <div>Loading...</div>;
    }

    const firstItem = applied[0];

    console.log(firstItem);

    return (
        <div>
            <h1 className="text-5xl text-center p-24 bg-[#ffdbab] rounded-b-3xl">My College</h1>
            <div className="overflow-x-auto p-10">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name & Email</th>
                            <th>University & Subject</th>
                            <th>Date of Birth</th>
                            <th>Your Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={firstItem.imgLink} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{firstItem.name}</div>
                                        <div className="text-sm opacity-50">{firstItem.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {firstItem.university}
                                <br />
                                <span className="badge badge-ghost badge-sm">{firstItem.subject}</span>
                            </td>
                            <td>{firstItem.birthDate}</td>
                            <td>{firstItem.address}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h1 className="text-center m-4">Add a Review</h1>
                <div className=" p-10">
                    <div className="form-control">
                        <label>
                            Rating
                        </label>
                        <input type="text" placeholder="rat: 1-5" className="input input-bordered max-w-xs" />
                    </div>
                    <div className="form-control my-4">
                        <label>
                            Comment
                        </label>
                        <textarea className="textarea textarea-bordered max-w-lg" placeholder="write your comment"></textarea>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-outline" value="Submit" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCollege;