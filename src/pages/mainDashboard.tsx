import React, { useState } from "react";

// Mock de dados para KPIs e alertas
const mockKPIs = {
  absenteismRate: 18, // %
  highRiskPatients: 4,
  todaysAppointments: 12
};

type Priority = "alto" | "medio" | "baixo";
interface Alert {
  id: number;
  maskedName: string;
  riskScore: number;
  nextAppointment: string;
  riskReason: string;
  priority: Priority;
}
const mockAlerts: Alert[] = [
  {
    id: 1,
    maskedName: "M*** S****",
    riskScore: 92,
    nextAppointment: "2025-09-21T09:00:00",
    riskReason: "Histórico de faltas",
    priority: "alto"
  },
  {
    id: 2,
    maskedName: "J*** P******",
    riskScore: 81,
    nextAppointment: "2025-09-21T11:30:00",
    riskReason: "Baixa afinidade digital",
    priority: "alto"
  },
  {
    id: 3,
    maskedName: "C*** L****",
    riskScore: 67,
    nextAppointment: "2025-09-22T14:00:00",
    riskReason: "Falha de contato",
    priority: "medio"
  },
  {
    id: 4,
    maskedName: "A*** F******",
    riskScore: 59,
    nextAppointment: "2025-09-23T10:00:00",
    riskReason: "Histórico de faltas",
    priority: "medio"
  },
  {
    id: 5,
    maskedName: "L*** T*****",
    riskScore: 45,
    nextAppointment: "2025-09-24T15:00:00",
    riskReason: "Baixa afinidade digital",
    priority: "baixo"
  }
];

const priorityColors: Record<Priority, string> = {
  alto: "#d32f2f",
  medio: "#fbc02d",
  baixo: "#388e3c"
};

const priorityLabels: Record<Priority, string> = {
  alto: "Alto Risco",
  medio: "Médio Risco",
  baixo: "Baixo Risco"
};

