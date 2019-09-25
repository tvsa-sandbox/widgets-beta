import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Atoms

import Button from '../components/atoms/Button';
import ButtonIcon from '../components/atoms/ButtonIcon';
import Box from '../components/atoms/Box';
import Description from '../components/atoms/Description';


const IndexPage = () => (
    <Layout>
        <Button />
        <ButtonIcon />
        <Description />
        <Box />        
    </Layout>
);

export default IndexPage;
