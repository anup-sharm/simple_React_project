

import React from "react";

const App = () => {
  return (
    <>
    {/* create a nevbar */}
      <nav className="nav-bar">
        <section className="welcom">welcom User</section>
        <section className="logout">Logout</section>
      </nav>
      {/* End navbar */}

       {/* create main-div */}
      <div className="main-div">
        <div className="list-div">
          <section className="list">List-1</section>
          <ul>
            <li>
              <input type="checkbox" />
              Send an Email to Company
            </li>
            <li>
              <input type="checkbox" name="" id="" checked />
              Create new Assigment
            </li>
            <li>
              <input type="checkbox" name="" id="" />
              need to talk rajesh
            </li>
            <li>
              <input type="checkbox" name="" id="" />
              Buy some goods
            </li>
          </ul>
        </div>
        <div className="list-div">
          <section className="list">List-2</section>
          <ul>
            <li>
              <input type="checkbox" name="" id="" />
              Reading book
            </li>
            <li>
              <input type="checkbox" name="" id="" checked/>
              Play Criket
            </li>
            <li>
              <input type="checkbox" name="" id="" />
              visit College tomorrow
            </li>
          </ul>
        </div>
        <div className="list-div">
          <section className="list">List-3</section>
          
          <ul>
            <li>
              <input type="checkbox" name="" id="" />
              test task 1
            </li>
            <li>
              <input type="checkbox" name="" id="" />
            test task 2
            </li>
          </ul>
        </div>
        <div className="list-div-4">
          <section className="Create new list">List-4</section>
          <span className="plus">+</span>
        </div>
      </div>
    </>
  );
};

export default App;
