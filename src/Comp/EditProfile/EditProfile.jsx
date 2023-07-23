import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const EditProfile = () => {

    const {user} = useContext(AuthContext);
    
    return (
        <form>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" value={user.email} className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="your name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">University</span>
                </label>
                <input type="text" placeholder="university name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Address</span>
                </label>
                <input type="text" placeholder="address" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
                <input type="submit" value="Save" className="btn btn-primary"></input>
            </div>
        </form>
    );
};

export default EditProfile;