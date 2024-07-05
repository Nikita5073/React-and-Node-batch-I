//5.Create an object named project with at least 5 keys (e.g., projectId, projectName, deadline, teamMembers, tasks). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

const project = {
    projectId: 202,
    projectName: "Website Redesign",
    deadline: "2024-12-31",
    teamMembers: ["Nikita", "Shruti", "Vishal"],
    tasks: ["Design", "Development", "Testing"]
};

function printproject({projectId,projectName,deadline,teamMembers,tasks})
{
    console.log("projectInformation:");
    console.log(`ProjectId:${projectId}`);
    console.log(`ProjectName:${projectName}`);
    console.log(`Deadline:${deadline}`);
    console.log(`TeamMembers:${teamMembers}`);
    console.log(`Tasks:${tasks}`);

    printteamMembers(teamMembers);

    printKeys(project);
}

function printteamMembers(teamMembers)
{
    teamMembers.forEach(teamMember => console.log(teamMember));
}

function printKeys({projectId,projectName,deadline,teamMembers,tasks})
{
    console.log("ProjectId:",projectId);
    console.log("ProjectName:",projectName);
    console.log("Deadline:",deadline);
    console.log("TeamMembers:",teamMembers);
    console.log("Tasks:",tasks);
}

printproject(project);
