function WorkItem(props) {
    return (
        <>
            <article className="work-item" style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(/images/portfolio_ss.png)'}}>
                <h4 className="text-center">{props.data.title}</h4>
                <p>{props.data.description}</p>
                <p className="technologies">{props.data.technologies} </p>
            </article>
        </>
    )
}

export default WorkItem