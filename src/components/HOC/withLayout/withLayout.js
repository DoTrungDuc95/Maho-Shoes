import React from 'react';

const withLayout = (Layout, Component) => (props) => (
    <Layout>
        <Component {...props} />
    </Layout>
);

export default withLayout;
