import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


    const WriteReview = (props) => {
        const [name, setName] = useState("");
        const [place, setPlace] = useState("");
        const [description, setDescription] = useState("");
        const navigate = useNavigate();

        const [errors, setErrors] = useState([]); 
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product

        axios.post('http://localhost:3000/api/new/review', {
            name,
            place,
            description
        })
            .then(res=>{
                console.log(res);
                navigate("/");
                
            })

            .catch(err=>{
                    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                    // Set Errors
                    setErrors(errorArr);
                })            
    }
    //!PAGE RENDER
    return (
        <div>
            <section>
            <form onSubmit={onSubmitHandler} className="feedback">
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <h1 class="pinfo" >WE APPRECIATE YOUR REVIEW!</h1>
                <h2 class="pinfo2">Your personal info</h2>
                <br/>
            
                <div class="review-group">
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-review">
                            <span class="input-review-addon"><i class="fa fa-user"></i></span>
                            <label><h5>Your Name</h5></label>
                            <input name="name" placeholder="Your Name" class="form-control-review" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                        </div>
                    </div>
                </div>

                <div class="review-group">
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-review">
                            <span class="input-review-addon"><i class="fa fa-globe"></i>🌐</span>
                            <label><h5>Country</h5></label>
                            <input  name="name" placeholder="Where are you from" class="form-control-review"  type="text" onChange={(e)=>setPlace(e.target.value)} value={place}/>
                        </div>
                    </div>
                </div>

                <br/> <br/>
                <div class="pinfo2">Write your feedback.</div>
                
                    <div class="review-group">
                        <div class="col-md-4 inputGroupContainer">
                            <div class="input-review">
                            <label><h5>Please write in the box</h5></label>
                            <textarea class="form-control" id="review" rows="7" cols="65" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
                            </div>
                                <br/>
                            <em>♡ Thank you ♡</em>
                        </div>
                        <a href="/review" value="submit" class="btn">Submit</a>
                        {/* <input type="submit" value="Submit"/> */}
                    </div>
            </form>

            </section>
        </div>
    )
    }

export default WriteReview;