
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const Recent = () => {
  const [data, setData] = useState([]);
  const {darkTheme} = useContext(AuthContext)
  useEffect(() => {
    fetch("./recent.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="my-16">
      <div className={`divider text-logo divider-neutral pb-6 lg:pb-12 ${darkTheme ? "text-white divider-info" : "divider-neutral"}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          <Typewriter words={['Recently Released Games']} loop={true}/>
          
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-12 px-2">
        {data.map((game, index) => (
          <Link to="/" key={game._id || index}>
            <div 
            className={`card card-side shadow-xl ${darkTheme ? " bg-active text-black" : 'bg-base-100'}`}>
              <figure>
                <img
                  src={game.photo}
                  alt={game.title}
                  className=" h-40 w-44"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{game.title}</h2>
                <p className="text-sm text-logo font-bold">
                  Released:{" "}
                  <span className="text-black font-normal text-base">
                    {game.published_date}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recent;
