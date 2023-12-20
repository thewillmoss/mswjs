import { setupWorker } from "msw/browser";
import { Handlers } from "./Handlers";
// This configures a Service Worker with the given request handlers.
const handlers = [
    ...Handlers
]
export const worker = setupWorker(...handlers);
