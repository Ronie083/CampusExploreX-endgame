

const BannerComp = ({banImg}) => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-[#33b5e4b1] to-[#F56A1E] md:from-[#ffdbab] md:to-[#7adcff7c] pt-14 pb-7">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <img src={banImg} className="max-w-xs md:max-w-sm rounded-lg shadow-2xl" />
                <div className='max-w-xl md:mr-10 text-lg '>
                    <p className='text-[#F56A1E]'>Unlock the World of Opportunities</p>
                    <h1 className="text-3xl md:text-5xl font-bold">Your Journey <br /> to Endless <br /> Possibilities!</h1>
                    <p className="py-6">
                        Welcome to CampusExploreX, your ultimate destination to discover the perfect college that aligns with your dreams and aspirations. Step into a world of academic excellence and endless opportunities, where we bring together students and colleges in a seamless and user-friendly interface.
                    </p>
                    <button className="btn btn-primary rounded-3xl hover:bg-[#F56A1E] text-white mr-3">Learn More</button>
                    <button className="btn btn-primary text-white rounded-3xl bg-[#F56A1E]">Join Us Now</button>
                </div>
            </div>
        </div>
    );
};

export default BannerComp;