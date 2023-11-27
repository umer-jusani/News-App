import React, { useContext } from "react";
import { AppContext } from "../Context";

const Search = () => {
  const { query, SearchPost } = useContext(AppContext);

  return (
    <>
      <h1 className="my-5 fst-italic">NEWS APP</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Search Here"
            value={query}
            onChange={(e) => {
              SearchPost(e.target.value);
            }}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
