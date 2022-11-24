import React from "react";
import "./Search.css";

import bookmydoc from "../../assets/bookmydoc.png";

function Search() {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>BOOK AN APPOINTMENT NOW</h2>
          <p>
            Book my doc presents you an easy way of dealing with any of your
            health problems by booking an appointment with the doctors best in
            such feilds, its more accessible.There are several ways to reach out
            to a doctor without the need to visit a hospital or clinic, all
            thanks to technology. With the online facility available, doctor
            consultations have become easier, which can help you get the right
            health care. Just simply select the date and time checking
            availabilities and book and it'll be done. It's that simple.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={bookmydoc} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>Easy book your appointments</h3>
                <p>just by a few clicks</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>Deals with all types of health issues</h3>
                <p>ALL-INCLUSIVE COMPANY FOR YOUR CARE</p>
                <button>View all Doctors</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">GET AN ADDITIONAL 10% OFF</h4>
            <p className="timer">On your first consulation</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Doctors</label>
              <select>
                <option value="1">Dr Prince Mehra</option>
                <option value="1">Dr Dhananjay Chopra</option>
                <option value="1">Dr Ishika Reddy</option>
                <option value="1">Dr Dheeraj Prasad</option>
                <option value="1">Dr Raj Singh </option>
                <option value="1">Dr Rohan Mehra</option>
                <option value="1">Dr Swagath Mishra</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Date</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Time</label>
                <input type="time" />
              </div>
            </div>
            <button>Fee & Availabilities of slots </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
