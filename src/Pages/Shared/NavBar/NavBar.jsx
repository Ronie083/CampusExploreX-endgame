import { useContext } from "react";
import logo from "../../../assets/logo-land.png"
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link } from "react-router-dom";

const NavBar = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="navbar bg-opacity-20 bg-black py-4 fixed z-[9] container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Colleges</a></li>
                        <li><a>Admission</a></li>
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost normal-case text-xl w-40"><img src={logo} alt="logo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white text-base font-bold">
                    <li><Link to='/'>Home</Link></li>
                    <li><a>Colleges</a></li>
                    <li><a>Admission</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar md:mx-3" title={user?.displayName}>
                        {
                            user?.email ? (
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            ) : (
                                <Link to="login">Login</Link>
                            )
                        }
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user?.email ? (
                                <>
                                    <li><a>Profile</a></li>
                                    <li><a>My College</a></li>
                                    <li><a>Logout</a></li>
                                </>
                            ) : (
                                ''
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;