export interface Starships {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed?: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables?: string;
    hyperdrive_rating?: string;
    MGLT?: string;
    starship_class?: string;
    pilots?: [];
    films?: [];
    created: string;
    edited?: string;
    url?: string;
}

export interface Films {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters?: [];
    planets?: [];
    starships?: [];
    vehicles?: [];
    species?: [];
    created?: string;
    edited?: string;
    url?: string;
}

export interface Vehicles {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed?: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables?: string;
    vehicle_class?: string;
    pilots?: [];
    films?: [];
    created: string;
    edited?: string;
    url?: string
}