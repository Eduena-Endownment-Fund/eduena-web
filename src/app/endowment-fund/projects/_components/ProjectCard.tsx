import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";

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
    image?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const handleImageClick = (image?: string) => {
    setSelectedImage(image);
    onOpen();
  };

  const handleClose = () => {
    onOpenChange();
    setSelectedImage(undefined);
  };

  return (
    <>
      <Card shadow="sm">
        <CardBody>
          <div
            className="w-full h-72 mb-4 cursor-pointer"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => handleImageClick(project.image)}
          ></div>

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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>
            <h2>{project.projectName}</h2>
          </ModalHeader>
          <ModalBody>
            <Image
              alt={project.projectName}
              className="w-full h-auto"
              src={selectedImage}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;
