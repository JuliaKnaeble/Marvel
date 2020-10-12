import React from "react";

const ActiveSearch = () => {
  return (
    <div>
      <div className="menu-opene">
        <form onSubmit={handleSubmit}>
          <img
            className="close"
            src={require(`../../Assets/close_x.png`)}
            alt=""
            onClick={() => setSearchClicked(!searchClicked)}
          />
          <input
            type="text"
            placeholder="Search your Hero..."
            autoComplete="off"
            spellCheck="false"
            autoFocus
            onChange={updateHero}
          />
        </form>
      </div>
    </div>
  );
};

export default ActiveSearch;
