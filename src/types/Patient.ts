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

export interface ConsultationInteraction extends BaseInteraction {
  type: 'CONSULTA';
  status: 'Realizada' | 'Faltou' | 'Agendada';
  modality: 'Telefone' | 'Vídeo' | 'Presencial' | 'Híbrida';
  professional: string; // RF04
  specialty: string; // RF04
}

export interface SystemInteraction extends BaseInteraction {
  type: 'INTERACAO_SISTEMA';
  log: string; // Conteúdo da interação (ex: 'Lembrete enviado e visualizado')
}

export type PatientInteraction = ConsultationInteraction | SystemInteraction | TeamNoteInteraction;