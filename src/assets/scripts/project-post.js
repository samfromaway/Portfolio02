let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(this.responseText);
    let projects = response.projects;

    // Start Function In HTTP Wrap

    // filtered array
    const designProjects = projects.filter(designProjectFilter).slice(0, 3);
    const marketingProjects = projects
      .filter(marketingProjectFilter)
      .slice(0, 3);

    // filtered categories
    function designProjectFilter(projects) {
      return projects.category === 'webDesign';
    }

    function marketingProjectFilter(projects) {
      return projects.category === 'marketing';
    }

    //initial load
    window.onload = () => {
      loadProjectData(projects);
    };

    // clickevent
    clickerFn1 = function () {
      loadProjectData(designProjects);
      loadSectionDesign();
    };

    clickerFn2 = function () {
      loadProjectData(marketingProjects);
      loadSectionMarketing();
    };

    // load Section
    const scrollPosition02 = document.getElementById('title07');
    const scrollBehavior01 = 'smooth';
    const fadeAfterClickTime = 500;
    const fadeAfterClickOpacity = 0.3;

    // behaviour
    function loadSectionDesign() {
      // fade of pictures in menu
      $('#card-image01').fadeTo(fadeAfterClickTime, fadeAfterClickOpacity);
      $('#card-image02').fadeTo(fadeAfterClickTime, 1);
      appearSection();
    }

    function loadSectionMarketing() {
      // fade of pictures in menu
      $('#card-image02').fadeTo(fadeAfterClickTime, fadeAfterClickOpacity);
      $('#card-image01').fadeTo(fadeAfterClickTime, 1);
      appearSection();
    }
    //appear of section
    function appearSection() {
      $('#section04').addClass('appear');
      scrollPosition02.scrollIntoView({
        behavior: scrollBehavior01,
      });
    }

    //tablecontentload
    function loadProjectData(projects) {
      const projectData = document.getElementById('projectData');
      let dataHtml = '';

      for (let project of projects) {
        dataHtml += `
        <div class="card02">
        <div class=" hoveranim01p imgglow01">
          <a href=${project.link} target="blank">
            <img
              class="card02-img hoveranim01c"
              alt=${project.title}
              src=${project.img}
            />
          </a>
        </div>

        <img
          class="icons02"
          alt=${project.title}
          src=${project.icn}
        />

        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <a href=${project.link} target="blank" class="button"
          >More</a>
      </div>`;
      }

      projectData.innerHTML = dataHtml;
    }

    const btnchooseCategory01 = document.getElementById('btnchooseCategory01');
    const btnchooseCategory02 = document.getElementById('btnchooseCategory02');
    const imgchooseCategory01 = document.getElementById('card-image01');
    const imgchooseCategory02 = document.getElementById('card-image02');

    btnchooseCategory01.addEventListener('click', clickerFn1);
    imgchooseCategory01.addEventListener('click', clickerFn1);
    btnchooseCategory02.addEventListener('click', clickerFn2);
    imgchooseCategory02.addEventListener('click', clickerFn2);
  }

  // End Function In HTTP Wrap
};
xmlhttp.open('GET', './assets/scripts/projects.json', true);
xmlhttp.send();
