import React from 'react'

const StatsCard = () => {
    return (
        <div class="col-xl-4 col-md-6 mt-3">
                                    <div class="card card-event">
                                        <div class="card-block">
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col">
                                                    <h5 class="m-0">Pending Request</h5>
                                                </div>
                                                <div class="col-auto">
                                                    <label class="label theme-bg2 text-white f-14 f-w-400 float-right">34%</label>
                                                </div>
                                            </div>
                                            <h2 class="mt-3 f-w-300">45<sub class="text-muted f-14">Individuals | MDA | Corporation</sub></h2>
                                           
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-block border-bottom">
                                            <div class="row d-flex align-items-center">
                                                <div class="col-auto">
                                                    <i class="feather icon-zap f-30 text-c-green"></i>
                                                </div>
                                                <div class="col">
                                                    <h3 class="f-w-300">22350</h3>
                                                    <span class="d-block text-uppercase">Officers Deployed</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-block">
                                            <div class="row d-flex align-items-center">
                                                <div class="col-auto">
                                                    <i class="feather icon-users f-30 text-c-blue"></i>
                                                </div>
                                                <div class="col">
                                                    <h3 class="f-w-300">126000</h3>
                                                    <span class="d-block text-uppercase">Total Officers</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    )
}

export default StatsCard
