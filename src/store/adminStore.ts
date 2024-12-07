import { create } from 'zustand';

interface AdminSettings {
  attendanceStartTime: string;
  attendanceEndTime: string;
  setAttendanceTime: (start: string, end: string) => void;
}

export const useAdminStore = create<AdminSettings>((set) => ({
  attendanceStartTime: '09:00',
  attendanceEndTime: '17:00',
  setAttendanceTime: (start, end) => set({ attendanceStartTime: start, attendanceEndTime: end }),
}));