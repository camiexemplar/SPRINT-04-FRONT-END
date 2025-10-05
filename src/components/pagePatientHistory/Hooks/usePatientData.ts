import { useEffect, useState } from "react";
import type { PatientData, PatientInteraction } from "../../../types/Patient";

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
      "Baixa Afinidade Digital",
    ],
    nextAppointment: {
      date: "2025-07-10",
      time: "09:00",
      professional: "Dr. Silva",
    },
    history: [
      {
        id: "sys-005",
        date: "2025-07-05",
        time: "14:10",
        type: "INTERACAO_SISTEMA",
        log: "Alerta de risco emitido: Score subiu para 8.5 devido a 24h sem visualização do link.",
      },
      {
        id: "note-1",
        date: "2025-07-01",
        time: "11:30",
        type: "ANOTACAO_EQUIPE",
        note: "Tentativa de contato telefônico sem sucesso. Deixada mensagem de voz com instruções.",
        userId: "user-123",
        userName: "Enfermeira Maria",
      },
      {
        id: "cons-008",
        date: "2025-06-30",
        time: "10:00",
        type: "CONSULTA",
        status: "Faltou",
        modality: "Vídeo",
        professional: "Dr. Ricardo Torres",
        specialty: "Cardiologia",
      },
      {
        id: "sys-004",
        date: "2025-06-29",
        time: "18:00",
        type: "INTERACAO_SISTEMA",
        log: "Lembrete 24h da consulta com Dr. Torres enviado e visualizado (via WhatsApp).",
      },
      {
        id: "cons-007",
        date: "2025-06-15",
        time: "14:00",
        type: "CONSULTA",
        status: "Realizada",
        modality: "Presencial",
        professional: "Dra. Ana Costa",
        specialty: "Fisioterapia",
      },
    ] as PatientInteraction[],
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
        userName: "Enfermeira Carla",
      },
    ],
  },
];

const fetchPatientData = (id: string) => {
  return mockData.find((p) => p.id === id) || null;
};

export function usePatientData() {
  const [patientId, setPatientId] = useState<string | null>(null);
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!patientId) {
        setPatient(null);
        return;
    }

    setLoading(true);
    setPatient(null); 

    setTimeout(() => {

        const fetchedData = fetchPatientData(patientId);

        setPatient(fetchedData);
        setLoading(false);
    }, 1500);
    }, [patientId]); 

  return {
    patientId,
    setPatientId,
    patient,
    setPatient,
    loading,
  };
}