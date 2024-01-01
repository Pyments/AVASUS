// let url: string = "http://0.0.0.0:3004";

// import { useEffect, useState } from "react";

// export default function ApiAvasus() {
//   const { results: string[], setResults: string[] } = useState([]);
//   const abortController = new AbortController();

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch(url, { signal: abortController.signal });
//       const data = await response.json();
//       setResults(data);
//     }
//     getData();

//     console.log(results, "results");
    
//     return () => {
//       abortController.abort();
//     };
//   }, []);
// }
