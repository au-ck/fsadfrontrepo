import { BrowserRouter } from "react-router-dom"
import MainNavBar from "./main/MainNavBar"
import DoctorNavBar from './Doctor/DoctorNavBar';
import PatientNavBar from './Patient/PatientNavBar';
import { AuthProvider, useAuth } from "./contextapi/AuthContext";
import AdminNavBar from './Admin/AdminNavBar';


function AppContent() {
  const { isAdminLoggedIn, isPatientLoggedIn, isDoctorLoggedIn } = useAuth();
  return (
  <div>
<BrowserRouter>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isPatientLoggedIn ? (
          <PatientNavBar/>
        ) : isDoctorLoggedIn ? (
          <DoctorNavBar/>
        ) : (
          <MainNavBar />
        )}
        {/* <PatientNavBar/> */}
        {/* <AdminNavBar/> */}
        {/* <DoctorNavBar/> */}
        {/* <MainNavBar/> */}
      </BrowserRouter>   
  </div>
  )
}
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App
