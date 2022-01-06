import React from 'react'

const AllServiceStats = ({data}) => {
    return (
        <>
            {data.map(e =>(
                 <div class="col-md-12 col-xl-4">
                 <div class="card card-social">
                     <div class="card-block border-bottom">
                         <div class="row align-items-center justify-content-center">
                             <div class="col-auto">
                                <span>{e}</span> 
                             </div>
                             <div class="col text-right">
                                 <h3>12,281</h3>
                                 <h5 class="text-c-green mb-0">+7.2% <span class="text-muted">Total Applicants</span></h5>
                             </div>
                         </div>
                     </div>
                     <div class="card-block">
                         <div class="row align-items-center justify-content-center card-active">
                             <div class="col-4">
                                 <h6 class="text-center m-b-10"><span class="text-muted m-r-5">Pending:</span>998</h6>
                                 <div class="progress">
                                     <div class="progress-bar progress-c-theme" role="progressbar" style={{width:"50%", height:"6px"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                 </div>
                             </div>
                             <div class="col-4">
                                 <h6 class="text-center m-b-10"><span class="text-muted m-r-5">Approv: </span>498</h6>
                                 <div class="progress">
                                     <div class="progress-bar progress-c-theme" role="progressbar" style={{width:"50%", height:"6px"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                 </div>
                             </div>
                             <div class="col-4">
                                 <h6 class="text-center  m-b-10"><span class="text-muted m-r-5">Rejected:</span>453</h6>
                                 <div class="progress">
                                     <div class="progress-bar progress-c-red" role="progressbar" style={{width:"50%", height:"6px"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
            ))}
        </>
    )
}

export default AllServiceStats
