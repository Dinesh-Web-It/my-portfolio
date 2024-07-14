import React from 'react'
import './features.css'


const Features = () => {
    return (

        <section className=" container">
            <h2 className="header">OUR FRETURES</h2>
            <div className="feature" >
                <div className="card" >
                    <h3>Free works</h3>
                    <p>We are providing free lancers, Free website design for everyone, Lot's of free features &
                        customisation also </p>
                    <a href="">🖥️Free website</a>

                </div>
                <div className="card">
                    <h3>Art Work</h3>
                    <p>Comission Art Works avilable, Portrait drawings on low price, For "comission work" click this
                        button</p>
                    <a href="">🎨Orders</a>
                </div>
                <div className="card">
                    <h3>Tie Up</h3>
                    <p>Hire a free lancers, Who can want to work with as click on this like Friends😊 </p>
                    <a href="">🤝Freelancing</a>
                </div>
            </div>
        </section>

    )
}

export default Features