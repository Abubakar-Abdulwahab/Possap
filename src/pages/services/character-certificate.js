import React from 'react'
import CharacterCertificateCard from '../../components/dashboard/character-certificates/CharacterCertificateCard'
import Demographics from '../../components/dashboard/character-certificates/Demography'
import DestinationCountry from '../../components/dashboard/character-certificates/DestinationCountry'
import CertificateByGender from '../../components/dashboard/character-certificates/Gender'
import CertificateReason from '../../components/dashboard/character-certificates/Reason'
import RequestTable from '../../components/services/requestTable'

function CharacterCertificate() {

    const cards = [
        {id: 1, title: 'Approved Certificate', color:  '#00AB55', status: true },
        {id: 3, title: 'Pending Certificate', color: '#2D99FF', status: true },
        {id: 2, title: 'Declined Certificate', color: '#c81233', status: false },
    ]
    return (
        <>
            <div className='row'>
                {cards.map(card =>(
                    <div className='col-md-4'>
                        <CharacterCertificateCard data={card} key={card.id} />
                    </div>
                ))}
            </div>
            <div className='row'>
                <div className='col-md-6'>
                        <Demographics />
                </div>
                <div className='col-md-6'>
                        <CertificateByGender />
                </div>
                <CertificateReason />
                    <DestinationCountry />

                    <RequestTable />
            </div>
            
        </>
    )
}

export default CharacterCertificate
