import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/mainDashboard";
import FileUploader from "./components/FileUploader";
import { HelpVideos } from "./pages/patientVideos";
import { SendAlerts } from "./pages/patientAlerts";
import Layout from "./components/Layout";
import PatientHistory from "./pages/patientHistory";
import ValidateForm from "./components/ValidateForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/importar" element={<FileUploader />} />
          <Route path="/validate" element={<ValidateForm />} />
          <Route path="/historico" element={<PatientHistory />} />
          <Route path="/videos" element={<HelpVideos />} />
          <Route path="/alertas" element={<SendAlerts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;