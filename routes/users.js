import express from "express";

const router = express.Router();

const users = [
{
"id": "recAGJfiU4CeaV0HL",
"order": 3,
"title": "Financial Advisor",
"dates": "December 2013 - Present",
"duties": [
"Much of the job involves tracking data and projecting future performances of various stocks, bonds, and funds. Financial advisors need to be able to apply this critical thinking to the needs of their clients.",
"Working with clients and prospective clients one-on-one is a big part of the job. This includes good listening skills, since it is vital that financial advisors thoroughly understand the goals of their clients",
"Clients need to be convinced that whatever advice they are getting from their financial advisor represents the best strategy for their money. It's my responsibility to be able to show clients why the advice they are giving is the best course of action."
],
"company": "Advising Juice d.o.o."
},
{
"id": "recIL6mJNfWObonls",
"order": 2,
"title": "Front-End Engineer",
"dates": "May 2018 - December 2021",
"duties": [
"One line of code can have a significant impact on a website’s functionality or appearance, and web developers need to be sure they aren’t missing key details. When troubleshooting, they need to be able to know where to look for the problem.",
"Websites need to be functional as well as attractive, and clients’ needs in these regards might not always be easy to meet. Web developers need to figure out how to translate a client’s vision to an actual, functional website.",
"Tight deadlines are common when designing or updating websites. Developers need to be able to handle the pressure of having work done when needed.",
"Projects aren’t always handled one at a time, and one client’s emergency sometimes can push another project to the backburner. Web developers need to be able to juggle multiple projects without missing deadlines."
],
"company": "Extreme Front-End d.o.o."
},
{
"id": "rec61x18GVY99hQq5",
"order": 1,
"title": "Project Manager",
"dates": "May 2016  - September 2020",
"duties": [
"Every project starts as an idea. It’s a project manager’s job to work with internal stakeholders and external clients to define that concept and create a process to bring it to fruition.",
"I'm accountable for every aspect of the project, including leading a team capable of meeting or exceeding client expectations for their vision. Successful project managers assemble and manage these individuals to make a fine-tuned project machine.",
"Organization and follow-through are a big part of a project manager’s job. From creating an accurate timeline of project completion to ensuring tasks are finished within the confines of the assignment, the project manager must remain aware of how the project is progressing."
],
"company": "Wildfire Project d.o.o."
},
]

router.get('/', (req, res) => {
    res.send(users);
});

export default router
