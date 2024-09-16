export class ValidationHelper {

    // Validação de Email
    static validarEmail(email: string | null | undefined): boolean {
        if (!email) return false; // Verifica se o valor é null ou undefined
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

    // Validação de CPF
    static validarCPF(cpf: string | null | undefined): boolean {
        if (!cpf) return false; // Verifica se o valor é null ou undefined
        cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

        let soma, resto;
        soma = 0;
        for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11))) return false;

        return true;
    }

    // Validação de Telefone (Formato Brasileiro)
    static validarTelefone(telefone: string | null | undefined): boolean {
        if (!telefone) return false; // Verifica se o valor é null ou undefined
        const _telefone = telefone.replace(/\D/g, ''); // Remove qualquer caractere não numérico
        const regex = /^\(?([1-9]{2})\)?[\s-]?([9]{1})?([0-9]{4})[\s-]?([0-9]{4})$/;
        return regex.test(_telefone);
    }

    // Validação de campos obrigatórios (string não vazia)
    static validarCampoObrigatorio(valor: string | null | undefined): boolean {
        if (!valor) return false; // Verifica se o valor é null ou undefined
        return valor.trim().length > 0;
    }
}
