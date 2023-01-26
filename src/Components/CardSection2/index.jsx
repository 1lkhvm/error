import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.scss";
export default function CardSection2() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4444/").then((response) => {
      setPost(response.data);
    });
  }, []);

  const deletePost = (_id) => {
    axios.delete(`http://localhost:4444/${_id}`).then(() => {
      axios.get("http://localhost:4444/").then((response) => {
        setPost(response.data);
      });
    });
  };

  function sortPrice (){
    setPost([...post.sort((a,b)=> (a.price > b.price) ? 1 : ((a.price < b.price) ? -1 : 0))])
  }

  return (
    <div className="Card-page">
      <div className="Card-text">
        <p>Popular Item in the market</p>
        <h1>Trending Product</h1>
        <button onClick={sortPrice}>Sort by price</button>
      </div>
      <div className="Card-container">
        {post.map((element) => {
          return (
            <div className="card">
              <div>
                <button
                  onClick={() => {
                    deletePost(element._id);
                  }}
                >
                  x
                </button>
              </div>
              <img src={element.imgURL} alt="Denim Jeans" />
              <p>{element.category}</p>
              <h1>{element.name}</h1>
              <p className="price">{element.price}$$</p>
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
