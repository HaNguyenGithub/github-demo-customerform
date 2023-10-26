import "./SignUp.css";
function SignUp() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Sign Up</h1>
        </header>
        <div className="body">
          <form className="formSignUp">
            <div className="text">
              <div className="element">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="username"
                  name="username"
                  id="username"
                />
              </div>
              <div className="element">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="password"
                  name="password"
                  id="password"
                />
              </div>
              <div className="element">
                <label htmlFor="email">Email:</label>
                <input type="email" className="email" name="email" id="email" />
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
                  value={1}
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  className="gender"
                  name="gender"
                  id="female"
                  value={2}
                />
              </div>
            </div>
            <div className="select">
              <div className="element">
                <label htmlFor="city">City:</label>
                <select id="city" name="city">
                  <option value={0}>Choose a city</option>
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
                  id="student"
                  name="job"
                  value="student"
                />
                <label htmlFor="student"> Student </label>
                <input
                  type="checkbox"
                  id="doctor"
                  name="job"
                  value="doctor"
                />
                <label htmlFor="doctor"> Doctor </label>
                <input
                  type="checkbox"
                  id="teacher"
                  name="job"
                  value="doctor"
                />
                <label htmlFor="teacher"> Teacher </label>
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
