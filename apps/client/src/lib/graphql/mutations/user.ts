import { graphql } from "@/__generated__"

export const signupMutation = graphql(`
  mutation Signup($signupUserInput: CreateUserInput!) {
    signup(signupUserInput: $signupUserInput)
  }
`)
