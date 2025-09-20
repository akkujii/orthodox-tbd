#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { InfraPipelineStack } from "../lib/InfraPipelineStack";

export const createCdkApp = () => {
  const app = new cdk.App();
  new InfraPipelineStack(app, "InfraPipelineStack", {
    env: { account: "243652179693", region: "eu-central-1" },
  });
  return app;
};

createCdkApp();
