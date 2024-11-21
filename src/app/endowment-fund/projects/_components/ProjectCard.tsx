import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";

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
      <CardBody className="p-6">
        <Image
          shadow="sm"
          radius="lg"
          width={24}
          height={24}
          alt={project.projectName}
          className="w-full object-cover h-[140px] mb-4"
          src={project.img}
        />

        <p className="text-tiny uppercase font-bold my-2">{project.status}</p>
        <h2 className="text-2xl font-bold">{project.projectName}</h2>
        <Chip color="primary" className="my-4 font-bold p-4" size="lg">
          {project.category}
        </Chip>
        <hr className="my-4 border-t border-gray-300" />
        <p className="mt-2 text-gray-700">{project.description}</p>
        <hr className="my-4 border-t border-gray-300" />
        <p className="mt-2 text-gray-700">
          <b>Impact: </b>
          {project.impact}
        </p>
        <p className="mt-2 text-gray-700">
          <b>Funding Timeline: </b>
          {project.fundingTimeline}
        </p>
        <p className="mt-2 text-gray-700">
          <b>Region: </b>
          {project.region}
        </p>
      </CardBody>
      <CardFooter className="p-6">
        <p className="text-4xl text-primary-500 font-extrabold">
          {project.amount}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
