import {resolve} from "path"
import MIXIN from "panda-sky-mixin"
import {read as _read} from "panda-quill"
import {yaml} from "panda-serialize"

import getPolicyStatements from "./policy"
import preprocess from "./preprocess"

mixin = do ->
  read = (name) -> _read resolve __dirname, "..", "..", "..", "files", name

  schema = yaml await read "schema.yaml"
  template = await read "template.yaml"

  SQS = new MIXIN {
    name: "sqs"
    schema
    template
    preprocess
    #cli
    getPolicyStatements
  }
  SQS

export default mixin
