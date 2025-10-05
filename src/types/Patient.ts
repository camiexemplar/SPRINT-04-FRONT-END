export interface PatientData {
  id: string; 
  name: string;
  phone: string;
  accompanying: string | null;
  accompanyingPhone?: string | null;
  riskScore: number;
  riskLevel: 'ALTO' | 'MEDIO' | 'BAIXO';
  contributingFactors: string[];
  nextAppointment: NextAppointment;
  history: PatientInteraction[];
}

export interface NextAppointment {
  date: string;
  time: string;
  professional: string;
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

export type PatientInteraction = ConsultationInteraction | SystemInteraction | TeamNoteInteraction;