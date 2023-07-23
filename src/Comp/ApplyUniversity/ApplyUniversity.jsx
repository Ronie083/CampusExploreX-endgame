import { ToastContainer, toast } from "react-toastify";


const ApplyUniversity = () => {

    const handleApply = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const university = form.university.value;
        const birthDate = form.birthDate.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const imgLink = form.imgLink.value;

        const studentInfo = { name, email, subject, university, birthDate, phone, address, imgLink }
        fetch('http://localhost:5000/applied', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(studentInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast("You application submitted")
                    form.reset();
                }
            })
    }


    return (
        <form onSubmit={handleApply}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Candidate Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Candidate Name</span>
                </label>
                <input type="text" name="name" placeholder="your name" className="input input-bordered" />
            </div>
            <div className="flex">
                <div className="form-control mr-2">
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <input type="text" name="subject" placeholder="subject" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">University Name</span>
                    </label>
                    <input type="text" name="university" placeholder="university" className="input input-bordered" />
                </div>
            </div>
            <div className="flex justify-between">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date Of Birth</span>
                    </label>
                    <input type="date" name="birthDate" placeholder="birth date" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone number</span>
                    </label>
                    <input type="mobile" name="phone" placeholder="phone" className="input input-bordered" />
                </div>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Address</span>
                </label>
                <input type="text" name="address" placeholder="address" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Link of Image</span>
                </label>
                <input type="text" name="imgLink" placeholder="image link" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
                <input type="submit" value="Apply" className="btn btn-primary"></input>
            </div>
            <ToastContainer></ToastContainer>
        </form>
    );
};

export default ApplyUniversity;