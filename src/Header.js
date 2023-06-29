import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                <strong>File Converter</strong>
              </h1>
              <p className="main-hero-para1">
                Audify is an online file converter. We support nearly all audio, video, document, ebook, archive, image, spreadsheet, and presentation formats. To get started, use the button below and select files to convert from your computer. This simple converter will help you quickly extract audio from popular video formats (MP4, MOV, MKV, WEBM, AVI, and others).
              </p>
            </div>

          </div>
        </section>
        <div className="button d-flex">
          <a className="butto" href="/"> <img alt="" width="25" height="25" className="file-image" src="/images/file.png"/>Select files</a>
        </div>
    
      </header>
    </>
  );
};

export default Header;
