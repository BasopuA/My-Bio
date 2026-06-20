import { resumeData } from "../Data/resumeData";

const Footer = () => {
  const { personal } = resumeData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">{personal.name}</h3>
          <p className="text-green-200">{personal.profession}</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href={`mailto:${personal.email}`}
            className="hover:text-green-300 transition-colors"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l4 4 5-5 9 9" />
            </svg>
          </a>
          <a
            href={`tel:${personal.phone}`}
            className="hover:text-green-300 transition-colors"
            aria-label="Phone"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.49 4.49a1 1 0 01-.502 1.21L6.986 11.21a11.047 11.047 0 005.516 5.516l1.102-2.453a1 1 0 011.21-.502l4.49 1.49a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.08-3.34.73-4.04-1.61-4.04-1.61-.55-1.42-1.34-1.8-1.34-1.8-1.1-.75.09-.74.09-.74 1.22.09 1.85 1.25 1.85 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.23A11.1 11.1 0 0112 5.8c1.02.01 2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.25 2.86.12 3.16.78.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.004 12.004 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
        <div className="border-t border-green-800 pt-4">
          <p className="text-green-300 text-sm">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;