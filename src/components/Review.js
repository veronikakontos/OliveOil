import React from 'react'
import axios from 'axios';
// import {Link} from 'react-router-dom';

const Review = (props) => {
    const { removeFromDom } = props;

        const deleteReview = (reviewId) => {
            axios.delete('http://localhost:3001/api/review/' + reviewId)
            .then(res => {
                removeFromDom(reviewId)
            })
            .catch(err => console.error(err));
        }
    return (
        <div>
            <section class="review" id="review">
    
                <div className='box-container'>
                    <a href="/writereview" class="btn">Write review</a>

                    <div className='box'>
                        <h3>k</h3>
                        <h4>from:</h4>
                        <p>Wrote:</p>
                        <p><em> </em>
                        </p>

                        {/* <button onClick={(e)=>{deleteReview(review._id)}}>DELETE</button> */}

                        {/* <button><Link to={"/review/" + review._id + "/edit"}>Edit</Link></button> */}
                    </div>

                    
                </div>
            </section>
        </div>
    )
}

export default Review