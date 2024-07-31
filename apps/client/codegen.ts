import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: ["src/lib/graphql/**/user.ts"],
  ignoreNoDocuments: true,
  generates: {
    "src/__generated__/": {
      preset: "client",
      plugins: [],
    },
  },
}

export default config
