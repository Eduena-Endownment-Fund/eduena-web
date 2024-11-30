interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton = ({ label, isActive, onClick }: TabButtonProps) => {
  return (
    <button
      className={`py-3 px-6 ${
        isActive ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-500"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
