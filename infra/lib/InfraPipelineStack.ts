import * as cdk from "aws-cdk-lib";
import type { Construct } from "constructs";

export class InfraPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.pipelines.CodePipeline(this, "Pipeline", {
      pipelineName: "MyAppPipeline",
      synth: new cdk.pipelines.ShellStep("Synth", {
        input: cdk.pipelines.CodePipelineSource.connection(
          "akkujii/orthodox-tbd",
          "main",
          {
            connectionArn:
              "arn:aws:codeconnections:eu-central-1:243652179693:connection/7c89172f-833d-4291-a18a-44800bed2bf6",
          },
        ),
        commands: ["npm ci", "npm run build", "npx cdk synth"],
      }),
    });
  }
}
