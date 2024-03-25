import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Context } from '../store/AppContext';


const DetailedPeople = () => {

    const { store, actions } = useContext(Context)
    const { id } = useParams();

    useEffect(() => {
        actions.getDetailsPeople(id)
        /*  console.log(url) */
    }, [id])

    return (
        <>
            <h1>{store?.details?.name}</h1>
            <h1>{store?.details?.height}</h1>
          

        </>
    )
}

export default DetailedPeople