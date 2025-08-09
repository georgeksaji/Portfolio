import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="s-portfolio target-section">
      <div className="row section-header has-bottom-sep narrow target-section" data-aos="fade-up">
        <div className="column large-full">
          <h3 className="section-header__pretitle pretitle">Certifications</h3>
          <h1 className="section-header__title title">What I’ve Achieved</h1>
        </div>
      </div>

      <div className="row masonry-wrap">
        <div className="masonry pswp-gallery" data-aos="fade-up">
          {/* Example Certification Item */}
          <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
              <div className="item-folio__thumb">
                <a
                  href="/images/certifications/cert1-large.jpg"
                  className="thumb-link"
                  data-pswp-width="1200"
                  data-pswp-height="800"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/certifications/cert1-thumb.jpg"
                    srcSet="/images/certifications/cert1-thumb.jpg 1x, /images/certifications/cert1-thumb@2x.jpg 2x"
                    alt="Certification 1"
                  />
                </a>
              </div>

              <div className="item-folio__text">
                <h4 className="item-folio__title">React Developer</h4>
                <p className="item-folio__cat">Udemy</p>
              </div>
            </div>
          </div>

          {/* Duplicate this block for more certifications */}
          <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
              <div className="item-folio__thumb">
                <a
                  href="/images/certifications/cert2-large.jpg"
                  className="thumb-link"
                  data-pswp-width="1200"
                  data-pswp-height="800"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/certifications/cert2-thumb.jpg"
                    srcSet="/images/certifications/cert2-thumb.jpg 1x, /images/certifications/cert2-thumb@2x.jpg 2x"
                    alt="Certification 2"
                  />
                </a>
              </div>

              <div className="item-folio__text">
                <h4 className="item-folio__title">Full-Stack Web Development</h4>
                <p className="item-folio__cat">Coursera</p>
              </div>
            </div>
          </div>
          {/* End certification item */}
        </div>
      </div>
    </section>
  );
}
