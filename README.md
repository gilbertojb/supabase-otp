# Supabase OTP

Este é um projeto Next.js que demonstra a autenticação via OTP (One-Time Password) usando Supabase.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)

## Instalação

1. Clone este repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd supabase-otp
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

## Configuração do Ambiente

1. Crie um arquivo `.env.local` na raiz do projeto com base no exemplo (se houver) ou adicione as seguintes variáveis:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
   ```

   Você pode encontrar essas credenciais no painel do seu projeto Supabase em **Project Settings > API**.

## Configuração do Template de Email no Supabase

Para que o envio do código OTP funcione corretamente, você precisa configurar o template de email no Supabase.

1. Acesse o painel do seu projeto no [Supabase](https://supabase.com/dashboard).
2. No menu lateral, vá para **Authentication > Email Templates**.
3. Selecione o template **Magic Link** (ou "Confirmation", dependendo de como você configurou o envio, mas geralmente para OTP sem senha usa-se o Magic Link modificado).
   - _Nota: O código usa `signInWithOtp`, que por padrão envia um Magic Link. Para usar como código (OTP), precisamos alterar o template para enviar apenas o token._
4. Altere o **Subject** (Assunto) para algo como:
   ```text
   Seu código de verificação
   ```
5. Altere o **Body** (Corpo do email) para exibir o código. Use a variável `{{ .Token }}`:

   ```html
   <h2>Seu código de login</h2>
   <p>Copie o código abaixo para acessar sua conta:</p>
   <h1>{{ .Token }}</h1>
   ```

   _Certifique-se de remover qualquer link de "Click here to login" se você deseja forçar o usuário a digitar o código manualmente._

6. Salve as alterações.

## Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
pnpm dev
```

O projeto estará disponível em `http://localhost:3000`.

## Fluxo de Uso

1. Acesse a página de login (`/sign-in`).
2. Digite seu email e clique em "Send code".
3. Você será redirecionado para a página de verificação (`/verify`).
4. Verifique seu email para obter o código de 6 dígitos.
5. Insira o código na página de verificação para entrar.

<img src="./.github/banner.png" />
