export interface IdentificationBlockProps {
    name: string;
    phone: string;
    accompanying: string | null;
    accompanyingPhone?: string | null;
}

export function IdentificationCard({ name, phone, accompanying, accompanyingPhone }: IdentificationBlockProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">PACIENTE:</h2>

            <p className="font-bold text-xl text-blue-800">{name}</p>
            <p className="text-sm text-gray-500">Celular: {phone}</p>
            {accompanying && (
                <p className="text-sm text-orange-400 mt-1">Acompanhante: {accompanying}</p>
            )}
            
            {accompanyingPhone && (
                <p className="text-sm text-gray-500">Celular acompanhante: {accompanyingPhone}</p>
            )}
        </div>
    );
}