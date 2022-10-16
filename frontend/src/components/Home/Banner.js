import React, { useState } from "react";
import logo from "../../imgs/logo.png";

const Banner = () => {
  const [searchInput, setSearchInput] = useState();

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="banner-text-container">
          <span id="get-part">A place to get</span>
          <div class="input-group rounded" className="banner-search">
            <input
              id="search-box"
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              class="form-control rounded"
              placeholder="What is it that you truly desire?"
            />
            {!searchInput && <i class="bi bi-search" />}
          </div>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
