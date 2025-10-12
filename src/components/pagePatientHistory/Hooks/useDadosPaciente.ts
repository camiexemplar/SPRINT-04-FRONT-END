import { useEffect, useState } from "react";
import type { DadosPaciente, LinhaDoTempoDTO } from "../../../types/Paciente";

const mockData: DadosPaciente[] = [
  {
    idPaciente: "1",
    nomePaciente: "Vinicius Junior",
    telefonePaciente: "(11) 91234-5678",
    cuidador: {
      nomeCuidador: "Virginia",
      telefoneCuidador: "(11) 99876-5432",
    },
    scoreDeRisco: 8.5,
    nivelDeRisco: "ALTO",
    fatoresDeRisco: [
      "Faltou a consulta anterior",
      "Não respondeu ligações",
      "Baixa Afinidade Digital",
    ],
    proximaConsulta: {
      dataConsulta: "2025-07-10",
      horaConsulta: "09:00",
      nomeMedico: "Dr. Silva",
      especialidadeConsulta: "Clínico Geral",
    },
    linhaDoTempo: [
      {
        id: "sys-005",
        data: "2025-07-05",
        hora: "14:10",
        tipo: "INTERACAO_SISTEMA",
        log: "Alerta de risco emitido: Score subiu para 8.5 devido a 24h sem visualização do link.",
      },
      {
        id: "note-1",
        data: "2025-07-01",
        hora: "11:30",
        tipo: "ANOTACAO_EQUIPE",
        anotacao:
          "Tentativa de contato telefônico sem sucesso. Deixada mensagem de voz com instruções.",
        idUsuario: "user-123",
        nomeUsuario: "Enfermeira Maria",
      },
      {
        id: "cons-008",
        data: "2025-06-30",
        hora: "10:00",
        tipo: "CONSULTA",
        status: "Faltou",
        modalidade: "Vídeo",
        profissional: "Dr. Ricardo Torres",
        especialidade: "Cardiologia",
      },
      {
        id: "sys-004",
        data: "2025-06-29",
        hora: "18:00",
        tipo: "INTERACAO_SISTEMA",
        log: "Lembrete 24h da consulta com Dr. Torres enviado e visualizado (via WhatsApp).",
      },
      {
        id: "cons-007",
        data: "2025-06-15",
        hora: "14:00",
        tipo: "CONSULTA",
        status: "Realizada",
        modalidade: "Presencial",
        profissional: "Dra. Ana Costa",
        especialidade: "Fisioterapia",
      },
    ] as LinhaDoTempoDTO[],
  },
  {
    idPaciente: "2",
    nomePaciente: "Jane Smith",
    telefonePaciente: "987-654-3210",
    cuidador: {
      nomeCuidador: "Virginia",
      telefoneCuidador: "1199998888",
    },
    scoreDeRisco: 1.2,
    nivelDeRisco: "BAIXO",
    fatoresDeRisco: ["Não visualizou as mensagens"],
    proximaConsulta: {
      dataConsulta: "2024-07-15",
      horaConsulta: "14:30",
      nomeMedico: "Dra. Souza",
      especialidadeConsulta: "Oftalmologia",
    },
    linhaDoTempo: [
      {
        id: "note-3",
        data: "2024-06-05",
        hora: "11:00",
        tipo: "ANOTACAO_EQUIPE",
        anotacao: "Mensagem enviada, não visualizada.",
        idUsuario: "user-789",
        nomeUsuario: "Enfermeira Carla",
      },
    ],
  },
];

const fetchDadosPaciente = (id: string) => {
  return mockData.find((p) => p.idPaciente === id) || null;
};

export function useDadosPaciente() {
  const [idPaciente, setIdPaciente] = useState<string | null>(null);
  const [paciente, setPaciente] = useState<DadosPaciente | null>(null);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (!idPaciente) {
      setPaciente(null);
      return;
    }

    setCarregando(true);
    setPaciente(null);

    setTimeout(() => {
      const fetchedDados = fetchDadosPaciente(idPaciente);
      setPaciente(fetchedDados);
      setCarregando(false);
    }, 1500);
  }, [idPaciente]);

  return {
    idPaciente: idPaciente,
    setPatientId: setIdPaciente,
    paciente: paciente,
    setPaciente: setPaciente,
    carregando: carregando,
  };
}
