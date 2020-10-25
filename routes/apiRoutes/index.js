const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'))
module.exports = router;

// express = require('express');
// const router = express.Router();
// router.use(require('./candidateRoutes'));
// router.use(require('./partyRoutes'));
// router.use(require('./voterRoutes'));
// //const router = express();
// //const apiRoutes = require('/apiRoutes');

// // Express middleware
// router.use(express.urlencoded({ extended: false }));
// router.use(express.json());

// //app.use('/api', apiRoutes);

// router.use(require('./candidateRoutes'));
// router.use(require('./voterRoutes'));
// router.use(require('./partyRoutes'));
// module.exports = router;