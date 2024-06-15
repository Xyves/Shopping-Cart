import React from "react";
import customerVector from "../assets/img/customer-vector.jpg";

export default function Contact() {
  return (
    <div className="flex flex-wrap justify-center w-full items-center text-white bg-main flex-1 ">
      <div className="h-1/5 w-1/3 mr-32 inline-block">
        <img src={customerVector} alt="" className="rounded-lg" />
      </div>
      <div className="form flex-wrap flex justify-around items-start">
        <form action="SENT">
          <fieldset>
            <legend className="py-1 text-3xl text-center">Contact us</legend>
            <p className="">
              <label
                className="px-5 inline-block min-w-32"
                htmlFor="firstName"
                name="project-name"
              >
                Name:
              </label>
              <input
                type="text"
                placeholder="Your name"
                id="firstName"
                className="py-2 px-1 my-3 w-72 border-black border-solid border-1 text-black"
                data-testid="project-name-input" // Unique test id
              />
            </p>

            <p>
              <label htmlFor="email" className="px-5 inline-block min-w-32">
                Email:
              </label>
              <input
                type="text"
                placeholder="Your email"
                id="email"
                className="border-black border-solid border-1 py-2 px-1 my-3 w-72 text-black"
                data-testid="project-email-input" // Unique test id
              />
            </p>

            <p>
              <label
                htmlFor="phoneNumber"
                className="px-5 inline-block min-w-32"
                name="project-phone"
              >
                Phone:
              </label>
              <input
                type="number"
                placeholder="Your phone number"
                id="phoneNumber"
                className="border-black border-solid border-1 py-2 px-1 my-3 w-72 text-black"
                minLength={9}
                maxLength={9}
                data-testid="project-phone-input" // Unique test id
              />
            </p>

            <p>
              <label htmlFor="text"></label>
              <textarea
                name="project-text"
                id="text"
                cols="32"
                rows="10"
                className="border-black border-solid border-1  px-1 py-2 my-5 w-72 md:float-right sm:float-none resize-none text-black"
                placeholder="What can we help you with?"
                data-testid="project-text-input" // Unique test id
              ></textarea>
            </p>
          </fieldset>

          <button
            className="text-bold text-white bg-blue-700 px-9 py-4 text-center sm:float-one md:float-right rounded-md active:bg-blue-400"
            type="reset"
            data-testid="project-button" // Unique test id
            onClick={() => {
              alert("Form is submitted");
            }}
          >
            Send it
          </button>
        </form>
      </div>
    </div>
  );
}
