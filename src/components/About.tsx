import { resumeData } from "../Data/resumeData";

const About = () => {
  const { personal } = resumeData;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {personal.summary}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Location</h3>
                <p className="text-gray-600">{personal.location}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Languages</h3>
                <p className="text-gray-600">{resumeData.languages.join(", ")}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={personal.photo}
              alt={personal.name}
              className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-green-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;