import { Card, CardBody } from "@nextui-org/react";

const FundOverview = () => {
  return (
    <section className="p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Fund Overview</h3>
        <Card shadow="sm">
          <CardBody className="p-6">
            <h4 className="text-2xl font-semibold mb-4 ">Total Fund Value</h4>
            <p className="text-4xl font-bold text-blue-600 ">$1,000,000</p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default FundOverview;