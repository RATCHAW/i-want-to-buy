import { graphql } from "@/__generated__"

export const signupMutation = graphql(`
  mutation Signup($signupUserInput: CreateUserInput!) {
    signup(signupUserInput: $signupUserInput)
  }
`)

export const loginMutation = graphql(`
  mutation Login($loginUserInput: LoginUserInput!) {
    login(loginUserInput: $loginUserInput)
  }
`)
