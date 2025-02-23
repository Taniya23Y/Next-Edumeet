type ButtonThreeProps = {
  children: React.ReactNode;
};

const BtnThree: React.FC<ButtonThreeProps> = ({ children }) => {
  return (
    <div className="text-center text-[12px] sm:text-[10px] px-6 py-1 rounded-xl font-bold bg-[#3F3F3F]">
      {children}
    </div>
  );
};

export default BtnThree;
