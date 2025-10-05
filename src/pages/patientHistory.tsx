import { useEffect, useState } from "react";
import type { PatientData } from "../types/Patient";
import { PatientSearch } from "../components/PatientSearch";
import { IdentificationBlock } from "../components/pagePatientHistory/IdentificationBlock/IdentificationBlock";
import { ActionsBlock } from "../components/pagePatientHistory/ActionsBlock/ActionsBlock";

const mockData: PatientData[] = [
  {
    id: "1",
    name: "John Doe",
    phone: "123-456-7890",
    riskScore: 8.5,
    riskLevel: "ALTO",
    contributingFactors: [
      "Faltou a consulta anterior",
      "Não respondeu ligações",
    ],
    nextAppointment: {
      date: "2024-07-10",
      time: "09:00",
      professional: "Dr. Silva",
    },
    history: [
      {
        id: "note-1",
        date: "2024-06-01",
        time: "09:00",
        type: "ANOTACAO_EQUIPE",
        note: "Paciente faltou à consulta.",
        userId: "user-123",
        userName: "Enfermeira Maria"
      },
      {
        id: "note-2",
        date: "2024-06-15",
        time: "10:30",
        type: "ANOTACAO_EQUIPE",
        note: "Sem resposta.",
        userId: "user-456",
        userName: "Enfermeira Joana"
      }
    ]
  },
  {
    id: "2",
    name: "Jane Smith",
    phone: "987-654-3210",
    riskScore: 1.2,
    riskLevel: "BAIXO",
    contributingFactors: ["Não visualizou as mensagens"],
    nextAppointment: {
      date: "2024-07-15",
      time: "14:30",
      professional: "Dra. Souza",
    },
    history: [
      {
        id: "note-3",
        date: "2024-06-05",
        time: "11:00",
        type: "ANOTACAO_EQUIPE",
        note: "Mensagem enviada, não visualizada.",
        userId: "user-789",
        userName: "Enfermeira Carla"
      }
    ]
  },
];

const fetchPatientData = (id: string) => {
  // Simula a busca no seu array de mockData
  return mockData.find((p) => p.id === id) || null;
};

export function PatientHistory() {
  const [patientId, setPatientId] = useState<string | null>(null);
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Se não houver ID, pare a execução (estado de busca)
    if (!patientId) {
      setPatient(null);
      return;
    }

    // 1. Inicia o estado de carregamento
    setLoading(true);
    setPatient(null); // Limpa o paciente anterior, se houver

    // 2. Simulação de um atraso de rede (1.5s)
    setTimeout(() => {
      // Na implementação real, esta seria sua chamada API:
      // const data = await axios.get(`/api/patient/${patientId}`);

      const fetchedData = fetchPatientData(patientId);

      setPatient(fetchedData);
      setLoading(false);
    }, 1500);
  }, [patientId]);

  if (!patientId || loading) {
    return (
      <div className="justify-center">
        {loading ? (
          <div className="text-xl text-blue-600">
            Carregando Histórico de {patientId}...
          </div>
        ) : (
          // Renderiza o PatientSearch e passa a função setPatientId como prop
          <PatientSearch setPatientId={setPatientId} />
        )}
      </div>
    );
  }

  // 2. Se a busca terminou (loading=false) e o paciente é null (ID inválido/404)
  if (!patient) {
    return (
      <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
        <p className="text-xl text-red-500 p-8">
          Paciente com ID "{patientId}" não encontrado.
        </p>
        <button
          onClick={() => setPatientId(null)} // Volta para a tela de busca
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
        >
          Nova Busca
        </button>
      </div>
    );
  }

  // 3. Renderização de Sucesso (Blocos 1, 2, 3 - Futuro)
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* BLOC 1: IDENTIFICAÇÃO E MÉTRICAS (Fixo/Lateral) */}
      <div className="w-1/4 p-6 bg-gray-50 border-r border-gray-200">
        <IdentificationBlock patient={patient} />
      </div>

      {/* BLOC 2: LINHA DO TEMPO (Central - 50% do espaço) */}
      <div className="w-2/4 overflow-y-auto p-6">
        <div className="text-gray-500">
          BLOCO 2: LINHA DO TEMPO (A SER CONSTRUÍDO)
        </div>
      </div>

      {/* BLOC 3: AÇÕES E REGISTRO (Lateral - 25% do espaço) */}
      <div className="w-1/4 p-6 bg-gray-100 border-l border-gray-200">
        <ActionsBlock patientId={patient.id} setPatient={setPatient} />
      </div>
    </div>
  );
}
