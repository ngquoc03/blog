function SideBar() {
  return (
    <div className="space-y-8">

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <h3 className="text-2xl font-bold mb-4">
          About Me
        </h3>

        <p className="text-gray-500">
          Welcome to my blog where I share tutorials and experiences.
        </p>

      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <h3 className="text-2xl font-bold mb-6">
          Popular Posts
        </h3>

        <div className="space-y-4">

          <div>
            <p className="font-semibold">
              React Performance Tips
            </p>
            <span className="text-sm text-gray-400">
              5.2k views
            </span>
          </div>

          <div>
            <p className="font-semibold">
              Mastering Tailwind CSS
            </p>
            <span className="text-sm text-gray-400">
              4.8k views
            </span>
          </div>

        </div>

      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <h3 className="text-2xl font-bold mb-4">
          Categories
        </h3>

        <ul className="space-y-3">

          <li>Technology</li>
          <li>Programming</li>
          <li>Travel</li>
          <li>Lifestyle</li>

        </ul>

      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <h3 className="text-2xl font-bold mb-4">
          Newsletter
        </h3>

        <input
          type="email"
          placeholder="Your email"
          className="w-full border rounded-xl p-3"
        />

        <button className="w-full bg-purple-600 text-white py-3 rounded-xl mt-4">
          Subscribe
        </button>

      </div>

    </div>
  );
}

export default SideBar;