

// const db = require('../knex-config'); // Adjust the path to your database module

// // Function to get statistics
// exports.getStats = async (req, res) => {
//   try {
//     // Example implementation
//     const [totalUsersResult] = await db('users').count('id as count');
//     const totalUsers = totalUsersResult.count;

//     const [circleVotedResult] = await db('users').count('* as count').where('isVotedcircle', true);
//     const circleVotedCount = circleVotedResult.count;

//     const [partyVotedResult] = await db('users').count('* as count').where('isVotedparty', true);
//     const partyVotedCount = partyVotedResult.count;

//     const circleVotedPercentage = totalUsers > 0 ? (circleVotedCount / totalUsers) * 100 : 0;
//     const partyVotedPercentage = totalUsers > 0 ? (partyVotedCount / totalUsers) * 100 : 0;

//     res.json({
//       circleVotedCount,
//       circleVotedPercentage: circleVotedPercentage.toFixed(2),
//       partyVotedCount,
//       partyVotedPercentage: partyVotedPercentage.toFixed(2),
//     });
//   } catch (error) {
//     console.error('Error fetching statistics:', error.message);
//     res.status(500).json({ error: 'Failed to fetch statistics' });
//   }
// };

// // Get recent elections
// exports.getRecentElections = async (req, res) => {
//   try {
//     const recentElections = await db('elections_time')
//       .orderBy('start_date', 'desc')  // Ordering by start_date
//       .limit(10);
//     res.json(recentElections);
//   } catch (error) {
//     console.error('Error fetching recent elections:', error.message);
//     res.status(500).json({ message: 'Error fetching recent elections' });
//   }
// };

// // Add a new election
// exports.addElection = async (req, res) => {
//   const { startDate, endDate } = req.body;
//   try {
//     await db('elections_time').insert({
//       start_date: new Date(startDate),
//       end_date: new Date(endDate),
//     });
//     res.status(201).json({ message: 'Election time added successfully!' });
//   } catch (error) {
//     console.error('Error adding election:', error.message);
//     res.status(500).json({ error: 'Failed to add election time' });
//   }
// };

// // Get the upcoming election
// exports.getUpcomingElection = async (req, res) => {
//   try {
//     const [election] = await db('elections_time')
//       .where('start_date', '>', new Date())
//       .orderBy('start_date', 'asc')
//       .limit(1);

//     if (election) {
//       res.json(election);
//     } else {
//       res.status(404).json({ message: 'No upcoming elections' });
//     }
//   } catch (error) {
//     console.error('Error fetching upcoming election:', error.message);
//     res.status(500).json({ error: 'Failed to fetch upcoming election' });
//   }
// };

// // Get all election times
// exports.getElectionTimes = async (req, res) => {
//   try {
//     const electionTimes = await db('elections_time').select('*');
//     res.json(electionTimes);
//   } catch (error) {
//     console.error('Error fetching election times:', error.message);
//     res.status(500).send('Server error');
//   }
// };

// // Add or update an election time
// exports.addOrUpdateElectionTime = async (req, res) => {
//   const { id, start_date, end_date } = req.body;

//   try {
//     if (id) {
//       // Update existing election time
//       const [updatedElectionTime] = await db('elections_time')
//         .where({ id })
//         .update({ start_date, end_date })
//         .returning('*');
//       res.json(updatedElectionTime);
//     } else {
//       // Add new election time
//       const [newElectionTime] = await db('elections_time')
//         .insert({ start_date, end_date })
//         .returning('*');
//       res.json(newElectionTime);
//     }
//   } catch (error) {
//     console.error('Error adding or updating election time:', error.message);
//     res.status(500).send('Server error');
//   }
// };

// // Delete an election time
// exports.deleteElectionTime = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const rowsDeleted = await db('elections_time').where({ id }).del();
//     if (rowsDeleted) {
//       res.send('Election time deleted');
//     } else {
//       res.status(404).json({ message: 'Election time not found' });
//     }
//   } catch (error) {
//     console.error('Error deleting election time:', error.message);
//     res.status(500).send('Server error');
//   }
// };


// // // routes/statsRoutes.js
// // const express = require('express');
// // const router = express.Router();
// // const statsController = require('../controllers/statsController');

// // // Define routes
// // router.get('/', statsController.getStats);
// // router.get('/recent-elections', statsController.getRecentElections);
// // router.post('/elections', statsController.addElection);
// // router.get('/elections/upcoming', statsController.getUpcomingElection);



// // module.exports = router;


// // routes/statsRoutes.js
// const express = require('express');
// const router = express.Router();
// const statsController = require('../controllers/statsController');

// // Define routes
// router.get('/', statsController.getStats);
// router.get('/recent-elections', statsController.getRecentElections);
// router.post('/elections', statsController.addElection);
// router.get('/elections/upcoming', statsController.getUpcomingElection);

// module.exports = router;


const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController'); // Adjust the path to your controller

// Route to get statistics
router.get('/stats', statsController.getStats);

// Route to get recent elections
router.get('/recent-elections', statsController.getRecentElections);

// Route to add a new election
router.post('/elections', statsController.addElection);

// Route to get the upcoming election
router.get('/upcoming-election', statsController.getUpcomingElection);

// Route to get all election times
router.get('/election-times', statsController.getElectionTimes);

// Route to add or update an election time
router.post('/election-time', statsController.addOrUpdateElectionTime);

// Route to delete an election time
router.delete('/election-time/:id', statsController.deleteElectionTime);

module.exports = router;
