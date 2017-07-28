import { APIGatewayEvent, Context, Callback, ProxyResult } from 'aws-lambda';

export const hello = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
): void => {
  const response: ProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v1.0! ${event} function executed successfully!`,
      input: event
    })
  };

  callback(undefined, response);
};
