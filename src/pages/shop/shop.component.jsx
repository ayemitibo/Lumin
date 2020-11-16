import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { PRODUCTS } from "../../graphql/queries";

const ShopPage = () => {
  const [collections, setCollections] = useState([]);
  const { data, loading } = useQuery(PRODUCTS, {
    variables: {
      Currency: "NGN",
    },
  });

  useEffect(() => {
    console.log(data, "data");
    if (data && data.products) {
      setCollections(data.products);
    }
  }, [data]);

  return (
    <div className="shop-page">
      <div className="collection-preview">
        {collections.length
          ? collections.map((item, index) => (
              <CollectionItem key={index} item={item} />
            ))
          : null}
      </div>
    </div>
  );
};

export default ShopPage;
