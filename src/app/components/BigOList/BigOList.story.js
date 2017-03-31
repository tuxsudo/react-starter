import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BigOList from './BigOList';

storiesOf('BigOList', module)

    .add('default', () => (
        <BigOList>
            <div>Nostrud ut consectetur eiusmod est excepteur irure aliqua anim sunt ullamco culpa commodo aute velit nulla Lorem duis.</div>
            <div>Incididunt adipisicing voluptate minim consectetur sit fugiat elit irure elit laborum commodo velit incididunt aliquip et excepteur sunt.</div>
            <div>Amet elit officia proident ad velit cillum id sint.</div>
            <div>Occaecat dolor minim labore do qui duis cillum nisi veniam aute mollit id tempor aliquip.</div>
            <div>Officia esse tempor veniam cupidatat sunt amet fugiat fugiat nostrud amet consectetur aute sint nisi minim.</div>
            <div>Incididunt sunt qui velit sunt duis pariatur non sunt.</div>
        </BigOList>
    ));
