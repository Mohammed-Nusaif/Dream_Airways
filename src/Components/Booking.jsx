import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "../CSS/Booking.css";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { TbArrowsRightLeft } from "react-icons/tb";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsCalendarPlus } from "react-icons/bs";
import { MdOutlineFlightClass } from "react-icons/md";
import format from "date-fns/format";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function Booking() {
  const [isRoundtrip, setIsRoundTrip] = useState(true);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [adults, setAdults] = useState(1);
  const [youngAdults, setYoungAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [travelClass, setTravelClass] = useState("Economy");
  const refFrom = useRef(null);
  const refTo = useRef(null);
  const refPassenger = useRef(null);


  const places = [
    "new York",
    "Los Angeles",
    "Chicago",
    "Miami",
    "Karippur",
    "Kochi",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Kolkata",
  ];

  const handleBooking = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/bookings", {
        passengerName: "John Doe",
        departure,
        arrival,
        fromDate,
        toDate,
        isRoundtrip,
        adults,
        children,
        infants,
        travelClass
      });

      console.log("Booking successful:", response.data);
      alert("Booking Successful!");
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking Failed");
    }
  };
  const handleTripTypeChange = (e) => {
    const tripType = e.target.value;
    setIsRoundTrip(tripType === "roundTrip");
    if (tripType === "oneWay") {
      setToDate(null); // Optionally clear the toDate when "One Way" is selected
    }
  };

  const handleClickOutside = (e) => {
    if (refFrom.current && !refFrom.current.contains(e.target)) {
      setOpenFrom(false);
    }
    if (refTo.current && !refTo.current.contains(e.target)) {
      setOpenTo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const swapPlaces = () => {
    const temp = departure;
    setDeparture(arrival);
    setArrival(temp);
  };
  const totalPassengers = adults + children + infants;

  return (
    <section id="Ticket">
      <div className="ticket_box">
        <Row className="align-items-center mb-4 trip-row">
          <Col xs={12} md={12} className="trip-type">
            <label className="me-3">
              <input
                type="radio"
                name="tripType"
                value="roundTrip"
                checked={isRoundtrip}
                onChange={handleTripTypeChange}
              />
              Round Trip
            </label>
            <label>
              <input
                type="radio"
                name="tripType"
                value="oneWay"
                checked={!isRoundtrip}
                onChange={handleTripTypeChange}
              />
              One Way
            </label>
          </Col>
        </Row>

        <Row className="mb-4 d-flex align-items-center justify-content-between">
          <Col xs={5} className="position-relative">
            <div className="label-container">
              <FaPlaneDeparture className="departure" />
              <Form.Control
                as="select"
                className="from form-control"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                placeholder="Departure"
              >
                <option value="" disabled>
                  Departure
                </option>
                {places.map((place, index) => (
                  <option key={index} value={place}>
                    {place}
                  </option>
                ))}
              </Form.Control>
            </div>
          </Col>
          <Col xs={2} className="text-center">
            <TbArrowsRightLeft
              className="double-arrow"
              onClick={swapPlaces}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col xs={5} className="position-relative">
            <div className="To-container">
              <FaPlaneArrival className="arrival" />
              <Form.Control
                as="select"
                className="to form-control"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                placeholder="To"
              >
                <option value="" disabled>
                  Arrival
                </option>
                {places.map((place, index) => (
                  <option key={index} value={place}>
                    {place}
                  </option>
                ))}
              </Form.Control>
            </div>
          </Col>
        </Row>

        <Row className="mb-4 fromto">
          {/* calender */}
          <Col xs={12} md={6} className="calendarWrap">
            <span className="calender-icon">
              <BsCalendarPlus />
            </span>
            <input
              value={format(fromDate, "MM/dd/yyyy")}
              readOnly
              className="form-control inputBox"
              onClick={() => setOpenFrom((open) => !open)}
            />
            <span className="date-superscript">Departure Date</span>
            <div ref={refFrom} className="calender-container">
              {openFrom && (
                <DatePicker
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                  // editableDateInputs
                  className="calendarElement"
                  inline
                />
              )}
            </div>
          </Col>
          <Col xs={12} md={6} className="calendarWrap">
            <span className="calender-icon">
              <BsCalendarPlus />
            </span>
            <input
              value={toDate ? format(toDate, "MM/dd/yyyy") : ""}
              readOnly
              className="form-control inputBox"
              onClick={() => setOpenTo((open) => !open)}
              disabled={!isRoundtrip}
            />
            <span className="date-superscript">Return Date</span>
            <div ref={refTo} className="calender-container">
              {openTo && isRoundtrip && (
                <DatePicker
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  // editableDateInputs
                  className="calendarElement"
                  inline
                />
              )}
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12}>
            <div className="passenger-dropdown" ref={refPassenger}>
              <div
                className="passenger-dropdown-toggle"
                onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
              >
                {totalPassengers} Passenger(s)
                <span
                  style={{
                    transform: showPassengerDropdown
                      ? "rotate(180deg)"
                      : "rotate(0)",
                    transition: "0.3s",
                  }}
                >
                  ▼
                </span>
              </div>

              {showPassengerDropdown && (
                <div className="passenger-dropdown-menu">
                  <div className="passenger-item">
                    <span>Adults (16+):</span>
                    <div>
                      <button
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                      >
                        -
                      </button>
                      {adults}
                      <button onClick={() => setAdults(adults + 1)}>+</button>
                    </div>
                  </div>
                  <div className="passenger-item">
                    <span>Children (2-15):</span>
                    <div>
                      <button
                        onClick={() => setChildren(Math.max(0, children - 1))}
                      >
                        -
                      </button>
                      {children}
                      <button onClick={() => setChildren(children + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="passenger-item">
                    <span>Infants (under 2):</span>
                    <div>
                      <button
                        onClick={() => setInfants(Math.max(0, infants - 1))}
                      >
                        -
                      </button>
                      {infants}
                      <button onClick={() => setInfants(infants + 1)}>+</button>
                    </div>
                  </div>
                  <button
                    className="passenger-done-btn"
                    onClick={() => setShowPassengerDropdown(false)}
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12}>
            <select
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
              className="form-control"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
            </select>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <button className="btn btn-primary" onClick={handleBooking}>
              SEARCH FLIGHTS
            </button>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Booking;
