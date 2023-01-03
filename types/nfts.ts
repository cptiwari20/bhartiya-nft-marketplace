export type Trait = "attack" | "health" | "speed";

export type NFTAttribute = {
    trait_type: String, 
    value: Trait
}

export type NFTMeta = {
    description: String,
    name: String,
    image: String,
    attributes: NFTAttribute[]
}