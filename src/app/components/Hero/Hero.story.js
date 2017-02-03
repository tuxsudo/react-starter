import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Hero from './Hero';
import imgSrc from './slc.jpg';


storiesOf('Hero', module)

    .add('basic', () => (<Hero title="Welcome to the Hero Component" />))

    .add('subtitled', () => (
        <Hero
            title="Welcome to the Hero Component"
            subtitle="this one has a subtitle"
        />
    ))

    .add('background', () => (
        <Hero
            title="Welcome to the Hero Component"
            subtitle="this one has a subtitle and image"
            bgSrc={imgSrc}
        />
    ))

    .add('overlay-light', () => (
        <Hero
            title="Welcome to the Hero Component"
            subtitle="this one has a subtitle and image and overlay"
            bgSrc={imgSrc}
            overlay="light"
        />
    ))

    .add('overlay', () => (
        <Hero
            title="Welcome to the Hero Component"
            subtitle="this one has a subtitle and image and overlay"
            bgSrc={imgSrc}
            overlay
        />
    ))

    .add('overlay-dark', () => (
        <Hero
            title="Welcome to the Hero Component"
            subtitle="this one has a subtitle and image and overlay"
            bgSrc={imgSrc}
            overlay="dark"
        />
    ))

    .add('onClick', () => (
        <Hero
            title="Welcome to the Hero Component"
            subtitle="this one has a subtitle and image and overlay and action (click me)"
            bgSrc={imgSrc}
            overlay="dark"
            onClick={action('clicked action')}
        />
    ))

    .add('href', () => (
        <Hero
            title="Welcome to the Hero Component"
            subtitle="this one has a subtitle and image and overlay and action (click me)"
            bgSrc={imgSrc}
            overlay="dark"
            href="//example.org"
        />
    ));
