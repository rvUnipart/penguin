import { serve } from "https://deno.land/std@0.83.0/http/server.ts";
import * as flags from "https://deno.land/std@0.83.0/flags/mod.ts";

const DEFAULT_PORT = 8080;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;
