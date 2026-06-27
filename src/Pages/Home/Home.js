import React from 'react';
import Layout from '../../Components/Layouts/Layout.js'
import '../../Styles/HomeStyle.css'
import Section1 from './Section1.js'
import Section2 from './Section2.js';

function Home() {
    return (
        <>
        <Layout>
            <Section1 />
            <Section2 />
        </Layout>
        </>
    );
}

export default Home