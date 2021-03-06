import * as path from 'path';
import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import * as appsync from '../lib';

test('should not throw an Error', () => {
  // Given
  const stack = new cdk.Stack();

  // When
  const when = () => {
    new appsync.GraphQLApi(stack, 'api', {
      authorizationConfig: {},
      name: 'api',
      schemaDefinitionFile: path.join(__dirname, 'appsync.test.graphql'),
    });
  };

  // Then
  expect(when).not.toThrow();
});
