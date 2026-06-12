function SectionTitle({ title }) {
  return (
    <div className="mb-8">

      <h2 className="text-4xl font-bold">
        {title}
      </h2>

      <div className="w-12 h-1 bg-red-500 mt-3 rounded-full"></div>

    </div>
  );
}

export default SectionTitle;