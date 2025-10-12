export interface ScoreDeRiscoProps {
  scoreDeRisco: number;
  nivelDeRisco: 'ALTO' | 'MEDIO' | 'BAIXO';
}

export function ScoreDeRiscoCard({ scoreDeRisco: scoreDeRisco, nivelDeRisco: nivelDeRisco }: ScoreDeRiscoProps) {
  const classificacaoScore =
    nivelDeRisco === "ALTO"
      ? "bg-red-500"
      : nivelDeRisco === "MEDIO"
      ? "bg-yellow-500"
      : "bg-green-500";

    return (
        <div
            className={`p-4 rounded-lg text-white shadow-md mt-6 ${classificacaoScore}`}
        >
            <div className="font-bold uppercase text-sm">Score de Risco de Absenteísmo Atual:</div>
            <div className="text-3xl font-extrabold flex justify-between items-center">
            <span>{scoreDeRisco.toFixed(1)}/100</span>
            </div>
        </div>
    );
}