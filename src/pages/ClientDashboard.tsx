import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface ClientDashboardData {
  activeProjects: number;
  totalPosts: number;
  engagementRate: string;
  upcomingDeadlines: number;
}

const ClientDashboard: React.FC = () => {
  const { logout } = useAuth();
  const [dashboardData, setDashboardData] = useState<ClientDashboardData | null>(null);

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
      <h1 className="text-3xl font-semibold mb-6">Client Dashboard</h1>
      {dashboardData ? (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Active Projects</h2>
            <p className="text-3xl">{dashboardData.activeProjects}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Total Posts</h2>
            <p className="text-3xl">{dashboardData.totalPosts}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Engagement Rate</h2>
            <p className="text-3xl">{dashboardData.engagementRate}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Upcoming Deadlines</h2>
            <p className="text-3xl">{dashboardData.upcomingDeadlines}</p>
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

export default ClientDashboard;