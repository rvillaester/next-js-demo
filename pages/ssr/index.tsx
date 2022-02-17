import type { GetServerSideProps, NextPage } from "next";
import { fetchSwitchSuggestion } from "../../common/service";
import { RecommendationData } from "../../common/types";
import { sleep } from "../../common/util";
import classes from "../../styles/Common.module.css";

type SSRProps = {
  recData: RecommendationData
}

const SSR: NextPage<SSRProps> = (props) => {
  let data: RecommendationData = props.recData;
  return (
    <div className={classes.main}>
      <table className={classes.detail}>
        <tr>
          <td><p>Current Plan</p></td>
          <td>{data.currentPlan}</td>
        </tr>
        <tr>
          <td><p>Current Price</p></td>
          <td>{data.currentPrice}</td>
        </tr>
        <tr>
          <td><p>Suggested Plan</p></td>
          <td>{data.suggestedPlan}</td>
        </tr>
        <tr>
          <td><p>Suggested Price</p></td>
          <td>{data.suggestedPrice}</td>
        </tr>
        <tr>
          <td><p>Switch savings</p></td>
          <td>{data.saving}</td>
        </tr>
      </table>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('SSR hit');
  let consumerId: string | string[] | undefined = context.query.consumerId;
  let recData: RecommendationData = fetchSwitchSuggestion(consumerId);
  await sleep(1000);
  return {
    props: {
      recData,
    },
  }
}

export default SSR;
