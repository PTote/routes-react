import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Age_empires = () => {


    const [info, setInfo] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const urlFetch = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
        const data = await urlFetch.json();
        setInfo(data.civilizations)
        console.log(data.civilizations);

    }

    return (
        <Fragment>
            <h1>Consumiendo API de Age of Empires</h1>
            <ol className="list-group list-group-numbered">
                {
                    info.map(item => (
                        <li className="list-group-item" key={item.id}>
                            {item.name}
                        </li>
                    ))
                }

            </ol>
        </Fragment>
    );
}

export default Age_empires;