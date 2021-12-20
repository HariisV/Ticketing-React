import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-3 text-muted footer__logo">
                <img src="/assets/img/logo-sm.svg" alt="" className="mb-3" />
                <br />
                Stop waiting in line. Buy tickets conveniently, watch movies quietly.
              </div>
              <div className="col-md-2 footer__exporr">
                <strong>Explore</strong>
                <ul className="mt-3 footer__expor">
                  <li className="footer__expor--item">Cinemas</li>
                  <li className="footer__expor--item">Movie item</li>
                  <li className="footer__expor--item">My Ticket</li>
                  <li className="footer__expor--item">Notification</li>
                </ul>
              </div>
              <div className="col-md-3">
                <strong>Our Sponsor</strong>
                <ul className="mt-3 footer_sponsor list-inline">
                  <li className="list-inline-item">
                    <img
<<<<<<< HEAD
                      src="/assets/img/ebuId.png"
=======
                      src="/assets/img/sponsor1.png"
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
                      className="footer_sponsor--item ebuid_mobile"
                      height="44px"
                      width="120px"
                      alt=""
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="/assets/img/sponsor2.png"
                      className="footer_sponsor--item cineone_mobile"
                      alt=""
                      width="173px"
                      height="26px"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
<<<<<<< HEAD
                      src="/assets/img/hiFlix.png"
=======
                      src="/assets/img/sponsor3.png"
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
                      className="footer_sponsor--item hiflix_mobile"
                      alt=""
                      width="80px"
                      height="25px"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-md-3 footer__followuss">
                <strong>Follow us</strong>
                <ul className="mt-3 footer__followus">
                  <li className="footer__followus--item">
                    <img src="/assets/icon/fb.svg" className="footer_followus--icon" alt="" />
                    <span> Tickez Official </span>
                  </li>
                  <li className="footer__followus--item">
                    <img src="/assets/icon/tw.svg" className="footer_followus--icon" alt="" />
                    <span> Tickez.id </span>
                  </li>
                  <li className="footer__followus--item">
                    <img src="/assets/icon/ig.png" className="footer__logo--ig" alt="" />
                    <span> Tickez.id </span>
                  </li>
                  <li className="footer__followus--item">
                    <img src="/assets/icon/yt.svg" className="footer_followus--icon" alt="" />
                    <span> Tickez Channel </span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center footer__end">© 2020 Tickitz. All Rights Reserved.</p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
