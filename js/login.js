/**
 * ============================================
 * LÓGICA DA PÁGINA DE LOGIN
 * ============================================
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Página de Login carregada');
    
    // Elementos do DOM
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const btnLogin = document.getElementById('btnLogin');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const rememberCheckbox = document.getElementById('remember');
    
    // Verificar se usuário estava logado
    checkRememberedUser();
    
    // Event Listeners
    togglePasswordBtn?.addEventListener('click', () => {
        window.AppUtils.togglePasswordVisibility('password', 'eye-icon');
    });
    
    btnLogin?.addEventListener('click', handleLogin);
    
    // Permitir login com Enter
    passwordInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    });
    
    emailInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            passwordInput?.focus();
        }
    });
    
    /**
     * Função principal de login
     */
    function handleLogin() {
        const email = emailInput?.value.trim();
        const password = passwordInput?.value;
        const remember = rememberCheckbox?.checked;
        
        // Validações
        if (!email || !password) {
            window.AppUtils.showNotification('Por favor, preencha todos os campos!', 'error');
            return;
        }
        
        if (!window.AppUtils.validateEmail(email)) {
            window.AppUtils.showNotification('Por favor, insira um e-mail válido!', 'error');
            return;
        }
        
        if (password.length < 6) {
            window.AppUtils.showNotification('A senha deve ter no mínimo 6 caracteres!', 'error');
            return;
        }
        
        // Mostrar loading
        btnLogin.disabled = true;
        btnLogin.textContent = 'Entrando...';
        
        // Simular chamada à API (substituir por chamada real)
        setTimeout(() => {
            // Aqui você fará a chamada real para o backend
            authenticateUser(email, password, remember);
        }, 1500);
    }
    
    /**
     * Autenticar usuário (MOCK - substituir por API real)
     */
    function authenticateUser(email, password, remember) {
        // MOCK - Simula autenticação bem-sucedida
        // Em produção, fazer requisição POST para API
        
        /* Exemplo de chamada real:
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                handleLoginSuccess(data, remember);
            } else {
                handleLoginError(data.message);
            }
        })
        .catch(error => {
            handleLoginError('Erro ao conectar com o servidor');
        });
        */
        
        // MOCK - Simulação
        const mockUser = {
            id: 1,
            nome: 'Usuário Teste',
            email: email,
            tipo: 'cidadao',
            bairro: 'Centro',
            token: 'mock-jwt-token-12345'
        };
        
        // Simula sucesso
        if (email === 'teste@teste.com' && password === '123456') {
            handleLoginSuccess(mockUser, remember);
        } else {
            handleLoginError('E-mail ou senha incorretos!');
        }
    }
    
    /**
     * Tratar sucesso do login
     */
    function handleLoginSuccess(userData, remember) {
        // Salvar dados do usuário
        window.AppUtils.saveToLocalStorage('user', userData);
        
        // Salvar token
        window.AppUtils.saveToLocalStorage('authToken', userData.token);
        
        // Lembrar usuário se marcado
        if (remember) {
            window.AppUtils.saveToLocalStorage('rememberedEmail', userData.email);
        } else {
            window.AppUtils.clearLocalStorage('rememberedEmail');
        }
        
        // Mostrar mensagem de sucesso
        window.AppUtils.showNotification(`Bem-vindo(a), ${userData.nome}!`, 'success');
        
        // Redirecionar para dashboard
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    }
    
    /**
     * Tratar erro do login
     */
    function handleLoginError(message) {
        btnLogin.disabled = false;
        btnLogin.textContent = 'Entrar na plataforma';
        
        window.AppUtils.showNotification(message, 'error');
        
        // Limpar senha
        if (passwordInput) {
            passwordInput.value = '';
            passwordInput.focus();
        }
    }
    
    /**
     * Verificar se existe usuário lembrado
     */
    function checkRememberedUser() {
        const rememberedEmail = window.AppUtils.getFromLocalStorage('rememberedEmail');
        
        if (rememberedEmail && emailInput) {
            emailInput.value = rememberedEmail;
            if (rememberCheckbox) {
                rememberCheckbox.checked = true;
            }
            passwordInput?.focus();
        }
    }
    
    /**
     * Verificar se já está logado
     */
    function checkIfAlreadyLoggedIn() {
        const token = window.AppUtils.getFromLocalStorage('authToken');
        const user = window.AppUtils.getFromLocalStorage('user');
        
        if (token && user) {
            // Usuário já está logado, redirecionar
            window.location.href = 'dashboard.html';
        }
    }
    
    // Verificar login ao carregar
    checkIfAlreadyLoggedIn();
});

console.log('✅ Login.js carregado');