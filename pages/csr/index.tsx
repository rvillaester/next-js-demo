import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RecommendationData } from "../../common/types";
import { constructAPIUrl } from "../../common/util";
import classes from "../../styles/Common.module.css";

const CSR: NextPage = () => {
  const [data, setData] = useState<RecommendationData>();
  const router = useRouter();

  const fetchSwitchSuggestion = async () => {
    let url = constructAPIUrl("switchSuggestion");
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        consumerId: "textsxxasds",
      }),
    });
    
    if(response.status == 401){
      router.push('/unauthorized');
    }

    let data = await response.json();
    setData(data);
  };

  useEffect(() => {
    const switchSuggestion = async () => {
      await fetchSwitchSuggestion();
    };
    switchSuggestion();
  }, []);

  return (
    <div className={classes.main}>
      {!data && <p className={classes.waiting}>Waiting for data......</p>}
      {/* {data && ( */}
        <table className={classes.detail}>
          <tr>
            <td>
              <p>Current Plan</p>
            </td>
            <td>{data?.currentPlan}</td>
          </tr>
          <tr>
            <td>
              <p>Current Price</p>
            </td>
            <td>{data?.currentPrice}</td>
          </tr>
          <tr>
            <td>
              <p>Suggested Plan</p>
            </td>
            <td>{data?.suggestedPlan}</td>
          </tr>
          <tr>
            <td>
              <p>Suggested Price</p>
            </td>
            <td>{data?.suggestedPrice}</td>
          </tr>
          <tr>
            <td>
              <p>Switch savings</p>
            </td>
            <td>{data?.saving}</td>
          </tr>
        </table>
      {/* )} */}
    </div>
  );
};

export default CSR;
