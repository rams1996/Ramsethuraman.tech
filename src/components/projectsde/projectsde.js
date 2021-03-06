import React from "react";
import "./projectsde.css";

import data from "./data.json"

const publications = data.articles;

function ProjectSDE() {
    return (
        <div className="pubContainer">
            {
            publications.map((article, i) => {
                return (
                    <div className="cardContainer">
                        <div className="cardImg">
                            <img src={article.imgUrl} alt="img"/>
                        </div>
                        <div className="cardBody">
                            <p className="cardTitle">
                                {article.title}
                            </p>
                            <span className="badge" style={{backgroundColor: article.isPaper ? "#ff7a7a": "#01c4ff"}}>{article.isPaper ? "Paper": "Project"}</span>
                            <span className="badge" style={{backgroundColor: article.published ? "var(--text-title)": "#fffb01"}}>{article.published ? "Completed": "Ongoing"}</span>
                                
                            <p className="cardDesc">
                                {article.description}
                            </p>
                            <a href={article.url} type="button" className="cardBtn" rel="noopener" target="_blank">
                                {article.published ? `View Project`: `Stay Tuned`}
                            </a>
                        </div>
                        {/* <div className="cardFooter">
                            <a href={article.url} type="button" className="cardBtn" rel="noopener" target="_blank">
                                {article.published ? `Read More`: `Stay Tuned`}
                            </a>
                        </div> */}
                    </div>
                    );
                })
            }
        </div>                
    );
}

export default ProjectSDE;