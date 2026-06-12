import SideBar from "../../components/SideBar/SideBar";

function BlogDetail() {
  return (
    <div className="bg-[#F9F9FF] min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-12 gap-10">

          {/* Content */}

          <div className="col-span-8">

            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
              Technology
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Build Amazing React Applications
            </h1>

            <div className="flex gap-4 mt-6 text-gray-500">

              <span>John Doe</span>
              <span>•</span>
              <span>Jun 11, 2026</span>

            </div>

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt=""
              className="w-full h-[500px] object-cover rounded-3xl mt-8"
            />

            <div className="prose max-w-none mt-10">

              <p>
                React is one of the most popular frontend libraries in the world.
              </p>

              <h2>
                Why React?
              </h2>

              <p>
                React helps developers build interactive user interfaces.
              </p>

              <blockquote>
                Learn once, write anywhere.
              </blockquote>

              <h2>
                Conclusion
              </h2>

              <p>
                React continues to dominate modern frontend development.
              </p>

            </div>

          </div>

          {/* Sidebar */}

          <div className="col-span-4">
            <SideBar />
          </div>

        </div>

      </div>

    </div>
  );
}

export default BlogDetail;