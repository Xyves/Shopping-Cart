import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bottom-0   w-full p-2 md:p-4 text-center relative clear-both bg-footer">
      <p className="text-2xl text-white">
        Copyright © 2024 Xyves &nbsp;
        <a href="https://github.com/Xyves" className="font-bold underline">
          <FaGithub className="text-center inline-block"></FaGithub>
        </a>
      </p>
    </footer>
  );
}
