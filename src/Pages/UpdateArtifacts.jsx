import React from "react";
import Title from "../Shared/Title";
import { useLoaderData } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateArtifacts = () => {
  Title("Update Artifacts");
  const {
    _id,
    userName,
    email,
    artifactName,
    shortDescription,
    artifactsType,
    createdAt,
    discoveredAt,
    discoveredBy,
    presentLocation,
    historicalContext,
    artifactImage,
  } = useLoaderData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const result = Object.fromEntries(formdata.entries());

    // send data to the server
    axios
      .put(
        `https://artifact-gallery-server.vercel.app/artifacts/${_id}`,
        result
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your artifact has been added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "info",
            title: "No changes made to the Artifact",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="lg:w-[70%] mx-auto my-10">
      <h1 className="text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold text-center my-5 md:my-8 asimovian-regular text-[#c09e61]">
        Add your Artifacts
      </h1>
      <p className="text-center mb-5 md:text-2xl text-gray-400">
        You can add your artifacts here and share them with the community.
      </p>
      <form onSubmit={handleSubmit}>
        <div className=" border p-5 rounded-lg shadow-lg shadow-amber-500 border-amber-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* User Name input field */}
            <fieldset>
              <legend className="fieldset-legend">User Name</legend>
              <label className="input validator w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  pattern="[A-Za-z][A-Za-z0-9\- ]*"
                  minlength="3"
                  maxlength="30"
                  title="Only letters, numbers or dash"
                />
              </label>
              <p className="validator-hint hidden">
                Must be 3 to 30 characters
                <br />
                containing only letters, numbers or dash
              </p>
            </fieldset>
            {/* User Email input field */}
            <fieldset>
              <legend className="fieldset-legend">User Email</legend>
              <label className="input validator w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" name="email" value={email} />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </fieldset>
            {/* Artifact Name input field */}
            <fieldset>
              <legend className="fieldset-legend">Artifact Name</legend>
              <label className="input validator w-full">
                <input
                  type="text"
                  name="artifactName"
                  defaultValue={artifactName}
                />
              </label>
              <p className="validator-hint hidden">Enter valid Artifact Name</p>
            </fieldset>
            {/* Artifact Image input field */}
            <fieldset>
              <legend className="fieldset-legend">Artifact Image</legend>
              <label className="input validator w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </g>
                </svg>
                <input
                  type="url"
                  name="artifactImage"
                  defaultValue={artifactImage}
                  pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                  title="Must be valid URL"
                />
              </label>
              <p className="validator-hint hidden">Must be valid URL</p>
            </fieldset>
            {/* Short Description input field */}
            <fieldset>
              <legend className="fieldset-legend">Short Description</legend>
              <label className="input validator w-full">
                <input
                  type="text"
                  name="shortDescription"
                  defaultValue={shortDescription}
                  minlength="20"
                  maxlength="100"
                  title="Only letters, numbers or dash"
                />
              </label>
              <p className="validator-hint hidden">
                Must be 20 to 100 characters
                <br />
                containing only letters, numbers or dash
              </p>
            </fieldset>
            {/* Artifacts Type input field */}
            <fieldset>
              <legend className="fieldset-legend">Artifacts Type</legend>
              <label className="input validator w-full">
                <input
                  type="text"
                  name="artifactsType"
                  defaultValue={artifactsType}
                  list="artifacts-type"
                />
                <datalist id="artifacts-type">
                  <option value="Temple / Monastery Ruins">
                    Temple / Monastery Ruins
                  </option>
                  <option value="Tools">Tools</option>
                  <option value="Weapons">Weapons</option>
                  <option value="Armor">Armor</option>
                  <option value="Ancient City / Fort">
                    Ancient City / Fort
                  </option>
                  <option value="Documents">Documents</option>
                  <option value="Manuscripts">Manuscripts</option>
                  <option value="Writings">Writings</option>
                  <option value="Books">Books</option>
                  <option value="Maps">Maps</option>
                  <option value="Pottery">Pottery</option>
                  <option value="Ceramics">Ceramics</option>
                  <option value="Jewelry">Jewelry</option>
                  <option value="Coins">Coins</option>
                  <option value="Currency">Currency</option>
                  <option value="Sculptures">Sculptures</option>
                  <option value="Paintings">Paintings</option>
                  <option value="Murals">Murals</option>
                  <option value="Textiles">Textiles</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Musical Instruments">
                    Musical Instruments
                  </option>
                  <option value="Furniture">Furniture</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Relics">Relics</option>
                  <option value="Bones">Bones</option>
                  <option value="Fossils">Fossils</option>
                  <option value="Religious Artifacts">
                    Religious Artifacts
                  </option>
                  <option value="Ritual Objects">Ritual Objects</option>
                  <option value="Household Items">Household Items</option>
                  <option value="Agricultural Tools">Agricultural Tools</option>
                  <option value="Weapons of War">Weapons of War</option>
                  <option value="Seals">Seals</option>
                  <option value="Stamps">Stamps</option>
                  <option value="Beads">Beads</option>
                  <option value="Ornaments">Ornaments</option>
                  <option value="Inscriptions">Inscriptions</option>
                  <option value="Tablets">Tablets</option>
                  <option value="Statues">Statues</option>
                  <option value="Idols">Idols</option>
                  <option value="Other">Other</option>
                </datalist>
              </label>
              <p className="validator-hint hidden">
                Please Select Artifacts Type
              </p>
            </fieldset>
            {/* Created At input field */}
            <fieldset>
              <legend className="fieldset-legend">Created At</legend>
              <label className="input validator w-full">
                <input type="text" name="createdAt" defaultValue={createdAt} />
              </label>
              <p className="validator-hint hidden">Enter valid Creation Date</p>
            </fieldset>
            {/* Discovered At input field */}
            <fieldset>
              <legend className="fieldset-legend">Discovered At</legend>
              <label className="input validator w-full">
                <input
                  type="text"
                  name="discoveredAt"
                  defaultValue={discoveredAt}
                />
              </label>
              <p className="validator-hint hidden">
                Enter valid Discovery Date
              </p>
            </fieldset>
            {/* Discovered By input field */}
            <fieldset>
              <legend className="fieldset-legend">Discovered By</legend>
              <label className="input validator w-full">
                <input
                  type="text"
                  name="discoveredBy"
                  defaultValue={discoveredBy}
                />
              </label>
              <p className="validator-hint hidden">
                Enter valid Discoverer Name
              </p>
            </fieldset>
            {/* Present Location input field */}
            <fieldset>
              <legend className="fieldset-legend">Present Location</legend>
              <label className="input validator w-full">
                <input
                  type="text"
                  name="presentLocation"
                  defaultValue={presentLocation}
                />
              </label>
              <p className="validator-hint hidden">
                Enter valid Present Location
              </p>
            </fieldset>
          </div>
          {/* Historical Context input field */}
          <fieldset>
            <legend className="fieldset-legend">Historical Context</legend>
            <label className="validator w-full">
              <textarea
                name="historicalContext"
                defaultValue={historicalContext}
                className="textarea textarea-info w-full"
              ></textarea>
            </label>
            <p className="validator-hint hidden">
              Enter historical context, significance, and any other relevant
            </p>
          </fieldset>
        </div>
        <button
          type="submit"
          className="btn btn-outline btn-wide mt-10 text-lg 2xl:text-2xl bg-gradient-to-r from-[#c09e61] via-amber-600 to-amber-700 border-0 hover:from-amber-600 hover:via-amber-700 hover:to-[#c09e61] mx-auto block"
        >
          Update Artifact
        </button>
      </form>
    </div>
  );
};

export default UpdateArtifacts;
