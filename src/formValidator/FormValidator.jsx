import React, { useState } from "react";

const FormValidator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [message, setMessage] = useState("");
  const findErrors = () => {
    const errors = [];
    if (!email || !password || !passwordConfirm)
      errors.push("All fields must be filled in");
    if ([...email].filter((i) => i === "@").length !== 1) {
      errors.push("An email must have exactly one @ sign");
    }
    if (password.length <= 8)
      errors.push("Passwords must be 8 characters or longer");
    if (password !== passwordConfirm) errors.push("Passwords must match");

    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = findErrors();
    setMessage(errors.length ? errors.join(", ") : "User created!");
  };

  return (
    <div className="py-20">
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <div className="flex flex-col m-auto gap-4">
          <h2>Sign Up!</h2>
          <label htmlFor="email">Email</label>
          <input
            className="border-2 border-black"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            className="border-2 border-black"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password-confirm">Confirm Password </label>
          <input
            className="border-2 border-black"
            type="password"
            name="password-confirm"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        {message}
        <input
          className="mt-4 border-2 border-black w-[10%] m-auto cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default FormValidator;
