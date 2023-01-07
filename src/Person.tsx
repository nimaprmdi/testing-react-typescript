import React from "react";

const Person = ({ name }: { name: string }): JSX.Element => {
    return <div role="contentinfo">Name is {name}</div>;
};

export default Person;
