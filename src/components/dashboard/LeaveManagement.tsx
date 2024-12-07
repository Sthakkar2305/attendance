import React, { useState } from 'react';
import { Calendar, CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';
import { LeaveRequest } from '../../types';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

export default function LeaveManagement() {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    {
      id: '1',
      userId: 'user1',
      startDate: '2024-03-20',
      endDate: '2024-03-22',
      reason: 'Family vacation',
      status: 'pending',
      type: 'vacation'
    },
    {
      id: '2',
      userId: 'user2',
      startDate: '2024-03-25',
      endDate: '2024-03-26',
      reason: 'Medical appointment',
      status: 'pending',
      type: 'sick'
    }
  ]);

  const handleApprove = (requestId: string) => {
    setLeaveRequests(requests =>
      requests.map(request =>
        request.id === requestId
          ? { ...request, status: 'approved' }
          : request
      )
    );
    toast.success('Leave request approved');
  };

  const handleReject = (requestId: string) => {
    setLeaveRequests(requests =>
      requests.map(request =>
        request.id === requestId
          ? { ...request, status: 'rejected' }
          : request
      )
    );
    toast.error('Leave request rejected');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Calendar className="h-6 w-6 text-blue-600" />
        Leave Requests Management
      </h2>

      <div className="space-y-6">
        {leaveRequests.map((request) => (
          <div
            key={request.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">Leave Request #{request.id}</h3>
                <p className="text-gray-600 text-sm">
                  {format(new Date(request.startDate), 'MMM dd, yyyy')} -{' '}
                  {format(new Date(request.endDate), 'MMM dd, yyyy')}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(
                  request.status
                )}`}
              >
                <div className="flex items-center gap-1">
                  {getStatusIcon(request.status)}
                  <span className="capitalize">{request.status}</span>
                </div>
              </span>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Type:</span>{' '}
                <span className="capitalize">{request.type}</span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Reason:</span> {request.reason}
              </p>
            </div>

            {request.status === 'pending' && (
              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(request.id)}
                  className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <CheckCircle className="h-4 w-4" />
                  Approve
                </button>
                <button
                  onClick={() => handleReject(request.id)}
                  className="flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  <XCircle className="h-4 w-4" />
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}

        {leaveRequests.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No leave requests pending
          </div>
        )}
      </div>
    </div>
  );
}