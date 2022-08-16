import React, { useState, useEffect } from "react";

function Heading() {
  //   const [movies, setMovies] = useState([]);
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const fetchData = async () => {
  //     const response = await axios.get(fetchUrl);
  //     setMovies(response.data.results);
  //   };
  return (
    <div className="text-center bg-gray-900 text-white p-5 pb-10">
      <h1 className="text-3xl font-bold p-2">Driving without Helmet</h1>
      <h2 className="text-base font-bold p-2">Motor Vehicles Act</h2>
    </div>
  );
}

export default Heading;
