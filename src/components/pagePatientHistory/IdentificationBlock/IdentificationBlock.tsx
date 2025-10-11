import type { PatientData } from "../../../types/Patient";
import { FactorsList } from "./FactorsList";
import { IdentificationCard } from "./IdentificationCard";
import { NextAppointmentCard } from "./NextAppointmentCard";
import { RiskScoreCard } from "./RiskScoreCard";

export interface IdentificationBlockProps {
  patient: PatientData;
}

export function IdentificationBlock({ patient }: IdentificationBlockProps) {
  return (
    <div className="space-y-6">
      <IdentificationCard
        name={patient.nomePaciente}
        phone={patient.telefonePaciente}
        accompanying={patient.nomeCuidador}
        accompanyingPhone={patient.telefoneCuidador}
      />

      <RiskScoreCard 
        riskScore={patient.scoreDeRisco}
        riskLevel={patient.nivelDeRisco} 
       />  

      <FactorsList
        contributingFactors={patient.fatoresDeRisco}
      />  

      <NextAppointmentCard
        nextAppointment={patient.proximaConsulta}
      />
    </div>
  );
}
