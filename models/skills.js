const skills = [
    {skill: "HTML", proficiancy: "Proficiant", mastered: true, id: 123},
    {skill: "CSS", proficiancy: "Somewhat Proficiant", mastered: false, id: 456},
    {skill: "Javascript", proficiancy: "Somewhat Proficiant", mastered: false, id: 789},
    {skill: "Express", proficiancy: "Not Proficiant... Yet!", mastered: false, id: 101}  
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