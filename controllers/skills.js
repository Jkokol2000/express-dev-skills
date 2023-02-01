module.exports = {
    index,
    show
};

const skills = require('../models/skills');

function index(req, res) {
    res.render('dev-skills/index', {
        skills: skills.getAll()
    });
}

function show(req, res) {
    res.render('dev-skills/show', {
        skills: skills.getOne(req.params.id)
    });
}