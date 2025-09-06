import React from "react";

const FAQ = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl md:text-3xl 2xl:text-4xl text-gray-400 font-bold asimovian-regular text-center block my-10">
        Frequently Asked Question
      </h1>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">What is an artifact?</div>
        <div className="collapse-content text-sm">
          An artifact is an object created or used by humans in the past that
          holds cultural, historical, or archaeological significance. Examples
          include tools, weapons, pottery, writings, and sculptures.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How are the artifacts in this gallery verified?
        </div>
        <div className="collapse-content text-sm">
          All artifacts showcased are carefully researched and documented using
          reliable historical sources, archaeological findings, and expert
          references to ensure accuracy.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can I contribute or share artifacts with the gallery?
        </div>
        <div className="collapse-content text-sm">
          Yes! If you have an artifact or historical object you'd like to share,
          you can submit details and images through our contribution form. Our
          team will review it before featuring it in the gallery.
        </div>
      </div>
    </div>
  );
};

export default FAQ;
