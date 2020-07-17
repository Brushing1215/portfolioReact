import React from "react";

const Contact = () => {
  return (
    <main class="container pt-2 px-4" form-group>
      <section class="row mx-0">
        <div class="col-md-12 bg-white">
          <h1 class="text-info">Contact</h1>
          <hr />
        </div>
      </section>

      {/* <form>
        <div class="form-group col-md-4">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="exampleFormControlInput1">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@email.com"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
      <input class="btn btn-info" type="submit" value="Submit" /> */}
      <div className="row">
        <div className="col-md-6">
          <div class="card" style={{ width: "95%" }}>
            <div class="card-body">
              <p>Have a question? I would Love to speak with you!</p>
              <p>
                How can I be useful to your service? Please feel free to reach
                out to me. I would be delighted to answer all your questions or
                concerns.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div class="card" style={{ width: "95%" }}>
            <div class="card-body">
              <div>Don't hesitate to call, email or connect on LinkedIn.</div>
              <div>
                <p>Also take a look at my{" "} </p>
                <a
                  href="https://docs.google.com/document/d/19d8xAYOswu0Tjms4sEx17b6N4wM6pmjJv3kkCjeoWw0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
              <div>
                Phone: <a href="tel:704-231-7871">704-231-7871</a>
              </div>
              <div>
               Email: <a
                  href="mailto:brettrushing1215@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  brettrushing1215@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Brushing1215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/brett-rushing-3543171a6/"
                  className="ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;
