import { useState , useEffect} from "react";

const OrderOnline = () => {
  const [data, setdata] = useState([])

  const fetchdata = (date) =>{
    fetch(`http://localhost:3500/Reservations?q=${date}`)
    .then(data => data.json())
    .then(data => setdata(data))
    .catch(err => {
      console.log(err);
      return setdata("not found")
    })
  }

  const postData = (data) =>{
    fetch("http://localhost:3500/dates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchdata("2023-09-26")
  }, [])
  
  
  return (
    <section className="grids-section-width flex flex-col justify-center items-center overflow-hidden ">
      <h1 className="text-4xl font-bold text-center">Order Online</h1>
      {data.length > 0 ? <p>{JSON.stringify(data , null ,2)}</p> : (<p>loading</p>)}
      <button onClick={() => postData({ Date: "2022-08-01", Time: "10:00"})}>post</button>
    </section>
  );
};

export default OrderOnline;
