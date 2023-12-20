import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    async function fetchData1() {
      try {
        const response = await fetch("/data1");

        if (!response.ok) {
          console.error(response);
        }

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData1();
    async function fetchData2() {
      try {
        const response = await fetch("/data2");

        if (!response.ok) {
          console.error(response);
        }

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData2();

  }, []);

  return <>
    <h1>Hello World</h1>
    {/* <h2>{response2}</h2> */}
  </>;
}

export default App;
