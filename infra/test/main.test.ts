import { Template } from "aws-cdk-lib/assertions";
import { describe, expect, test } from "vitest";
import { createCdkApp } from "../bin/main";
import type { Stack } from "aws-cdk-lib";

describe("Snapshot tests for stacks", () => {
  const app = createCdkApp();
  app.node.children.forEach((stack) => {
    test(`for ${stack}`, () => {
      const stackTemplate = Template.fromStack(stack as Stack);
      expect(stackTemplate).toMatchSnapshot();
    });
  });
});
