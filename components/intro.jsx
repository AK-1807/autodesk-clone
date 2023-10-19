import React from 'react'

function Intro(props) {
    var data = props.data
  return (
    <section>
        <div className="container">
              <div className="intro text-center">
                  <h2>{data.subtitle}</h2>
                  <p className='mt-2'>{data.description[0].markdown}</p>
              </div> 
      </div>
    </section>
  )
}

export default Intro