import { Rating } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const Premium = () => {
  const [data, setData] = useState([]);
  const {darkTheme} = useContext(AuthContext);
  useEffect(() => {
    fetch("./premium.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const handleBuy = () => {
    Swal.fire({ 
      position: "center",
      icon: "success",
      title: "Purchased successfully",
      showConfirmButton: true,
      timer: 1500,
    });
  };
  return (
    <div className="my-16">
      <div className={`divider text-logo divider-neutral pb-6 lg:pb-12 ${darkTheme ? "text-white divider-info" : "divider-neutral"}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          <Typewriter words={['Premium Games']} loop={true}/>
          
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-12 px-2">
        {data.map((game) => (
          <div
            className={`card card-compact shadow-xl ${darkTheme ? " bg-active text-black" : 'bg-base-100'}`}
            key={game._id}
          >
            <figure>
              <img src={game.thumbnail} alt={game.title} className=" w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{game.title}</h2>
              <p className="text-lg text-logo font-bold">
                Genre:{" "}
                <span className="text-black font-normal text-base">
                  {game.genres}
                </span>
              </p>
              <p className="text-lg text-logo font-bold">
                Publishing Date:{" "}
                <span className="text-black font-normal text-base">
                  {game.year}
                </span>
              </p>
              <p className="text-lg text-logo font-bold flex items-center gap-2">
                Rating:
                <span className="text-black font-normal text-base flex items-center">
                  <Rating
                    name="half-rating-read"
                    defaultValue={game.rating}
                    readOnly
                  />
                </span>
              </p>
              <p className="text-lg text-logo font-bold">
                Price:{" "}
                <span className="text-black font-normal text-base">
                  $ {game.Price}
                </span>
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={handleBuy}
                  className="btn bg-active hover:bg-active text-black font-bold"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Premium;
