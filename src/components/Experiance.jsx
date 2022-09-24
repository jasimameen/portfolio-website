import React from "react";
import HtmlImage from "../assets/html.png";
import CssImage from "../assets/css.png";
import GithubImage from "../assets/github.png";
import JavascriptImage from "../assets/javascript.png";
import NodeImage from "../assets/node.png";
import ReactImage from "../assets/react.png";
import TailwindImage from "../assets/tailwind.png";

const Experiance = () => {
  const tech = [
    {
      id: 1,
      source: HtmlImage,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      source: CssImage,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      source: JavascriptImage,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      source: ReactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      source: TailwindImage,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      source: GithubImage,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      source: NodeImage,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    
  ];

  return (
    <div
      name="experiance"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen
    "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-800 p-2 inline">
            Experiance
          </p>
          <p className="py-6">These are Thecnologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8  text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, source, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={source} alt="" className="w-20 m-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
