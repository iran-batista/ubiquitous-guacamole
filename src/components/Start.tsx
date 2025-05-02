interface StartProps {
  onStart: () => void;
}

export const Start = ({ onStart }: StartProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="bg-primary-500 w-32 h-12 rounded-lg font-bold text-primary-100 cursor-pointer hover:bg-primary-300 transition-colors"
        onClick={onStart}
      >
        Começar...
      </button>
    </div>
  );
};
