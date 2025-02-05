import { Rating } from "@mui/material";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../components/AuthProvider";

const ReviewDetails = () => {
  const data = useLoaderData();
  const {user} = useContext(AuthContext);
  const handleWatchList = (watchedReview) => {
    if (!user) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You must be logged in to add to WatchList",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const watchListReview = {
      reviewId: watchedReview._id,
      reviewTitle: watchedReview.title,
      reviewDescription: watchedReview.description,
      reviewRating: watchedReview.rating,
      reviewGenres: watchedReview.genres,
      reviewYear: watchedReview.year,
      reviewName: watchedReview.username,
      reviewEmail: watchedReview.email,
      myName: user.displayName,
      myEmail: user.email,
    };

    fetch("https://ph-assignment-10-server-alpha.vercel.app/watchList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchListReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message ) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Review is already added in your WatchList",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        else if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "WatchList review added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } 
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "An unexpected error occurred",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };
  return (
    <div className="container mx-auto py-8 px-2">
      <div className="card card-compact bg-base-100 max-w-3xl shadow-xl mx-auto ">
        <figure>
          <img src={data.thumbnail} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p className="text-lg text-logo font-bold">
            Genre:{" "}
            <span className="text-black font-normal text-base">
              {data.genres}
            </span>
          </p>
          <p className="text-lg text-logo font-bold">
            Publishing Year:{" "}
            <span className="text-black font-normal text-base">
              {data.year}
            </span>
          </p>
          <p className="text-lg text-logo font-bold flex items-center gap-2">
            Rating:
            <span className="text-black font-normal text-base flex items-center">
              <Rating
                name="half-rating-read"
                defaultValue={data.rating}
                readOnly
              />
            </span>
          </p>
          <p className="text-lg text-logo font-bold">
            Reviewer’s name:{" "}
            <span className="text-black font-normal text-base">
              {data.username}
            </span>
          </p>
          <p className="text-lg text-logo font-bold">
            Reviewer’s email:{" "}
            <span className="text-black font-normal text-base">
              {data.email}
            </span>
          </p>
          <p className="text-base text-black">{data.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleWatchList(data)}
              className="btn bg-active text-black font-bold"
            >
              Add to WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
