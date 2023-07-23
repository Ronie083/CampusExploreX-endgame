import ApplyUniversity from "../../Comp/ApplyUniversity/ApplyUniversity";
import useColleges from "../../Hooks/useColleges/useColleges";
import { AiFillStar } from "react-icons/ai";


const Admission = () => {

    const [colleges] = useColleges();

    return (
        <div>
            <h1 className="text-5xl text-center bg-[#ffdbab] rounded-b-3xl p-24">Admission</h1>
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
                            {
                                colleges.map((college, index) => (
                                    <tr className="hover" key={college.id}>
                                        <th>{index + 1}</th>
                                        <td>{college.name}</td>
                                        <td className="flex items-center">{college.rating}<AiFillStar className="ml-2" /></td>
                                        <td>{college.admissionDate}</td>
                                        <td><button onClick={() => window.my_modal_3.showModal()} className="btn btn-ghost btn-x">Apply</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg text-center">Apply Now</h3>
                        <ApplyUniversity></ApplyUniversity>
                    </form>
                </dialog>
            </div>
        </div>
    );
};

export default Admission;