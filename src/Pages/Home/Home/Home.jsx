import Banner from "../Banner/Banner";
import College from "../College/College";
import GradImgs from "../GradImgs/GradImgs";
import ResearchPaper from "../ResearchPapers/ResearchPaper";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <College></College>
            <GradImgs></GradImgs>
            <ResearchPaper></ResearchPaper>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;