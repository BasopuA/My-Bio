import { resumeData } from "../data/resumeData";

const Experience = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Work History</h2>
      {resumeData.experience.map((exp, i) => (
        <div key={i} className="mb-6 border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-xl">{exp.title}</h3>
          <p className="text-gray-600">{exp.company} • {exp.period}</p>
          <ul className="list-disc ml-5 mt-2">
            {exp.description.map((desc, j) => (
              <li key={j}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;