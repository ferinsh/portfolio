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
        <h1 style={{color: "white", textAlign: 'left', marginBottom: "1rem"}}>Projects</h1>
        <section className="project-bar" id="project-bar">
            <ProjectBarheader tags={tags}/>
            <ProjectBarContent projects={projects}/>
        </section>
    </>)
}

export default ProjectBar