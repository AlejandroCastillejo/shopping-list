
const url = 'http://www.mocky.io/v2/5e66606c3100005100239f27';

export class ShoppingListAPI {
    static getItemsList() {
        return (fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })).then(resp => resp.json())
    }
}