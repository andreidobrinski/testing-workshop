// snapshot testing
import React from 'react'
import {generate} from 'til-client-test-utils'
import {renderIntoDocument, render, cleanup} from 'react-testing-library'
import Login from '../login'

afterEach(cleanup)

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  const fakeUser = generate.loginForm()
  const handleSubmit = jest.fn()
  const {getByLabelText, getByText} = renderIntoDocument(
    <Login onSubmit={handleSubmit} />,
  )

  const usernameNode = getByLabelText('username')
  const passwordNode = getByLabelText('password')

  // Act
  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password
  getByText('submit').click()

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
})

test('snapshot', () => {
  const {container} = render(<Login />)
  // first child is used because container is a div that wraps everything
  // only the firstchild matters
  // won't work if you're rendering a fragment
  expect(container.firstChild).toMatchSnapshot()
  // render the login, this will give you back an object with a `container` property
  // expect the `container` property to match a snapshot
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-4%20(snapshots)&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
// in expect(container.firstChild).toMatchSnapshot()
// first child is used because container is a div that wraps everything
// only the firstchild matters
// won't work if you're rendering a fragment
// snapshots give an idea of what css is changing, and how that could affect other stuff
// pressing u will update a snapshot in the command line
// not a good candidate for TDD
