import React from "react";

const ProductHuntBadge = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<a href="https://www.producthunt.com/posts/storekool?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-storekool" target="_blank">
                  <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=487828&theme=light" alt="StoreKool - Simplify&#0032;multi&#0045;store&#0032;WooCommerce&#0032;management&#0032;with&#0032;StoreKool🚀 | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" />
                 </a>`,
      }}
    />
  );
};

export default ProductHuntBadge;
