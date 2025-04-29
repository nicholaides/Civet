const { register } = require('node:module')
const { pathToFileURL } = require('node:url')
const parentURL = pathToFileURL(__filename);

register("@danielx/hera/register/esm", { parentURL, data: { module: true } })

const typescript = require('typescript')
register("@danielx/hera/register/tsc/esm", { parentURL: parentURL, data: {
  target: typescript.ScriptTarget.ES2020,
  module: typescript.ModuleKind.ESNext,
}})
