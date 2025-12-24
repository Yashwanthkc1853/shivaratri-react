import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="container">
      {page === "home" ? (
        <div className="home">
          <h2>Happy Maha Shivaratri</h2>

          <img
            src="/images/om1.jpg"
            alt="Shiva"
            className="circle-img"
            onClick={() => setPage("card")}
          />
        </div>
      ) : (
        <div className="card">
  <span className="close" onClick={() => setPage("home")}>✖</span>

  <div className="overlay">
    <h2>Happy Maha Shivaratri</h2>
    <h3>From Yashwanth</h3>

    <p className="sanskrit">
      ॐ नमः पार्वती पतये <br />
      हर हर महादेव
    </p>

    <h2 className="mahadev">Har Har Mahadev</h2>
  </div>
</div>
      )}
    </div>
  );
}

