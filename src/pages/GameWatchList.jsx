import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import { AuthContext } from "../components/AuthProvider";

const GameWatchList = () => {
  const {darkTheme} = useContext(AuthContext);
  const watchListData = useLoaderData();
  const [watchLists, setWatchLists] = useState(watchListData);
  const handleDelete = (id) => {
    fetch(`https://ph-assignment-10-server-alpha.vercel.app/watchList/${id}`,{
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({ 
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          const remainingWatchList = watchLists.filter(
            (watch) => watch._id !== id
          );
          setWatchLists(remainingWatchList);
        }
      });
  };
  return (
    <div className="container mx-auto">
      <h1 className={`text-center text-3xl ${darkTheme ? 'text-active' : 'text-logo'} font-bold pt-12`}>
        <Typewriter words={['My WatchLists']}/>
        
      </h1>

      <div className="overflow-x-auto my-6">
        <table className="table table-xs">
          <thead>
            <tr className={`${darkTheme ? 'text-white' : 'text-black'} font-bold text-base`}>
              <th>SL</th>
              <th>Title</th>
              <th>Publishing Year</th>
              <th>Rating</th>
              <th>Genres</th>
              <th className="max-w-72">Description</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody>
            {watchLists.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-xl">
                  No data Available
                </td>
              </tr>
            ) : (
              watchLists.map((review, index) => (
                <tr key={review._id}>
                  <th>{index + 1}</th>
                  <td>{review.reviewTitle}</td>
                  <td>{review.reviewYear}</td>
                  <td>{review.reviewRating}</td>
                  <td>{review.reviewGenres}</td>
                  <td className="max-w-96">{review.reviewDescription}</td>
                  <td className="">
                    <button onClick={() => handleDelete(review._id)}>
                      <MdDelete className="text-red-600 text-2xl font-bold" />
                    </button>
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

export default GameWatchList;
