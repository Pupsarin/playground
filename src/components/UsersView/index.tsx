import React from "react";
import gql from 'graphql-tag';
import {useQuery} from "@apollo/react-hooks";


export const UsersView: React.FC = () => {
    const GET_USERS = gql`
        query {
            users {
                id
                name
                email
            }
        }
    `;
    const {loading, error, data} = useQuery(GET_USERS);
    console.log(loading, error, data)

    return <div>
        <pre>
            {JSON.stringify(data, null, '  ')}
        </pre>
    </div>
}