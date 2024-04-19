import React from "react";
import profile from "../assets/profile.png";
import girl1 from "../assets/girlprofile2.jpeg";
import girl2 from "../assets/girlprofile3.avif";
import boy1 from "../assets/boy1.jpg";
import boy2 from "../assets/boy2.jpeg";
import analytics from "../assets/analytics.jpg";

function AboutUs() {
  return (
    <div className="h-auto">
      <div className=" text-5xl font-bold m-5">
        <h1 className="text-[#4A3BB5] underline underline-offset-4">
          Our Team
        </h1>
      </div>
      <div className=" flex my-5 justify-evenly">
        <div className="profile container flex flex-col items-center my-3">
          <div className=" h-44 w-44 border-gray-300 border-2 rounded-full">
            <img className=" rounded-full" src={profile} alt="Profile photo" />
          </div>
          <div>
            <h1 className=" text-2xl text-[#4A3BB5]">Anonymous Kc</h1>
            <h3>UI/UX designer</h3>
          </div>
        </div>

        <div className="profile container flex flex-col items-center my-3 ">
          <div className=" h-44 w-44 border-gray-300 border-2 rounded-full">
            <img
              className="h-44 w-44 rounded-full"
              src={girl1}
              alt="Profile photo"
            />
          </div>
          <div>
            <h1 className=" text-2xl text-[#4A3BB5]">Fulmaya Gurung</h1>
            <h3>Frontend Developer</h3>
          </div>
        </div>

        <div className="profile container flex flex-col items-center my-3 ">
          <div className=" h-44 w-44 border-gray-300 border-2 rounded-full">
            <img
              className=" h-44 w-44 rounded-full "
              src={girl2}
              alt="Profile photo"
            />
          </div>
          <div>
            <h1 className=" text-2xl text-[#4A3BB5]">Sweety Pariyar</h1>
            <h3>Backend Developer</h3>
          </div>
        </div>

        <div className="profile container flex flex-col items-center my-3 ">
          <div className=" h-44 w-44 border-gray-300 border-2 rounded-full">
            <img
              className="h-44 w-44 rounded-full"
              src={boy2}
              alt="Profile photo"
            />
          </div>
          <div>
            <h1 className=" text-2xl text-[#4A3BB5]">Ramesh Koirala</h1>
            <h3>DevOps Engineer</h3>
          </div>
        </div>
      </div>
      <hr className=" border-b-2 border-gray-300 mx-2" />
      <div className="h-90 flex">
        <div className=" flex-1 ">
          <h1 className=" text-5xl font-bold text-[#4A3BB5] mt-10">
            {" "}
            Get to know us
          </h1>
          <p className=" ml-5 text-balance mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            asperiores provident consequuntur impedit suscipit, dolorum, quasi
            maxime recusandae dicta, eligendi harum tenetur aliquam et
            architecto magni omnis rerum nulla nisi. Hic quam impedit assumenda
            tenetur accusantium mollitia exercitationem eius iure id
            perspiciatis aut voluptates natus debitis, quod nulla minima nam
            odio sit deserunt doloremque? Totam modi minima quaerat cupiditate
            reprehenderit! Dolorem exercitationem cupiditate dolorum beatae
          </p>
        </div>
        <div className="flex rightSide h-90  flex-1 justify-center m-5  ">
          <div className=" relative border-2 border-gray-300 h-80 w-80 rounded-full  bg-[#9088ca] ">
            <div className="absolute top-4 right-9 h-64 w-60 border-gray-400 rounded-md bg-white">
              <img
                className=" bg-auto h-64 rounded-lg"
                src={analytics}
                alt="photo"
              />
            </div>
            <div className=" absolute -right-6 h-10 w-32 bg-blue-200 backdrop-blur-sm border-gray-400 rounded-md ">
              {" "}
              <p className=" font-bold">+100</p>
              <p className=" text-xs font-bold"> Countries</p>
            </div>
            <div className=" absolute bottom-20 -left-6 h-10 w-28 bg-blue-200 backdrop-blur-sm border-gray-400 rounded-md ">
              {" "}
              <p className=" ml-2 font-bold">50000+</p>
              <p className=" text-xs font-bold"> Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
