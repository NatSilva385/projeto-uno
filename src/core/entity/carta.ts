/**
 * Esta classe representa uma carta do jogo uno
 */
class Carta{
    /**Armazena a cor da carta */
    private _cartaCor: COR_CARTA;
/**Armazena o valor da carta */
    private _cartaValor: VALOR_CARTA;

    /**
     * Inicializa a carta com a cor e o valor
     */
    constructor(cartaCor: COR_CARTA, cartaValor: VALOR_CARTA)
    {
        this._cartaValor = cartaValor;
        if (cartaValor == VALOR_CARTA.CORINGA||cartaValor==VALOR_CARTA.CORINGA_COMPRA_QUATRO)
        {
            this._cartaCor = COR_CARTA.SEM_COR;
        }
        else
        {
            this._cartaCor = cartaCor;
        }
    }
    
    /**
     * @returns A cor da carta
     */
    get cartaCor(): COR_CARTA{
        return this._cartaCor;
    }

    /**
     * @returns o valor da carta
     */
    get cartaValor(): VALOR_CARTA{
        return this._cartaValor;
    }

    /**
     * Verificar se é possivel jogar essa carta
     */
    public verificarCarta(cartaAnterior: Carta):boolean
    {
        if (this._cartaValor == VALOR_CARTA.CORINGA || this._cartaValor == VALOR_CARTA.CORINGA_COMPRA_QUATRO)
        {
            return true;
        }
        if (this._cartaValor == cartaAnterior._cartaValor || this._cartaCor == cartaAnterior.cartaCor)
        {
            return true;
        }
        return false;

    }

}

/**
 * Representa as cores que as cartas podem possuir
 */
enum COR_CARTA
{
    VERMELHO, 
    AZUL,
    AMARELO,
    VERDE,
    SEM_COR
}

/**
 * Representa os valores que a carta pode possuir
 */
enum VALOR_CARTA
{
    UM,
    DOIS,
    TRES,
    QUATRO,
    CINCO,
    SEIS,
    SETE,
    OITO,
    NOVE,
    BLOQUEAR,
    INVERTER,
    COMPRA_DOIS,
    CORINGA,
    CORINGA_COMPRA_QUATRO
}