import { resumeData } from "../Data/resumeData";

const Education = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Education
        </h2>
        <div className="space-y-8">
          {resumeData.education.map((edu, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-600">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-green-700 font-medium">{edu.institution}</p>
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {edu.period}
                </span>
              </div>
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Achievements:</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;