import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)

    .add('default', () => (<Button>Default</Button>))

    .add('primary', () => (
        <Button emphasis="primary" onClick={action('clicked primary')}>Primary</Button>
    ))

    .add('secondary', () => (
        <Button emphasis="secondary">Secondary</Button>
    ))

    .add('warn', () => (
        <Button emphasis="warn">Warn</Button>
    ))

    .add('error', () => (
        <Button emphasis="error">Error</Button>
    ))

    .add('disabled', () => (
        <Button emphasis="primary" disabled>Disabled</Button>
    ));
