import React from 'react';

async function getData() {
    const data = fetch('https://jsonplaceholder.typicode.com/todos/7')
    .then(res => res.json());

    return data;
}

export default async function page() {
    const data = await getData();
    return (
        <div>{data.title}</div>
    )
}