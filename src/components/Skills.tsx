import { resumeData } from "../data/resumeData";

const Skills = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {resumeData.skills.map((skill, i) => (
          <div key={i} className="bg-green-50 p-3 rounded-md text-center">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;