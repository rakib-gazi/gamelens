import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../components/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const AddReview = () => {
  const { user,darkTheme } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const handleReview = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get("title");
    const thumbnail = form.get("thumbnail");
    const rating = Number(form.get("rating"));
    const year = Number(form.get("year"));
    const genres = form.get("genres");
    const email = form.get("email");
    const username = form.get("username");
    const description = form.get("description");
    setErrors({});
    let isError = false;
    const allErrors = {};
    if (!title) {
      allErrors.title = "Title is required";
      isError = true;
    }
    if (!thumbnail) {
      allErrors.thumbnail = "Thumbnail is required";
      isError = true;
    }
    if (!rating || rating < 1 || rating > 5 || isNaN(rating)) {
      allErrors.rating = "Valid rating is required";
      isError = true;
    }
    if (
      !year ||
      isNaN(year) ||
      year.toString().length !== 4 ||
      year < 1900 ||
      year > 2030
    ) {
      allErrors.year = "Valid year is required";
      isError = true;
    }
    if (!genres) {
      allErrors.genres = "Genres is required";
      isError = true;
    }
    if (!email) {
      allErrors.email = "Email is required";
      isError = true;
    }
    if (!username) {
      allErrors.username = "Username is required";
      isError = true;
    }
    if (!description) {
      allErrors.description = "Description is required";
      isError = true;
    }
    setErrors(allErrors);
    if (isError) {
      return;
    }
    const review = {
      title,
      thumbnail,
      rating,
      year,
      genres,
      email,
      username,
      description,
    };
    fetch("https://ph-assignment-10-server-alpha.vercel.app/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Review added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    e.target.reset();
  };
  return (
    <div className="container mx-auto">
      <h1 className={`text-center text-3xl ${darkTheme ? 'text-active' : 'text-logo'} font-bold pt-12`}>
        <Typewriter words={["Add Review"]} />
      </h1>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl my-6">
        <form className="card-body " onSubmit={handleReview}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Game Title</span>
              </label>
              <input
                type="Text"
                name="title"
                placeholder="Game Title / Name"
                className="input input-bordered"
              />
              {errors.title && (
                <p className="py-1 text-red-600 text-sm ">{errors.title}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Game Thumbnail URL</span>
              </label>
              <input
                type="Text"
                name="thumbnail"
                placeholder="Game Cover Image/Thumbnail link"
                className="input input-bordered"
              />
              {errors.thumbnail && (
                <p className="py-1 text-red-600 text-sm ">{errors.thumbnail}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating(1-5)</span>
              </label>
              <input
                type="Text"
                name="rating"
                placeholder="Game Rating"
                className="input input-bordered"
              />
              {errors.rating && (
                <p className="py-1 text-red-600 text-sm ">{errors.rating}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Publishing year </span>
              </label>
              <input
                type="Text"
                name="year"
                placeholder="(Ex: 2021, 2024)"
                className="input input-bordered"
              />
              {errors.year && (
                <p className="py-1 text-red-600 text-sm ">{errors.year}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Genres </span>
              </label>
              <select
                className="select select-bordered"
                name="genres"
                defaultValue=""
              >
                <option value="" disabled>
                  Pick one
                </option>
                <option>Action</option>
                <option>Adventure</option>
                <option>RPG</option>
              </select>
              {errors.genres && (
                <p className="py-1 text-red-600 text-sm ">{errors.genres}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {user && (
                <input
                  type="email"
                  defaultValue={user.email}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  readOnly
                />
              )}

              {errors.email && (
                <p className="py-1 text-red-600 text-sm ">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name </span>
            </label>
            {user && (
              <input
                type="Text"
                name="username"
                defaultValue={user.displayName}
                placeholder="Username"
                className="input input-bordered"
                readOnly
              />
            )}
            {errors.username && (
              <p className="py-1 text-red-600 text-sm ">{errors.username}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Review Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Review Description"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
            {errors.description && (
              <p className="py-1 text-red-600 text-sm ">{errors.description}</p>
            )}
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-active text-black font-bold hover:bg-active"
            >
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
