import React from "react";
import chooseImg from "../../assets/choose.jpg";
import coffeeMug from "../../assets/coffee-mug.svg";
import coffeeBeans2 from "../../assets/coffee-beans-2.svg";
import coffeeBeans3 from "../../assets/coffee-beans-3.svg";
import "./choose.css";
const Choose = () => {
  return (
    <section className="choose section">
      <div className="choose_grid container grid">
        <div className="choose__content">
          <h2 className="section__title title-left" data-title="Why Choose Us">
            Coffee Most Out Of Your Favorite & Tasty Coffee House
          </h2>
          <p className="choose_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            laboriosam distinctio, incidunt dolore, itaque unde ipsam id tempore
            fuga officia eum suscipit nihil cumque dolorum?
          </p>
          <div className="choose_details grid">
            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img src={coffeeMug} alt="" className="choose__detail-img" />
              </div>
              <div>
                <h3 className="choose__details-title">Awesome Aroma</h3>
                <p className="choose__details-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                  illum iure soluta quod possimus nobis commodi. Molestias
                  aspernatur voluptatibus quae?
                </p>
              </div>
            </div>
            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img src={coffeeBeans2} alt="" className="choose__detail-img" />
              </div>
              <div>
                <h3 className="choose__details-title">Pure Grades</h3>
                <p className="choose__details-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                  illum iure soluta quod possimus nobis commodi. Molestias
                  aspernatur voluptatibus quae?
                </p>
              </div>
            </div>
            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img src={coffeeBeans3} alt="" className="choose__detail-img" />
              </div>
              <div>
                <h3 className="choose__details-title">Healthy Coffee</h3>
                <p className="choose__details-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                  illum iure soluta quod possimus nobis commodi. Molestias
                  aspernatur voluptatibus quae?
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={chooseImg} alt="" className="choose__img" />
      </div>
    </section>
  );
};

export default Choose;
