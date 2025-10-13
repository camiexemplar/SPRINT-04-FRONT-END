export interface PacienteCardProps {
  nome: string;
  telefone: string;
}

export function PacienteCard({ nome: nome, telefone: telefone }: PacienteCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">PACIENTE:</h2>

      <p className="font-bold text-xl text-blue-800">{nome}</p>
      <p className="text-sm text-gray-500">Celular: {telefone}</p>
    </div>
  );
}
