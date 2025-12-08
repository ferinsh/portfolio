import './ProjectBar.css'
import { ProjectBarContent, ProjectBarheader } from './ProjectBarComponents'



const ProjectBar: React.FC = () => {
    // const tags = ["vite", "react", "express"]

    const projects = [
        {projectName: "project", projectThumbnail: "/vite.svg", projectDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit commodi unde quisquam deleniti quibusdam maxime dolorem quod quae laborum minus expedita minima aliquid doloremque, esse qui incidunt. Hic, deserunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit commodi unde quisquam deleniti quibusdam maxime dolorem quod quae laborum minus expedita minima aliquid doloremque, esse qui incidunt. Hic, deserunt!", projectTags: ["vite"]},
        {projectName: "project", projectThumbnail: "/vite.svg", projectDetails: "Vite template", projectTags: ["Vite", "mysql"]},
        {projectName: "project", projectThumbnail: "/vite.svg", projectDetails: "Vite template", projectTags: ["rEactjs", "vite"]},
        {projectName: "project", projectThumbnail: "/vite.svg", projectDetails: "Vite template", projectTags: ["express", "reactjs", "vite"]},
    ]

    let tags = projects.flatMap(project => project.projectTags);
    tags = tags.map(tag => tag.toLowerCase())
    tags = [...new Set(tags)]

    return (<>
        <section className="project-bar" id="project-bar">
            <h1 className='project-bar-title'>Projects</h1>
            <ProjectBarheader tags={tags}/>
            <ProjectBarContent projects={projects}/>
            <input className='project-bar-search' />
        </section>
    </>)
}

export default ProjectBar