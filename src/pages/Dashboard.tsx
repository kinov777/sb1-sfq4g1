import React from 'react'
import { BarChart2, Users, TrendingUp, Globe } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Website Traffic" value="15,234" icon={<Globe size={24} />} />
        <DashboardCard title="Social Engagement" value="5,678" icon={<Users size={24} />} />
        <DashboardCard title="SEO Score" value="85/100" icon={<TrendingUp size={24} />} />
        <DashboardCard title="Campaigns" value="12" icon={<BarChart2 size={24} />} />
      </div>
    </div>
  )
}

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  )
}

export default Dashboard