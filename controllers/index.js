const router = require('express').Router();

const apiRoutes = require('./api');
const routes = require('./routes');
const dashboardRoutes = require('./dashboard')
router.use('/', routes);
router.use('/dashboard', dashboardRoutes)
router.use('/api', apiRoutes);

module.exports = router;