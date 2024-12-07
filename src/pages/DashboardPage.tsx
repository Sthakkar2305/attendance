import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import AttendanceStats from '../components/dashboard/AttendanceStats';
import LeaveManagement from '../components/dashboard/LeaveManagement';
import UserManagement from '../components/dashboard/UserManagement';
import TimeSettings from '../components/dashboard/TimeSettings';

export default function DashboardPage() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  // Redirect non-admin users
  React.useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user || user.role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="space-y-8">
          <AttendanceStats />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TimeSettings />
            <LeaveManagement />
          </div>
          <UserManagement />
        </div>
      </div>
    </div>
  );
}