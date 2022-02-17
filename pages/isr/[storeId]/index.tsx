import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { Store } from "../../../common/types";
import { DDB_URL } from "../../../common/util";
import StoreDetail from "../../../components/store/StoreDetail";

type ISRProps = {
  store: Store;
};

const ISR: NextPage<ISRProps> = (props) => {
  return <StoreDetail store={props.store} />;
};

export const getStaticPaths: GetStaticPaths = async() => {
  const ddbdata = await fetch(DDB_URL + "/list",
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: ""
  });

  const storeData = await ddbdata.json();
  const data = storeData.Items;

  return {
    fallback: 'blocking',
    paths: data.map((d: any) => ({
      params: { storeId: d.pk.S },
    })),
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const storeId = context.params?.storeId;
  const payload = {
    id: storeId
  };

  const ddbdata = await fetch(DDB_URL + '/get',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(payload)
  });

  
  const storeData = await ddbdata.json();
  const data = storeData.Items[0];
  return {
    props: {
      store: {
        id: storeId,
        name: data.name.S,
        address: data.address.S,
        image: data.image.S,
        description: data.description.S,
      },
    },
    revalidate: 2,
  };
};

export default ISR;
