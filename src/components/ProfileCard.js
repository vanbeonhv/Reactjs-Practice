import "./profile-card.css";
import avatar from "../images/avatar.jpg";
import bg from "../images/background.jpg";
export default function ProfileCard() {
  return (
    <div className="container pt-5">
      <div className="row ">
        <div className="col-12 col-md-3 col-lg-4"></div>
        <div className="col-12 col-md-6 col-lg-4 ">
          <div className="card shadow">
            <div className="card-body p-0 text-center ">
              <img src={bg} className="img-fluid rounded-3 "></img>
              <img
                src={avatar}
                className="img-thumbnail rounded-circle avatar shadow"
              ></img>
              <h5 className="card-title py-2">Marc Nguyen</h5>
              <p className="card-text mx-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem quos facere odit quo voluptatibus reiciendis et.
              </p>
              <a
                href="https://www.facebook.com/"
                target="blank"
                className="btn btn-info text-white my-3 fw-bold"
              >
                Follow me
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 col-lg-4"></div>
      </div>
    </div>
  );
}
