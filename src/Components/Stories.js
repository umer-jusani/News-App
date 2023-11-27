import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context";

const Stories = () => {
  const { hits, isLoading, dispatch } = useContext(AppContext);

  if (isLoading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }
  return (
    <>
      <div className="stories-div mt-5">
        {hits.map((currPost) => {
          const { title, author, objectID, url, num_comments } = currPost;
          return (
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By {author} | <span>{num_comments} comments</span>
              </p>
              <div className="card-button">
                <a href={url} target="_blank">
                  Read More
                </a>
                <a
                  href="#"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_POST",
                      payload: objectID,
                    });
                  }}
                >
                  Delete
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
