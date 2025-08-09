import React from "react";

export default function Services() {
  return (
    <section id="services" className="s-services target-section darker">
      <div className="row section-header bit-narrow" data-aos="fade-up">
        <div className="column large-full">
          <h3 className="section-header__pretitle pretitle">Projects</h3>
          <h1 className="section-header__title title">Some of My Work</h1>
        </div>
      </div>

      <div
        className="row services-list block-1-2 block-tab-full"
        data-aos="fade-up"
      >
        {/* Example Project Card */}
        <div className="column item-service">
          <div className="item-service__content">
            <h4 className="item-title">Hotel Booking System</h4>
            <p>
              A Java Swing + MySQL based system allowing users to register,
              login, book rooms, make payments, and manage bookings with an
              intuitive interface.
            </p>
          </div>
        </div>

        <div className="column item-service">
          <div className="item-service__content">
            <h4 className="item-title">Laravel Student Portal</h4>
            <p>
              Web app built with Laravel for student and teacher login,
              management of marks, and CRUD operations with manual
              authentication logic.
            </p>
          </div>
        </div>

        <div className="column item-service">
          <div className="item-service__content">
            <h4 className="item-title">Face Recognition System</h4>
            <p>
              Python-based system using dlib and FaceNet to recognize faces in
              real-time webcam feed from stored image samples.
            </p>
          </div>
        </div>

        <div className="column item-service">
          <div className="item-service__content">
            <h4 className="item-title">Hand Gesture Controller</h4>
            <p>
              Gesture-based system in Python to control mouse clicks, scrolling,
              and movement using OpenCV hand tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
