// En el lado del cliente

import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";

/*

Cookie = cart: 
{
    'uui-123-1: 4
    'uui-123-2: 1
    'uui-123-3: 3
}

*/

export const getCookieCart = ():{ [id: string]: number } => {

    if( hasCookie ('cart')){
        const cookieCart= JSON.parse( getCookie('cart') as string ?? '{}' );
        return cookieCart;
    };

    return {};
};

export const addProductToCart = ( id: string) => {

    const cookieCart = getCookieCart();

    if( cookieCart[id] ){     // Si existe
        cookieCart[id] += 1;  // Le suma 1 a la cantidad
    }else {
        cookieCart[id] = 1;   // sino, lo agrega con 1.
    }

    setCookie( 'cart', JSON.stringify( cookieCart ) );
};

export const deleteProductFromCart = ( id: string) => {

    const cookieCart = getCookieCart();

    delete cookieCart[id];

    setCookie( 'cart', JSON.stringify( cookieCart ) );
};

export const removeSingleItemFromCart = ( id: string) => {

    const cookieCart = getCookieCart();

    const itemsInCart = cookieCart[id] - 1;

    if( itemsInCart <= 0 ){
        delete cookieCart[id]
    }else {
        cookieCart[id] = itemsInCart;
    }

    setCookie( 'cart', JSON.stringify( cookieCart ) );
};