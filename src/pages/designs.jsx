import React from 'react'
import Project from '../components/project.jsx';
import Markdown from 'markdown-to-jsx';

const cuberpillar = require('../markdown/cuberpillar.md');
const ocularmd = require('../markdown/ocularmd.md');
const ciac = require('../markdown/ciac.md');
const lcl = require('../markdown/lcl.md');
const cuems = require('../markdown/cornellems.md');

export const Cuberpillar = () => ( <Project><Markdown>{cuberpillar}</Markdown></Project> )
export const OcularMD  = () => ( <Project><Markdown>{ocularmd}</Markdown></Project> )
export const CIAC = () => ( <Project><Markdown>{ciac}</Markdown></Project> )
export const LCL = () => ( <Project><Markdown>{lcl}</Markdown></Project> )
export const CUEMS = () => ( <Project><Markdown>{cuems}</Markdown></Project> )