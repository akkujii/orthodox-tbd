import { describe, test } from 'vitest';
import { Template } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import * as Infra from '../lib/infra-stack';

describe('InfraStack', () => {
	test('SQS Queue Created', () => {
		const app = new cdk.App();
		// WHEN
		const stack = new Infra.InfraStack(app, 'MyTestStack');
		// THEN
		const template = Template.fromStack(stack);
		template.hasResourceProperties('AWS::SQS::Queue', {
			VisibilityTimeout: 300
		});
	});
});
