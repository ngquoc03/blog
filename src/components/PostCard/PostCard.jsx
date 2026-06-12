function PostCard() {
  return (
    <article
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
      "
    >

      <img
        src="https://picsum.photos/800/500"
        alt=""
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
          Technology
        </span>

        <h3 className="text-2xl font-bold mt-4">
          Learn React Faster
        </h3>

        <p className="text-gray-500 mt-3">
          React is one of the most popular frontend frameworks today.
        </p>

        <p className="text-sm text-gray-400 mt-4">
          John Doe • Jun 11, 2026
        </p>

      </div>

    </article>
  );
}

export default PostCard;