import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LayoutDashboard, UserCheck, LogOut } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/authStore';
import AttendancePage from './pages/AttendancePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default function App() {
  const { user, logout } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {user && (
          <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <h1 className="text-xl font-bold text-gray-900">AttendanceHub</h1>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {user.role === 'user' && (
                      <a
                        href="/"
                        className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                      >
                        <UserCheck className="h-5 w-5 mr-2" />
                        Attendance
                      </a>
                    )}
                    {user.role === 'admin' && (
                      <a
                        href="/dashboard"
                        className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                      >
                        <LayoutDashboard className="h-5 w-5 mr-2" />
                        Dashboard
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => logout()}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>
        )}

        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <AttendancePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </div>
      <Toaster position="top-right" />
    </Router>
  );
}