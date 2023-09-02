export const getUserQuery = `
    query GetUser($email: string!) {
        user(by: { email: $email }) {
            id
            name
            email
            avaterUrl
            description
            githubUrl
            linkedinUrl
        }
    }
`

export const createUserMutation = `
    mutation CreateUser($input: UserCreateInput!) {
        userCreate(input: $input) {
            user {
                name
                email
                avatarUrl
                description
                githubUrl
                linkedinUrl
                id
            }
        }
    }
`