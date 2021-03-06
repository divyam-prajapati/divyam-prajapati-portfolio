import React, { useState } from "react";
import "./footer.css";
import linkedin from "../../assets/brand/LinkedIn.svg";
import github from "../../assets/brand/github.svg";
// import google from "../../assets/brand/google.svg";
import instagram from "../../assets/brand/instagram.svg";
// import discord from "../../assets/brand/discord.svg";

const Footer = () => {
  const [anim, setAnim] = useState(0);

  return (
    <div className="portfolio__footer section__padding">
      <div className="portfolio__footer-content">
        <div className="portfolio__footer-content-container">
          <div className="portfolio__footer-content-container_signature">
            <svg
              viewBox="0 0 3690 931"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={
                  anim ? "stroke-i-dot stroke-i-dot-anim" : "stroke-i-dot"
                }
                d="M771 422.844L770 423.844"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={anim ? "stroke-am stroke-am-anim" : "stroke-am-dot"}
                d="M1243.22 477.5C1243.22 477.5 1162.77 473.344 1152.2 536.344C1141.64 599.344 1203.22 598.844 1235.22 540.844C1267.22 482.844 1266.22 481.5 1266.22 481.5C1257.4 539.285 1255.38 567.924 1270.22 574.344C1296.79 582.35 1350.22 538.844 1363.22 490.344C1363.22 490.344 1356.26 576.621 1363.22 576.344C1370.7 581.855 1399.22 496.844 1416.72 490.344C1434.22 483.844 1437.22 560.344 1437.22 560.344C1437.22 560.344 1475.22 464.844 1501.22 464.844C1528.72 464.844 1534.46 478.459 1522.72 512.844C1510.98 547.229 1509.72 582.344 1526.72 587.344C1543.72 592.344 1607.22 536.344 1607.22 536.344"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={
                  anim ? "stroke-divy stroke-divy-anim" : "stroke-divy-dot"
                }
                d="M13 361.844C38.5 224.845 342 55.8446 486 36.8446C630 17.8447 722.5 67.8446 716.5 218.845C710.5 369.845 686.264 419.992 621 528.344C535.251 670.707 464 736.345 297.5 804.845C131 873.344 119.5 765.844 214 685.344C308.5 604.844 504.5 557.844 588.5 534.844C588.5 534.844 752.45 503.162 756.189 503.344C759.929 503.527 760.112 484.565 761.5 484.844C762.888 485.124 752.91 513.091 761.5 558.844C770.09 604.598 839.053 559.438 846.5 522.844C853.947 486.251 848.078 484.978 849 480.844C849.922 476.711 846.797 536.477 860.5 572.844C874.203 609.212 906.429 608.243 928 488.344C938.362 524.407 941.66 530.615 995.392 516.344L1006 493.344C983.989 542.846 1001.45 579.91 1030 580.844C1086.22 577.109 1095.66 488.344 1095.66 488.344C1095.66 488.344 1135.81 814.344 1095.66 849.344C1055.5 884.344 1020.5 861.344 1030 804.845C1039.5 748.345 1104.85 589.844 1104.85 589.844C1141.14 489.769 1219.04 471.891 1234.5 477.844"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={anim ? "stroke-d stroke-d-anim" : "stroke-d-dot"}
                d="M327 185.844V704.344"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={
                  anim ? "stroke-p-i-dot stroke-p-i-dot-anim" : "stroke-p-i-dot"
                }
                d="M3603 428.5L3606 426"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={
                  anim ? "stroke-t-dash stroke-t-dash-anim" : "stroke-t-dash"
                }
                d="M3387.5 399L3598 395"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={
                  anim ? "stroke-pati stroke-pati-anim" : "stroke-pati"
                }
                d="M3076 745V605.5C3087 553 3107.5 513 3126 497.5C3142.11 484 3153.5 481 3166.5 486.5C3182.24 494.035 3191.5 506.495 3189.5 524.5C3186.11 541.497 3182.18 554.045 3181 558.5C3178.01 569.674 3168.09 577.079 3154 583.5C3144.44 585.87 3135.5 582 3132 579C3128.5 576 3123.69 568.835 3132.5 558.5C3140.36 549.27 3146.11 545.992 3154 542.5C3183.17 532.745 3204.85 531.899 3229.5 520C3254.15 508.101 3263.14 500.903 3265.5 499C3292.52 476.84 3306.87 475.577 3331.5 487C3298.89 472.123 3277.42 481.056 3251 521.5C3245.45 530 3236.5 540 3236.5 558C3238.27 572.582 3239.72 581.779 3253 586C3269.72 589.115 3277.23 587.2 3289 580.5C3303.7 570.892 3307.84 563.89 3314 553L3330 526.5C3341 506 3349.5 487 3358 467.5C3352.79 508.772 3349 529.5 3354 562.5C3355.74 574.8 3367 574.5 3380 574.5C3392.73 574.394 3400.5 573.5 3412 567.5C3424.23 562.699 3450.55 534.277 3455.82 520L3456.74 487V330L3454.53 566.5C3454.53 581 3459 601.5 3477.03 601.5C3495.06 601.5 3513.44 593.329 3528 580.5C3550 561.11 3549.5 561 3559.5 550L3583 526.5C3597.39 508.823 3599.3 500.432 3596.5 487C3596.5 520 3593.5 532.5 3593.5 554.5C3593.5 567.5 3598.31 575.252 3605 580.5C3616.75 589.722 3640 577.5 3648 569.5C3658.5 559 3668 546 3670 542.5C3674.7 534.39 3676.33 529.529 3677 520"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={
                  anim ? "stroke-j-dot stroke-j-dot-anim" : "stroke-j-dot"
                }
                d="M2751 422L2754 419.5"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={
                  anim ? "stroke-raja stroke-raja-anim" : "stroke-raja"
                }
                d="M2372.5 602L2410.61 514.5M2421.5 489.5C2414.71 495.109 2412.3 500.542 2410.61 514.5M2410.61 514.5C2409.31 526.395 2414 527 2446 519C2478 511 2455 589.5 2455 589.5C2450.44 622.326 2489 618 2515.5 570C2542 522 2543 522.5 2543 522.5M2543 522.5C2568.71 481.33 2600.5 469.5 2633 489.5C2602.5 469.287 2567.5 481 2543 522.5ZM2543 522.5C2520.04 594.763 2539.04 609.493 2581 582C2620.18 548.647 2635.56 519.484 2649.5 473C2636.05 531.424 2629.63 572.437 2652.5 579.5C2690.99 585.598 2714.95 561.426 2743 522.5V473V643C2738.19 721.2 2734.94 764.918 2723 841.5C2704.55 901.083 2694.5 918.5 2681 918.5C2656 918.5 2656 888 2656 841.5C2662.94 756.598 2679.8 717.798 2723 657.5C2771.17 603.919 2800.05 579.555 2854.5 545C2892.41 490.256 2924.5 474 2957.5 489.5C2931.5 473 2875 495 2864.5 545C2862.47 597.768 2901.5 605.138 2934 566C2959.26 535.58 2971.18 503.621 2984 473C2975 527.615 2977.5 574 3000 581.5C3022.5 589 3053 563 3064.5 526L3075.5 478V608"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={
                  anim ? "stroke-p-line stroke-p-line-anim" : "stroke-p-line"
                }
                d="M2138 165.5V819.5"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={anim ? "stroke-p stroke-p-anim" : "stroke-p"}
                d="M1723 298.5C1702.29 290.561 1690.5 268.5 1723 238.297C1723 238.297 1865 100.782 2131 32.2966C2397 -36.1885 2510.65 85.5604 2490 234.5C2476 335.5 2441.85 379.46 2356.5 445.5C2278.5 500.5 2094.5 559.501 2094.5 559.501"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <button onClick={() => (anim ? setAnim(0) : setAnim(1))}>
              Replay
            </button>
          </div>
          <div className="portfolio__footer-content-container_social-icons">
            <a
              href="https://www.linkedin.com/in/divyam-prajapati-4a1a9418b/"
              target="__blank"
            >
              <img
                className="skills-image"
                src={linkedin}
                loading="lazy"
                placeholder="none"
                alt="Linkedin"
              />
            </a>
            <a href="https://github.com/divyam-prajapati" target="__blank">
              <img
                className="skills-image"
                src={github}
                loading="lazy"
                alt="Github"
                placeholder="none"
              />
            </a>
            <a
              href="https://www.instagram.com/divyam_prajapati/"
              target="__blank"
            >
              <img
                className="skills-image"
                src={instagram}
                loading="lazy"
                alt="Instagram"
                placeholder="none"
              />
            </a>
          </div>
        </div>
        <div className="portfolio__footer-content-text">
          <p className="portfolio__footer-content-text-copyright">
            {" "}
            Copyright ??2022 All rights reserved{" "}
          </p>
          <p className="portfolio__footer-content-text-credits">
            {" "}
            Designed & Coded with ?????? by <b>Divyam Prajapati</b>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
