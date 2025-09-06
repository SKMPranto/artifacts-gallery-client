import React from "react";
import contactUsLottie from "../assets/Lottie/contactus.json";
import Lottie from "lottie-react";

const ContactUs = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row my-10">
      <div className="card grid grow place-items-center">
        <h1 className="text-2xl md:text-3xl 2xl:text-5xl text-gray-400 font-bold asimovian-regular mt-10">
          Send{" "}
          <span className="text-bold underline text-green-500">
            Your Feedback
          </span>{" "}
          to us
        </h1>
        <div>
          <Lottie
            style={{ width: 400, height: 400 }}
            animationData={contactUsLottie}
            loop={true}
          />
        </div>
      </div>
      <div className="card grid grow place-items-center">
        <fieldset className="fieldset w-96">
          <label className="label">Your Feedback</label>
          <textarea
            placeholder="Your Feedback"
            className="textarea textarea-success"
          ></textarea>
          <button className="btn btn-success w-81">Send</button>
        </fieldset>
      </div>
    </div>
  );
};

export default ContactUs;

<div className="hero-content flex-col lg:flex-row-reverse">
  <div className="card w-full max-w-sm shrink-0">
    <div className="card-body">
      <fieldset className="fieldset">
        <label className="label">Your Feedback</label>
        <textarea
          placeholder="Success"
          className="textarea textarea-success"
        ></textarea>
        <button className="btn w-full">Login</button>
      </fieldset>
    </div>
  </div>
  {/*  */}
  <div></div>
</div>;
