import WorkItem from "../components/WorkItem"

const apps = [
    {
        title: 'Taskboard',
        description: 'An ap that allows you to manage tasks',
        image: '/images/Taskboard.png',
        technologies: 'HTML | CSS | JS',
        githubLink: 'https://github.com/nadavgl/task_organizer_app'
    },
    {
        title: 'Tech Blog',
        description: 'A full stack blog application with authentication.',
        image: '/images/Blogsite.png',
        technologies: 'HTML | CSS | JS | Express | MongoDb',
        githubLink: 'https://github.com/nadavgl/MVC_blogsite_mod14'
    },
    {
        title: "Teacher's Assistant",
        description: "A full stack application that helps teachers manage all of therir student's information",
        image: '/images/Teachersassistant.png',
        technologies: 'HTML | CSS | JS | Express | PostGresSQL',
        githubLink: 'https://github.com/nadavgl/teachers_assistant_project2'
    },
    {
        title: "Statsketball",
        description: "An application that utilizes APIs to bring users information about all, active and inactive, NBA players",
        image: '/images/Statsketball.png',
        technologies: 'HTML | CSS | JS',
        githubLink: 'https://github.com/Frxctxl/Statsketball'
    }

]


function Portfolio() {
    // Loop over the apps array and convert each object into a <workItem /> component tag
    const workItems = apps.map((workItemObj, index) => {
        return <WorkItem key={index} data={workItemObj} />
    })

    return (
        <>
            <h1 className='text-center'>My Projects</h1>
            <p className='text-center'>Below are a few projects I've worked on. Please click on the images below to be redirected the corresponding github repository page</p>

            <section className="work">
                {workItems}

            </section>
        </>
    )
}

export default Portfolio 