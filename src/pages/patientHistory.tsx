import { useEffect, useState } from "react";
import type { PatientData, PatientInteraction } from "../types/Patient";
import { PatientSearch } from "../components/PatientSearch";
import { IdentificationBlock } from "../components/pagePatientHistory/IdentificationBlock/IdentificationBlock";
import { ActionsBlock } from "../components/pagePatientHistory/ActionsBlock/ActionsBlock";
import { Timeline } from "../components/pagePatientHistory/TimeLine/Timeline";

const mockData: PatientData[] = [
    {
        id: "1",
        name: "Vinicius Junior",
        phone: "(11) 91234-5678",
        accompanying: "Virginia",
        accompanyingPhone: "(11) 99876-5432",
        riskScore: 8.5,
        riskLevel: "ALTO",
        contributingFactors: [
            "Faltou a consulta anterior",
            "Não respondeu ligações",
            "Baixa Afinidade Digital"
        ],
        nextAppointment: {
            date: "2025-07-10", // CORRIGIDO: AAAA-MM-DD
            time: "09:00",
            professional: "Dr. Silva",
        },
        history: [
            // --- 1. INTERAÇÃO DO SISTEMA (Mais Recente: 05/07) ---
            {
                id: "sys-005",
                date: "2025-07-05", // CORRIGIDO
                time: "14:10",
                type: "INTERACAO_SISTEMA",
                log: "Alerta de risco emitido: Score subiu para 8.5 devido a 24h sem visualização do link.",
            },
            // --- 2. ANOTAÇÃO DA EQUIPE (01/07) ---
            {
                id: "note-1",
                date: "2025-07-01", // CORRIGIDO
                time: "11:30",
                type: "ANOTACAO_EQUIPE",
                note: "Tentativa de contato telefônico sem sucesso. Deixada mensagem de voz com instruções.",
                userId: "user-123",
                userName: "Enfermeira Maria"
            },
            // --- 3. CONSULTA (FALTOU) (30/06) ---
            {
                id: "cons-008",
                date: "2025-06-30", // CORRIGIDO
                time: "10:00",
                type: "CONSULTA",
                status: "Faltou", 
                modality: "Vídeo",
                professional: "Dr. Ricardo Torres",
                specialty: "Cardiologia"
            },
            // --- 4. INTERAÇÃO DO SISTEMA (29/06) ---
            {
                id: "sys-004",
                date: "2025-06-29", // CORRIGIDO
                time: "18:00",
                type: "INTERACAO_SISTEMA",
                log: "Lembrete 24h da consulta com Dr. Torres enviado e visualizado (via WhatsApp).",
            },
            // --- 5. CONSULTA (REALIZADA) (15/06) ---
            {
                id: "cons-007",
                date: "2025-06-15", // CORRIGIDO
                time: "14:00",
                type: "CONSULTA",
                status: "Realizada", 
                modality: "Presencial",
                professional: "Dra. Ana Costa",
                specialty: "Fisioterapia"
            },
        ] as PatientInteraction[]
    },
    {
      id: "2",
      name: "Jane Smith",
      phone: "987-654-3210",
      accompanying: null,
      accompanyingPhone: null,
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
  const [filter, setFilter] = useState<'TODOS' | PatientInteraction['type']>('TODOS');
  const [sortOrder, setSortOrder] = useState<'RECENTE' | 'ANTIGA'>('RECENTE');

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



  // Calcule a lista filtrada e ordenada ANTES de renderizar o Timeline
  const filteredAndSortedHistory = patient?.history
      // 1. FILTRAGEM (RF05)
      .filter(item => filter === 'TODOS' || item.type === filter) 
      // 2. ORDENAÇÃO (RF06)
      .sort((a, b) => {
      // Concatenamos a data (AAAA-MM-DD) com o tempo para criar um timestamp preciso
      const timestampA = new Date(`${a.date}T${a.time}`).getTime(); 
      const timestampB = new Date(`${b.date}T${b.time}`).getTime(); 
      
      // Garantir que a lógica não falhe se a data for inválida (embora não deva ser com o formato ISO)
      if (isNaN(timestampA) || isNaN(timestampB)) return 0;

      // Se for RECENTE, subtrai B por A. Se não, o inverso.
      return sortOrder === 'RECENTE' ? timestampB - timestampA : timestampA - timestampB;
  }) || []; // Retorna array vazio se não houver paciente

  // 3. Renderização de Sucesso (Blocos 1, 2, 3 - Futuro)
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* BLOC 1: IDENTIFICAÇÃO E MÉTRICAS (Fixo/Lateral) */}
      <div className="w-1/4 p-6 bg-gray-50 border-r border-gray-200">
        <IdentificationBlock patient={patient} />
      </div>

      {/* BLOC 2: LINHA DO TEMPO (Central - 50% do espaço) */}
      <div className="w-2/4 overflow-y-auto p-6">
        <Timeline 
          history={filteredAndSortedHistory} // Passa a lista calculada
          filter={filter} 
          setFilter={setFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
      />
      </div>

      {/* BLOC 3: AÇÕES E REGISTRO (Lateral - 25% do espaço) */}
      <div className="w-1/4 p-6 bg-gray-100 border-l border-gray-200">
        <ActionsBlock patientId={patient.id} setPatient={setPatient} />
      </div>
    </div>
  );
}
