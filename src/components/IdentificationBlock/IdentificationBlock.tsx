import type { PatientData } from "../../types/Patient";
import { FactorsList } from "./FactorsList";
import { IdentificationCard } from "./IdentificationCard";
import { NextAppointmentCard } from "./NextAppointmentCard";
import { RiskScoreCard } from "./RiskScoreCard";

export interface IdentificationBlockProps {
  patient: PatientData;
}

export function IdentificationBlock({ patient }: IdentificationBlockProps) {
  return (
    <div className="space-y-6"> {/* Espaçamento entre os blocos */}
      {/* 1. Bloco de Identificação */}
      <IdentificationCard
        name={patient.name}
        phone={patient.phone}
      />

      {/* 2. Bloco de Score de Risco */}
      <RiskScoreCard 
        riskScore={patient.riskScore}
        riskLevel={patient.riskLevel} 
       />  

      {/* FATORES CONTRIBUINTES (RF07) */}
      <FactorsList
        contributingFactors={patient.contributingFactors}
      />  

      {/* PRÓXIMA CONSULTA (RF03) */}
      <NextAppointmentCard
        nextAppointment={patient.nextAppointment}
      />
    </div>
  );
}
