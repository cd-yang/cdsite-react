import React from 'react';
import Layout from '../../components/layout'
import { Provider } from './ioc';
import { container } from './ioc/config';

export default function About() {
    return (
        <Layout>
            <Provider container={container}>
            </Provider>
        </Layout>
    );
}