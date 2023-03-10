import React from 'react'
import '../App.css';

const Container = () => {
    return (
    
    <section>
        {/* <img src="./images/main-pic.jpeg" width="100%" height="100%" alt="pic"/> */}
        <div class="home" id="home">
            <div class="content">
                <h3>What so special about our Peloponeese Olives?</h3>
                <p>We grown trees for many decades on family farms in the heart of Peloponeese peninsula.
                    We are very proud of our authentic olives trees, naturally brine cured for the deep purple-black or green color.
                    Firm, yet juice texture full of flavor will guarantee, you are about to taste the best olive oil made in Greece!
                </p>
                <a href="/buyproduct" class="btn">Buy products</a>
                

                <h5> To purchase more amount of oil please contact directly via email</h5>
                <div className='insta'>
                <button>INSTAGRAM<a href='https://www.instagram.com/kontos_oliveoil/'> ☞ CLick Here</a></button>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Container