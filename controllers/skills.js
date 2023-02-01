module.exports = {
    index,
    show,
    add: addSkill,
    create
};

const skills = require('../models/skills');

function index(req, res) {
    res.render('dev-skills/index', {
        skills: skills.getAll(),
        title: "Main Skill Page"
    });
}

function show(req, res) {
    res.render('dev-skills/show', {
        skills: skills.getOne(req.params.id),
        title: 'Current Skill'
    });
}
function addSkill(req, res) {
    res.render('dev-skills/add', {title: "Add New Skill"}) 
}
function create(req, res) {
    console.log(req.body);
    skills.create(req.body)
    res.redirect('/')
}