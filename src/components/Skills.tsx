import pythonLogo from "../assets/skills/python.svg";
import dockerLogo from "../assets/skills/docker.svg";
import javaLogo from "../assets/skills/java.svg";
import typescriptLogo from "../assets/skills/typescript.svg";
import htmlLogo from "../assets/skills/html5.svg";
import cssLogo from "../assets/skills/css3.svg";
import reactLogo from "../assets/skills/react.svg";
import postgresqlLogo from "../assets/skills/postgresql.svg";
import githubLogo from "../assets/skills/github.svg";
import fastapiLogo from "../assets/skills/fastapi.svg";

const skillCategories = {
  "Programming Languages": ["Java", "Python", "TypeScript", "HTML", "CSS"],
  "Frameworks & Libraries": ["React (Next.js)", "FastAPI"],
  "Databases": ["Database (Oracle and PostgreSQL)"],
  "Tools & Technologies": ["GitHub", "Docker"],
};

const skillLogos: Record<string, string> = {
  "Java": javaLogo,
  "Python": pythonLogo,
  "TypeScript": typescriptLogo,
  "HTML": htmlLogo,
  "CSS": cssLogo,
  "React (Next.js)": reactLogo,
  "FastAPI": fastapiLogo,
  "Database (Oracle and PostgreSQL)": postgresqlLogo,
  "GitHub": githubLogo,
  "Docker": dockerLogo,
};

const Skills = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4 border-b border-green-200 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                  >
                    {skillLogos[skill] && (
                      <img
                        src={skillLogos[skill]}
                        alt={`${skill} logo`}
                        className="w-5 h-5"
                      />
                    )}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
