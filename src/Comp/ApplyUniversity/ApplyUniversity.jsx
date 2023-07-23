

const ApplyUniversity = () => {
    return (
        <form>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Candidate Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Candidate Name</span>
                </label>
                <input type="text" placeholder="your name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Subject</span>
                </label>
                <input type="text" placeholder="subject" className="input input-bordered" />
            </div>
            <div className="flex justify-between">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date Of Birth</span>
                    </label>
                    <input type="date" placeholder="birth date" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone number</span>
                    </label>
                    <input type="mobile" placeholder="phone" className="input input-bordered" />
                </div>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Address</span>
                </label>
                <input type="text" placeholder="address" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Link of Image</span>
                </label>
                <input type="text" placeholder="image link" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
                <input type="submit" value="Save" className="btn btn-primary"></input>
            </div>
        </form>
    );
};

export default ApplyUniversity;