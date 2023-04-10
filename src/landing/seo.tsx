import React from 'react';
import { Helmet } from 'react-helmet-async';


interface ISEOProps {
    title: string,
    description: string,
    name: string,
    type: string,
    url: string
};

export default function SEO(props: ISEOProps) {
    return (
        <Helmet>
            { /* Standard metadata tags */ }
            <title>{props.title}</title>
            <meta name='description' content={props.description} />
            <meta name='author' content={props.name} />
            { /* End standard metadata tags */ }
            { /* Facebook tags */ }
            <meta property="og:type" content={props.type} />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property='og:url' content={props.url}/>
            { /* End Facebook tags */ }
            { /* Twitter tags */ }
            <meta name="twitter:creator" content={props.name} />
            <meta name="twitter:card" content={props.type} />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            { /* End Twitter tags */ }
        </Helmet>
    )
}