## Tracking 2/11/2022, 1::35 AM

Could I create the function used to get Uniques products in the cart in ShopContext as I did with ADD_TO_CART and  UPDATE_PRICE?

R= Yes I did

## Tracking 4/11/2022, 1::35 AM

I made posssible to decrease the count of the product in the cart

## Tracking 5/11/2022, 1::35 AM

Now I have to update the amount of the product in the cart

## Error- Problema con el amount al restar y después sumar
Ojo: Realmente el problema es al sumar después de restar, no al restar en sí 

Cuando voy a carrito y resto para luego sumar, me cambia los valores de los productos restantes, esto solo pasa la primera vez que lo hago(Por producto), luego ya no me lo hace normal

Posible problema:

Cuando resto, resto es el unique, pero products de ADD_TO_CART no lo sabe, o mejor dicho, no lo actualiza.
por que ADD_TO_CART primero afecta a products y luego a unique, y cuando resto, primero afecta a unique.


