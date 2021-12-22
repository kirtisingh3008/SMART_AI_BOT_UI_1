export interface Note{
    id: string,
    tag: string,
    question: string,
    answer: string,
    color: string,
    date: string
}

export interface Intents{
    intent_id: string,
    intents: string
}

export interface Response{
    response_id: string,
    responses: string
}