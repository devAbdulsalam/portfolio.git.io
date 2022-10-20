import React from "react";
// import skills data
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-14 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
<<<<<<< HEAD
        <div className="flex items-center justify-center mt-12 gap-5 space-y-3 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="group max-w-[10rem] basis-1/6 text-center flex flex-col justify-center items-center"
=======
        <div className="flex items-center justify-center mt-12 gap-5 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="group  max-w-[10rem] basis-2/6 md:basis-1/6 text-center flex flex-col justify-center items-center"
>>>>>>> 6c98f88016539f3a6fae9e723cf51e4d56479edb
            >
              <div
                key={i}
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className={`text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600`}>
                  <ion-icon name={skill.logo} style={{color:`${skill.color}`}}></ion-icon>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
