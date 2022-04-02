import React, { useEffect, useState } from 'react'
import Ranking from '../logic/Ranking'
import Hat from '../components/hat/Hat'
import './style.css'

const HomeView = () => {

   const [WCHats, setHats] = useState([[]])

   useEffect(() => {
      const hats = new Ranking().generateHats().getWCHats
      setHats(hats)
   }, [])

   useEffect(() => {
      console.log(WCHats.length)
   }, [WCHats])

    return (
        <div className='home-view'>
            { 
                WCHats ?
                    WCHats.map((hatTeams, index) => {
                        return <Hat teams={hatTeams} hatNumber={index} key={index} />
                    })
                : null
            }
        </div>
    )
}

export default HomeView