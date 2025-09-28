import { useState } from 'react';
import SetaImage from '../assets/seta.jpg'; 

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Como eu baixo o aplicativo Portal do Paciente HC?",
    answer: "Você pode baixar o aplicativo na Play Store (Android) ou na App Store (iPhone). Basta procurar por 'Portal do Paciente HC' e clicar em instalar."
  },
  {
    id: 2,
    question: "O que eu faço se a minha internet cair durante a teleconsulta?",
    answer: "Fique tranquilo! Caso sua internet sofra alguma interrupção, você pode entrar novamente no aplicativo ou site para voltar para a sala com seu médico."
  },
  {
    id: 3,
    question: "Preciso ligar a câmera e o microfone na consulta?",
    answer: "Sim, para uma melhor avaliação, é importante habilitar a câmera e o microfone. O aplicativo irá solicitar sua permissão ao iniciar a chamada. Basta clicar em 'Permitir'."
  },
  {
    id: 4,
    question: "O que é o meu Código de Acesso Único?",
    answer: "É um código de segurança que garante que você está entrando na consulta correta. Ele é enviado junto com o link no seu lembrete do WhatsApp. Digite-o no campo de acesso."
  },
  {
    id: 5,
    question: "Posso acessar a teleconsulta pelo meu computador?",
    answer: "Sim, você pode usar seu computador ou notebook. Recomendamos usar o navegador Google Chrome para garantir o melhor funcionamento."
  },
];

export function FaqPage() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const ChevronIconComponent = (props: { isOpen: boolean }) => (
    <img 
      src={SetaImage} 
      alt="Ícone de seta" 
      className={`w-5 h-5 object-contain transition-transform duration-300 ${props.isOpen ? 'rotate-180 text-blue-600' : 'rotate-0 text-gray-500'}`} 
    />
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8"> 
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center flex items-center justify-center gap-4">
            Perguntas Frequentes (FAQ)
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Encontre respostas rápidas para as dúvidas mais comuns sobre o Portal do Paciente e Teleconsulta.
          </p>

          <div className="space-y-4">
            {faqData.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <button
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-100 transition duration-150"
                  onClick={() => toggleItem(item.id)}
                >
                  {item.question}
                  <ChevronIconComponent isOpen={openItemId === item.id} />
                </button>

                {openItemId === item.id && (
                  <div className="p-5 border-t border-gray-200 bg-blue-50 text-gray-700 leading-relaxed animate-in fade-in duration-500">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2025 HealthTech IMREA. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}