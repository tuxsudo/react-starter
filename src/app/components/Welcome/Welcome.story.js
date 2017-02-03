import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Hero from '../Hero';
import BigOList from '../BigOList';
import imgsrc from './assets/sand.jpg';

storiesOf('StoryBook', module).add('welcome', () => (
    <main>
        <Hero
            title="Component Sandbox"
            subtitle="a safe place to build and functionally test components"
            bgSrc={imgsrc}
            overlay
        />

        <BigOList>
            <div>
                <h2>Create a Component</h2>
                <p>components are found in ./src/app/components</p>
            </div>
            <div>
                <h2>Write a Component Story</h2>
                <p>
                    Component stories are just a bunch of usage examples of a component.
                    Learn <a href="https://getstorybook.io/docs" target="_blank">how to write stories.</a>
                </p>
            </div>
            <div>
                <h2>Add Story to the StoryBook Config</h2>
                <p>if you name your story file like, `component.story.js`, you can skip this step. othewise, add the the appropriate `require` statement in the config file found in `./.storybook/config.js`. </p>
            </div>
        </BigOList>

    </main>
));
