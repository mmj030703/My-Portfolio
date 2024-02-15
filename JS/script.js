const projectsNavbar = document.querySelector('.projects-section .projects-navbar ul');
const projectContainers = document.querySelectorAll('.projects-section-container');

const handleProjectsNavbarButtonsClick = (e) => {
    // const target = e.target;

    // if(target.) {

    // }
};

const removeActiveClassFromProjectNavbarItems = () => {
    Array.from(projectsNavbar.children).forEach(navItem => {
        navItem.classList.remove('active');
    });
};


const addNoneClassToProjectContainers = () => {
    projectContainers.forEach(container => {
        container.classList.add('none');
    });
}

const displayProjectContainer = (target) => {
    projectContainers.forEach(container => {
        if (target.dataset.projectname === container.dataset.projectname) {
            container.classList.remove('none');
        }
    });
};

projectsNavbar.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains("projects-navbar-item")) {
        removeActiveClassFromProjectNavbarItems();
        target.classList.add('active');
        addNoneClassToProjectContainers();
        displayProjectContainer(target);
    }
});