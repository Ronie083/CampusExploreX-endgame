import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";


const UseMyCollege = () => {
    const {user} = useContext(AuthContext);

    const {isLoading, data: applied = []} = useQuery({
        queryKey: ['applied', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/applied?email=${user?.email}`)
            return res.json();
        },
    })

    return [applied, isLoading]
    
};

export default UseMyCollege;