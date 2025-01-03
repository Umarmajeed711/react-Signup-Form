import React from "react";
// import link
import { Link } from "react-router";
// import material UI
import { Button, TextField } from "@mui/material";

// import formik hook
import { useFormik } from "formik";
// import yup
import * as yup from "yup";

export const Login = () => {
  // Custom Login Validation
  const customValidation = yup.object({
    email: yup
      .string("Enter a Valid Name")
      .email("enter a valid email")
      .required("email is Required"),
    password: yup
      .string("Enter Password")
      .required("Password is Required")
      .min(6, "Minimum")
      .max(12, "Maximum 12 Character"),
  });

  // Hook LoginFormik
  const Loginformik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: customValidation,
    onSubmit: (values) => {
      console.log("values", values);

      // email
      let userEmail = values.email;
      // password
      let userPass = values.password;
      let allUsers = JSON.parse(localStorage.getItem("users"));

      // it will check email had matched or not
      let notMached = true;

      // in the allusers we have all users emails
      // if alluser exits so it will check all the email and compare it to the login email.
      for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == userEmail) {
          notMached = false;
          if (userPass == allUsers[i].password) {
            alert("Login Successfully");
            Loginformik.resetForm();
            window.location.href = "/dashboard";
          } else {
            alert("Invalid Password");
          }
          break;
        }
      }

      if (notMached) {
        alert("Email Did not Matched");
      }
    },
  });

  return (
    <body className="body2">
      {/* header */}
      <header className="container mt-3">
        <div>
          <h1>Hacker</h1>
        </div>
        <nav>
          <ul className="nav">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* main Div */}
      <main className="d-flex justify-content-center align-items-center mt-5">
        <div className="back p-5 d-flex flex-column align-items-center">
          <div>
            <h1>Login</h1>
          </div>

          <form
            onSubmit={Loginformik.handleSubmit}
            className="d-flex flex-column align-items-center mt-3"
          >
            {/* email input field */}
            <TextField
              name="email"
              label="email: "
              value={Loginformik.values.email}
              onChange={Loginformik.handleChange}
              error={
                Loginformik.touched.email && Boolean(Loginformik.errors.email)
              }
              helperText={Loginformik.touched.email && Loginformik.errors.email}
            />

            <br />

            {/* password input field */}
            <TextField
              name="password"
              label="password: "
              value={Loginformik.values.password}
              onChange={Loginformik.handleChange}
              error={
                Loginformik.touched.password &&
                Boolean(Loginformik.errors.password)
              }
              helperText={
                Loginformik.touched.password && Loginformik.errors.password
              }
            />
            <br />

            {/* button */}
            <button className="button p-2" type="submit">
              Login
            </button>
          </form>
        </div>
      </main>
    </body>
  );
};

export default Login;
