import { resumeData } from "../Data/resumeData";

const Experience = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Work Experience
        </h2>
        <div className="space-y-8">
          {resumeData.experience.map((exp, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                  <p className="text-green-700 font-medium">{exp.company}</p>
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {exp.period}
                </span>
              </div>
              {exp.description && exp.description.length > 0 && (
                <ul className="space-y-2">
                  {exp.description.map((desc, j) => (
                    <li key={j} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{desc}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;