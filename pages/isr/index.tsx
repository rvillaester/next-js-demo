import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Store } from "../../common/types";
import { DDB_URL } from "../../common/util";
import StoreList from "../../components/store/StoreList";

type ISSGProps = {
  stores: Store[];
};

const ISSG: NextPage<ISSGProps> = (props) => {
  return <StoreList stores={props.stores} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(DDB_URL + "/list", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: "",
  });

  const storeData = await data.json();
  const store = storeData.Items;

  return {
    props: {
      stores: store.map((s: any) => ({
        name: s.name.S,
        address: s.address.S,
        image: s.image.S,
        id: s.pk.S,
      })),
    },
  };
};

export default ISSG;
