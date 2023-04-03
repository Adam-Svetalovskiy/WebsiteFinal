import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJy4X4d2AAiHemoxSzRXlcbYiGP0INWaJC3A&usqp=CAU"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Enrique</span>
              <span className="userShowUserTitle">Project Manager</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">enrique</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">01.04.1994</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+44 779929304</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">enrique@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">London,UK</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="enrique"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enrique"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="enrique@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+44 779940393"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="London, UK"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
