import React from "react"
import ReactDOM from "react-dom/client"

import './index.css'
function BookList (){
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );

}
const Book=()=>{
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => (
  <img
    src="./images/book-1.jpg"
    alt="Twisted Games (Twisted, 2) Paperback "
  />
);
const Title = () => <h2>Twisted Games (Twisted, 2) Paperback</h2>;
const Author = () => <h4>Ana Huang </h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList/>); 