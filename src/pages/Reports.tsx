import React from 'react'
import { FileText, Download, Mail } from 'lucide-react'

const Reports = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Reports</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Generate Custom Report</h2>
        <div className="flex space-x-4 mb-6">
          <input
            type="date"
            className="border rounded px-3 py-2"
            placeholder="Start Date"
          />
          <input
            type="date"
            className="border rounded px-3 py-2"
            placeholder="End Date"
          />
          <select className="border rounded px-3 py-2">
            <option>Website Traffic</option>
            <option>Social Media Engagement</option>
            <option>SEO Performance</option>
          </select>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <FileText className="mr-2" size={20} />
            Generate Report
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
            <Download className="mr-2" size={20} />
            Export as PDF
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded flex items-center">
            <Mail className="mr-2" size={20} />
            Email Report
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reports