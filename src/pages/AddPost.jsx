import React from 'react'
import { Container } from '../components'
import PostForm from '../post-form/PostForm'

function AddPost() {
  return (
    <div className='py-8 bg-gray-900'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost