import { resumeData } from "../Data/resumeData";

const Hero = () => {
  const { personal } = resumeData;

  return (
    <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={personal.photo}
            alt={personal.name}
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-green-200 shadow-2xl"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{personal.name}</h1>
        <p className="text-xl md:text-2xl text-green-100 mb-6">{personal.profession}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-green-200">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.999 9.999A17.933 17.933 0 0110 17.933V18a2 2 0 01-2 2H4a2 2 0 01-2-2v-1.067A17.933 17.933 0 015.05 4.05z" clipRule="evenodd" />
            </svg>
            <span>{personal.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.54.77a11.047 11.047 0 006.105 6.105l.77-1.54a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>{personal.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884l.001-.001A2.003 2.003 0 014 4h12a2 2 0 011.99 1.884l.002.001.002.002a2.003 2.003 0 01-.447 1.643l-3.825 4.433a2.003 2.003 0 01-1.643.447L6.884 11.99a2.003 2.003 0 01-1.643-.447L1.51 7.527a2.003 2.003 0 01-.447-1.643l.002-.002.002-.001z" />
            </svg>
            <span>{personal.email}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;