import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import EditProfile from "../../Comp/EditProfile/EditProfile";


const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user.displayName)

    return (
        <div>
            <div>
                <h1 className="text-5xl text-center bg-[#ffdbab] rounded-b-3xl p-24">Profile</h1>
            </div>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={user.photoURL} className="w-40 rounded-full ring ring-[#F56A1E] ring-offset-base-100 ring-offset-2 shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold">{user.displayName}</h1>
                            <p className="py-6 text-xl font-semibold">{user.email}</p>
                            <p className="py-2">University Name:{user.university}</p>
                            <p className="py-2">Address: {user.address}</p>
                            <button className="btn btn-outline bg-[#F56A1E] rounded-3xl my-5" onClick={() => window.my_modal_3.showModal()}>Edit Profile</button>
                            <dialog id="my_modal_3" className="modal">
                                <div method="dialog" className="modal-box">
                                    <h3 className="font-bold text-lg text-center">Edit Profile</h3>
                                    <EditProfile></EditProfile>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
                <h3></h3>
                <p></p>

            </div>
        </div>
    );
};

export default Profile;