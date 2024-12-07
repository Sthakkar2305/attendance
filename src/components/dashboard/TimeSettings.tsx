import React from 'react';
import { Clock } from 'lucide-react';
import { useAdminStore } from '../../store/adminStore';

export default function TimeSettings() {
  const { attendanceStartTime, attendanceEndTime, setAttendanceTime } = useAdminStore();

  const handleTimeChange = (type: 'start' | 'end', value: string) => {
    if (type === 'start') {
      setAttendanceTime(value, attendanceEndTime);
    } else {
      setAttendanceTime(attendanceStartTime, value);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-bold">Attendance Time Settings</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Time
          </label>
          <input
            type="time"
            value={attendanceStartTime}
            onChange={(e) => handleTimeChange('start', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Time
          </label>
          <input
            type="time"
            value={attendanceEndTime}
            onChange={(e) => handleTimeChange('end', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}