import { useEffect, useState } from "react";


const MyCollege = () => {

    const [myCollege, setMyColleges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/applied')
            .then(res => res.json())
            .then(data => {
                setMyColleges(data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching colleges:', error);
                setLoading(false);
            });
    }, []);

    console.log(myCollege);


    return (
        <div>

        </div>
    );
};

export default MyCollege;