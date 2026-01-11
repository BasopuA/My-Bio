import  {resumeData}  from "../data/resumeData"; 

const Hero = () => {
  const { personal } = resumeData;

  return (
    <section className="bg-green-100 py-12 text-center">
      <img
        src={personal.photo}
        alt="Anele Basopu"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-3xl font-bold">{personal.name}</h2>
      <p className="text-lg text-gray-700">{personal.profession}</p>
      <p className="mt-2 text-sm text-gray-500">{personal.location}</p>
    </section>
  );
};

export default Hero;