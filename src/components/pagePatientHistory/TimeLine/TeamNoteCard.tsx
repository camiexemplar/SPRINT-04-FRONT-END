import type { TeamNoteInteraction } from "../../../types/Patient";

export interface TeamNoteCardProps {
    teamNoteInteraction: TeamNoteInteraction;
}

export function TeamNoteCard({ teamNoteInteraction }: TeamNoteCardProps) {
    return (
        <div className="p-4 border-l-4 border-blue-500 bg-white rounded-lg shadow-sm mb-4">
            <h4 className="font-bold text-gray-800">ANOTAÇÃO DA EQUIPE</h4>
            <p className="text-sm text-gray-700 mt-1 italic">{teamNoteInteraction.note}</p>
            <p className="text-xs text-gray-500 mt-2">Registrado por: {teamNoteInteraction.userName} em {teamNoteInteraction.date} às {teamNoteInteraction.time}</p>
        </div>
    );
}