console.log('Starting up');


function onInit() {
    renderProjects()
}


function renderProjects() {
    var projects = getProjects()
    var strHtmls = projects.map(function (project) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${project.id}')">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="img/${project.url}.png" alt="">
              </a>
                <div class="portfolio-caption">
                    <h4>${project.title}</h4>
                    <p class="text-muted">${project.desc}</p>
                </div>
        </div>
    </div>
        `
    })
    document.querySelector('.portfolio-thumbnail').innerHTML = strHtmls.join('')
}


function renderModal(id) {
    var project = getProjectById(id)
    var strHtml = `
        <div class="modal-body">
                  <h2>${project.title}</h2>
                  <p class="item-intro text-muted">${project.name}</p>
                  <button onclick="openProj('${project.webUrl}')" type="button" class="btn btn-primary modal-button">
                    View Project</button>
                  <img class="img-fluid d-block mx-auto" src="img/${project.url}.png" alt="">
                  <p> ${project.desc}</p>
                  <ul class="list-inline">
                    <li>Date: ${project.publishedAt}</li>
                    <li>Category: ${project.labels}</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
         </div>

    `
    // <a target="_blank" href="${project.webUrl}">Project web</a> // instead of onclick button- this will also open a link in a new tab
    document.querySelector('.modal-project').innerHTML = strHtml
}



function openProj(webUrl) {
    var win = window.open(webUrl, '_blank');
    win.focus();

}

function openEmail() {
    var email = document.querySelector('#email-input').value
    var subject = document.querySelector('#subject-input').value
    var message = document.querySelector('#message-input').value
    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${message}`
    window.open(url, '_blank')
}

