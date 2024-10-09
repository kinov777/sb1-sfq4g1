import React, { useState } from 'react'
import { Calendar, Send, BarChart } from 'lucide-react'

const SocialMedia = () => {
  const [post, setPost] = useState('')
  const [scheduledDate, setScheduledDate] = useState('')

  const handleSchedulePost = () => {
    // Implement post scheduling logic here
    console.log('Post scheduled:', post, 'for', scheduledDate)
    setPost('')
    setScheduledDate('')
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Social Media Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Schedule Post</h2>
          <textarea
            className="w-full border rounded px-3 py-2 mb-4"
            rows={4}
            placeholder="Write your post here..."
            value={post}
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
          <div className="flex mb-4">
            <input
              type="datetime-local"
              className="flex-grow border rounded-l px-3 py-2"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-r flex items-center"
              onClick={handleSchedulePost}
            >
              <Calendar className="mr-2" size={20} />
              Schedule
            </button>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
            <Send className="mr-2" size={20} />
            Post Now
          </button>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Performance Insights</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Engagement Rate</h3>
              <div className="bg-gray-200 rounded-full h-4">
                <div className="bg-blue-500 rounded-full h-4 w-3/4"></div>
              </div>
              <p className="text-sm text-gray-600">75% (↑5% from last week)</p>
            </div>
            <div>
              <h3 className="font-semibold">Follower Growth</h3>
              <div className="bg-gray-200 rounded-full h-4">
                <div className="bg-green-500 rounded-full h-4 w-1/2"></div>
              </div>
              <p className="text-sm text-gray-600">50% (↑2% from last week)</p>
            </div>
          </div>
          <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded flex items-center">
            <BarChart className="mr-2" size={20} />
            View Detailed Analytics
          </button>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia