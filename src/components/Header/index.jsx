import { useState } from "react";
function Header({ showForm, setShowForm }) {
  const appTitle = "Today M Learned";
  const [isSignedIn, setIsSignedIn] = useState(false);
  const pw = "123456";

  //        onClick={() => setShowForm((show) => !show)}

  function authenticate() {
    if (!isSignedIn) {
      let password = prompt("Enter your password to add fact");
      if (password !== process.env.REACT_APP_PW) {
        alert("Wrong password");
        return;
      }
      setIsSignedIn(true);
      alert("Now you can add a new fact!");
      return;
    } else {
      setShowForm((show) => !show);
    }
  }

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today M Learned Logo" />
        <h1>{appTitle}</h1>
      </div>

      <button className="btn btn-large btn-open" onClick={authenticate}>
        {showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}

export default Header;
