import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bottom-0  fixed w-full p-2 md:p-4 text-center  bg-[#DD5746]">
      <p className="text-2xl">
        Copyright © 2024 Xyves &nbsp;
        <FaGithub>
          <a
            href="https://github.com/Xyves"
            className="font-bold underline"
          ></a>
        </FaGithub>
      </p>
    </footer>
  );
}
