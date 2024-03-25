import {setupWorker} from "msw/browser";
import { authHandlers } from "./api/auth";

const handlers = [
    ...authHandlers
]
export const worker = setupWorker(...handlers);