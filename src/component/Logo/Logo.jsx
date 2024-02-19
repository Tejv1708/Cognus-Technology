import React from "react";
import CompanyLogo from "./Logo.png";
import "./Logo.css";
const Logo = () => {
  return (
    <>
      <div className="header-container">
        <img className="company-logo" src={CompanyLogo} alt="" />
        <div className="user-actions">
          <input
            placeholder="Enter a Keyword"
            type="text"
            className="login-input"
          />
          <span className="login-btn">Login</span>
          <span className="signup-btn">SignUp</span>
        </div>
      </div>

      <div className="container">
        <select className="selector-box" name="type-1" id="type-1">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
          <option value="option-6">Option 6</option>
        </select>
        <select name="type-2" id="type-2">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
          <option value="option-6">Option 6</option>
        </select>
        <select name="type-3" id="type-3">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
          <option value="option-6">Option 6</option>
        </select>
        <select name="type-4" id="type-4">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
          <option value="option-6">Option 6</option>
        </select>
        <select name="type-5" id="type-5">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
          <option value="option-6">Option 6</option>
        </select>
        <select name="type-6" id="type-6">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
          <option value="option-6">Option 6</option>
        </select>
        <select name="type-7" id="type-7">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
          <option value="option-6">Option 6</option>
        </select>
        <select name="type-1" id="type-1">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
          <option value="option-6">Option 6</option>
        </select>
        <select name="type-1" id="type-1">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
          <option value="option-6">Option 6</option>
        </select>
        <select name="type-1" id="type-1">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
          <option value="option-6">Option 6</option>
        </select>
        <button className="logo">Order Now</button>
      </div>
    </>
  );
};

export default Logo;
