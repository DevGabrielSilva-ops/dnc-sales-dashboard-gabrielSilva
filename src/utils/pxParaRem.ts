/**
 * Convertendo Pixels para Rem
 * @param pixel - Valores de Pixels para conversão
 * @returns Conversão do valor em rem
 */

export function pxParaRem(pixels: number): string {
    return `${pixels / 16}rem`
}