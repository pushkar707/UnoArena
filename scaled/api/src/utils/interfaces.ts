import { WebSocket } from "ws";
import { Deck } from "./deck";

export type color = 'red' | 'yellow' | 'green' | 'blue';
export type numberType =  '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type action = 'skip' | 'reverse' | 'draw-two'
export type wild = 'wild' | 'draw-four'
export interface Card {
    type: 'number' | 'action' | 'wild'
    color?: color;
    number?: numberType;
    action?: action;
    wild?: wild;
}

export interface Player {
    name: string;
    cards: Card[];
    id: number
}

export interface Room {
    players: Player[];
    deck: Deck;
    hasGameStarted?: boolean;
    nextTurn?: number;
    lastCard?: Card;
    rotation?: 'clockwise' | 'anticlockwise';
    cardDrawn?: boolean;
}

export interface ParsedDeck {
    deck: Card[];
    cardsThrown: Card[]
}

export interface ParsedRoom {
    players: Player[];
    deck: ParsedDeck;
    hasGameStarted?: boolean;
    nextTurn?: number;
    lastCard?: Card;
    rotation?: 'clockwise' | 'anticlockwise';
    cardDrawn?: boolean;
}

export type Rooms = Map<string, Room>