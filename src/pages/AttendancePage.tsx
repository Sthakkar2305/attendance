import React from 'react';
import AttendanceCapture from '../components/attendance/AttendanceCapture';
import LeaveRequest from '../components/attendance/LeaveRequest';

export default function AttendancePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Attendance Management</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AttendanceCapture />
          <LeaveRequest />
        </div>
      </div>
    </div>
  );
}