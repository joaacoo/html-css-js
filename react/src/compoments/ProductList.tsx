import React from "react";

interface Product {
    id: string;
    name: string;
}

interface Props {
    products: Product[];
}

function ProductList({ products }: Props) {
    return (
        <ul>
            {products.map((p) => (
                <li key={p.id}>{p.name}</li>
            ))}
        </ul>
    );
}

export default ProductList;