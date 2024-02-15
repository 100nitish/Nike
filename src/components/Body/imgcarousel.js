import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./imgcarousel.css";

function imgcarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h3 className="h3">Gifts For You and Yours</h3>
      <Carousel className="jp1" responsive={responsive}>
        <div className="caro">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_411,c_limit/ba971847-eeb8-4362-88c5-b783138c1aba/sportswear-boxy-t-shirt-L1c21h.png"
            alt=""
          ></img>
          <h4>Nike Sportswear</h4>
          <p>Women's Boxy Tshirt</p>
          <label>MRP: $16</label>
        </div>
        <div className="caro">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_396,c_limit/021b9aa0-cd1c-4f6f-b294-8eb7622e1ddf/sportswear-t-shirt-tCN8wp.png"
            alt=""
          ></img>
          <h4>Nike Sportswear</h4>
          <p>Women's Boxy Tshirt</p>
          <label>MRP: $16</label>
        </div>
        <div className="caro">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_396,c_limit/dda5cd94-dcb1-4067-b5f4-042a8c65de53/court-vision-low-shoes-mxK2Kk.png"
            alt=""
          ></img>
          <h4>Nike Sportswear</h4>
          <p>Women's Boxy Tshirt</p>
          <label>MRP: $16</label>
        </div>
        <div className="caro">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_396,c_limit/782e840d-f0d1-4faf-a8bb-288f77af474b/court-legacy-lift-shoes-Rwtb5P.png"
            alt=""
          ></img>
          <h4>Nike Sportswear</h4>
          <p>Women's Boxy Tshirt</p>
          <label>MRP: $16</label>
        </div>
        <div className="caro">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_396,c_limit/43125b35-4aec-42da-a6ea-86f6124daa37/air-max-sc-shoes-gMGhP8.png"
            alt=""
          ></img>
          <h4>Nike Sportswear</h4>
          <p>Women's Boxy Tshirt</p>
          <label>MRP: $16</label>
        </div>
        <div className="caro">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_396,c_limit/b27b0e09-4e19-4f9d-82c7-bb58c4922c62/air-force-1-07-shoes-BP8qPK.png"
            alt=""
          ></img>
          <h4>Nike Sportswear</h4>
          <p>Women's Boxy Tshirt</p>
          <label>MRP: $16</label>
        </div>
        <div className="caro">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_396,c_limit/9c8ecba7-e632-4de1-935f-3728ee6f8bd8/sportswear-long-sleeve-t-shirt-QkVp5r.png"
            alt=""
          ></img>
          <h4>Nike Sportswear</h4>
          <p>Women's Boxy Tshirt</p>
          <label>MRP: $16</label>
        </div>
        <div className="caro">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_396,c_limit/7828f700-6e14-496e-b1b1-7abfb1b91ec9/sportswear-lunar-new-year-older-t-shirt-7Lz5Pm.png"
            alt=""
          ></img>
          <h4>Nike Sportswear</h4>
          <p>Women's Boxy Tshirt</p>
          <label>MRP: $16</label>
          
        </div>
        <div className="caro">
            <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_396,c_limit/f0d47b20-6152-4cb5-8b08-27005bc35472/sportswear-club-fleece-older-oversized-french-terry-crew-neck-sweatshirt-x1rTx2.png"
            alt=""></img>
            <h4>Nike Sportswear</h4>
            <p>Women's Boxy Tshirt</p>
            <label>MRP: $16</label>
          </div>
      </Carousel>
    </div>
  );
}

export default imgcarousel;
