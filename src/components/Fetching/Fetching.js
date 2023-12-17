import React, { useEffect, useState } from "react"
import "./fetching.css";


export default function Fetching() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?_limit=8`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );  
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [])

  return (
    <div className="Fetch">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <h2>This data from JsonPlaceholder</h2>
      <ul>
        {data &&
          data.map(({ id, name }) => (
            
            <li key={id}>
              
              <h3>{name}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}