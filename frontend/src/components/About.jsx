import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we care about is food</p>
          </div>
          <p className="mid">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            culpa, eos ad autem sed officiis, distinctio odio assumenda
            reiciendis at quibusdam omnis totam? Nobis explicabo dolores vel
            nisi totam vero! Eius a recusandae rerum accusamus, hic nam itaque
            ut dolor velit non illum tempora labore nihil beatae sit cupiditate,
            ullam quas unde delectus eaque atque iste reiciendis modi. Maxime,
            asperiores consequuntur. Nulla veritatis unde doloremque eum,
            dignissimos amet! Deleniti, quos fuga. Id est optio eaque, dolores
            quidem, repellendus distinctio voluptatem veritatis aliquam
            provident obcaecati dolorum reiciendis. Delectus corrupti laborum
            neque laudantium nulla nisi, ab, vero perferendis ipsam
            perspiciatis, minus mollitia animi.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
