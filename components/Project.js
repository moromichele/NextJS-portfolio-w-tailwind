const Project = ({prObject}) =>{
    return (
        <div className="rounded bg-red-600 p-7">{prObject.name}{prObject.desc}</div>
    )
}

export default Project;