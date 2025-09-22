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
import { LoginPage } from "./pages/loginPage";

// --- MUDANÇAS AQUI ---
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from "./components/ProtectedRoute"; // 1. Importe o ProtectedRoute

function App() {
  return (
    // 2. Envolva toda a aplicação com o AuthProvider
    <AuthProvider>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Rota de Login é pública, fica de fora da proteção */}
              <Route path="/login" element={<LoginPage />} />

              {/* 3. Use o ProtectedRoute para proteger o grupo de rotas privadas */}
              <Route element={<ProtectedRoute />}>
                <Route element={<Layout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/importar" element={<FileUploader />} />
                  <Route path="/validate" element={<ValidateForm />} />
                  <Route path="/historico" element={<PatientHistory />} />
                  <Route path="/videos" element={<HelpVideos />} />
                  <Route path="/alertas" element={<SendAlerts />} />
                </Route>
              </Route>

              {/* Rota para página não encontrada */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;