import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub
} from "react-icons/fa";

function Hero() {
  return (
    <section className="text-center py-20">

      <img
        src="https://i.pravatar.cc/250"
        alt=""
        className="w-32 h-32 rounded-full mx-auto shadow-lg"
      />

      <h1 className="text-6xl font-bold mt-8 text-gray-900">
        John Doe
      </h1>

      <p className="text-gray-500 mt-4">
        Blogger, Frontend Developer & Designer
      </p>

      <div className="flex justify-center gap-5 mt-6 text-xl">

        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaGithub />

      </div>

    </section>
  );
}

export default Hero;