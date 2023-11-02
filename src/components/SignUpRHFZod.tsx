import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import "./SignUp.css";

type customer = {
  username: string,
  password: string,
  email: string,
  gender: string,
  city: string,
  job: string[],
} 

const customerSchema = z.object({
  username: z.string().min(1,"This field is required"),
  password: z.string().min(8,"Password must at least 8 character(s)").max(15,"Password must contain at most 15 character(s)"),
  email: z.string().email(),
  // gender: z.string().nullable().refine((value) => value !== null, {
  //   message: "Gender is required",
  // }),
  gender: z.string().min(1,"This field is required"),
  city: z.string().min(1,"This field is required"),
  // job: z.array(z.string()).refine((value) => value.length > 0, {message: "job is required"}),
  job: z.array(z.string()).nonempty({message: "This field is required"}),
  })

// type Schema = z.infer<typeof customerSchema>

function SignUpRHFZod() {  
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<customer>({   
    // defaultValues: {
    //       username: "",
    //       password: "",
    //       email: "",
    //       gender: "",
    //       city: "",
    //       job: [],
    //     },
    resolver: zodResolver(customerSchema)});
  
  // useEffect(() => {
  //   // Đặt giá trị mặc định cho trường "job" là mảng rỗng
  //   setValue("job", []);
  // }, []); // Sử dụng dependency array trống để đảm bảo chỉ chạy một lần
  

  const onSubmit = (customerData: customer) => {
    console.log("Form errors:", errors);
    console.log("Submitted data:", customerData);
  }


console.log(watch("job")); 
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
                <label >Username:</label>
                <input
                  type="text"
                  className="username"
                  id="username"
                  {...register("username")}
                />
              </div>
              <div className="errors-message">
              {errors.username && <span> {errors.username.message}</span>}
              </div>
              <div className="element">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="password"
                  id="password"
                  {...register("password")}
                />
              </div>
              <div className="errors-message">
              {errors.password && <span> {errors.password.message}</span>}
              </div>
              <div className="element">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="email"
                  id="email"
                  {...register("email")}
                />
              </div>
              <div className="errors-message">
              {errors.email && <span> {errors.email.message}</span>}
              </div>
            </div>
            <div className="radio">
              <div className="element">
                <label>Gender:</label>
                <input
                  type="radio"
                  className="gender"
                  id="male"
                  value="male"
                  {...register("gender")}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  className="gender"
                  id="female"
                  value="female"
                  {...register("gender")}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="errors-message">
              {errors.gender && <span> {errors.gender.message}</span>}
              </div>
            </div>
            <div className="select">
              <div className="element">
                <label htmlFor="city">City:</label>
                <select
                  id="city"
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
              {errors.city && <span> {errors.city.message}</span>}
              </div>
            </div>
            <div className="checkBox">
              <div className="element">
                <label>Job:</label>
                <input
                  type="checkbox"
                  id="JAVA"
                  value="java"

                  {...register("job")}
                />
                <label htmlFor="JAVA"> Java </label>
                <input
                  type="checkbox"
                  id="JS"
                  value="javascript"
                  {...register("job")}
                />
                <label htmlFor="JS"> Javascript </label>
                <input
                  type="checkbox"
                  id="PHP"
                  value="php"
                  {...register("job")}
                />
                <label htmlFor="PHP"> PHP </label>
              </div>
              <div className="errors-message">
              {errors.job && <span> {errors.job.message}</span>}
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

export default SignUpRHFZod;
