import React from "react";

export default function Navbar() {
  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg  fw-bold navbar-light bg-light">
    //     <div className="container-fluid mx-5">
    //       <a className="navbar-brand" href="/">
    //         SantraMosambi
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="d-flex  justify-content-end">
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="/">
    //               Home
    //             </a>
    //           </li>

    //           <li className="nav-item">
    //             <a className="nav-link" href="/">
    //             About
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">
    //             Skills
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">
    //              Contact
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>

<>
<div class="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
    </div>
    <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="/">Portfo<span>lio.</span></a></div>
            <ul class="menu">
                <li><a href="/" class="menu-btn">Home</a></li>
                <li><a href="/" class="menu-btn">About</a></li>
                <li><a href="/" class="menu-btn">Services</a></li>
                <li><a href="/" class="menu-btn">Skills</a></li>
                <li><a href="/" class="menu-btn">Teams</a></li>
                <li><a href="/" class="menu-btn">Contact</a></li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>

</>

  );
}
