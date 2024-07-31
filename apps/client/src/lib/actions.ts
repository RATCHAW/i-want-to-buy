"use server"

import { signupMutation, loginMutation } from "@/lib/graphql/mutations/user"
import { createUserSchema, loginUserSchema } from "@iwtb/schemas"
import { z } from "zod"
import { graphqlClient } from "./apolloClient"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type SignupActionState = {
  message: string
  success?: boolean
}

type LoginActionState = {
  message: string
  success?: boolean
}

export async function signupAction(
  _prevState: SignupActionState | undefined,
  signupUserInput: z.infer<typeof createUserSchema>,
): Promise<SignupActionState | undefined> {
  try {
    const { data } = await graphqlClient.mutate({
      mutation: signupMutation,
      variables: {
        signupUserInput,
      },
    })
    if (data) {
      cookies().set("access_token", data.signup)
    }
  } catch (error: any) {
    return { message: error.message, success: false }
  }
  redirect("/")
}

export async function loginAction(
  _prevState: LoginActionState | undefined,
  loginUserInput: z.infer<typeof loginUserSchema>,
): Promise<LoginActionState | undefined> {
  try {
    const { data } = await graphqlClient.mutate({
      mutation: loginMutation,
      variables: {
        loginUserInput,
      },
    })
    if (data) {
      cookies().set("access_token", data.login)
    }
  } catch (error: any) {
    return { message: error.message, success: false }
  }
  redirect("/")
}
