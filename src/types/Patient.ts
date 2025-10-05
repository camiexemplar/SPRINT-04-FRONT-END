export interface PatientData {
  id: string; 
  name: string;
  phone: string;
  riskScore: number;
  riskLevel: 'ALTO' | 'MEDIO' | 'BAIXO';
  contributingFactors: string[];
  nextAppointment: NextAppointment;
}

export interface NextAppointment {
  date: string;
  time: string;
  professional: string;
}
