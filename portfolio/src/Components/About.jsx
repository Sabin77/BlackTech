import React from "react";

function About() {
  return (
    <div className="flex flex-col justify-center ">
      <div className="flex flex-col w-1/2 border-2 self-center ">
        <h1 className=" text-4xl self-center pt-5 pb-2 font-bold border-b-4 ">
          About Me
        </h1>
        <p className="text-center py-3 text-xl">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="parent flex border-2 my-10">
        <div className="child1 flex flex-col flex-1 border-2 m-2 px-20">
          <h1 className=" self-center text-2xl font-bold">Get to know me!</h1>
          <p className=" text-xl px-10">
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section. I also like sharing content related to the stuff that I
            have learned over the years in Web Development so it can help other
            people of the Dev Community. Feel free to Connect or Follow me on my
            Linkedin and Instagram where I post useful content related to Web
            Development and Programming I'm open to Job opportunities where I
            can contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to contact me.
          </p>
        </div>
        <div className="child2 flex flex-col flex-1 border-2 m-2">
          <h1 className="self-center text-2xl font-bold">My Skills</h1>
          <div className=" flex flex-wrap my-4 justify-center">
            <button className=" border-2 border-gray-400 px-3 h-10 rounded-md mx-1 my-1 ">
              HTML
            </button>
            <button className=" border-2 border-gray-400 px-3 h-10 rounded-md mx-1 my-1">
              CSS
            </button>
            <button className=" border-2 border-gray-400 px-3 h-10 rounded-md mx-1 my-1">
              JavaScript
            </button>
            <button className=" border-2 border-gray-400 px-3 h-10 rounded-md mx-1 my-1">
              Wordpress
            </button>
            <button className=" border-2 border-gray-400 px-3 h-10 rounded-md mx-1 my-1">
              PHP
            </button>
            <button className=" border-2 border-gray-400 px-3 h-10 rounded-md mx-1 my-1">
              Git
            </button>
            <button className=" border-2 border-gray-400 px-3 h-10 rounded-md mx-1 my-1">
              Terminal
            </button>
            <button className=" border-2 border-gray-400 px-3 h-10 rounded-md mx-1 my-1">
              Video Editing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
