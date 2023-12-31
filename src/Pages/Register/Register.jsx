import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";


const Register = () => {

    const { createUser, googleLogin, fbLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [passwordAlert, setPasswordAlert] = useState("");

    const from = location.state?.from?.pathname || '/';


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const address = form.address.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordAlert(
                "Password must contain at least one capital letter, one special characters, and be at least 6 characters long."
            );
            return;
        }

        console.log(email, name, photoURL, address, password);

        createUser(email, name, photoURL, address)
            .then((result) => {
                const user = result.user;
                console.log(user);
                saveUserDataToServer(email, name, photoURL);
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL,
                })
                form.reset();
            })
            .catch((error) => {
                console.error("Error while signing up:", error);
                toast.error("Failed to sign up. Please try again later.");
            });
    };

    const saveUserDataToServer = (email, name, photoURL) => {
        const saveUser = { email, name, photoURL };
        fetch('https://campus-explore-x-endgame-srver.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast("Your application submitted");
                }
            })
            .catch(error => {
                console.error("Error while saving user data:", error);
                toast.error("Failed to save user data. Please try again later.");
            });
    };


    const handleGoogleLogin = () => {
        googleLogin();
        navigate(from, { replace: true });
    }

    const handleFbLogin = () => {
        fbLogin();
        navigate(from, { replace: true })
    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)" }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink- text-center w-full max-w-xl shadow-2xl bg-base-100">
                        <div className="card-body max-h-[600px]">
                            <div className="text-center">
                                <p className="my-2 text-lg font-bold">You can also Sign Up with</p>
                                <hr className="my-3" />
                                <button onSubmit={handleGoogleLogin} className="btn btn-outline btn-error rounded-2xl"><BsGoogle></BsGoogle></button>
                                <button onSubmit={handleFbLogin} className="ml-3 btn btn-outline btn-info rounded-2xl"><BsFacebook></BsFacebook></button>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold mb-3 text-center">Sign Up now!</h1>
                            <form onSubmit={handleSignUp} className=" grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photoUrl" placeholder="photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name="address" placeholder="address" className="input input-bordered" required />
                                </div>
                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <p>{passwordAlert}</p>
                                </div>
                                <div className="form-control col-span-2 mb-6">
                                    <input className="btn btn-primary" type="submit" value="Submit" />
                                </div>
                            </form>
                            <div className="my-2">
                                <p>Already have an account!!! <Link className="text-lg font-semibold link link-info" to="/login">Login</Link> from here...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;