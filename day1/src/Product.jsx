export const Product = ({ title, price, inStock, category }) => {
    return (
        <div>
            <title>{title}</title>
            <p>Price: ${price}</p>
            <p>In stock: {inStock ? 'Yes' : 'No'}</p>
            <p>Category: {category.join(", ")}</p>
        </div>
    );
}
/*props-> shortform for properties is like argument to function, in this file we have shown destructuring of props*/