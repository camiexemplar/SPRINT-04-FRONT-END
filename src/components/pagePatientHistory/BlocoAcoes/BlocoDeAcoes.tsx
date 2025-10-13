import { type Dispatch, type SetStateAction } from "react";
import type { DadosPaciente } from "../../../types/Paciente";
import { AnotacoesCard } from "./AnotacoesCard";

export interface BlocoDeAcoesProps {
  idPaciente: string;
  setPaciente: Dispatch<SetStateAction<DadosPaciente | null>>;
}

export function BlocoDeAcoes({ idPaciente: idPaciente, setPaciente: setPaciente }: BlocoDeAcoesProps) {
  return (
    <div className="sticky top-0 space-y-6">
      <AnotacoesCard idPaciente={idPaciente} setPaciente={setPaciente} />

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-700">AÇÕES RÁPIDAS</h3>
        <button className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-200">
          Reenviar Link/Lembrete
        </button>
        <button className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-200">
          Ligar/Contato
        </button>
      </div>
    </div>
  );
}
