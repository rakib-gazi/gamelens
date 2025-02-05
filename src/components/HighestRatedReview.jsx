import { Rating } from "@mui/material";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const HighestRatedReview = () => {
  const data = useLoaderData();
  const {darkTheme} = useContext(AuthContext);
  
  return (
    <div className="mt-12">
      <div className={`divider text-logo  pb-6 lg:pb-12 ${darkTheme ? "text-white divider-info" : "divider-neutral"}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          <Typewriter words={['Highest Rated Game']} loop={true}/>
        
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 xl:gap-12 px-2">
        {data.map((review) => (
          <div
            className={`card card-compact  shadow-xl ${darkTheme ? " bg-active text-black" : 'bg-base-100'}`}
            key={review._id}
          >
            <figure>
              <img src={review.thumbnail} alt="Shoes" className="h-64 w-full" />
            </figure>
            <div className={`card-body `}>
              <h2 className="card-title">{review.title}</h2>
              <p className="text-lg text-logo font-bold">
                Genre:{" "}
                <span className="text-black font-normal text-base">
                  {review.genres}
                </span>
              </p>
              <p className="text-lg text-logo font-bold">
                Publishing Date:{" "}
                <span className="text-black font-normal text-base">
                  {review.year}
                </span>
              </p>
              <p className="text-lg text-logo font-bold flex items-center gap-2">
                Rating:
                <span className="text-black font-normal text-base flex items-center">
                  <Rating
                    name="half-rating-read"
                    defaultValue={review.rating}
                    readOnly
                  />
                </span>
              </p>

              <div className="card-actions justify-end">
                <Link
                  to={`/review/${review._id}`}
                  className="btn bg-active hover:bg-active text-black font-bold"
                >
                  Explore Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighestRatedReview;
