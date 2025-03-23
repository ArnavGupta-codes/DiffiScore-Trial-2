
import React from 'react'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Upload = () => {
  const navigate = useNavigate();
  const goToUploadPage = () => {
    navigate("/upload");
  };
  
  return (
    <motion.div 
      className="upload"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="icon-container">
        <motion.img 
          src="/images/upload.png" 
          alt="Upload icon"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      </div>
      <h2 className="card-title">Upload Questions</h2>
      {/* <p className="card-subtitle">Upload your question files to analyze difficulty scores</p> */}
      <motion.button 
        className="action-button" 
        onClick={goToUploadPage}
        whileTap={{ scale: 0.95 }}
      >
        Upload
      </motion.button>
    </motion.div>
  );
}

export default Upload