import devteam from "../assets/img/devteam.jpg";

export default function Home() {
  return (
    <div className="w-full bg-red-400">
      <div className="flex justify-center w-[70%] bg-slate-600 aboutUsContainer">
        <div className="about-us w-full h-16 bg-blue-700">
          <h1 className="text-center">About Us</h1>
        </div>
        <img src={devteam} alt="Developer team" className="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum a non
          aut blanditiis aliquam delectus debitis animi possimus expedita
          soluta, beatae facilis obcaecati quas ipsum?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
          temporibus quae? Molestiae velit dolorum a! Neque nostrum, quia
          aliquid cupiditate eligendi illum itaque totam aperiam!
        </p>
        <button className="p-4 bg-violet-300">Read the Open Blog</button>
      </div>
    </div>
  );
}
