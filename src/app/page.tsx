import Image from "next/Image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 font-poppins">
      <div className="flex w-full">
        <div className="left-container flex flex-col justify-center w-[60%]  px-12 py-10">
          <div className="content text-center space-y-5">
            <p className="text-2xl text-white">
              Hi! I am <span className="text-green-600">Kulsoom Arif</span>
            </p>
            <h1 className="text-4xl text-green-600 font-bold">Web Developer</h1>
            <p className="text-lg text-white max-w-xl mx-auto">
              I am a web developer with years of experience in creating and
              managing websites. My skills include coding in HTML, CSS, and
              JavaScript.
            </p>
            <div className="btn-container flex justify-center gap-6">
              <button className="px-6 py-2 bg-green-700 text-black rounded-lg border-2 border-green-700 hover:bg-transparent hover:text-green-700 transition duration-300">
                Hire me
              </button>
              <button className="px-6 py-2 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-black transition duration-300">
                View projects
              </button>
            </div>
            <div className="icons flex flex-col items-center gap-4 mt-6 text-gray-400">
              <i className="fa-brands fa-facebook-f text-2xl hover:text-white transition duration-300"></i>
              <i className="fa-brands fa-linkedin text-2xl hover:text-white transition duration-300"></i>
              <i className="fa-brands fa-twitter text-2xl hover:text-white transition duration-300"></i>
            </div>
          </div>
        </div>

        <div className="right-container h-[100%] w-[40%] bg-gradient-to-br  flex justify-start items-start relative">
          <div className="circle relative w-[22rem] h-[22rem] rounded-full border-8 border-green-700 shadow-[0_0_4px_rgba(255,255,255,1),inset_0_0_2rem_rgb(3,161,16)] overflow-hidden">
            <Image src="/pic.webp" layout="fill" objectFit="cover" alt="Profile"
            className="background-position-start" />
          </div>
        </div>
      </div>
    </div>
  );
}
