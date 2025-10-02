// components/Alert.jsx
import React from "react";
import PropTypes from "prop-types";

export default function Alert({ msg }) {
  if (!msg) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="px-4 py-2 rounded shadow-lg bg-blue-600 text-white">
        {msg}
      </div>
    </div>
  );
}

Alert.propTypes = {
  msg: PropTypes.string,
};
