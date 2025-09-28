import { FeatureCard } from './FeatureCard';
import { FaHeartbeat, FaUsers, FaChartLine } from 'react-icons/fa'; 

interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeatureCardsSectionProps {
  features: FeatureItem[];
}

export function FeatureCardsSection({ features }: FeatureCardsSectionProps) {
  const defaultIcons = [<FaHeartbeat />, <FaUsers />, <FaChartLine />]; 

  return (
    <section className="bg-gray-100 py-20 px-4 md:px-8 lg:px-16 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-16">Por que escolher CareLink?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon || defaultIcons[index % defaultIcons.length]} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}