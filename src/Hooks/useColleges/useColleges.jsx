import { useEffect, useState } from "react";

const useColleges = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('universities.json')
            .then(res => res.json())
            .then(data => {
                setColleges(data.colleges)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching colleges:', error);
                setLoading(false);
            });
    }, []);

    return [colleges, loading];
};

export default useColleges;
