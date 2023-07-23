import useColleges from "../../Hooks/useColleges/useColleges";


const CollegeDetails = () => {

    const [colleges] = useColleges()

    

    return (
        <div>
            <h1>Details of colleges</h1>
        </div>
    );
};

export default CollegeDetails;