import React, {useState} from 'react'
import ExtractIncomeGenerated from '../dashboard/extracts/IncomeGenerated'

const ServiceCards = ({data}) => {
    const [state, setstate] = useState(data)
    return (
       <>
        <div  class="col-md-6 col-xl-4">
       <ExtractIncomeGenerated/>

        </div>
         {state.map((e, i) =>(
            <div  class="col-md-6 col-xl-4" >
            <div class="card daily-sales" style={{height: '100%', borderRadius: '16px' }}>
            <div class="card-block">
                <h6 class="mb-4">{e}</h6>
                <div class="row d-flex align-items-center">
                <div class="col-9">
                    <h3 class="f-w-300 d-flex align-items-center m-b-0">
                    <i class="feather icon-arrow-up text-c-green f-30 m-r-10"></i>
                        {500 * (i +1)}
                    </h3>
                </div>
    
                <div class="col-3 text-right mb-5">
                    <p class="m-b-0">67%</p>
                </div>
                </div>
                <div class="progress mt-5" style={{ height: "7px" }}>
                <div
                    class="progress-bar progress-c-theme"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
                </div>
            </div>
            </div>
        </div>

        ))}
       </>
    )
}

export default ServiceCards
