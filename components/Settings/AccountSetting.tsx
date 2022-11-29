export default function Account() {
    return (
        <div className="category">
            <a href="#" className="title collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <i className="material-icons md-30 online">person_outline</i>
                <div className="data">
                    <h5>My Account</h5>
                    <p>Update your profile details</p>
                </div>
                <i className="material-icons">keyboard_arrow_right</i>
            </a>
            <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionSettings">
                <div className="content">
                    <div className="upload">
                        <div className="data">
                            <img className="avatar-xl" src="dist/img/avatars/avatar-male-1.jpg" alt="image" />
                            <label>
                                <input type="file" />
                                <span className="btn button">Upload avatar</span>
                            </label>
                        </div>
                        <p>For best results, use an image at least 256px by 256px in either .jpg or .png format!</p>
                    </div>
                    <form>
                        <div className="parent">
                            <div className="field">
                                <label htmlFor="firstName">First name <span>*</span></label>
                                <input type="text" className="form-control" id="firstName" placeholder="First name" value="Michael" required />
                            </div>
                            <div className="field">
                                <label htmlFor="lastName">Last name <span>*</span></label>
                                <input type="text" className="form-control" id="lastName" placeholder="Last name" value="Knudsen" required />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email address" value="michael@gmail.com" required />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter a new password" value="password" required />
                        </div>
                        <div className="field">
                            <label htmlFor="location">Location</label>
                            <input type="text" className="form-control" id="location" placeholder="Enter your location" value="Helena, Montana" required />
                        </div>
                        <button className="btn btn-link w-100">Delete Account</button>
                        <button type="submit" className="btn button w-100">Apply</button>
                    </form>
                </div>
            </div>
        </div>
    )
}