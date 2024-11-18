import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface ProjectCardProps {
  project: {
    projectName: string;
    description: string;
    amount: string;
    category: string;
    impact: string;
    fundingTimeline: string;
    region: string;
    status: string;
    img?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card shadow="sm">
      <CardBody className="overflow-visible p-6">
        <Image
          shadow="sm"
          radius="lg"
          width={24}
          height={24}
          alt={project.projectName}
          className="w-full object-cover h-[140px]"
          src={project.img}
        />
        <h2 className="text-2xl font-bold mt-4">{project.projectName}</h2>
        <p className="mt-2 text-gray-700">{project.description}</p>
        <p className="mt-2 text-gray-700">Impact: {project.impact}</p>
        <p className="mt-2 text-gray-700">Funding Timeline: {project.fundingTimeline}</p>
        <p className="mt-2 text-gray-700">Region: {project.region}</p>
        <p className="mt-2 text-gray-700">Status: {project.status}</p>
      </CardBody>
      <CardFooter className="text-xl justify-between p-6">
        <b>{project.category}</b>
        <p className="text-4xl text-primary-500 font-bold">{project.amount}</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;