import React from 'react';
import Project from '../components/project.jsx';
import Markdown from 'markdown-to-jsx';

const roma = require('../markdown/roma.md');
const crochetmatic = require('../markdown/crochetmatic.md');
const distopia = require('../markdown/distopia.md');
const communit = require('../markdown/communit.md');
const cera = require('../markdown/cera.md');

export const RoMA = () => ( <Project><Markdown>{roma}</Markdown></Project> )
export const CrochetMatic = () => ( <Project><Markdown>{crochetmatic}</Markdown></Project> )
export const Distopia = () => ( <Project><Markdown>{distopia}</Markdown></Project> )
export const CommunIT = () => ( <Project><Markdown>{communit}</Markdown></Project> )
export const Cera = () => ( <Project><Markdown>{cera}</Markdown></Project> )
