import React, { Fragment, useEffect, useState } from 'react';

const About = () => {





    const [equipo, setEquipo] = useState([])

    useEffect(() => {
        // console.log('object');
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json()
        setEquipo(users)
        // console.log(users);
    }

    return (
        <Fragment>
            <h1>Information about team</h1>
            <ul>
                {
                    equipo.map(item => (
                        <li key={item.id}>{item.name} - {item.email}</li>
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default About;