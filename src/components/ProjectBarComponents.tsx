import type React from "react"


interface ProjectBarHeaderProps {
    tags: string[];
}

export const ProjectBarheader: React.FC<ProjectBarHeaderProps> = ({tags}) => {

    return (
        <header id="project-bar-header">
            {tags.map((tag, index) => (
                <div key={tag + index} className="project-tag">{tag}</div>
            ))}
        </header>
    )
}

interface Project {
    projectName: string;
    projectThumbnail: string;
    projectDetails: string;
    projectTags: string[];
}

interface ProjectBarContentProps {
    projects: Project[]
}

export const ProjectBarContent: React.FC<ProjectBarContentProps> = ({projects}) => {
    
    return (
        <section id="project-bar-content">
            {projects.map((project, index) => (
                <div className="project-item" id={project.projectName} key={project.projectName + index}>
                    <section className="project-image">
                        <img src={project.projectThumbnail} alt={project.projectName} />
                    </section>
                    <section className="project_details">
                        <h3 className="project_item_name">{project.projectName}</h3>
                        <p className="project_item_details">{project.projectDetails}</p>
                    </section>
                </div>
            ))}
        </section>
    )
}
