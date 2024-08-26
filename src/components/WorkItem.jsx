function WorkItem(props) {
    return (
        <>
            <a href={props.data.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                <article className="work-item" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${props.data.image})`}}>
                    <h4 className="text-center">{props.data.title}</h4>
                    <p>{props.data.description}</p>
                    <p className="technologies">{props.data.technologies}</p>
                </article>
            </a>
        </>
    )
}

export default WorkItem;
