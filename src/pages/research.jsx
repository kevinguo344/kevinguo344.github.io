import React from 'react';
import Project from '../components/project.jsx';
export const roma = require('../markdown/roma.md');
export const crochetmatic = require('../markdown/crochetmatic.md');
export const distopia = require('../markdown/distopia.md');
export const transform = require('../markdown/transform.md');

export const RoMA = () => ( <Project markdown={roma}></Project> )
export const CrochetMatic = () => ( <Project markdown={crochetmatic}></Project> )
export const Distopia = () => ( <Project markdown={distopia}></Project> )
export const TransForm = () => ( <Project markdown={transform}></Project> )

