import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      username
      email
      bookCount
      savedBooks {
      bookId
      authors
      description
      title
      image
      link
      }
      _id
    }
  }
}
`;
export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;
export const SAVE_BOOK = gql`
mutation SaveBook($authors: [String],
        $description: String,
        $bookId: String,
        $image: String,
        $link: String,
        $title: String) {
  saveBook(authors: $authors, 
    description:$description, 
    bookId: $bookId, 
    image:$image, 
    link: $link, 
    title: $title ) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`;
export const REMOVE_BOOK = gql`
mutation RemoveBook($bookId: String) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`;