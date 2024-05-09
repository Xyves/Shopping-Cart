import customerVector from "../assets/img/customer-vector.jpg";
export default function Contact() {
  return (
    <div className="w-full flex-wrap flex justify-center wrap text-black bg-main flex-1 items-center">
      <div className="right_pane h-1/5 w-1/3  inline-block mr-32">
        <img src={customerVector} alt="" />
      </div>
      <div className="form flex-wrap flex justify-around items-start">
        <form action="SENT">
          <fieldset>
            <legend className="text-center py-1 text-3xl">Contact us</legend>
            <p className="">
              <label htmlFor="firstName" className="px-5 inline-block min-w-32">
                First Name:
              </label>
              <input
                type="text"
                placeholder="Your name"
                id="firstName"
                className="border-black border-solid border-1 py-2 px-1 my-3 w-72"
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
                className="border-black border-solid border-1 py-2 px-1 my-3 w-72"
              />
            </p>
            <p>
              <label
                htmlFor="phoneNumber"
                className="px-5 inline-block min-w-32"
              >
                Phone:
              </label>
              <input
                type="number"
                placeholder="Your phone number"
                id="phoneNumber"
                className="border-black border-solid border-1 py-2 px-1 my-3 w-72"
                minLength={9}
                maxLength={9}
              />
            </p>
            <p>
              <label htmlFor="s"></label>
              <textarea
                name=""
                id=""
                cols="32"
                rows="10"
                className="border-black border-solid border-1  px-1 py-2 my-5 w-72  md:float-right sm:float-none resize-none"
                placeholder="What can we help you with?"
              ></textarea>
            </p>
          </fieldset>
          <button className="text-bold text-white bg-gray-800 px-9 py-4 text-center  sm:float-one md:float-right rounded-md ">
            sent it
          </button>
        </form>
      </div>
    </div>
  );
}
