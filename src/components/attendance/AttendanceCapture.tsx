import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Camera } from 'lucide-react';

export default function AttendanceCapture() {
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      // Handle image capture - in a real app, you'd send this to your backend
      console.log('Image captured');
    }
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Attendance Check-In</h2>
      <div className="relative">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="w-full rounded-lg"
        />
        <button
          onClick={capture}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Camera className="w-5 h-5" />
          Capture & Check-In
        </button>
      </div>
    </div>
  );
}