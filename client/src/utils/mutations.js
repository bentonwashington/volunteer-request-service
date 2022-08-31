import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }`;

export const DELETE_USER = gql`
mutation deleteUser($userId: ID) {
    deleteUser(userId: $userId) {
        token
        user 
    }
}`;

export const ADD_REQUEST = gql`
mutation addRequest($title: String!, $description: String!, $details: String, $requestAuthor: String!, $category: ID)
    addRequest(title: $title, description: $description, details: $details, requestAuthor: $requestAuthor, category: $category){
    _id
    title
    description
    details
    category
    requestAuthor
    }`;

export const UPDATE_REQUEST = gql``;

export const DELETE_REQUEST = gql`
mutation deleteRequest($requestId: ID) {
    deleteRequest(requestId: $requestId) {
        token
        user 
    }
}`;