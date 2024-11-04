import { describe, expect } from '@jest/globals';
import AuthService from '../../services/authService'

const authService = new AuthService()

describe('Testando a authService.cadastrarUsuario', () => { 
  it('O usuario deve possui um nome, email e senha', async () => {
    const usuarioMock = {
      nome: 'Cleitin',
      email: 'cleitin@teste.com.br'
    }

    const usuarioSalvo =authService.cadastrarUsuario(usuarioMock)

    await expect(usuarioSalvo).rejects.toThrowError('A senha de usuario e obrigatoria!')
  })
 })