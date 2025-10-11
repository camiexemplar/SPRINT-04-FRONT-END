import { useState } from "react";
import type { LinhaDoTempoDTO } from "../../../types/Patient";

export function useTimelineLogic(rawHistory: LinhaDoTempoDTO[] | undefined) {
    const [filter, setFilter] = useState<"TODOS" | LinhaDoTempoDTO["type"]>("TODOS");
    const [sortOrder, setSortOrder] = useState<"RECENTE" | "ANTIGA">("RECENTE");

    const historyToUse = rawHistory || [];

    const filteredAndSortedHistory = historyToUse
        .filter((item) => filter === "TODOS" || item.type === filter)
        .sort((a, b) => {
            const timestampA = new Date(`${a.date}T${a.time}`).getTime();
            const timestampB = new Date(`${b.date}T${b.time}`).getTime();

            if (isNaN(timestampA) || isNaN(timestampB)) return 0;

            return sortOrder === "RECENTE" ? timestampB - timestampA : timestampA - timestampB;
        });

    return {
        filter,
        setFilter,
        sortOrder,
        setSortOrder,
        filteredAndSortedHistory,
    };
}