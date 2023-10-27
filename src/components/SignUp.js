import { useState } from "react";
import "./SignUp.css";

const initialFormState = {
  username: "",
  password: "",
  email: "",
  gender: "",
  city: "",
  job: [],
};

function SignUp() {
    const [formSignUp, setFormSignUp] = useState(initialFormState);

    const handleSubmitForm = (e) => {
        addCustomer(formSignUp);
        console.log(formSignUp);
    }   

    const addCustomer = async (data) => {
      const response = fetch(`${process.env.REACT_APP_API_ENDPOINT}/customers`,{
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
        if (response.ok){
          alert('Successfully');
          setFormSignUp(initialFormState);
        }
    }

    const handleChangeInput = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === "checkbox") {
        // Xử lý đầu vào checkbox
        const updatedJobs = [...formSignUp.job];
        if (checked) {
          updatedJobs.push(value); // Thêm giá trị vào mảng
        } else {
          // Xóa giá trị khỏi mảng
          const index = updatedJobs.indexOf(value);
          if (index !== -1) {
            updatedJobs.splice(index, 1);
          }
        }
  
        // Cập nhật trạng thái formSignUp với mảng công việc mới
        setFormSignUp({ ...formSignUp, [name]: updatedJobs });
      } else {
        // Xử lý các loại đầu vào khác
        setFormSignUp({ ...formSignUp, [name]: value });
      }
    }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Sign Up</h1>
        </header>
        <div className="body">
          <form className="formSignUp" onSubmit={handleSubmitForm}>
            <div className="text">
              <div className="element">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="username"
                  name="username"
                  id="username"
                  value={formSignUp.username}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="element">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="password"
                  name="password"
                  id="password"
                  value={formSignUp.password}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="element">
                <label htmlFor="email">Email:</label>
                <input type="email" className="email" name="email" id="email" value={formSignUp.email}  onChange={handleChangeInput}/>
              </div>
            </div>
            <div className="radio">
              <div className="element">
                <label>Gender:</label>
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  className="gender"
                  name="gender"
                  id="male"
                  value={"male"}
                  
                  onChange={handleChangeInput}
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  className="gender"
                  name="gender"
                  id="female"
                  value={"female"}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="select">
              <div className="element">
                <label htmlFor="city">City:</label>
                <select id="city" name="city" onChange={handleChangeInput}>
                  <option value={""}>Choose a city</option>
                  <option value={"HaNoi"}>HaNoi</option>
                  <option value={"DaNang"}>DaNang</option>
                  <option value={"HoChiMinh"}>HoChiMinh</option>
                  <option value={"CanTho"}>CanTho</option>
                </select>
              </div>
            </div>
            <div className="checkBox">
              <div className="element">
                <label>Job:</label>
                <input
                  type="checkbox"
                  id="JAVA"
                  name="job"
                  value="student"
                  onChange={handleChangeInput}
                />
                <label htmlFor="JAVA"> Java </label>
                <input
                  type="checkbox"
                  id="JS"
                  name="job"
                  value="doctor"
                  onChange={handleChangeInput}
                />
                <label htmlFor="JS"> Javascript </label>
                <input
                  type="checkbox"
                  id="PHP"
                  name="job"
                  value="doctor"
                  onChange={handleChangeInput}
                />
                <label htmlFor="PHP"> PHP </label>
              </div>
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
