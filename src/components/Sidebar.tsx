import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart2, FileText, Search, Share2, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h2 className="text-2xl font-semibold text-center mb-6">Agency Dashboard</h2>
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <BarChart2 className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link to="/reports" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <FileText className="inline-block mr-2" size={20} />
          Reports
        </Link>
        <Link to="/seo-audit" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Search className="inline-block mr-2" size={20} />
          SEO Audit
        </Link>
        <Link to="/social-media" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Share2 className="inline-block mr-2" size={20} />
          Social Media
        </Link>
      </nav>
      <div className="absolute bottom-0 w-full pb-6 px-2">
        <button
          onClick={logout}
          className="w-full flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <LogOut className="inline-block mr-2" size={20} />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar