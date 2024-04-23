import React from "react";

export default function Contact() {
  return (
    <div>
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
                <label htmlFor="">Email:</label>
                <input type="text" placeholder="" id="" />
              </p>
              <p>
                <label htmlFor="">Phone:</label>
                <input type="text" placeholder="" id="" />
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
