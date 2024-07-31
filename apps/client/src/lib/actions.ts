"use server"

import { signupMutation } from "@/lib/graphql/mutations/user"
import { createUserSchema } from "@iwtb/schemas"
import { z } from "zod"
import { createApolloClient } from "./apolloClient"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type SignupActionState = {
  message: string
  success?: boolean
}

export async function signupAction(
  _prevState: SignupActionState | undefined,
  signupUserInput: z.infer<typeof createUserSchema>,
): Promise<SignupActionState> {
  const graphqlClient = createApolloClient()
  const { data, errors } = await graphqlClient.mutate({
    mutation: signupMutation,
    variables: {
      signupUserInput,
    },
  })

  if (data) {
    cookies().set("access_token", data.signup)
    redirect("/")
  } else if (errors) {
    return { message: errors[0].message, success: false }
  } else {
    return { message: "Unknown error", success: false }
  }
}
