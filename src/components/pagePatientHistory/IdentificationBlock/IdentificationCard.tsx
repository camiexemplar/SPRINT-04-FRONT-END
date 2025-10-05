export interface IdentificationBlockProps {
    name: string;
    phone: string;
}

export function IdentificationCard({ name, phone }: IdentificationBlockProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700">IDENTIFICAÇÃO:</h2>

            {/* Exibir o Nome e Telefone (RF02) */}
            <p className="font-bold text-xl text-blue-800">{name}</p>
            <p className="text-sm text-gray-500">Celular: {phone}</p>
        </div>
    );
}