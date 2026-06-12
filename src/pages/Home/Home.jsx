import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Hero from "../../components/Hero/Hero";
import PostCard from "../../components/PostCard/PostCard";
import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";


function Home() {
  return (
    <div className="bg-[#f9f9ff] min-h-screen">

      <LeftSidebar />

      <div className="ml-[110px]">

        <div className="max-w-7xl mx-auto px-8">

          <Hero />

          {/* Featured Post */}
          <section className="mb-16">

            <div className="relative rounded-3xl overflow-hidden">

              <img
                src="https://picsum.photos/1400/700"
                alt=""
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end">

                <div className="p-10 text-white">

                  <span className="bg-purple-600 px-4 py-2 rounded-full">
                    Technology
                  </span>

                  <h2 className="text-5xl font-bold mt-4">
                    Build Amazing React Applications
                  </h2>

                  <p className="mt-3">
                    John Doe • Jun 11, 2026
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* Posts + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2">

              <h2 className="text-4xl font-bold mb-8">
                Latest Posts
              </h2>

              <div className="grid md:grid-cols-2 gap-8">

                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />

              </div>

            </div>

            <SideBar />

          </div>

        </div>

        <Footer />

      </div>

    </div>
  );
}

export default Home;