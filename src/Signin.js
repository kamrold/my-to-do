import React from "react";

function SignIn() {
  return (
    <div>
      <form>
        <h1>Sign in</h1>
        <input type="text" name="fname" placeholder="enter fname..." required />
        <br />
        <br />
        <input type="text" name="lname" placeholder="enter lname..." required />
        <br />
        <br />
        <input type="text" name="email" placeholder="enter email..." required />
        <br />
        <br />
        <input
          type="text"
          name="password"
          placeholder="enter password..."
          required
        />{" "}
        <br />
        <button type="btn" name="submit" backround-color="green">
          submit
        </button>
      </form>
    </div>
  );
}
export default SignIn;
