import { useEffect } from "react";
import { useState } from "react";


const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://campus-explore-x-endgame-srver.vercel.app/reviews')
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