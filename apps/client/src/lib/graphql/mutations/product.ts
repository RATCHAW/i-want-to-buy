import { graphql } from "@/__generated__"

export const listProductMutation = graphql(`
  mutation CreateProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput)
  }
`)
