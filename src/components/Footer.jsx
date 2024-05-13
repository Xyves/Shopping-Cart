import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-2 md:p-4 w-full relative bottom-0 text-center clear-both bg-footer">
      <p className="text-1xl text-white">
        Copyright © 2024 Xyves &nbsp;
        <a href="https://github.com/Xyves" className="font-bold underline">
          <FaGithub className="text-center inline-block"></FaGithub>
        </a>
      </p>
    </footer>
  );
}
