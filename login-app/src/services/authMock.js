const KEY_USER = 'user'
const KEY_TOKEN = 'token'

export function loginMock(email, password) {
    if(email === 'teste@teste.com' && password === '123456'){
        const user = {
            id: 1,
            nome: 'Usuário Teste',
            email,
            tipo: 'cidadao'
        }
        localStorage.setItem(KEY_USER, JSON.stringify(user))
        localStorage.setItem(KEY_TOKEN, 'mock-jwt-token')
        return user
    }
    throw new Error('E-mail ou senha incorretos!')
}

export function getUser(){
    const raw = localStorage.getItem(KEY_USER)
    return raw ? JSON.parse(raw) : null
}

export function isAuth(){
    return !!localStorage.getItem(KEY_TOKEN)
}

export function logout() {
    localStorage.removeItem(KEY_USER)
    localStorage.removeItem(KEY_TOKEN) 
}