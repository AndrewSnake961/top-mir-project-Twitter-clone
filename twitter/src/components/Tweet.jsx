// import React from "react";

export default function Tweet() {
  return (
    <div className="d-flex gap-2 border-bottom py-2 ">
      <div className="d-flex">
        <div className="p-2">
          <img src="https://placehold.co/40x40" className="rounded-circle" />
        </div>
        <article className="d-flex flex-column gap-1">
          <header>
            <strong>Andres Builes</strong>{" "}
            <span className="text-secondary">@pipebuilez • 11hr</span>
          </header>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            deleniti blanditiis at similique incidunt debitis quidem.
          </p>
          <footer className="d-flex justify-content-between">
            <div>
              <i className="bi bi-chat"></i> 4.935
            </div>
            <div>
              <i className="bi bi-repeat"></i> 3.092
            </div>
            <div>
              <i className="bi bi-heart"></i> 4.650
            </div>
            <div>
              <i className="bi bi-bar-chart"></i> 749 mil
            </div>
            <div className="me-5">
              <i className="bi bi-box-arrow-up"></i>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
