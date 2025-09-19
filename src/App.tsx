import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileUploader from "./components/FileUploader";
import { HelpVideos } from "./pages/patientVideos";
import { SendAlerts } from "./pages/patientAlerts";
import Layout from "./components/Layout";
import PatientHistory from "./pages/patientHistory";
import ValidateForm from "./components/ValidateForm";
import { NotFound } from "./pages/NotFound";
import { Suspense } from "react";
import { Loading } from "./components/Loading";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./pages/FallbackScreen";
import { Dashboard } from "./pages/mainDashboard";


//lembrar de arrumar o lazy e suspense


function App() {
  return (
    <BrowserRouter>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/importar" element={<FileUploader />} />
          <Route path="/validate" element={<ValidateForm />} />
          <Route path="/historico" element={<PatientHistory />} />
          <Route path="/videos" element={<HelpVideos />} />
          <Route path="/alertas" element={<SendAlerts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>

    
  );
}

export default App;