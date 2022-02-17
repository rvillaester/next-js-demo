import { RecommendationData } from "./types";

export const fetchSwitchSuggestion = (consumerId: string | undefined | string[]): RecommendationData => {
    // call adatree backend API for active ongoing consent
    // call adatree backend API for CDR data
    // construct comparison service payload
    // call comparison service API
  return {
    suggestedPlan: "AGL Plan",
    suggestedPrice: 50.51,
    currentPlan: "Energy Australia Plan",
    currentPrice: 100.51,
    saving: 50.0,
  };
};
