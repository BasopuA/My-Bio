import { resumeData } from "../data/resumeData";

const Education = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      {resumeData.education.map((edu, i) => (
        <div key={i} className="mb-6 border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-xl">{edu.degree}</h3>
          <p className="text-gray-600">{edu.institution} • {edu.period}</p>
          {edu.achievements && (
            <ul className="list-disc ml-5 mt-2">
              {edu.achievements.map((ach, j) => (
                <li key={j}>{ach}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default Education;