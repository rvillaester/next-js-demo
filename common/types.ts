export type RecommendationData = {
    suggestedPlan: string;
    suggestedPrice: number;
    currentPlan: string;
    currentPrice: number;
    saving: number;
};

export type Store = {
    id: string,
    image: string,
    name: string,
    address: string,
    description: string
}