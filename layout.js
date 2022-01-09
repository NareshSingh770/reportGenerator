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
                                    <label>Project Name</label>
                                    <input type="text" class="form-control project-name" name='project'>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Attachments</label>
                                    <input type="text" class="form-control attachement" name='attachment'>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Task ID</label>
                                    <input type="number" class="form-control task-id" name='task'>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Time Spent</label>
                                    <input type="number" class="form-control time-dur" name='time'>
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


const singleReportHTML = (projectName, attach, taskId, timeDur) => {
    return `
                <div class="report-single mt-5">
                    <h4>Project Name: <span>${projectName}</span></h4>
                    <h4>Attachments: <span>${attach}</span></h4>
                    <h4>Task ID: <span>${taskId}</span></h4>
                    <h4>Time Spent: <span>${timeDur} hours</span></h4>
                    <h4 class="notes">Attachment Notes: <span>Worked on to create new layout design.</span></h4>
                    <ul class="points">
                        <li>Coordinate with the development team to understand the modification of the UI design.</li>
                        <li>Coordinate with the development team to understand the modification of the UI design.</li>
                        <li>Coordinate with the development team to understand the modification of the UI design.</li>
                        <li>Coordinate with the development team to understand the modification of the UI design.</li>
                        <li>Coordinate with the development team to understand the modification of the UI design.</li>
                        <li>Coordinate with the development team to understand the modification of the UI design.</li>
                        <li>Coordinate with the development team to understand the modification of the UI design.</li>
                    </ul>
                </div>
    `
}