import { Rating } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import Loading from "../components/Loading";
import { Typewriter } from "react-simple-typewriter";

const AllReviews = () => {
  const data = useLoaderData();
  const [reviews, setReviews] = useState(data);
  const { loading, setLoading, darkTheme } = useContext(AuthContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [data]);
  const handleRatingHighToLow = () => {
    const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);
    setReviews(sortedReviews);
  };

  const handleRatingLowToHigh = () => {
    const sortedReviews = [...reviews].sort((a, b) => a.rating - b.rating);
    setReviews(sortedReviews);
  };
  const handleYearHighToLow = () => {
    const sortedReviews = [...reviews].sort((a, b) => b.year - a.year);
    setReviews(sortedReviews);
  };
  const handleYearLowToHigh = () => {
    const sortedReviews = [...reviews].sort((a, b) => a.year - b.year);
    setReviews(sortedReviews);
  };
  const handleFilter = (genre) => {
    const filteredReviews = [...data].filter((review) => review.genres === genre);
    setReviews(filteredReviews);
  };
  return (
    <div className="container mx-auto">
      <h1 className={`text-center text-3xl ${darkTheme ? 'text-active' : 'text-logo'} font-bold pt-12`}>
        <Typewriter words={["All Reviews"]} />
      </h1>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-logo hover:bg-logo text-white"
              >
                Sort Review
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-active text-black rounded-box z-[1] w-60 p-2 shadow"
              >
                <li>
                  <button onClick={handleRatingHighToLow}>
                    By Rating (hight to low)
                  </button>
                </li>
                <li>
                  <button onClick={handleRatingLowToHigh}>
                    By Rating (low to high)
                  </button>
                </li>
                <li>
                  <button onClick={handleYearHighToLow}>
                    By Year (hight to low)
                  </button>
                </li>
                <li>
                  <button onClick={handleYearLowToHigh}>
                    By Year (low to high)
                  </button>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-logo hover:bg-logo text-white m-1"
              >
                Filter
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-active text-black rounded-box z-[1] w-52 p-2 shadow"
              >
                {data
                  .map((review) => review.genres)
                  .filter((genre, index, self) => self.indexOf(genre) === index)
                  .map((genre, index) => (
                    <li key={index}>
                      <button onClick={() => handleFilter(genre)}>
                        {genre}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="my-6 px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-12">
              {reviews.map((review) => (
                <div
                  className={`card card-compact  ${darkTheme ? 'bg-active' : 'bg-base-100'} shadow-xl`}
                  key={review._id}
                >
                  <figure>
                    <img src={review.thumbnail} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className={`card-title ${darkTheme ? 'text-black' : ''}`}>{review.title}</h2>
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
                        className="btn bg-active text-black font-bold"
                      >
                        Explore Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllReviews;
