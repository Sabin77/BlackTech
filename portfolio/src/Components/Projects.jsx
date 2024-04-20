import React from "react";
import Project1 from "../assets/projectphoto.jpg";
import Project2 from "../assets/project2.avif";
import Project3 from "../assets/project3.avif";

function Projects() {
  return (
    <div className="MainContainer flex flex-col justify-center">
      <div className="flex flex-col w-1/2 border-2 self-center">
        <h1 className="Title text-4xl self-center pt-5 pb-2 font-bold border-b-4 ">
          My Projects
        </h1>
        <p className="text-center py-3 text-xl">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className="parent flex border-2 my-10 h-[30rem] ">
        <div className="child1 flex flex-col flex-1 border-2 m-2 px-20 items-center justify-center">
          <div className=" w-full h-80  border-2 shadow-md shadow-slate-500">
            <img
              className=" h-full w-full"
              src={Project1}
              alt="Project photo"
            />
          </div>
        </div>
        <div className="child2 flex flex-col flex-1 border-2 m-2 justify-center">
          <h1 className=" text-2xl font-bold mx-10">Project 1</h1>
          <p className=" text-center py-3 text-xl mx-4 text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            delectus doloremque totam fugiat fuga perspiciatis quis odit at id
            quam minima commodi nesciunt cumque, facere voluptatum laudantium
            voluptatem eaque distinctio.
          </p>
          <button className=" border-2 border-gray-400 w-40 self-center py-2 rounded-md my-2 hover:bg-neutral-700 ">
            Project Link
          </button>
        </div>
      </div>
      <div className="parent flex border-2 h-[30rem] ">
        <div className="child1 flex flex-col flex-1 border-2 m-2 px-20 items-center justify-center">
          <div className=" w-full h-80  border-2 shadow-md shadow-slate-500">
            <img
              className=" h-full w-full"
              src={Project2}
              alt="Project photo"
            />
          </div>
        </div>
        <div className="child2 flex flex-col flex-1 border-2 m-2 justify-center">
          <h1 className=" text-2xl font-bold mx-10">Project 2</h1>
          <p className=" text-center py-3 text-xl mx-4 text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            delectus doloremque totam fugiat fuga perspiciatis quis odit at id
            quam minima commodi nesciunt cumque, facere voluptatum laudantium
            voluptatem eaque distinctio.
          </p>
          <button className=" border-2 border-gray-400 w-40 self-center py-2 rounded-md my-2 hover:bg-neutral-700 ">
            Project Link
          </button>
        </div>
      </div>
      <div className="parent flex border-2 my-10 h-[30rem] ">
        <div className="child1 flex flex-col flex-1 border-2 m-2 px-20 items-center justify-center">
          <div className=" w-full h-80  border-2 shadow-md shadow-slate-500">
            <img
              className=" h-full w-full"
              src={Project3}
              alt="Project photo"
            />
          </div>
        </div>
        <div className="child2 flex flex-col flex-1 border-2 m-2 justify-center">
          <h1 className=" text-2xl font-bold mx-10">Project 3</h1>
          <p className=" text-center py-3 text-xl mx-4 text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            delectus doloremque totam fugiat fuga perspiciatis quis odit at id
            quam minima commodi nesciunt cumque, facere voluptatum laudantium
            voluptatem eaque distinctio.
          </p>
          <button className=" border-2 border-gray-400 w-40 self-center py-2 rounded-md my-2 hover:bg-neutral-700 ">
            Project Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
