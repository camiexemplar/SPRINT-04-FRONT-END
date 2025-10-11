export interface PatientData {
  idPaciente: string; 
  nomePaciente: string;
  telefonePaciente: string;
  acompanhante: Acompanhante;
  scoreDeRisco: number;
  nivelDeRisco: 'ALTO' | 'MEDIO' | 'BAIXO';
  fatoresDeRisco: string[];
  proximaConsulta: ConsultaDTO;
  linhaDoTempo: LinhaDoTempoDTO[];
}

export interface Acompanhante {
  nomeCuidador: string | null;
  telefoneCuidador: string | null;
}
export interface ConsultaDTO {
  dataConsulta: string;
  horaConsulta: string;
  nomeMedico: string;
  especialidadeConsulta: string;
}

export type InteractionType = 'CONSULTA' | 'INTERACAO_SISTEMA' | 'ANOTACAO_EQUIPE';

export interface BaseInteraction {
  id: string;
  type: InteractionType;
  date: string;
  time: string;
}

export interface TeamNoteInteraction extends BaseInteraction {
  type: 'ANOTACAO_EQUIPE';
  note: string;
  userId: string;
  userName: string;
}

export interface ConsultationInteraction extends BaseInteraction {
  type: 'CONSULTA';
  status: 'Realizada' | 'Faltou' | 'Agendada';
  modality: 'Telefone' | 'Vídeo' | 'Presencial' | 'Híbrida';
  professional: string;
  specialty: string;
}

export interface SystemInteraction extends BaseInteraction {
  type: 'INTERACAO_SISTEMA';
  log: string;
}

export type LinhaDoTempoDTO = ConsultationInteraction | SystemInteraction | TeamNoteInteraction;