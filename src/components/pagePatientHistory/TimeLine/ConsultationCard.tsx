import type { ConsultationInteraction } from "../../../types/Patient";

export interface ConsultationCardProps {
    consultationInteraction: ConsultationInteraction;
}

export function ConsultationCard({ consultationInteraction }: ConsultationCardProps) {
    const statusColor = consultationInteraction.status === 'Faltou' ? 'bg-red-500' : 
                      consultationInteraction.status === 'Realizada' ? 'bg-green-500' : 'bg-yellow-500';

    return (
        <div className="p-4 border-l-4 border-red-500 bg-white rounded-lg shadow-sm mb-4">
        <div className="flex justify-between items-start">
            <h4 className="font-bold text-gray-800">CONSULTA</h4>
            <div className={`px-2 py-0.5 text-xs font-semibold rounded text-white ${statusColor}`}>
            STATUS: {consultationInteraction.status.toUpperCase()}
            </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">Data: {consultationInteraction.date} - {consultationInteraction.time}</p>
        <p className="text-sm text-gray-600">Profissional: {consultationInteraction.professional} | Especialidade: {consultationInteraction.specialty}</p>
        <p className="text-sm text-gray-600">Modalidade: {consultationInteraction.modality}</p>
        </div>
    );
}