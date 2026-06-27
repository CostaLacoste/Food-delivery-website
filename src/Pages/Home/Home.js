import React from 'react';
import Layout from '../../Components/Layouts/Layout.js'
import '../../Styles/HomeStyle.css'
import Section1 from './Section1.js'

function Home() {
    return (
        <>
        <Layout>
            <Section1 />
        </Layout>
        </>
    );
}

export default Home