import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import "./SignUp.css";
const customer = {
  username: "",
  password: "",
  email: "",
  gender: "",
  city: "",
  job: [],
};

const customerSchema = Yup.object({
  username: Yup.string().required('This field is required'),
  password: Yup.string().min(8).max(15).required('This field is required'),
  email: Yup.string().required('This field is required').email("Syntax errors"),
  gender: Yup.string().required('This field is required'),
  city: Yup.string().required('This field is required'),
  job: Yup.array().min(1,'At least one job'),
});

function SignUpRFH() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(customerSchema), defaultValues:customer});
  // const onSubmit = (data) => console.log(data);

  
  const onSubmit = (customer) => {
    addCustomer(customer);
    console.log(customer);
  };

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
              <div className="errors-message">
                {errors.username?.message}
              </div>
              <div className="element">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="password"
                  name="password"
                  id="password"
                  ref={register}
                  {...register("password")}
                />
              </div>
              <div className="errors-message">
                {errors.password?.message}
              </div>
              <div className="element">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="email"
                  name="email"
                  id="email"
                  ref={register}
                  {...register("email")}
                />
              </div>
              <div className="errors-message">
                {errors.email?.message}
              </div>
            </div>
            <div className="radio">
              <div className="element">
                <label>Gender:</label>

                <input
                  type="radio"
                  className="gender"
                  name="gender"
                  id="male"
                  value={"male"}
                  {...register("gender")}
                />
                <label htmlFor="male">Male</label>

                <input
                  type="radio"
                  className="gender"
                  name="gender"
                  id="female"
                  value={"female"}
                  {...register("gender")}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="errors-message">
                {errors.gender?.message}
              </div>
            </div>
            <div className="select">
              <div className="element">
                <label htmlFor="city">City:</label>
                <select
                  id="city"
                  name="city"
                  {...register("city")}
                >
                  <option value={""}>Choose a city</option>
                  <option value={"HaNoi"}>HaNoi</option>
                  <option value={"DaNang"}>DaNang</option>
                  <option value={"HoChiMinh"}>HoChiMinh</option>
                  <option value={"CanTho"}>CanTho</option>
                </select>
              </div>
              <div className="errors-message">
                {errors.city?.message}
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
              <div className="errors-message">
                {errors.job?.message}
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
