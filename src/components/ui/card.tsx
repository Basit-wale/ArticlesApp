interface CardProps {
  icon: React.ReactNode;
  cardTitle: string;
  Info1: string;
  Info2: string;
}

const Card: React.FC<CardProps> = ({ icon, cardTitle, Info1, Info2 }) => {
  return (
    <div className="flex gap-4 h-fit items-center py-1">
      <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center">
        {icon}
      </div>

      <div className="h-20 content-center flex flex-col gap-0.5">
        <p className="text-xl font-semibold">{cardTitle}</p>
        <div>
          <p className="text-sm">{Info1}</p>
          <p className="text-sm">{Info2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
