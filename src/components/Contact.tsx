import { resumeData } from "../data/resumeData";

const Contact = () => {
  const { personal } = resumeData;

  return (
    <section className="py-8 px-4 bg-green-50">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="space-y-2">
        <p><strong>📍</strong> {personal.location}</p>
        <p><strong>📞</strong> {personal.phone}</p>
        <p><strong>✉️</strong> <a href={`mailto:${personal.email}`}>{personal.email}</a></p>
      </div>
      <div className="mt-6">
        <h3 className="font-bold">References</h3>
        <p>{resumeData.references}</p>
      </div>
    </section>
  );
};

export default Contact;