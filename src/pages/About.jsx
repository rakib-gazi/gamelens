import React, { useContext } from "react";
import aboutBg from "../assets/about.jpg";
import { AuthContext } from "../components/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
const About = () => {
  const { darkTheme } = useContext(AuthContext);

  return (
    <>
      <div
        className=" bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="container mx-auto">
          <h1 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-white py-20">
            About Us
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <p className={`${darkTheme ? 'text-active' : 'text-gray-600'}  font-semibold`}>
          GameLens is a comprehensive platform dedicated to providing in-depth
          information and insights into the world of video games. Our mission is
          to offer gamers, enthusiasts, and industry professionals a centralized
          hub where they can explore, discover, and stay updated on the latest
          developments in gaming.
        </p>
        <div
          className={`divider text-logo  py-6 lg:py-12  ${
            darkTheme ? "text-white divider-info" : "divider-neutral"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center ">
            <Typewriter words={["Our Offerings"]} loop={true} />
          </h2>
        </div>
        <div className="space-y-6">
          <div className={`${darkTheme ? 'bg-active' : 'bg-white'} p-6  shadow-md rounded-lg`}>
            <h2 className="text-xl font-semibold text-gray-800">
              Game Database
            </h2>
            <p className="text-gray-600 mt-2">
              An extensive collection of video games across various genres and
              platforms, complete with detailed descriptions, release dates, and
              developer information.
            </p>
          </div>
          <div className={`${darkTheme ? 'bg-active' : 'bg-white'} p-6  shadow-md rounded-lg`}>
            <h2 className="text-xl font-semibold text-gray-800">
              Reviews and Ratings
            </h2>
            <p className="text-gray-600 mt-2">
              Expert and user-generated reviews to help you make informed
              decisions about your next gaming adventure.
            </p>
          </div>
          <div className={`${darkTheme ? 'bg-active' : 'bg-white'} p-6  shadow-md rounded-lg`}>
            <h2 className="text-xl font-semibold text-gray-800">
              News and Updates
            </h2>
            <p className="text-gray-600 mt-2">
              Stay informed with the latest news, announcements, and trends in
              the gaming industry.
            </p>
          </div>
          <div className={`${darkTheme ? 'bg-active' : 'bg-white'} p-6  shadow-md rounded-lg`}>
            <h2 className="text-xl font-semibold text-gray-800">
              Community Engagement
            </h2>
            <p className="text-gray-600 mt-2">
              Join a vibrant community of gamers to share experiences, discuss
              favorite titles, and connect with like-minded individuals.
            </p>
          </div>
        </div>
        <div
          className={`divider text-logo  py-6 lg:py-12  ${
            darkTheme ? "text-white divider-info" : "divider-neutral"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center ">
            <Typewriter words={["Our Mission"]} loop={true} />
          </h2>
        </div>
        <div className="space-y-6">
          <div className={`${darkTheme ? 'bg-active' : 'bg-white'} p-6  shadow-md rounded-lg`}>
            <p className="text-gray-600">
              At GameLens, we are passionate about gaming and aim to bridge the
              gap between gamers and the ever-evolving gaming landscape. We
              strive to deliver accurate, up-to-date, and engaging content that
              caters to both casual players and hardcore enthusiasts.
            </p>
          </div>

          <div
          className={`divider text-logo  py-6 lg:py-12  ${
            darkTheme ? "text-white divider-info" : "divider-neutral"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center ">
            <Typewriter words={["Why Choose GameLens?"]} loop={true} />
          </h2>
        </div>
          <div className={`${darkTheme ? 'bg-active' : 'bg-white'} p-6  shadow-md rounded-lg`}>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong className="text-gray-800">
                  Comprehensive Coverage:
                </strong>{" "}
                From indie gems to blockbuster hits, we cover a wide spectrum of
                games to suit every interest.
              </li>
              <li>
                <strong className="text-gray-800">
                  User-Friendly Interface:
                </strong>{" "}
                Our platform is designed for easy navigation, ensuring you find
                the information you need effortlessly.
              </li>
              <li>
                <strong className="text-gray-800">Regular Updates:</strong> We
                continuously update our database and news sections to keep you
                informed about the latest in gaming.
              </li>
              <li>
                <strong className="text-gray-800">Community Focused:</strong> We
                value our community and encourage active participation,
                feedback, and collaboration.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
