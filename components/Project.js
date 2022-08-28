const Project = ({prObject}) =>{
    return (
        <div className="rounded bg-slate-200 dark:bg-neutral-700 p-7 max-w-[90%]">{prObject.name}{prObject.desc}</div>
    )
}

export default Project;