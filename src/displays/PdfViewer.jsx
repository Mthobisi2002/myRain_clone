import React, { useState } from 'react';
import t_c from '../pdf/TermsRainOne.pdf';
import w_o from '../pdf/website.pdf';
import p_p from '../pdf/policies.pdf';
import ispa from '../pdf/ispa.pdf';
import paia from '../pdf/paia_manual.pdf';
import c from '../pdf/Social_media_competition_Ts___Cs__1_.pdf';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import DataPrivacy from './dataPrivacy';

function PdfViewer() {
  //selected pdf file
  const [PdfFile, setPdfFile] = useState(t_c);
  //pdf file  plugins to edit
  const newplugin = defaultLayoutPlugin();
  //data privacy onClick
  const [isOpen, setIsOpen] = useState(false);
  //pdf files onClick
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div id="legal" style={{ display: "block", justifyContent: "center" }}>
      <h1>legal</h1>
      <div id="container">
        <div className='one'>
          <button type="button" id="btn-legal" onClick={() => { setPdfFile(t_c); setIsOpen1(false ? true : true); setIsOpen(true ? false : false) }}>terms & condition</button>
          <button type="button" id="btn-legal" onClick={() => { setPdfFile(w_o); setIsOpen1(false ? true : true); setIsOpen(true ? false : false) }}>website online</button>
          <button type="button" id="btn-legal" onClick={() => { setPdfFile(p_p); setIsOpen1(false ? true : true); setIsOpen(true ? false : false) }}>privacy policy</button>
          <button type="button" id="btn-legal" onClick={() => { setPdfFile(ispa); setIsOpen1(false ? true : true); setIsOpen(true ? false : false) }}>ispa</button>
        </div>
        <div className="two">
          <button type="button" id="btn-legal" onClick={() => { setPdfFile(paia); setIsOpen1(false ? true : true); setIsOpen(true ? false : false) }}>paia</button>
          <button type="button" id="btn-legal" onClick={() => { setIsOpen(false ? true : true); setIsOpen1(true ? false : false) }}>data privacy</button>
          <button type="button" id="btn-legal" onClick={() => { setPdfFile(c); setIsOpen1(false ? true : true); setIsOpen(true ? false : false) }}>competition</button>
        </div>
      </div>
      {isOpen1 && <div className="pdf-folder" style={{ height: "700px", border: "3px solid #0077c8", margin: "auto", display: "block" }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
          <Viewer fileUrl={PdfFile} plugins={[newplugin]} />
        </Worker>
      </div>}
      <div>
        {isOpen && <DataPrivacy />}
      </div>
    </div>
  )
}

export default PdfViewer;