export interface ScoreDeRiscoProps {
  scoreDeRisco: number | null;
  nivelDeRisco: 'ALTO' | 'MEDIO' | 'BAIXO' | null;
} 

export function ScoreDeRiscoCard({ scoreDeRisco: scoreDeRisco, nivelDeRisco: nivelDeRisco }: ScoreDeRiscoProps) {
  const classificacaoScore =
    nivelDeRisco === "ALTO"
      ? "bg-red-500"
      : nivelDeRisco === "MEDIO"
      ? "bg-yellow-500"
      : "bg-green-500";

    return (
      <div className="relative">
            {scoreDeRisco == null && nivelDeRisco == null ? (
            <p className="text-center text-gray-500 p-8 bg-white rounded-lg">
                Não há score de risco disponível para este paciente.
            </p>
            ) : (
            <div className={`p-4 rounded-lg text-white shadow-md mt-6 ${classificacaoScore}`}>
                <div className="font-bold uppercase text-sm">Score de Risco de Absenteísmo Atual:</div>
                <div className="text-3xl font-extrabold flex justify-between items-center">
                  {scoreDeRisco && <span>{scoreDeRisco.toFixed(1)}/10</span>}
                </div>
            </div>
            )}
        </div>
        
    );
}