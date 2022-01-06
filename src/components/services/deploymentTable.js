import React from 'react'
import user from '../../assets/img/avatar-1.jpg'
import user2 from '../../assets/img/avatar-1.jpg'
const DeploymentTable = () => {
    return (
        <div class="col-xl-8 col-md-12 m-b-30">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Today</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active show" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">This Week</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">All</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Rank</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th class="text-right"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h6 class="m-0"><img class="rounded-circle m-r-10" style={{ width: "40%" }} src={user} alt="activity-user" />Margaret</h6>
                            </td>
                            <td>
                                <h6 class="m-0">Sergeant</h6>
                            </td>
                            <td>
                                <h6 class="m-0">3:28 PM</h6>
                            </td>
                            <td>
                                <h6 class="m-0 text-c-green">Active</h6>
                            </td>
                            <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{ width: "40%" }} src={user2} alt="activity-user" />Akinade Tnumise</h6>
                            </td>
                            <td>
                                <h6 class="m-0">Constable</h6>
                            </td>
                            <td>
                                <h6 class="m-0">2:37 PM</h6>
                            </td>
                            <td>
                                <h6 class="m-0 text-c-red">Deployed</h6>
                            </td>
                            <td class="text-right"><i class="fas fa-circle text-c-red f-10"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{ width: "40%" }} src={user} alt="activity-user" />Anthony Potbelly</h6>
                            </td>
                            <td>
                                <h6 class="m-0">Constable</h6>
                            </td>
                            <td>
                                <h6 class="m-0">10:23 AM</h6>
                            </td>
                            <td>
                                <h6 class="m-0 text-c-purple">Delayed</h6>
                            </td>
                            <td class="text-right"><i class="fas fa-circle text-c-purple f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{ width: "40%" }} src={user} alt="activity-user" />Margaret</h6>
                            </td>
                            <td>
                                <h6 class="m-0">Sergeant</h6>
                            </td>
                            <td>
                                <h6 class="m-0">4:28 PM</h6>
                            </td>
                            <td>
                                <h6 class="m-0 text-c-green">Active</h6>
                            </td>
                            <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div class="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Rank</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th class="text-right"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{ width: "40%" }} src={user2} alt="activity-user" />Akinade Tnumise</h6>
                            </td>
                            <td>
                                <h6 class="m-0">DSP</h6>
                            </td>
                            <td>
                                <h6 class="m-0">2:37 PM</h6>
                            </td>
                            <td>
                                <h6 class="m-0 text-c-red">Deployed</h6>
                            </td>
                            <td class="text-right"><i class="fas fa-circle text-c-red f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="m-0"><img class="rounded-circle m-r-10" style={{ width: "40%" }} src={user2} alt="activity-user" />Mr Q</h6>
                            </td>
                            <td>
                                <h6 class="m-0">Sergeant</h6>
                            </td>
                            <td>
                                <h6 class="m-0">3:28 PM</h6>
                            </td>
                            <td>
                                <h6 class="m-0 text-c-green">Active</h6>
                            </td>
                            <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{ width: "40%" }} src={user} alt="activity-user" />Margaret</h6>
                            </td>
                            <td>
                                <h6 class="m-0">Sergeant</h6>
                            </td>
                            <td>
                                <h6 class="m-0">4:28 PM</h6>
                            </td>
                            <td>
                                <h6 class="m-0 text-c-green">Active</h6>
                            </td>
                            <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{ width: "40%" }} src={user2} alt="activity-user" />Anthony Potbelly</h6>
                            </td>
                            <td>
                                <h6 class="m-0">ASP</h6>
                            </td>
                            <td>
                                <h6 class="m-0">10:23 AM</h6>
                            </td>
                            <td>
                                <h6 class="m-0 text-c-purple">Delayed</h6>
                            </td>
                            <td class="text-right"><i class="fas fa-circle text-c-purple f-10"></i></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Rank</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th class="text-right"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{ width: "40%" }} src={user} alt="activity-user" />Anthony Potbelly</h6>
                            </td>
                            <td>
                                <h6 class="m-0">ASP</h6>
                            </td>
                            <td>
                                <h6 class="m-0">10:23 AM</h6>
                            </td>
                            <td>
                                <h6 class="m-0 text-c-purple">Delayed</h6>
                            </td>
                            <td class="text-right"><i class="fas fa-circle text-c-purple f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="m-0"><img class="rounded-circle m-r-10" style={{ width: "40%" }} src={user} alt="activity-user" />Margaret</h6>
                            </td>
                            <td>
                                <h6 class="m-0">Sergeant</h6>
                            </td>
                            <td>
                                <h6 class="m-0">3:28 PM</h6>
                            </td>
                            <td>
                                <h6 class="m-0 text-c-green">Active</h6>
                            </td>
                            <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{ width: "40%" }} src={user2} alt="activity-user" />Akinade Tnumise</h6>
                            </td>
                            <td>
                                <h6 class="m-0">DSP</h6>
                            </td>
                            <td>
                                <h6 class="m-0">2:37 PM</h6>
                            </td>
                            <td>
                                <h6 class="m-0 text-c-red">Deployed</h6>
                            </td>
                            <td class="text-right"><i class="fas fa-circle text-c-red f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{ width: "40%" }} src={user} alt="activity-user" />Margaret</h6>
                            </td>
                            <td>
                                <h6 class="m-0">Sergeant</h6>
                            </td>
                            <td>
                                <h6 class="m-0">4:28 PM</h6>
                            </td>
                            <td>
                                <h6 class="m-0 text-c-green">Active</h6>
                            </td>
                            <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default DeploymentTable
