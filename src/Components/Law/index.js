import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import SubHeading from "./Subheading";
import Details from "./Details";

function Law() {
  //   const [movies, setMovies] = useState([]);
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const fetchData = async () => {
  //     const response = await axios.get(fetchUrl);
  //     setMovies(response.data.results);
  //   };
  return (
    <div className="law">
      <Heading />
      <SubHeading />
      <Details />
    </div>
  );
}

export default Law;
