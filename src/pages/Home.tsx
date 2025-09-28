import { HeroSection } from '../components/Home/HeroSection';
import { FeatureCardsSection } from '../components/Home/FeatureCardsSection';


export function HomePage() {
  

  const featuresData = [
    { 
      title: "Monitoramento Inteligente", 
      description: "Acompanhe pacientes com score de risco de absenteísmo e afinidade digital." 
    },
    { 
      title: "Cuidado Conectado", 
      description: "Integre cuidadores e familiares ao plano de saúde do paciente para uma abordagem completa." 
    },
    { 
      title: "Decisões Baseadas em Dados", 
      description: "Analise tendências e otimize o agendamento com informações precisas e insights valiosos." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50"> 
      
      <HeroSection 
        title="CareLink: Conectando Cuidado e Tecnologia para a Longevidade"
        description="Plataforma inovadora para monitoramento inteligente da saúde de idosos, gerenciamento eficiente de agendamentos e suporte contínuo para cuidadores."
      />

      <FeatureCardsSection features={featuresData} />

      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} HealthTech IMREA. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}