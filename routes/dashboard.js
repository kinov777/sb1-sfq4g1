const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// @route   GET api/dashboard
// @desc    Get dashboard data
// @access  Private
router.get('/', auth, (req, res) => {
  try {
    // Simulated dashboard data
    const dashboardData = {
      admin: {
        totalUsers: 1000,
        totalClients: 50,
        revenueThisMonth: 50000,
        pendingTasks: 15
      },
      client: {
        activeProjects: 3,
        totalPosts: 150,
        engagementRate: '4.5%',
        upcomingDeadlines: 2
      },
      user: {
        assignedTasks: 5,
        completedTasks: 20,
        teamPerformance: '92%',
        nextMeeting: '2023-05-15T10:00:00Z'
      }
    };

    res.json(dashboardData[req.user.role]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;