export function Dashboard() {
  const [priorityFilter, setPriorityFilter] = useState<string>("todos");
  const [sortDesc, setSortDesc] = useState(true);
  const [actionModal, setActionModal] = useState<{ open: boolean; patient?: Alert }>({ open: false });

  function handlePriorityFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setPriorityFilter(e.target.value);
  }

  function handleSort() {
    setSortDesc(s => !s);
  }

  function filteredAlerts(): Alert[] {
    let filtered = mockAlerts;
    if (priorityFilter !== "todos") {
      filtered = filtered.filter(a => a.priority === priorityFilter);
    }
    filtered = [...filtered].sort((a, b) => sortDesc ? b.riskScore - a.riskScore : a.riskScore - b.riskScore);
    return filtered;
  }

  function openActionModal(patient: Alert) {
    setActionModal({ open: true, patient });
  }
  function closeActionModal() {
    setActionModal({ open: false });
  }
  function submitAction(e: React.FormEvent) {
    e.preventDefault();
    closeActionModal();
    alert("Ação registrada!");
  }

  function goToHistory(patient: Alert) {
    alert(`Navegar para histórico de ${patient.maskedName}`);
  }

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" }) +
      " às " + date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }

  return (
    <div style={styles.container}>
      {/* KPIs */}
      <div style={styles.kpiRow}>
        <div style={styles.kpiBox}>
          <span style={styles.kpiLabel}>Taxa de Absenteísmo</span>
          <span style={{ ...styles.kpiValue, color: "#d32f2f" }}>{mockKPIs.absenteismRate}%</span>
        </div>
        <div style={styles.kpiBox}>
          <span style={styles.kpiLabel}>Pacientes em Alto Risco</span>
          <span style={{ ...styles.kpiValue, color: "#d32f2f" }}>{mockKPIs.highRiskPatients}</span>
        </div>
        <div style={styles.kpiBox}>
          <span style={styles.kpiLabel}>Consultas Agendadas Hoje</span>
          <span style={{ ...styles.kpiValue, color: "#1976d2" }}>{mockKPIs.todaysAppointments}</span>
        </div>
      </div>

      {/* Filtros */}
      <div style={styles.filterRow}>
        <label>
          Prioridade:
          <select value={priorityFilter} onChange={handlePriorityFilter} style={styles.select}>
            <option value="todos">Todas</option>
            <option value="alto">Alto Risco</option>
            <option value="medio">Médio Risco</option>
            <option value="baixo">Baixo Risco</option>
          </select>
        </label>
        <button style={styles.sortBtn} onClick={handleSort}>
          Ordenar por Score {sortDesc ? "↓" : "↑"}
        </button>
      </div>

      {/* Tabela de Alertas */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Paciente</th>
              <th style={styles.th}>Score de Risco</th>
              <th style={styles.th}>Próxima Consulta</th>
              <th style={styles.th}>Motivo do Risco</th>
              <th style={styles.th}>Prioridade</th>
              <th style={styles.th}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlerts().length === 0 ? (
              <tr><td colSpan={6} style={styles.emptyRow}>Nenhum alerta encontrado.</td></tr>
            ) : (
              filteredAlerts().map(alert => (
                <tr key={alert.id} style={{ background: "#fff" }}>
                  <td style={styles.td}>{alert.maskedName}</td>
                  <td style={{ ...styles.td, fontWeight: 700, color: priorityColors[alert.priority as Priority] }}>{alert.riskScore}</td>
                  <td style={styles.td}>{formatDate(alert.nextAppointment)}</td>
                  <td style={styles.td}>{alert.riskReason}</td>
                  <td style={{ ...styles.td, color: priorityColors[alert.priority as Priority], fontWeight: 600 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                      <span style={{ fontSize: 18 }}>●</span> {priorityLabels[alert.priority as Priority]}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <button style={styles.actionBtn} onClick={() => goToHistory(alert)}>Ver Histórico</button>
                    <button style={styles.actionBtn} onClick={() => openActionModal(alert)}>Registrar Ação</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal de ação rápida */}
      {actionModal.open && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalBox}>
            <h3>Registrar Ação para {actionModal.patient ? actionModal.patient.maskedName : ""}</h3>
            <form onSubmit={submitAction}>
              <textarea required placeholder="Descreva a ação tomada..." style={styles.textarea} />
              <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
                <button type="submit" style={styles.actionBtn}>Salvar</button>
                <button type="button" style={styles.actionBtn} onClick={closeActionModal}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Estilos inline para responsividade e identidade visual
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    background: "#f6f8fa",
    fontFamily: "Segoe UI, Arial, sans-serif",
    padding: 0,
    margin: 0,
    width: "100%",
    boxSizing: "border-box"
  },
  kpiRow: {
    display: "flex",
    gap: 24,
    justifyContent: "center",
    margin: "32px auto 16px auto",
    flexWrap: "wrap"
  },
  kpiBox: {
    background: "#fff",
    borderRadius: 10,
    boxShadow: "0 2px 8px #0001",
    padding: "18px 36px",
    minWidth: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  kpiLabel: {
    fontSize: 15,
    color: "#3949ab",
    marginBottom: 4
  },
  kpiValue: {
    fontSize: 32,
    fontWeight: 700
  },
  filterRow: {
    display: "flex",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    flexWrap: "wrap"
  },
  select: {
    marginLeft: 8,
    padding: "4px 8px",
    borderRadius: 4,
    border: "1px solid #b0bec5"
  },
  sortBtn: {
    background: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    padding: "6px 16px",
    fontWeight: 600,
    cursor: "pointer"
  },
  tableWrapper: {
    maxWidth: 1100,
    margin: "0 auto",
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 2px 12px #0001",
    padding: 16,
    overflowX: "auto"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  },
  th: {
    background: "#e3eafc",
    color: "#1a237e",
    fontWeight: 700,
    padding: "10px 8px",
    fontSize: 15,
    borderBottom: "2px solid #b0bec5"
  },
  td: {
    padding: "10px 8px",
    fontSize: 15,
    borderBottom: "1px solid #e3eafc"
  },
  emptyRow: {
    textAlign: "center",
    color: "#888",
    fontStyle: "italic",
    padding: 16
  },
  actionBtn: {
    background: "#3949ab",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    padding: "6px 12px",
    marginRight: 8,
    fontWeight: 600,
    cursor: "pointer"
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "#0007",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000
  },
  modalBox: {
    background: "#fff",
    borderRadius: 10,
    padding: 32,
    minWidth: 320,
    maxWidth: 400,
    boxShadow: "0 2px 16px #0002"
  },
  textarea: {
    width: "100%",
    minHeight: 60,
    borderRadius: 6,
    border: "1px solid #b0bec5",
    padding: 8,
    fontSize: 15
  }
};