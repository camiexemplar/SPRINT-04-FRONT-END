interface FeatureCardProps {
  title: string;
  description: string; 
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 text-center transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
      {icon && <div className="text-blue-600 text-5xl mb-6 flex justify-center">{icon}</div>}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
}