import CamilyImage from '../assets/camily.jpg';
import LucasImage from '../assets/lucas.jpeg';
import GustavoImage from '../assets/gustavo.jpg';

interface Member {
  id: number;
  name: string;
  rm: string;
  photo: string;
  githubUrl: string;
  linkedinUrl: string;
}

const teamMembers: Member[] = [
  {
    id: 1,
    name: "Camily Vitoria Pereira Maciel",
    rm: "RM: 566520",
    photo: CamilyImage,
    githubUrl: "https://github.com/camiexemplar/",
    linkedinUrl: "https://www.linkedin.com/in/camilyvpmaciel/"
  },
  {
    id: 2,
    name: "Gustavo Pinheiro de Oliveira",
    rm: "RM: 566358",
    photo: GustavoImage,
    githubUrl: "https://github.com/mrpine19",
    linkedinUrl: "https://www.linkedin.com/in/gustavo-pinheiro-de-oliveira-0165281b5/"
  },
  {
    id: 3,
    name: "Lucas Nunes Soares",
    rm: "RM: 566503",
    photo: LucasImage,
    githubUrl: "https://github.com/Hayzer3",
    linkedinUrl: "https://www.linkedin.com/in/lucas-nunes-a7995a261/"
  },
];

export function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Seção "Quem somos?" - TEXTO ATUALIZADO */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Quem somos?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Somos uma equipe multidisciplinar de estudantes de tecnologia da FIAP, unida pelo propósito de inovação no cuidado à saúde.
              Nosso projeto, desenvolvido para a Global Solution, foca em utilizar a tecnologia para promover a longevidade e bem-estar de idosos.
            </p>
          </section>

          {/* Seção "Qual o objetivo?" - TEXTO ATUALIZADO */}
          <section className="mb-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Qual o objetivo?</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              O CareLink tem como objetivo principal otimizar o monitoramento da saúde de idosos e a gestão de agendamentos no contexto do IMREA.
              Nossa plataforma busca identificar pacientes com maior risco de absenteísmo ou menor afinidade digital,
              permitindo que a equipe de saúde do IMREA adote abordagens de cuidado mais personalizadas e proativas.
              Isso inclui a integração de cuidadores e familiares, a análise de dados para otimização de recursos
              e a garantia de que cada paciente receba o suporte necessário para uma vida mais saudável e conectada.
            </p>
          </section>

          {/* Seção "Integrantes" - Permanece a mesma */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-8">Integrantes</h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-10" id="turma">TURMA 1TDSPX-2025</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map(member => (
                <article key={member.id} className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-blue-200"
                  />
                  <p className="text-xl font-bold text-gray-900 mb-1">{member.name}</p>
                  <p className="text-md text-gray-600 mb-4">{member.rm}</p>
                  <div className="flex gap-4">
                    <a
                      href={member.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    >
                      GITHUB
                    </a>
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    >
                      LINKEDIN
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}