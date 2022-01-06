import React from 'react'

const RequestTable = () => {
    return (
        <div class="col-xl-8 col-md-6">
        <div class="card Recent-Users">
            <div class="card-header">
                <h5>Pending Requests</h5>
            </div>
            <div class="card-block px-0 py-3">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <tbody>
                            <tr class="unread">
                                <td><img class="rounded-circle" style={{width:"40px"}} src="assets/images/user/avatar-1.jpg" alt="activity-user" /></td>
                                <td>
                                    <h6 class="mb-1">Anthony Nta</h6>
                                    <p class="m-0">Lorem Ipsum is simply…</p>
                                </td>
                                <td>
                                    <h6 class="text-muted"><i class="fas fa-circle text-c-green f-10 m-r-15"></i>11 MAY 12:56</h6>
                                </td>
                                <td><a href="#!" class="label theme-bg2 text-white f-12">Reject</a><a href="#!" class="label theme-bg text-white f-12">Approve</a></td>
                            </tr>
                            <tr class="unread">
                                <td><img class="rounded-circle" style={{width:"40px"}} src="assets/images/user/avatar-2.jpg" alt="activity-user" /></td>
                                <td>
                                    <h6 class="mb-1">Mazi Ogundu</h6>
                                    <p class="m-0">Lorem Ipsum is simply text of…</p>
                                </td>
                                <td>
                                    <h6 class="text-muted"><i class="fas fa-circle text-c-red f-10 m-r-15"></i>11 MAY 10:35</h6>
                                </td>
                                <td><a href="#!" class="label theme-bg2 text-white f-12">Reject</a><a href="#!" class="label theme-bg text-white f-12">Approve</a></td>
                            </tr>
                            <tr class="unread">
                                <td><img class="rounded-circle" style={{width:"40px"}} src="assets/images/user/avatar-3.jpg" alt="activity-user" /></td>
                                <td>
                                    <h6 class="mb-1">Oga Ahmed</h6>
                                    <p class="m-0">Lorem Ipsum is simply…</p>
                                </td>
                                <td>
                                    <h6 class="text-muted"><i class="fas fa-circle text-c-green f-10 m-r-15"></i>9 MAY 17:38</h6>
                                </td>
                                <td><a href="#!" class="label theme-bg2 text-white f-12">Reject</a><a href="#!" class="label theme-bg text-white f-12">Approve</a></td>
                            </tr>
                            <tr class="unread">
                                <td><img class="rounded-circle" style={{width:"40px"}} src="assets/images/user/avatar-1.jpg" alt="activity-user" /></td>
                                <td>
                                    <h6 class="mb-1">Akinade Tunmise</h6>
                                    <p class="m-0">Lorem Ipsum is simply text of…</p>
                                </td>
                                <td>
                                    <h6 class="text-muted f-w-300"><i class="fas fa-circle text-c-red f-10 m-r-15"></i>19 MAY 12:56</h6>
                                </td>
                                <td><a href="#!" class="label theme-bg2 text-white f-12">Reject</a><a href="#!" class="label theme-bg text-white f-12">Approve</a></td>
                            </tr>
                            <tr class="unread">
                                <td><img class="rounded-circle" style={{width:"40px"}} src="assets/images/user/avatar-2.jpg" alt="activity-user" /></td>
                                <td>
                                    <h6 class="mb-1">Mr Q</h6>
                                    <p class="m-0">Lorem Ipsum is simply dummy…</p>
                                </td>
                                <td>
                                    <h6 class="text-muted"><i class="fas fa-circle text-c-green f-10 m-r-15"></i>21 July 12:56</h6>
                                </td>
                                <td><a href="#!" class="label theme-bg2 text-white f-12">Reject</a><a href="#!" class="label theme-bg text-white f-12">Approve</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RequestTable
