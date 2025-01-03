import React from "react";
// import link
import { Link } from "react-router";
// import material UI
import { Button, TextField } from "@mui/material";

// import formik hook
import { useFormik } from "formik";
// import yup
import * as yup from "yup";

export const SignUp = () => {
  // Custom SignUp Validation
  const customValidation = yup.object({
    Name: yup.string("Enter a Valid Name").required("Name is Required"),
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

  // Hook SignUpFOrmik
  const SignUpformik = useFormik({
    // Initialize the values
    initialValues: {
      Name: "",
      email: "",
      password: "",
    },

    // form validation
    validationSchema: customValidation,

    // Submit
    onSubmit: (values) => {
      console.log("values", values);

      // check with local storage for sign up
      let userName = values.Name;
      let userEmail = values.email;
      let userPassword = values.password;

      let userData = {
        name: userName,
        email: userEmail,
        password: userPassword,
      };

      let users = JSON.parse(localStorage.getItem("users"));

      console.log(users);

       // check user email has already exits or not

      if (users) {
        for (let i = 0; i < users.length; i++) {
          if (users[i].email == userEmail) {
            alert("Email already Exits");
            return;
          }
        }
      }


       // first check if user has exits so its add new email
      // if its not exits it will add the email.
      if (users) {
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
        SignUpformik.resetForm();
        window.location.href = "/login";
      } else {
        localStorage.setItem("users", JSON.stringify([userData]));
        SignUpformik.resetForm();
        window.location.href = "/login";
      }
    },
  });

  // Return div
  return (
    // body
    <body className="body2">
      {/* // header */}
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

      {/* main div */}
      <main className="d-flex justify-content-center align-items-center mt-5">
        <div className="back p-5 d-flex flex-column align-items-center">
          <div>
            <h1>Signup</h1>
          </div>

          {/* form */}
          <form
            onSubmit={SignUpformik.handleSubmit}
            className="d-flex flex-column align-items-center mt-3"
          >
            {/* Name Field */}
            <TextField
              name="Name"
              label="Name: "
              value={SignUpformik.values.Name}
              onChange={SignUpformik.handleChange}
              error={
                SignUpformik.touched.Name && Boolean(SignUpformik.errors.Name)
              }
              helperText={SignUpformik.touched.Name && SignUpformik.errors.Name}
            />
            <br />

            {/* Email */}
            <TextField
              name="email"
              label="email: "
              value={SignUpformik.values.email}
              onChange={SignUpformik.handleChange}
              error={
                SignUpformik.touched.email && Boolean(SignUpformik.errors.email)
              }
              helperText={
                SignUpformik.touched.email && SignUpformik.errors.email
              }
            />
            <br />

            {/* Password */}
            <TextField
              name="password"
              label="password: "
              value={SignUpformik.values.password}
              onChange={SignUpformik.handleChange}
              error={
                SignUpformik.touched.password &&
                Boolean(SignUpformik.errors.password)
              }
              helperText={
                SignUpformik.touched.password && SignUpformik.errors.password
              }
            />
            <br />

            {/* Submit Button */}
            <button className="button p-2" type="submit">
              Signup
            </button>
          </form>
        </div>
      </main>

      <script src="index.js"></script>
    </body>
  );
};
export default SignUp;
