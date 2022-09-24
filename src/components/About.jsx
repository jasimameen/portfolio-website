import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa
          obcaecati incidunt quam nostrum sed, aut adipisci iusto error. Sequi
          placeat explicabo illum iusto modi doloremque officiis reprehenderit.
          Facilis, ipsa consequuntur! Blanditiis distinctio magni fugiat
          exercitationem sapiente voluptatum alias saepe qui! Vel assumenda
          sapiente fugit aliquid, voluptatum possimus et provident?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, in vero
          quam quaerat rem, nam consectetur recusandae reiciendis iste non eius,
          minima et veniam illum accusamus perspiciatis voluptate nobis expedita
          dolorem suscipit. Deserunt id adipisci beatae neque, repudiandae
          aspernatur voluptatem reprehenderit vel culpa, architecto quo.
          Similique, rem dignissimos. Harum, minus?
        </p>
      </div>
    </div>
  );
};

export default About;
