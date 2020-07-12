import React from 'react'
import quiz from '../../images/quiz.PNG'
const Home =()=>{
return (
    <main class="container pt-2 pb-5 mb-3 px-4">
    <section class="row mx-0">
      <div class="col-md-9 bg-white">
        <h1 class="text-info">
          About Me
        </h1>
        <hr />
        <img  class="float-md-left mr-2 img-fluid" src={quiz} alt="placholder nature" style={{width: 350}}/>
        <p>
          My name is Brett Rushing and I am a Junior Developer from Charlotte, NC Area. I am very excited to start this new chapter in my life and to start my career in web development and design. My background is in Sales, which was my profession for over 10 years. 
        </p>
        <p>
          I am married to my high school sweetheart and we have been together for over 15 years and married for 13 years this December. My wife and I have 3 children ,all girls, with ages from 4-8. My youngest 2 daughters are 13 months apart from each other and are very close. A few interesting facts is that I have a daughter born on National Slushie day (07/11), a daughter born on Ground Hogs day, and a daughyer born on St. Patricks day. My family and I live in a town known as Christmas Town USA. In December my entire town decortes their homes with Christmas lights and people come from all around to see the lights.
        </p>
      </div>
    </section>
  </main>
)
}

export default Home