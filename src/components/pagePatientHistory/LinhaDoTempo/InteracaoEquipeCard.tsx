import type { InteracaoEquipe } from "../../../types/Paciente";

export interface InteracaoEquipeCardProps {
  interacaoEquipe: InteracaoEquipe;
}

export function InteracaoEquipeCard({
  interacaoEquipe: interacaoEquipe,
}: InteracaoEquipeCardProps) {
  return (
    <div className="p-4 border-l-4 border-blue-500 bg-white rounded-lg shadow-sm mb-4">
      <h4 className="font-bold text-gray-800">ANOTAÇÃO DA EQUIPE</h4>
      <p className="text-sm text-gray-700 mt-1 italic">
        {interacaoEquipe.anotacao}
      </p>
      <p className="text-xs text-gray-500 mt-2">
        Registrado por: {interacaoEquipe.nomeUsuario} em {interacaoEquipe.data}{" "}
        às {interacaoEquipe.hora}
      </p>
    </div>
  );
}
