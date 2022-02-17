import type { NextApiRequest, NextApiResponse } from "next";
import { RecommendationData } from "../../common/types";
import { fetchSwitchSuggestion } from "../../common/service";
import { sleep } from "../../common/util";

const handler = async (req: NextApiRequest, res: NextApiResponse<RecommendationData>) => {
  await sleep(1000);
  let payload: any = JSON.parse(req.body);
  const {consumerId} = payload; 
  let data: RecommendationData = fetchSwitchSuggestion(consumerId);
  res.status(200).json(data);
};

export default handler;