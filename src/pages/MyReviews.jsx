import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../components/AuthProvider";
const MyReviews = () => {
  const {darkTheme} =  useContext(AuthContext);
  const data = useLoaderData();
  const [newReview, setNewReview] = useState(data);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undone this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ph-assignment-10-server-alpha.vercel.app/review/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingReviews = newReview.filter(
                (review) => review._id !== id
              );
              setNewReview(remainingReviews);
            }
          });
      }
    });
  };
  return (
    <div className="container mx-auto px-2">
      <h1 className={`text-center text-3xl ${darkTheme ? 'text-active' : 'text-logo'} font-bold pt-12`}>
        <Typewriter words={['My Reviews']}/>
        
      </h1>
      <div className="overflow-x-auto my-6 ">
        <table className="table table-xs">
          <thead>
            <tr className={`${darkTheme ? 'text-white' : 'text-black'} font-bold text-base`}>
              <th>SL</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Genres</th>
              <th className="max-w-96">Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newReview.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-xl">
                  No data Available
                </td>
              </tr>
            ) : (
              newReview.map((review, index) => (
                <tr key={review._id}>
                  <th>{index + 1}</th>
                  <td>{review.title}</td>
                  <td>{review.rating}</td>
                  <td>{review.genres}</td>
                  <td className="max-w-96">{review.description}</td>
                  <td>
                    <div className="flex  items-center gap-1">
                      <Link to={`/updateReview/${review._id}`}>
                        <FiEdit className="text-logo text-xl font-bold" />
                      </Link>
                      <button onClick={() => handleDelete(review._id)}>
                        <MdDelete className="text-red-600 text-2xl font-bold" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
