import React, { useState, useEffect, useContext } from "react";
import ApplyUniversity from "../../Comp/ApplyUniversity/ApplyUniversity";
import useColleges from "../../Hooks/useColleges/useColleges";
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProviders";

const Admission = () => {
    const [colleges] = useColleges();
    const [selectedCollege, setSelectedCollege] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (window.my_modal_3) {
            if (selectedCollege) {
                window.my_modal_3.showModal();
            }
        }
    }, [selectedCollege]);

    const handleApplyClick = (college) => {
        setSelectedCollege(college);
    };

    return (
        <div>
            <h1 className="text-5xl text-center bg-[#ffdbab] rounded-b-3xl p-24">
                Admission
            </h1>
            <div className="p-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>University Name</th>
                                <th>Ratings</th>
                                <th>Date of Admission</th>
                                <th>Apply now</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colleges.map((college, index) => (
                                <tr className="hover" key={college.id}>
                                    <th>{index + 1}</th>
                                    <td>{college.name}</td>
                                    <td className="flex items-center">
                                        {college.rating}
                                        <AiFillStar className="ml-2" />
                                    </td>
                                    <td>{college.admissionDate}</td>
                                    <td>
                                        {user && user.email ? (
                                            <button
                                                onClick={() => handleApplyClick(college)}
                                                className="btn btn-ghost btn-x"
                                            >
                                                Apply
                                            </button>
                                        ) : (
                                            <p>Pls login to apply</p>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {selectedCollege && (
                    <dialog id="my_modal_3" className="modal">
                        <div method="dialog" className="modal-box">
                            <h3 className="font-bold text-lg text-center">Apply Now</h3>
                            <ApplyUniversity college={selectedCollege} />
                            <p>To exit press ESC</p>
                        </div>
                    </dialog>
                )}
            </div>
        </div>
    );
};

export default Admission;
