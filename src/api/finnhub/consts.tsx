import { getConfig } from '@ijl/cli'

export const API_KEY = getConfig()['fdp.apiKey'];
export const SOCKET_URL = "wss://ws.finnhub.io?token=" + API_KEY;