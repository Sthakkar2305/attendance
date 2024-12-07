import React from 'react';
import { UserCheck, UserX, Clock } from 'lucide-react';

export default function AttendanceStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-green-100 p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-600 text-sm font-medium">Present Today</p>
            <h3 className="text-2xl font-bold text-green-800">45</h3>
          </div>
          <UserCheck className="h-8 w-8 text-green-600" />
        </div>
      </div>

      <div className="bg-red-100 p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-red-600 text-sm font-medium">Absent Today</p>
            <h3 className="text-2xl font-bold text-red-800">5</h3>
          </div>
          <UserX className="h-8 w-8 text-red-600" />
        </div>
      </div>

      <div className="bg-yellow-100 p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-yellow-600 text-sm font-medium">Late Arrivals</p>
            <h3 className="text-2xl font-bold text-yellow-800">3</h3>
          </div>
          <Clock className="h-8 w-8 text-yellow-600" />
        </div>
      </div>
    </div>
  );
}