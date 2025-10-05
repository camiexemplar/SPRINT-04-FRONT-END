export interface PatientData {
  id: string; 
  name: string;
  phone: string;
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
  id: string; // RN01: Todas as interações precisam de um ID
  type: InteractionType;
  date: string; // ISO string ou formato de data
  time: string;
}

export interface TeamNoteInteraction extends BaseInteraction {
  type: 'ANOTACAO_EQUIPE';
  note: string;
  userId: string; // RN03
  userName: string; // RN03
}

export type PatientInteraction = TeamNoteInteraction;