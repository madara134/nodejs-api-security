import * as express from 'express';
import path  = require('path');


const angularModule = [
    express.static(path.join(__dirname,'..','node_modules','@angular','core','bundles')),
    express.static(path.join(__dirname,'..','node_modules','@angular','common','bundles')),
    express.static(path.join(__dirname,'..','node_modules','@angular','compiler','bundles')),
    express.static(path.join(__dirname,'..','node_modules','@angular','platform-browser','bundles')),
    express.static(path.join(__dirname,'..','node_modules','@angular','platform-browser-dynamic','bundles')),
    express.static(path.join(__dirname,'..','node_modules','@angular','http','bundles')),
    express.static(path.join(__dirname,'..','node_modules','@angular','router','bundles')),
    express.static(path.join(__dirname,'..','node_modules','@angular','forms','bundles'))
]

const htmlScripts = [
    express.static(path.join(__dirname,'..','node_modules','core-js','client')),
    express.static(path.join(__dirname,'..','node_modules','zone.js','dist')),
    express.static(path.join(__dirname,'..','node_modules','reflect-metadata')),
    express.static(path.join(__dirname,'..','node_modules','systemjs','dist')),
    express.static(path.join(__dirname))
]

const othersLib = [
    express.static(path.join(__dirname,'..','node_modules','rxjs'))
]

export {angularModule, htmlScripts, othersLib}