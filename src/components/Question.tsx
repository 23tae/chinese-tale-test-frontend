type QuestionProps = {
  content: string;
  choices: string[];
  onSelect: (choice: number) => void;
  selectedChoice?: number;
}

export default function Question({ content, choices, onSelect, selectedChoice }: QuestionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">{content}</h2>
      <div className="space-y-2">
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-full p-4 text-left rounded-lg border transition-colors ${
              selectedChoice === index 
                ? 'border-blue-600 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  )
}