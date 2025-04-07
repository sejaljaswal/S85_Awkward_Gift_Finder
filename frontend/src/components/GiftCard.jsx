import React from "react";
import "./GiftCard.css";
import { Gift, Tag, Info } from "lucide-react";

const GiftCard = ({ gift }) => {
  return (
    <div className="gift-card">
      {/* Header */}
      <div className="gift-card-header">
        <div className="gift-icon-wrapper">
          <Gift className="text-purple-600" size={20} />
        </div>
        <h2 className="gift-name">{gift.name}</h2>
      </div>

      {/* Info */}
      <div className="gift-info">
        <div>
          <Tag size={14} style={{ marginRight: "6px" }} />
          <span className="category-badge">{gift.category}</span>
        </div>
        <div className="gift-price">₹{gift.price}</div>
        <div className="gift-description">
          <Info size={14} className="text-indigo-500" />
          <p>{gift.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
