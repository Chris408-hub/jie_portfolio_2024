 //show and hide

  const allButton = document.querySelector('#all');
    const codeButton = document.querySelector('#code');
    const designButton = document.querySelector('#design');

    const allProjects = document.querySelectorAll('.gallery-box');
    const codeProjects = document.querySelectorAll('.code');
    const designProjects = document.querySelectorAll('.design');

    export function hideAllProjects() {
        allProjects.forEach(project => {
            project.style.display = 'none';
        });
    }

    export function showAllProjects() {
        allProjects.forEach(project => {
            project.style.display = 'block';
        });
    }

    export function showCodeProjects() {
        hideAllProjects();
        codeProjects.forEach(project => {
            project.style.display = 'block';
        });
    }

    export function showDesignProjects() {
        hideAllProjects();
        designProjects.forEach(project => {
            project.style.display = 'block';
        });
    }

    allButton.addEventListener('click', showAllProjects);
    codeButton.addEventListener('click', showCodeProjects);
    designButton.addEventListener('click', showDesignProjects);