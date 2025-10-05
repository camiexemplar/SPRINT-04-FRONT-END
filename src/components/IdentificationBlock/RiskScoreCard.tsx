export interface RiskScoreCardProps {
  riskScore: number;
  riskLevel: 'ALTO' | 'MEDIO' | 'BAIXO';
}

export function RiskScoreCard({ riskScore, riskLevel }: RiskScoreCardProps) {
    // 1. Lógica para definir a cor (Operador Ternário)
  const scoreColorClass =
    riskLevel === "ALTO"
      ? "bg-red-500"
      : riskLevel === "MEDIO"
      ? "bg-yellow-500"
      : "bg-green-500"; // Assume 'BAIXO' para qualquer outro caso

    return (
        <div
            className={`p-4 rounded-lg text-white shadow-md mt-6 ${scoreColorClass}`}
        >
            <div className="font-bold uppercase text-sm">Score de Risco de Absenteísmo Atual:</div>
            <div className="text-3xl font-extrabold flex justify-between items-center">
            {/* Exibindo o score com uma casa decimal */}
            <span>{riskScore.toFixed(1)}/10</span>
            </div>
        </div>
    );
}