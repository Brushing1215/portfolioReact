import React from "react";

const Contact = () => {
  return (
    <main class="container pt-2 px-4" form-group>
      <section class="row mx-0">
        <div class="col-md-8 bg-white">
          <h1 class="text-info">Contact</h1>
          <hr />
        </div>
      </section>

      <form>
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
      <input class="btn btn-info" type="submit" value="Submit" />
    </main>
  );
};
export default Contact