const numProjects = document.getElementById('num-report');
const reportDiv = document.getElementById('report-details');
const generatedRep = document.querySelector('.generated-report')


function Report(a, b, c, d, e) {
    this.projectName = a
    this.attach = b
    this.taskId = c
    this.timeDur = d
    this.points = e
}

const data = []


const deleteAll = (e) => {
    reportDiv.innerHTML = ''
    generatedRep.innerHTML = ''
    e.target.setAttribute('disabled', true)
}


const createReport = (e) => {
    const ProjectNos = numProjects.value;

    if (e.key === 'Enter' || e.target.innerText === 'Create') {



        if (!reportDiv.innerText) {
            const delBtn = document.getElementById('delete-all')
            if (ProjectNos > 0) {
                let i = 0;
                // const form = document.querySelector('#report-details')

                while (i < ProjectNos) {
                    const layoutHtml = projectHtml(i + 1)
                    // console.log(layoutHtml)
                    reportDiv.insertAdjacentHTML('beforeend', layoutHtml)
                    i++;
                }

                reportDiv.insertAdjacentHTML('beforeend', generateBtn)
                reportDiv.addEventListener('submit', generateReport)
                delBtn.removeAttribute('disabled');
                delBtn.addEventListener('click', deleteAll);
            }

        }


    }
}

numProjects.addEventListener('keyup', createReport);
document.getElementById('create').addEventListener('click', createReport)



const editPoint = () => {
    const points = document.querySelectorAll('ul.points li');

    points.forEach(val => {
        val.setAttribute('contenteditable', true)
    })
}


const generateReport = (e) => {

    e.preventDefault();

    if (!generatedRep.innerText) {
        const cardWrapper = document.querySelectorAll('.single-details')

        cardWrapper.forEach(elem => {
            const projectName = elem.querySelector('.project-name').value;
            const attach = elem.querySelector('.attachement').value;
            const taskId = elem.querySelector('.task-id').value;
            const timeDur = elem.querySelector('.time-dur').value;
            const pointsAll = elem.querySelector('.points').value;

            const points = pointsAll.split('\n')

            console.log(points)

            const singleRep = new Report(projectName, attach, taskId, timeDur, points)
            data.push(singleRep);
        })


        console.log(data)




        data.forEach(val => {

            const { projectName, attach, taskId, timeDur, points } = val;

            const reportLayout = singleReportHTML(projectName, attach, taskId, timeDur, points)

            console.log(reportLayout)

            generatedRep.insertAdjacentHTML('beforeend', reportLayout)

        })

        generatedRep.insertAdjacentHTML('afterbegin', editBtn)

        document.querySelector('.edit').addEventListener('click', editPoint)
        // document.querySelector('.copy').addEventListener('click', copyRepClipboard)

    }

}
