import React from "react";
import { MdSend } from "react-icons/md";
import { motion } from "framer-motion";
const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmount}
            
          />
        </div>
      </div>
      <motion.button
      type="submit"
      className="btn"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        {edit ? "edit" : "submit"}
        {/* submit  */}
        <MdSend className="btn-icon" />
      </motion.button>
    </form>
  );
};

export default ExpenseForm;
