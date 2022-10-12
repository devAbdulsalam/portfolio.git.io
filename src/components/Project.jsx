import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import {projects} from "../data"

const Project = () => {
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Check out some of my Awesome projects</p>
      </div>
      <div className="flex w-11/12 gap-6 px-5 mx-auto debugg  mt-6 items-center relative">
        <div className="lg:w-2/3 w-full debug">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl m-1">{project_info.name}</h3>
                  <p className="mb-3">{project_info.desc}</p>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden text-center p-3 bg-slate-700 rounded-xl ml-3">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
            {/* <img src={project_person} alt="" className="w-8/12 mx-auto object-contain" /> */}
            <div>
              <h2 className="text-2xl font-semibold">
                Have a project in mind? <br/> Feel free to share it!
              </h2>
              <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-7">
                I'm a full Time web developer. lets turn that your amazing idea into reality
                soluta quos tempore eos accusamus cupiditate, amet in similique
                Consequatur a quidem maiores!
              </p>
              <button className="btn-primary mt-10 hover:bg-cyan-400 transition-all">Let's chat</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
