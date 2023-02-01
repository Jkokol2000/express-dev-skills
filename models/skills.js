const skills = [
    {skill: "HTML", proficiency: "Proficiant", description: "Able to accurately create webpages with pure HTML and easily use most HTML methods.", id: 123},
    {skill: "CSS", proficiency: "Somewhat Proficiant", description: "Able to style webpages using CSS, still learning about CSS variables and some minor applications.", id: 456},
    {skill: "Javascript", proficiency: "Somewhat Proficiant", description: "Able to accurately create Javascript code, need to work on improving DRY applications of code.", id: 789},
    {skill: "Express", proficiency: "Not Proficiant... Yet!", description: "Currently Learning...Hopefully mastering!", id: 101}  
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