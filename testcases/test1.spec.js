import Vue from 'vue'
import Login from 'path/to/Login.vue'

describe('Login', () => {
  it('has a created hook', () => {
    expect(typeof Login.created).toBe('function')
  })

  it('sets the correct default data', () => {
    expect(typeof Login.data).toBe('function')
    const defaultData = Login.data()
    expect(defaultData.password).toBe('')
  })

//Verfying login in both correct and wrong entries
  it('Test for correct password', () => {
    Login.methods.doLogin({email: 'msn123@gmail.com', password: 'admin123'})
    expect(loginSuccessful).toBe('true')
  })

  it('Test for wrong password', () => {
    Login.methods.doLogin({email: 'msn123@gmail.com', password: 'asdfsadf'})
    expect(loginSuccessful).toBe('false')
  })
})
