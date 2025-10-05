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
        name={patient.name}
        phone={patient.phone}
        accompanying={patient.accompanying}
        accompanyingPhone={patient.accompanyingPhone}
      />

      <RiskScoreCard 
        riskScore={patient.riskScore}
        riskLevel={patient.riskLevel} 
       />  

      <FactorsList
        contributingFactors={patient.contributingFactors}
      />  

      <NextAppointmentCard
        nextAppointment={patient.nextAppointment}
      />
    </div>
  );
}
