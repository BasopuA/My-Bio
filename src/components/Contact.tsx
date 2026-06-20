import { resumeData } from "../Data/resumeData";

const Contact = () => {
  const { personal } = resumeData;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.999 9.999A17.933 17.933 0 0110 17.933V18a2 2 0 01-2 2H4a2 2 0 01-2-2v-1.067A17.933 17.933 0 015.05 4.05z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Location</p>
                  <p className="text-gray-600">{personal.location}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.54.77a11.047 11.047 0 006.105 6.105l.77-1.54a1 1 0 011.21-.502l4.49 1.49a1 1 0 01.684.949V17a1 1 0 01-1 1h-1C9.716 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Phone</p>
                  <a href={`tel:${personal.phone}`} className="text-green-600 hover:text-green-800 transition-colors">
                    {personal.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884l.001-.001A2.003 2.003 0 014 4h12a2 2 0 011.99 1.884l.002.001.002.002a2.003 2.003 0 01-.447 1.643l-3.825 4.433a2.003 2.003 0 01-1.643.447L6.884 11.99a2.003 2.003 0 01-1.643-.447L1.51 7.527a2.003 2.003 0 01-.447-1.643l.002-.002.002-.001z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Email</p>
                  <a href={`mailto:${personal.email}`} className="text-green-600 hover:text-green-800 transition-colors">
                    {personal.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">References</h3>
            <p className="text-gray-600">{resumeData.references}</p>
            <div className="mt-6">
              <a
                href={`mailto:${personal.email}`}
                className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors"
              >
                Send me a message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;