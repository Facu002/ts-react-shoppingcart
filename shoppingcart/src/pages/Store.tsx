import storeItems from '../data/items.json'
import {StoreItem} from '../components/StoreItem'
export function Store(){
    return (
        <>
        <h1>Store</h1>
        <ul>
            {
                storeItems.map(item => (
                    <div className='ProductsList-container' key={item.id}>
                        <StoreItem {...item}/>
                    </div>
                ))
            }
        </ul>
        </>
    )
}