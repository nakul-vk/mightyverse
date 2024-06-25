import "./Card.css";
import { motion } from "framer-motion";
import React, { forwardRef } from "react";

const Card = forwardRef(({ image, children }, ref) => {
  return (
    <motion.div ref={ref} className="card-wrapper">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(119,119,119,0) 0%, rgba(62,62,62,0.7) 100%), url(${image.md})`,
        }}
        className="card"
      >
        <div className="info">{children}</div>
      </div>
    </motion.div>
  );
});

export default Card;
