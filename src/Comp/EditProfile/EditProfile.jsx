import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const EditProfile = () => {
    const { user } = useContext(AuthContext);

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const university = form.university.value;
        const address = form.address.value;

        const updateProfile = {
            $set: {
                email,
                name,
                university,
                address,
            },
        };

        fetch(`/users/${user.email}`, {
            method: 'PATCH',
            body: JSON.stringify(updateProfile),
            headers: {
                "content-type": "application/json"
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok.");
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast("Your profile has been updated");
                }
            })
            .catch(error => {
                console.error("Error updating profile:", error);
            });
    };

    return (
        <form onSubmit={handleUpdateProfile}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="email"
                    defaultValue={user.email}
                    className="input input-bordered"
                    name="email"
                />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    placeholder="your name"
                    defaultValue={user.name}
                    className="input input-bordered"
                    name="name"
                />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">University</span>
                </label>
                <input
                    type="text"
                    placeholder="university name"
                    defaultValue={user.university}
                    className="input input-bordered"
                    name="university"
                />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Address</span>
                </label>
                <input
                    type="text"
                    placeholder="address"
                    defaultValue={user.address}
                    className="input input-bordered"
                    name="address"
                />
            </div>
            <div className="form-control mt-6">
                <input type="submit" value="Save" className="btn btn-primary"></input>
            </div>
        </form>
    );
};

export default EditProfile;
