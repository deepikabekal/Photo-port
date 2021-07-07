import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import About from '../index'

afterEach(cleanup); //after each test do a clean up to avoid memory leak whihc may lead to false result

//describe breaks your test suite into components. 
//You can also nest describes to further subdivide the suite.

//it is where you perform individual tests. 
//You shouldn't be able to subdivide tests further-- if you feel like you need to, use describe instead.
describe('About component', () => {
    //renders the About test
    //first test

    it('renders', () => {
        render(<About />);
    });

    //second test

    it('matches snapshot DOM node structure', () => {
        //render About
        const {asFragment} = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})