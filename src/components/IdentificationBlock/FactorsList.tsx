export interface FactorsListProps {
    contributingFactors: string[];
}

export function FactorsList({ contributingFactors }: FactorsListProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">
            FATORES CONTRIBUINTES:
            </h3>
            <ul className="text-sm space-y-1">
            {contributingFactors.map((factor, index) => (
                <li key={index} className="text-gray-600 flex items-center">
                <span className="mr-2 text-blue-500">•</span> {factor}
                </li>
            ))}
            </ul>
        </div>
    );
}