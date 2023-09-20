import { UUID } from "crypto";
import { MouseEventHandler, ReactNode } from "react";

export interface ResultProps {
    id: Number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: [],
    url: string,
    created: string
}