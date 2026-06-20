const skillCategories = {
  "Programming Languages": ["Java", "Python (FastAPI)", "TypeScript", "HTML", "CSS"],
  "Frameworks & Libraries": ["React (Next.js)"],
  "Databases": ["Database (Oracle and PostgreSQL)"],
  "Tools & Technologies": ["GitHub", "Docker"],
};

const Skills = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4 border-b border-green-200 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;