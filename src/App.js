import "./App.css";
import React, { useState } from "react";
import img from "./img/Capture.JPG";
import { TextField, Checkbox, Typography, Slider } from "@material-ui/core";

function App() {
  const [rang, setRang] = useState(30);
  const handleChange = (e, newRang) => {
    setRang(newRang);
  };

  const [formValue, setFormValue] = useState([]);
  const handleBlur = (e) => {
    let value = {
      fieldName: e.target.name || "age",
      fieldValue: e.target.value === undefined ? rang : e.target.value,
      date: new Date(),
    };
    const data = [...formValue, value];
    setFormValue(data);


  };
  console.log(formValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://whispering-oasis-08517.herokuapp.com/userData", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({formValue}),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        if (data) {
          e.target.reset();
          alert("Your Data Added Successfully");
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const valueText = (value) => {
    return `${value}`;
  };

  const [ready, setReady] = useState(true);
  const handleReady = () => {
    setReady(false);
  };

  const [start, setStart] = useState("disabled");
  const handleStart = () => {
    setStart(null);
  };
  return (
    <div className="container p-0 m-0">
     

      <form onSubmit={handleSubmit}>
        <div style={{ display: ready ? "block" : "none" }}>
          <span style={{fontSize: "25px", fontWeight: "500"}}>Are You Ready For This Survey? <br />YES</span>
          <input className="ready"
              onBlur={handleBlur}
              onClick={handleReady}
              name="Start"
              type="checkbox"
            />
        </div>

        <fieldset disabled style={{ display: ready ? "block" : "none" }}>
          <div className="form-group">
            <label for="name">Name:</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control w-75"
              name="name"
              id="name"
            />
          </div>

          <br />
          <label for="age">Age Range:</label>

          <Slider
            defaultValue={rang}
            getAriaValueText={valueText}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            onBlur={handleBlur}
            onChange={handleChange}
            name="age"
            min={10}
            max={60}
            valueLabelDisplay="on"
            disabled
          />
          <div className="form-group">
            <label for="exampleSelect1">Blood Group &nbsp;</label>
            <select
              onBlur={handleBlur}
              name="Blood-Group"
              className="custom-select"
            >
              <option selected>Open this select menu</option>
              <option value="1">A+</option>
              <option value="2">A-</option>
              <option value="3">B+</option>
              <option value="4">B-</option>
              <option value="5">O+</option>
              <option value="6">O-</option>
              <option value="7">AB+</option>
              <option value="8">AB-</option>
            </select>
          </div>
          <br />
          <div className="">
            <div className=" d-flex justify-center-center">
              <label for="">Devices:</label> <br />
              <div className="checkbox">
                <label>
                  <input
                    onBlur={handleBlur}
                    name="D-SmartPhone"
                    type="checkbox"
                  />{" "}
                  &nbsp;Phone
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input onBlur={handleBlur} name="D-Desktop" type="checkbox" />{" "}
                  &nbsp;Desktop
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input onBlur={handleBlur} name="D-Both" type="checkbox" />{" "}
                  &nbsp;Both
                </label>
              </div>
            </div>
            <br />
            <div className="d-flex justify-center-center">
              <label for="">Gender:</label>
              <div className="form-check ms-3 pe-3">
                <label className="form-check-label">
                  <input
                    onBlur={handleBlur}
                    name="male"
                    type="radio"
                    className="form-check-input"
                  />
                  Male &nbsp;
                </label>
              </div>
              <div className="form-check ps-3 pe-3">
                <label className="form-check-label">
                  <input
                    onBlur={handleBlur}
                    name="female"
                    type="radio"
                    className="form-check-input"
                  />
                  Female &nbsp;
                </label>
              </div>
              <div className="form-check ps-3 pe-3">
                <label className="form-check-label">
                  <input
                    onBlur={handleBlur}
                    type="radio"
                    className="form-check-input"
                  />
                  Others
                </label>
              </div>
            </div>
          </div>
          <label for="birthday">Birthday: &nbsp;</label>
          <input
            onBlur={handleBlur}
            type="date"
            id="birthday"
            name="birthday"
          />
          <br />
          <br />

          <label for="exampleColorInput" className="form-label">
            Favourite Color
          </label>
          <input
            onBlur={handleBlur}
            name="color"
            type="color"
            className="form-control form-control-color"
            id="exampleColorInput"
            value="#563d7c"
            title="Choose your color"
          />
          <br />

          <label className="custom-file">
            <input
              onBlur={handleBlur}
              type="file"
              id="file"
              className="custom-file-input"
            />
            <span className="custom-file-control"></span>
          </label>
          <br />
          <br />

          <button type="submit" className="btn btn-primary mb-5">
            Submit
          </button>
          <br />
        </fieldset>

        <fieldset style={{ display: ready ? "none" : "block" }}>
          <h5>
            Comparative Analysis of Human-Computer Interaction with Smartphone &
             Desktop Application Based Widgets
          </h5>
          <div className="form-group">
            <label for="name">1. Name:</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control w-75"
              name="name"
              id="name"
            />
          </div>

          <br />
          <label for="age">2. Age Range: </label>
          <br />
         
          <Slider
          className="rang"
            defaultValue={rang}
            getAriaValueText={valueText}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            onBlur={handleBlur}
            onChange={handleChange}
            name="age"
            min={10}
            max={60}
            valueLabelDisplay="on"
          />
          <div className="form-group">
            <label for="exampleSelect1">3. Blood Group &nbsp;</label>
            <select
              onBlur={handleBlur}
              name="Blood-Group"
              className="custom-select"
            >
              <option selected>Open this select menu</option>
              <option value="1">A+</option>
              <option value="2">A-</option>
              <option value="3">B+</option>
              <option value="4">B-</option>
              <option value="5">O+</option>
              <option value="6">O-</option>
              <option value="7">AB+</option>
              <option value="8">AB-</option>
            </select>
          </div>
          <br />
          <div className="">
            <div className=" d-flex justify-center-center">
              <label for="">4. Devices:</label> <br />
              <div className="checkbox">
               <label>
                  <input
                    onBlur={handleBlur}
                    name="D-SmartPhone"
                    type="checkbox"
                  />{" "}
                  &nbsp;Phone
                  </label>
              </div>
              <div className="checkbox">
                <label>
                  <input onBlur={handleBlur} name="D-Desktop" type="checkbox" />{" "}
                  &nbsp;Desktop
                </label>
              </div>
             
            </div>
            <br />
            <div className="d-flex justify-center-center">
              <label for="">5. Gender:</label>
              <div className="form-check ms-3 pe-3">
                <label className="form-check-label">
                  <input
                    onBlur={handleBlur}
                    name="male"
                    type="radio"
                    className="form-check-input"
                  />
                  Male &nbsp;
                </label>
              </div>
              <div className="form-check ps-3 pe-3">
                <label className="form-check-label">
                  <input
                    onBlur={handleBlur}
                    name="female"
                    type="radio"
                    className="form-check-input"
                  />
                  Female &nbsp;
                </label>
              </div>
              <div className="form-check ps-3 pe-3">
                <label className="form-check-label">
                  <input
                    onBlur={handleBlur}
                    type="radio"
                    className="form-check-input"
                  />
                  Others
                </label>
              </div>
            </div>
          </div>
          <label for="birthday">6. Birthday: &nbsp;</label>
          <input
            onBlur={handleBlur}
            type="date"
            id="birthday"
            name="birthday"
          />
          <br />
          <br />

          <label for="exampleColorInput" className="form-label">
            7. Favourite Color
          </label>
          <input
            onBlur={handleBlur}
            name="color"
            type="color"
            className="form-control form-control-color"
            id="exampleColorInput"
            title="Choose your color"
          />
          <br />

          <label className="custom-file">
            8. &nbsp;
            <input
              onBlur={handleBlur}
              type="file"
              name="file"
              className="custom-file-input"
            />
            <span className="custom-file-control"></span>
          </label>
          <br />
          <br />

          <button type="submit" className="btn btn-primary mb-5">
            Submit
          </button>
          <br />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
