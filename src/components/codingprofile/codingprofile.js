import React from "react";
import data from "./data.json"
import "./codingprofile.css"




const CodingProfile = () => {

  const profiles = JSON.parse(JSON.stringify(data.profiles));
  let rowGroups = [], columns = 4;
  console.log("profiles", profiles)
  while (profiles.length > 0) {
    rowGroups.push(profiles.splice(0, columns));
  }
 
  const content = rowGroups.map((row) => (
    <div class="row justify-content-center">
      {row.map(profile => (
        <div class="col-auto mb-4 ml-1 mr-1">
          <div class="card" style={{ width: 18 + "rem" }}>
            <img class="card-img-top" src={profile.imageUrl} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{profile.title}</h5>
              <p class="card-text">{profile.text}</p>
              <a href={profile.githubUrl} class="btn btn-primary">View in GitHub</a>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  ))
  console.log("content", content)

  return (
    <div class="container-fluid mt-4 mb-4">

      {
        content
      }

    </div>
  )
}

export default CodingProfile