import * as cdk from "aws-cdk-lib";
import type { Construct } from "constructs";

export class InfraPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.pipelines.CodePipeline(this, "Pipeline", {
      pipelineName: "MyAppPipeline",
      codeBuildDefaults: {
        buildEnvironment: {
          computeType: cdk.aws_codebuild.ComputeType.LAMBDA_2GB,
          buildImage:
            cdk.aws_codebuild.LinuxArmLambdaBuildImage
              .AMAZON_LINUX_2023_NODE_22,
        },
      },
      synth: new cdk.pipelines.ShellStep("Synth", {
        input: cdk.pipelines.CodePipelineSource.connection(
          "akkujii/orthodox-tbd",
          "main",
          {
            connectionArn:
              "arn:aws:codeconnections:eu-central-1:243652179693:connection/7c89172f-833d-4291-a18a-44800bed2bf6",
          },
        ),
        commands: ["cd infra", "npm ci", "npm run build", "npx cdk synth"],
        primaryOutputDirectory: "infra/cdk.out",
      }),
    });
  }
}
