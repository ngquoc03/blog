import {
  FiHome,
  FiGrid,
  FiUser,
  FiMail
} from "react-icons/fi";

function LeftSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[110px] bg-white border-r">

      <div className="flex flex-col items-center py-10 h-full">

        <h1 className="text-4xl font-bold text-purple-600">
          N
        </h1>

        <nav className="flex flex-col gap-8 mt-20 text-2xl">

          <FiHome />
          <FiGrid />
          <FiUser />
          <FiMail />

        </nav>

      </div>

    </aside>
  );
}

export default LeftSidebar;