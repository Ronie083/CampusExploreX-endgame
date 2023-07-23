import { useEffect } from "react";
import { useState } from "react";


const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
                setLoading(false);
            });
    }, [])
    return [reviews, loading]
};

export default useReviews;