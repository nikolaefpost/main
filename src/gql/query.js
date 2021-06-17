import { gql } from '@apollo/client';

export const GET_FIRST_FIVE_USERS = gql`
    query MyQuery {
        queryUser {
            email
            phone
            user_name
            id
        }
    }
`;