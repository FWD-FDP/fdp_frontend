import { getConfig } from '@ijl/cli'

console.log(getConfig());
export const API_KEY = getConfig().apiKey;
export const SOCKET_URL = "wss://ws.finnhub.io?token=" + API_KEY;