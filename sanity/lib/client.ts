import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skgEdC7dcBPb91E2gJMmOeuz2OWpioaDBvhUzHVl3eWvSPWY9IkJjoEL8lTqAHoUdx1kUgCoCLG2tlqBFGfWcH3yeFfZhe1uXinTbtoH23CBDsbp9clAeez91cIYthfttpBSyKeoffIrNsGHoTE9hBDMCANVhDhRoCQ8rP0yqwoMHMbLQrk2"
})
