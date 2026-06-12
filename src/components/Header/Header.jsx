function Header() {
  return (
    <header className="bg-white shadow-sm">

      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">

        <h1 className="text-3xl font-bold text-purple-600">
          NexBlog
        </h1>

        <nav className="flex gap-8">

          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
          <a href="#">Contact</a>

        </nav>

      </div>

    </header>
  );
}

export default Header;