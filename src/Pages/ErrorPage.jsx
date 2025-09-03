import React from "react";
import { NavLink } from "react-router";
import Title from "../Shared/Title";
import Lottie from "lottie-react";
import error404 from "../assets/Lottie/Error 404.json"


const ErrorPage = () => {
  Title("Error - 404");
  return (
    <div className="mt-15 md:mt-25 2xl:mt-32 ">
      <div className="flex flex-col items-center">
        <Lottie
          style={{ height:400 }}
          animationData={error404}
          loop={true}
        />
      </div>
      <p className="text-center font-bold pt-5 md:text-2xl lg:text-3xl">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="mt-4 md:mt-10 flex justify-center">
        <NavLink
          to="/"
          className="btn btn-wide btn-primary p-5 text-lg md:text-xl"
        >
          Back To Home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
