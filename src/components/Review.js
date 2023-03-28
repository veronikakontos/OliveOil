import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


// import {Link} from 'react-router-dom';

const Review = (props) => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/review/')
        .then(res => {
            console.log(res)
            setReviews(res.data.results)
        })
        .catch(err => console.error(err));
    }, [])
    
    // const { removeFromDom } = props;

        const deleteReview = (reviewId) => {
            axios.delete('http://localhost:8000/api/review/' + reviewId)
            .then(res => {
                // removeFromDom(reviewId)
                setReviews(reviews.filter((review) => review._id !== reviewId));
            })
            .catch(err => console.error(err));
        }
    return (
        <div>
            <section className="review" id="review">
    
                <div className='box-container'>
                    <a href="/writereview" class="btn">Write review</a>

                    {reviews && reviews.map((review, idx) => 
                    
                        <div key={idx}>
                        <h1>Name: {review.name}</h1>
                        <h3>From: {review.place}</h3>
                        <p> {review.description}</p>
                        <button className='btn' onClick={(e) => { deleteReview(review._id) }}>Delete</button>
                    </div>


                        )}



                    <div className='box'>
                    


                    </div>

                    
                </div>
            </section>
        </div>
    )
}

export default Review;