const skills = [
    {skill: "HTML", proficiancy: "Proficiant", id: 123},
    {skill: "CSS", proficiancy: "Somewhat Proficiant", id: 456},
    {skill: "Javascript", proficiancy: "Somewhat Proficiant", id: 789},
    {skill: "Express", proficiancy: "Not Proficiant... Yet!", id: 101}  
]

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skills => skills.id === id);
}

function getAll() {
    return skills
}