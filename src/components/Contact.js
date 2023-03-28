import React from 'react'

const Contact = () => {
    return (
        // <div>
            <section class="contact" id="contact">

                <div class="row">
                    <iframe title='Map from Google' class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101138.8536534854!2d22.965867390499174!3d37.611826706509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149f8b04b93f6fdd%3A0xa00bd2f74c37410!2sLygourio%20210%2052%2C%20Greece!5e0!3m2!1sen!2sus!4v1675697134230!5m2!1sen!2sus"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <form action="https://formsubmit.co/kontosoliveoil@gmail.com" method="POST">
                        <h3>contact us</h3>

                        <div class="inputBox">
                            <span class="fas fa-user"></span>
                            <input type="text" name="name" placeholder="Name" required/>
                        </div>

                        <div class="inputBox">
                            <input type="hidden" name="_subject" value="New Email from Client!"/>
                            <span class="fas fa-envelope"></span>
                            <input type="email" name="email" placeholder="Email Address" required/>
                        </div>

                        <div class="contact-group">
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-review">
                                    <textarea placeholder="Reason to contacting us.." name="name" id="review" class="form-control" rows="10" cols="55" required></textarea>
                                </div>
                                <input type="submit" value="contact us now" class="btn"/>
                            </div>
                        </div>
                    </form>
                </div>

            </section> 
        // </div>
    )
    }

    export default Contact;