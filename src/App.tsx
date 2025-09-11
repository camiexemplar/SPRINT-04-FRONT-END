import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard } from "./pages/main-dashboard";
import FileUploader from "./components/FileUploader";
import { PatientHistory } from "./pages/patient-history";
import { HelpVideos } from "./pages/patient-videos";
import { SendAlerts } from "./pages/patient-alerts";
import Layout from "./components/layout";
import { ValidateForm } from "./components/ValidateForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} /> {/* rota inicial */}
          <Route path="/importar" element={<FileUploader />} />
          <Route path="/historico" element={<PatientHistory />} />
          <Route path="/videos" element={<HelpVideos />} />
          <Route path="/alertas" element={<SendAlerts />} />
          <Route path="/validacao" element={<ValidateForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;