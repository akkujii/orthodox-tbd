import { describe, expect, test } from "vitest";
import { Template } from "aws-cdk-lib/assertions";
import * as cdk from "aws-cdk-lib";
import * as Infra from "../lib/infra-stack";

describe("InfraStack", () => {
  test("should match snapshot", () => {
    const app = new cdk.App();
    const stack = new Infra.InfraStack(app, "MyTestStack");
    expect(Template.fromStack(stack)).toMatchSnapshot();
  });
});
