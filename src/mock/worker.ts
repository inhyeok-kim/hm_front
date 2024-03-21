import {setupWorker} from "msw/browser";
import { authHandlers } from "./auth";

const handlers = [
    ...authHandlers
]
export const worker = setupWorker(...handlers);