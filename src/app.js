'use strict';

$(renderProjects)



function renderProjects() {
    var projects = getProjects()
    var projectsHtml = projects.map(project =>
        `<div class="project-container">
    <a
      href="${project.url}"
      class="project-card"
    >
      <img
        class="project-image"
        src="images/${project.id}.jpg"
        alt="recoil"
      />
      <h3>${project.name}</h3>
      <hr />
      <p class="subtext">
       ${project.desc}
      </p>
    </a>`
    )
    $('.project-container').append(projectsHtml)

}

// $('.portfolio-modal h2').text("hii")



function onChangeModal(id) {
    const project = getProject(id)
    $('.portfolio-modal h2').text(project.name)
    $('.portfolio-modal .item-intro').text(project.title)
}