import { describe, expect, test } from "vitest";
import { Template } from "aws-cdk-lib/assertions";
import * as cdk from "aws-cdk-lib";
import { InfraPipelineStack } from "../lib/InfraPipelineStack";

describe("InfraStack", () => {
  test("should match snapshot", () => {
    const app = new cdk.App();
    const stack = new InfraPipelineStack(app, "MyTestStack");
    expect(Template.fromStack(stack)).toMatchSnapshot();
  });
});
