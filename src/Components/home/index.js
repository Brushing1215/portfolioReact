import React from "react";
import port3 from "../../images/port3.PNG";
const Home = () => {
  return (
    <main class="container pt-2 pb-5 mb-3 px-4">
      <section class="row mx-0">
        <div class="col-md-9 bg-white">
          <h1 class="text-info">About Me</h1>
          <hr />
          <img
            class="float-md-left mr-2 img-fluid"
            src={port3}
            alt="placholder nature"
            style={{ width: 350 }}
          />
          <p>
            My name is Brett Rushing and I am a Junior Developer from Charlotte,
            NC Area. I am very excited to start this new chapter in my life and
            to start my career in web development and design. My background is
            in Sales, which was my profession for over 10 years.
          </p>
          <p>
            I work well in a team enviroment and look forward to help move the
            team forward with the skills learned in the bootcamp. To me learning
            is key and in this career im going to push myself to learn as much
            as possible in many languages.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
