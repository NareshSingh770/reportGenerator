const projectHtml = (id) => {
    return `
                <div class='col-md-4'>
                    <div class="card single-details p-2">
                       <div class='row' autocomplete='on'>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <h4>Enter Projects Details #${id}</h4>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" placeholder='Project Name' class="form-control project-name" name='project'>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" placeholder='Attachments' class="form-control attachement" name='attachment'>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="number" placeholder='Task ID' class="form-control task-id" name='task'>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="number" placeholder='Time Spent' class="form-control time-dur" name='time'>
                                </div>
                            </div>
                            <div class='col-md-12'>
                                <div class='form-group'>
                                    <textarea class='form-control points' rows='5' placeholder='description...'></textarea>
                                </div>
                            </div>
                            
                       </div>
                    </div>  
                </div>
`}

const generateBtn = `
<div class='col-12 text-right mt-4 mb-5'>

    <button type='submit' class='btn btn-primary generate'>Generate Report</button>

</div>

`


const singleReportHTML = (projectName, attach, taskId, timeDu, points) => {
    return `
                <div class="report-single mt-5">
                    <h4>Project Name: <span>${projectName}</span></h4>
                    <h4>Attachments: <span>${attach}</span></h4>
                    <h4>Task ID: <span>${taskId}</span></h4>
                    <h4>Time Spent: <span>${timeDu} hours</span></h4>
                    <h4 class="notes">Attachment Notes: <span>Worked on to create new layout design.</span></h4>
                    <ul class="points">
                        ${points.map(val => {
        return `<li contenteditable="true">${val}</li>`
    }).join('')}
                    </ul >
                </div >
    `
}