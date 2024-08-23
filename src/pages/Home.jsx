import WorkItem from "../components/WorkItem"

const apps = [
    {
        title:'weather-app',
        description:'A cool weather application I made that lets you search by city to get the local weather',
        image: '/images/portfolio_ss.png',
        technologies:'HTML | CSS | JS | DayJS'
    },
    {
        title: 'Tech Blog',
        description: 'A full stack blog application with authentication.',
        image: '/images/portfolio_ss.png',
        technologies: 'HTML | CSS | JS | DayJS | Express'
    },
    {
        title: 'Recipe App',
        description: 'A full stack blog application with authentication.',
        image: '/images/portfolio_ss.png',
        technologies: 'HTML | CSS | JS | DayJS | Express | MongoDb'
    }

]


function Home() {
// Loop over the apps array and convert each object into a <workItem /> component tag
    const workItems = apps.map((workItemObj, index) => {
        return <WorkItem key={index} data={workItemObj}/>
    })

    return (
        <>
            <section className="home-hero column align-center">
                <img src="/images/me.jpeg" alt="" />
                <h1 className='text-center'>Dev</h1>
            </section>

            <section className="work">
                {workItems}

            </section>
        </>
    )
}

export default Home