import { useContext, useState } from "react";
import { BsFacebook, BsFillEyeFill, BsFillEyeSlashFill, BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Login = () => {

    const { login, googleLogin, fbLogin } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(() => {
                console.log(error.message)
            })
        form.reset();
    }

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
            <div className="hero min-h-screen" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1462536943532-57a629f6cc60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80)" }}>
                <div className="hero-content my-10">
                    <div className="card w-full max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div>
                                <h1 className="text-5xl text-center font-bold">Login now!</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        required
                                    />
                                    <span
                                        className="absolute top-2 right-2 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? (
                                            <>
                                                <BsFillEyeSlashFill></BsFillEyeSlashFill>
                                            </>
                                        ) : (
                                            <>
                                                <BsFillEyeFill></BsFillEyeFill>
                                            </>
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className="mt-5">
                                <p>Don&apos;t have account!!! <Link className="text-lg font-semibold link link-info" to="/register"> Click Here </Link> to register</p>
                            </div>
                            <div className="text-center">
                                <p className="my-5 text-xl font-bold">You can also login with</p>
                                <button onClick={handleGoogleLogin} className="btn btn-outline btn-error rounded-2xl"><BsGoogle></BsGoogle></button>
                                <button onClick={handleFbLogin} className="ml-3 btn btn-outline btn-info rounded-2xl"><BsFacebook></BsFacebook></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;