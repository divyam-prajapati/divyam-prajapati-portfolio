import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4 md:px-10">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div className="text-justify">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                Stuck in a 'loop' of uncertainty?{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  Email
                </a>{" "}
                me, and I'll 'debug' your doubts!
              </p>
            </div>
            <div className="mt-8 text-justify">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2 text-justify">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300"
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-2xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://cdn.worldvectorlogo.com/logos/c.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/java-4.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/jquery-4.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                className="h-16 w-16 mx-4 my-4"
              />              
              <img
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                className="h-16 w-16 mx-4 my-4"
                style={{
                  ["filter"]: "invert(40%)",
                }} 
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/django.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/flask.svg"
                className="h-16 w-16 mx-4 my-4"
                style={{
                  ["filter"]: "invert(40%)",
                }} 
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/microsoft-office-2013.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/mysql-logo.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/android-4.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/scikit-learn/scikit-learn/main/doc/logos/scikit-learn-logo-without-subtitle.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/pytorch/pytorch/main/docs/source/_static/img/pytorch-logo-flame.svg"
                className="h-16 w-16 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/selenium-1.svg"
                className="h-16 w-16 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
