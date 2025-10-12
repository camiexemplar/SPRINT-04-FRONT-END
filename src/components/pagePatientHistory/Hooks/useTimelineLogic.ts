import { useState } from "react";
import type { LinhaDoTempoDTO } from "../../../types/Paciente";

export function useTimelineLogic(rawHistory: LinhaDoTempoDTO[] | undefined) {
  const [filter, setFilter] = useState<"TODOS" | LinhaDoTempoDTO["tipo"]>(
    "TODOS"
  );
  const [sortOrder, setSortOrder] = useState<"RECENTE" | "ANTIGA">("RECENTE");

  const historyToUse = rawHistory || [];

  const filteredAndSortedHistory = historyToUse
    .filter((item) => filter === "TODOS" || item.tipo === filter)
    .sort((a, b) => {
      const timestampA = new Date(`${a.data}T${a.hora}`).getTime();
      const timestampB = new Date(`${b.data}T${b.hora}`).getTime();

      if (isNaN(timestampA) || isNaN(timestampB)) return 0;

      return sortOrder === "RECENTE"
        ? timestampB - timestampA
        : timestampA - timestampB;
    });

  return {
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
    filteredAndSortedHistory,
  };
}
