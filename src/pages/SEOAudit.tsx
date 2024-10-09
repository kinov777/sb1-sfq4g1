import React, { useState } from 'react'
import { Search, CheckCircle, XCircle } from 'lucide-react'

const SEOAudit = () => {
  const [url, setUrl] = useState('')
  const [auditResults, setAuditResults] = useState(null)

  const handleAudit = () => {
    // Simulated audit results
    setAuditResults({
      score: 75,
      issues: [
        { name: 'Meta Description', status: 'good' },
        { name: 'Page Speed', status: 'warning' },
        { name: 'Broken Links', status: 'good' },
        { name: 'Mobile Friendliness', status: 'error' },
      ],
    })
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">SEO Audit</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex mb-6">
          <input
            type="text"
            className="flex-grow border rounded-l px-3 py-2"
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r flex items-center"
            onClick={handleAudit}
          >
            <Search className="mr-2" size={20} />
            Run Audit
          </button>
        </div>
        {auditResults && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Audit Results</h2>
            <p className="text-2xl font-bold mb-4">SEO Score: {auditResults.score}/100</p>
            <ul className="space-y-2">
              {auditResults.issues.map((issue, index) => (
                <li key={index} className="flex items-center">
                  {issue.status === 'good' ? (
                    <CheckCircle className="text-green-500 mr-2" size={20} />
                  ) : issue.status === 'warning' ? (
                    <XCircle className="text-yellow-500 mr-2" size={20} />
                  ) : (
                    <XCircle className="text-red-500 mr-2" size={20} />
                  )}
                  {issue.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default SEOAudit