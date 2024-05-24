import './Service.css';
function Service() { 
return (
  <>
 {/* content section start */}

        {/* Corporate section start */}
        <div className="marketing_section layout_padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
              <h1>Welcome to JobSearchIndore</h1>
                <h3>Service Page</h3>
                <div className="job_section">
                  <h1 className="jobs_text">Corporate jobs</h1>
                  <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                  <div className="apply_bt"><a href="#">Apply now</a></div>
                </div>
              </div>
              <div className="col-md-6 padding_0">
                <div className="image_1"><img src="assets/images/img-3.png" alt="corporate" /></div>
              </div>
            </div>
          </div>
        </div>
        {/* Corporate section end */}

        {/* Government section start */}
        <div className="marketing_section layout_padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 padding_0">
                <div className="image_1"><img src="assets/images/img-4.png" alt="government" /></div>
              </div>
              <div className="col-md-6">
                <div className="job_section_2">
                  <h1 className="jobs_text">Government jobs</h1>
                  <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                  <div className="apply_bt"><a href="#">Apply now</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Government section end */}
				{/* content section end */}

  </>
  );
}

export default Service;