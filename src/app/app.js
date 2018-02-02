import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
import factory from './factory';
import { render, renderFactory } from './render';
import App from './components/App';
import Layout from './components/Layout';

const app = (config) => {
    render(App, document.querySelector('.todos'));
    render(Layout, document.querySelector('.root'));
};

app(window.config);
