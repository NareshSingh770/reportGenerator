const numProjects = document.getElementById('num-report');
const reportDiv = document.getElementById('report-details');


function Report(a, b, c, d) {
    this.projectName = a
    this.attach = b
    this.taskId = c
    this.timeDur = d
}

const data = []


const generateReport = (e) => {

    e.preventDefault();
    const cardWrapper = document.querySelectorAll('.single-details')

    cardWrapper.forEach(elem => {
        const projectName = elem.querySelector('.project-name').value;
        const attach = elem.querySelector('.attachement').value;
        const taskId = elem.querySelector('.task-id').value;
        const timeDur = elem.querySelector('.time-dur').value;

        const singleRep = new Report(projectName, attach, taskId, timeDur)
        data.push(singleRep);
    })


    console.log(data)

    data.forEach(val => {

        const { projectName, attach, taskId, timeDur } = val;

        const reportLayout = singleReportHTML(projectName, attach, taskId, timeDur)

        console.log(reportLayout)

        document.querySelector('.generated-report').insertAdjacentHTML('beforeend', reportLayout)

    })

}



numProjects.addEventListener('keyup', (e) => {

    const ProjectNos = numProjects.value;

    if (e.key === 'Enter') {


        if (ProjectNos > 0) {
            let i = 0;
            const form = document.querySelector('#report-details')

            while (i < ProjectNos) {
                const layoutHtml = projectHtml(i + 1)
                reportDiv.insertAdjacentHTML('beforeend', layoutHtml)
                i++;
            }

            form.insertAdjacentHTML('beforeend', generateBtn)
            form.addEventListener('submit', generateReport)

        }


    }
    else {
        reportDiv.innerHTML = ''
    }

})
