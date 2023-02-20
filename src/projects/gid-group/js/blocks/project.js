function bindProject() {
    let projectNavs = document.querySelectorAll('.project__nav-item');
    let contents = document.querySelectorAll('.project__content');

    projectNavs.forEach(item => {
        item.addEventListener('click', () => {

            projectNavs.forEach(nav => nav.classList.remove('chosen'));

            item.classList.add('chosen');

            contents.forEach(content => {
                content.classList.add('dn');

                if (content.classList.contains(item.getAttribute('data-project'))) {
                    content.classList.remove('dn')
                }
            });

        })
    })
}

export default bindProject;