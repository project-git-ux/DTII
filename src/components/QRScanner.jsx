import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRScanner = () => {

//   const [currentDateTime, setCurrentDateTime] = useState(new Date());
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000); // Update every second

//     return () => clearInterval(timer); // Cleanup on component unmount
//   }, []);


  const [qrData, setQrData] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = (result) => {
    if (result?.text) {
      setQrData(result.text);
      setError(null);
    }
  };

  const handleError = (err) => {
    setError("Error scanning QR code. Please try again.");
    console.error(err);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Student's Infomation</h1>
      <p>Please show your QR code !</p>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <QrReader
          onResult={handleScan}
          constraints={{ facingMode: "environment" }}
          style={{ width: "100%" }}
        />
      </div>
      {qrData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Scanned Info:</h2>
          <p style={{ fontSize: "18px", color: "#333", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
            {qrData}    
          </p>
        </div>  
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default QRScanner;

