export interface NextAppointmentCardProps {
  nextAppointment: {
    date: string;
    time: string;
    professional: string;
  };
}

export function NextAppointmentCard({ nextAppointment }: NextAppointmentCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            {" "}
            {/* Adicionei separador visual */}
            <h3 className="font-semibold text-gray-700 mb-2">PRÓXIMA CONSULTA</h3>
            <p className="text-sm text-gray-600">
            Data:{" "}
            <span className="font-medium">{nextAppointment.date}</span>
            </p>
            <p className="text-sm text-gray-600">
            Hora:{" "}
            <span className="font-medium">{nextAppointment.time}</span>
            </p>
            <p className="text-sm text-gray-600">
            Profissional:{" "}
            <span className="font-medium">
                {nextAppointment.professional}
            </span>
            </p>
        </div>
    );
}