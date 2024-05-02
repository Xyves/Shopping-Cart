import React from "react";

export default function Contact() {
  return (
    <div className="flex-1">
      <main>
        <p className="text-center">Contact</p>
        <div className="form">
          <form action="SENT">
            <fieldset>
              <legend>Contact data</legend>
              <p>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" placeholder="" id="firstName" />
              </p>
              <p>
                <label htmlFor="surname">Surname:</label>
                <input type="text" placeholder="" id="surname" />
              </p>
              <p>
                <label htmlFor="email">Email:</label>
                <input type="text" placeholder="" id="email" />
              </p>
              <p>
                <label htmlFor="phoneNumber">Phone:</label>
                <input type="text" placeholder="" id="phoneNumber" />
              </p>
              <p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </p>
            </fieldset>
            <button className="text-bold">sent it</button>
          </form>
        </div>
      </main>
    </div>
  );
}
