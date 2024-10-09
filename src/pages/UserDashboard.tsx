import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface UserDashboardData {
  assignedTasks: number;
  completedTasks: number;
  teamPerformance: string;
  nextMeeting: string;
}

const UserDashboard: React.FC = () => {
  const { logout } = useAuth();
  const [dashboardData, setDashboardData] = useState<UserDashboardData | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/dashboard', {
          headers: {
            'x-auth-token': localStorage.getItem('token') || '',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">User Dashboard</h1>
      {dashboardData ? (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Assigned Tasks</h2>
            <p className="text-3xl">{dashboardData.assignedTasks}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Completed Tasks</h2>
            <p className="text-3xl">{dashboardData.completedTasks}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Team Performance</h2>
            <p className="text-3xl">{dashboardData.teamPerformance}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Next Meeting</h2>
            <p className="text-3xl">{new Date(dashboardData.nextMeeting).toLocaleString()}</p>
          </div>
        </div>
      ) : (
        <p>Loading dashboard data...</p>
      )}
      <button
        onClick={logout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default UserDashboard;