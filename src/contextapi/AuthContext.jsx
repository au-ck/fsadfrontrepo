import { createContext, useState, useContext, useEffect } from 'react';
const AuthContext = createContext();
export function AuthProvider({ children }) 
{
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem('isAdminLoggedIn') === 'true';
  });

  const [isPatientLoggedIn, setIsPatientLoggedIn] = useState(() => {
    return localStorage.getItem('isPatientLoggedIn') === 'true';
  });
  
  const [isDoctorLoggedIn, setIsDoctorLoggedIn] = useState(() => {
    return localStorage.getItem('isDoctorLoggedIn') === 'true';
  });
  useEffect(() => {
    localStorage.setItem('isAdminLoggedIn', isAdminLoggedIn);
    localStorage.setItem('isPatientLoggedIn', isPatientLoggedIn);
    localStorage.setItem('isDoctorLoggedIn', isDoctorLoggedIn);
  }, [isAdminLoggedIn, isPatientLoggedIn, isDoctorLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        isPatientLoggedIn,
        setIsPatientLoggedIn,
        isDoctorLoggedIn,
        setIsDoctorLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);