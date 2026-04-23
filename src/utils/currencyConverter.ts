/**
 * Convertendo Para BRL 
 * @param value - Numero a ser Convertido
 * @returns Converter para BRL a string
 */

export function currencyConverter(value: number): string {
    return new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(value)
}