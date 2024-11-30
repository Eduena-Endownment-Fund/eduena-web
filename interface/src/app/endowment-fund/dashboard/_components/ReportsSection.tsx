import { Card, CardBody } from "@nextui-org/react";

interface Report {
  title: string;
  description: string;
  date: string;
  link: string;
}

interface ReportsSectionProps {
  reports: Report[];
}

const ReportsSection = ({ reports }: ReportsSectionProps) => {
  return (
    <section className="p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reports.map((report, index) => (
            <Card key={index} shadow="sm">
              <CardBody className="p-6">
                <h4 className="text-xl font-semibold mb-2">{report.title}</h4>
                <p className="text-gray-700 mb-4">{report.description}</p>
                <p className="text-gray-500">Date: {report.date}</p>
                <a
                  href={report.link}
                  className="text-blue-600 underline mt-4 inline-block"
                >
                  View Report
                </a>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;
