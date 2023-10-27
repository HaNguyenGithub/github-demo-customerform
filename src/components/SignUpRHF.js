import { useForm } from "react-hook-form";
import "./SignUp.css";

function SignUpRFH() {
  const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);

  const onSubmit = (customer) =>{
      addCustomer(customer);
      console.log(customer);
  }

  const addCustomer = async (data) => {
    const response = fetch(`${process.env.REACT_APP_API_ENDPOINT}/customers`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert("Successfully");
    }
  }; 

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Sign Up</h1>
        </header>
        <div className="body">
          <form className="formSignUp" onSubmit={handleSubmit(onSubmit)}>
            <div className="text">
              <div className="element">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="username"
                  name="username"
                  id="username"
                  ref={register}
                  {...register("username")}
                />
              </div>
              <div className="element">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="password"
                  name="password"
                  id="password"
                  {...register("password",{ minLength: 8, maxLength: 25 })}
                />
              </div>
              <div className="element">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="email"
                  name="email"
                  id="email"
                  {...register("email")}
                />
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
                  {...register("gender")}
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  className="gender"
                  name="gender"
                  id="female"
                  value={"female"}
                  {...register("gender")}
                />
              </div>
            </div>
            <div className="select">
              <div className="element">
                <label htmlFor="city">City:</label>
                <select id="city" name="city" {...register("city")}>
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
                  value="java"
                  {...register("job")}
                />
                <label htmlFor="JAVA"> Java </label>
                <input
                  type="checkbox"
                  id="JS"
                  name="job"
                  value="javascript"
                  {...register("job")}
                />
                <label htmlFor="JS"> Javascript </label>
                <input
                  type="checkbox"
                  id="PHP"
                  name="job"
                  value="php"
                  {...register("job")}
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

export default SignUpRFH;