import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData(); //second method
  // first method
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/affan818")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <>
      <div className="text-center bg-gray-700 text-white text-3xl p-5">
        <h1>Followers:{data.followers}</h1>
        <div className="flex items-center justify-center">
          <img src={data.avatar_url} alt="github_pic" width={300} />
        </div>
      </div>
    </>
  );
}

export default Github;

