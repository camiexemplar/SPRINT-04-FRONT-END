import { type Dispatch, type SetStateAction } from "react";
import type { PatientData } from "../../../types/Patient";
import { AnnotationCard } from "./AnnotationCard";

export interface ActionsBlockProps {
    patientId: string;
    setPatient: Dispatch<SetStateAction<PatientData | null>>;
}

export function ActionsBlock({ setPatient }: ActionsBlockProps) {
    
    return (
        <div className="sticky top-0 space-y-6">
            
            {/* ÁREA DE ANOTAÇÕES MANUAIS (RF01 - Anotações) */}
            <AnnotationCard
                setPatient={setPatient}
            />

            {/* AÇÕES RÁPIDAS */}
            <div className="space-y-3">
                <h3 className="font-semibold text-gray-700">AÇÕES RÁPIDAS</h3>
                <button className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-200">
                    Reenviar Link/Lembrete
                </button>
                <button className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-200">
                    Ligar/Contato
                </button>
                <button className="w-full flex items-center justify-center bg-gray-400 hover:bg-gray-500 text-white font-medium py-3 rounded-lg transition duration-200">
                    Editar Minhas Anotações (RF04 - Anotações)
                </button>
            </div>
        </div>
    );
}