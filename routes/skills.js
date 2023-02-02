const { Router } = require('express');
var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();

var skillsCtrl = require('../controllers/skills')
/* GET users listing. */

router.get('/', skillsCtrl.index)
router.get('/add', skillsCtrl.add);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id/edit', skillsCtrl.edit);
router.put('/:id', skillsCtrl.update);
// all actual paths start with "/skills"

module.exports = router;
