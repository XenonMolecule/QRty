import React from 'react';
import QR from 'qrcode.react'

function QRCode(props) {
  return (
    <div className="QRCode">
      <QR value={props.text} fgColor="black" includeMargin={true} renderAs="svg" level="H"  size={150} bgColor="white"/>
    </div>
  );
}

export default QRCode;
