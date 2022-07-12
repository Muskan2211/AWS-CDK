#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'monocdk';
import { CdkLearningStack } from '../lib/cdk-learning-stack';

const app = new cdk.App();
new CdkLearningStack(app, 'CdkLearningStack');
