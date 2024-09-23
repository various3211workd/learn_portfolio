const SkillTag = (skilldata: any) => {
  return (
    <div className="flex justify-center items-left">
      <div className="md:w-full lg:mx-72">
        {skilldata.skilldata.map((s: any, index: any) => (
          <span
            key={index} /* keyを指定してあげないとESlintでエラーが出る。 */
            className="inline-block rounded-full px-3 py-1 mr-2 mb-2 font-medium border bg-white dark:bg-gray-800 border-gray-300"
          >
            <p>{s}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillTag;
