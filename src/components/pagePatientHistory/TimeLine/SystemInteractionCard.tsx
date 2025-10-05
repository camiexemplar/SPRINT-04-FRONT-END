import type { SystemInteraction } from "../../../types/Patient";

export interface SystemInteractionCardProps {
    systemInteraction: SystemInteraction;
}

export function SystemInteractionCard({ systemInteraction }: SystemInteractionCardProps) {
    return (
        <div className="p-4 border-l-4 border-teal-500 bg-white rounded-lg shadow-sm mb-4">
            <h4 className="font-bold text-gray-800">INTERAÇÃO DO SISTEMA</h4>
            <p className="text-sm text-gray-700 mt-1">{systemInteraction.log}</p>
            <p className="text-xs text-gray-500 mt-2">Ocorrido em {systemInteraction.date} às {systemInteraction.time}</p>
        </div>
    );
}