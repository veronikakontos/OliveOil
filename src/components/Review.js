import React, {useState, useEffect} from 'react'
import axios from 'axios';

// import {Link} from 'react-router-dom';

const Review = (props) => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/reviews/')
        .then(res => {
            console.log(res)
            setReviews(res.data.results)
        })
        .catch(err => console.error(err));
    }, [])

    
    
    const { removeFromDom } = props;

        const deleteReview = (reviewId) => {
            axios.delete('http://localhost:3000/api/review/' + reviewId)
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
                        <h3>Name: Kostoula</h3>
                        <br/>
                        <h4>From: Greece</h4>
                        <p>Wrote:</p>
                        <p><em> </em>
                        </p>

                        {/* <button onClick={(e)=>{deleteReview(review._id)}}>DELETE</button> */}

                    </div>

                    
                </div>
            </section>
        </div>
    )
}

export default Review;